from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import smtplib
import os
from email.mime.text import MIMEText

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/contact")
async def submit_contact_form(request: Request):
    try:
        form_data = await request.json()
        message = f"""
        Firstname: {form_data.get('firstname', 'N/A')}
        Lastname: {form_data.get('lastname', 'N/A')}
        Email: {form_data.get('email', 'N/A')}
        Linkedin: {form_data.get('linkedin', 'N/A')}
        """
        print(message)
        await sendmail(message)
        return {"message": "Form submitted successfully"}
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

async def sendmail(message: str):
    sender_email = os.getenv("SENDER_EMAIL", "neuralberg@gmail.com")
    sender_password = os.getenv("SENDER_PASSWORD", "lryv vyaf fzwb xcyx")
    receiver_email = os.getenv("RECEIVER_EMAIL", "neuralberg@gmail.com")

    msg = MIMEText(message)
    msg['Subject'] = "New Contact Form Submission"
    msg['From'] = sender_email
    msg['To'] = receiver_email

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
        print("Mail Sent")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")
        raise