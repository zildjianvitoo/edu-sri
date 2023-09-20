import CourseList from "@/components/Course/CourseList";
import SuccessStory from "@/components/SuccessStory/SuccessStory";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Kursus() {
  return (
    <main>
      <section className="bg-[#FFf7F8] py-14 lg:pb-24">
        <div className="container">
          <div className="flex flex-col text-center ">
            <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
              Temukan Kursus Terbaikmu
            </h3>

            <hr className="bg-[#e5dfdf] w-1/4 sm:w-1/6 mx-auto h-[2px] mt-3" />
            <div className="flex relative mt-5 w-4/5 md:w-[45%] mx-auto items-center">
              <input
                type="text"
                className="bg-white w-full rounded-[50px] px-6 py-2 placeholder:font-semibold focus:outline-none focus:border focus:border-primary/30"
                placeholder="Cari"
              />
              <AiOutlineSearch className="text-textColor text-2xl top-[25%] absolute right-5 cursor-pointer opacity-70" />
            </div>
            <div className="absolute hidden lg:block w-4 h-4 rounded-full bg-secondary top-[10rem] left-[20rem]" />
            <div className="absolute w-9 h-9 rounded-full bg-greenEduSri top-[30rem] right-[4.5rem] z-0 hidden md:block" />
            <div className="absolute w-9 h-9 rounded-full bg-primary bottom-0 left-[5rem] z-0 hidden md:block" />
            <CourseList />
          </div>
        </div>
      </section>
      <SuccessStory />
    </main>
  );
}
