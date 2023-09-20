import Course from "@/components/Course/Course";
import Benefit from "@/components/LandingPage/Benefit";
import Intro from "@/components/LandingPage/Intro";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import SuccessStory from "@/components/SuccessStory/SuccessStory";
import Testimonial from "@/components/Testimonial/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | EduSri</title>
      </Head>
      <Jumbotron />
      <Intro />
      <Benefit />
      <Course />
      <SuccessStory />
      <Testimonial />
      <div className=" bg-[#FFf7F8] py-12 relative lg:overflow-hidden">
        <div className="absolute w-9 h-9 rounded-full bg-secondary top-[3rem] right-[22rem] z-0 hidden lg:block overflow-hidden" />
        <div className="absolute w-24 h-24 rounded-full bg-secondary bottom-[3rem] right-[12rem] z-0 hidden lg:block overflow-hidden" />
      </div>
    </>
  );
}
