"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Artificial Intelligence (AI)",
    description:
      "Harness the power of AI with advanced machine learning and natural language processing. Our AI solutions enable predictive analytics, automation, and language understanding, driving innovation and efficiency across various domains.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/AI.png"
          width={900}
          height={900}
          className="h-1/2 w-1/2 object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cloud Computing",
    description:
      "Leverage the scalability and flexibility of cloud computing with AWS and Google Cloud Platform. Our cloud solutions offer robust infrastructure, data storage, and machine learning services, ensuring high availability and performance for your applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/data-center.png"
          width={700}
          height={700}
          className="h-1/2 w-1/2 object-contain"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Data Analytics",
    description:
      "Utilize cutting-edge big data technologies and business intelligence tools for comprehensive data analysis. Our data analytics services provide insights through visualization and reporting, helping you make informed decisions and drive strategic growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/data-modelling.png"
          width={700}
          height={700}
          className="h-1/2 w-1/2 object-contain"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "DevOps",
    description:
      "Streamline your development and deployment processes with Docker and Kubernetes. Our DevOps practices enhance efficiency through containerization and orchestration, enabling consistent environments, automated scaling, and simplified management of your applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/devops.png"
          width={700}
          height={700}
          className="h-1/2 w-1/2 object-contain"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Security",
    description:
      "Protect your data with advanced encryption and secure access controls. Our security measures ensure robust authentication and authorization, safeguarding sensitive information and maintaining the integrity and confidentiality of your systems.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/cyber-security.png"
          width={700}
          height={700}
          className="h-1/2 w-1/2 object-contain"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
