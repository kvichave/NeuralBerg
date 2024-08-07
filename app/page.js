"use client";
import Hero from "@/components/Hero";
import { WobbleCardComponent } from "@/components/WobbleCardComponent";
import { StickyScrollReveal } from "@/components/Stickyreveal";
import Image from "next/image";
import { Heading1 } from "@/components/Heading1";
import { LampComp } from "@/components/lampcomponent";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
export default function Home() {
  const route = useRouter();
  return (
    <>
      <main className="bg-black">
        <Hero />
        <div className="py-20 bg-black bg-opacity-50 ">
          <WobbleCardComponent />
          <LampComp></LampComp>
          <StickyScrollReveal></StickyScrollReveal>
          <Heading1></Heading1>
          <div className="flex justify-center gap-14">
            <button
              onClick={() => route.push("/join-us")}
              className="shadow-[inset_0_0_0_2px_#616467] text-white px-16 py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            >
              Join Us
            </button>
            <button
              onClick={() => route.push("/About")}
              className=" text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-white hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            >
              About Us
            </button>
          </div>
        </div>
        {/* <div className="mt-20">
          {" "}
          <Footer></Footer>
        </div> */}
      </main>
    </>
  );
}
