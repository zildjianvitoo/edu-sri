import React from "react";
import CourseList from "./CourseList";

function Course() {
  return (
    <section className="bg-[#FFf7F8] py-14 relative">
      <div className="container">
        <div className="flex flex-col text-center ">
          <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
            Temukan Kursus Terbaikmu
          </h3>
          <hr className="bg-[#e5dfdf] w-1/4 sm:w-1/6 mx-auto h-[2px] mt-3" />
          <div className="absolute hidden xl:block w-4 h-4 rounded-full bg-secondary top-[6rem] left-[20rem]" />
          <div className="absolute w-7 h-7 rounded-full bg-greenEduSri top-[16rem] right-[5rem] z-0 hidden md:block" />
          <div className="absolute w-9 h-9 rounded-full bg-primary top-[33rem] left-[5rem] z-0 hidden md:block" />
          <CourseList />
        </div>
      </div>
    </section>
  );
}

export default Course;
