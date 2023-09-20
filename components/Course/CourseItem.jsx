import cn from "@/utils/cn";
import React, { useEffect } from "react";
import AOS from "aos";

function CourseItem({ className, desc, icon, index }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-12 bg-white rounded-lg shadow z-[5]"
      data-aos="fade-down"
      data-aos-delay={(index * 50).toString()}
    >
      <div
        className={cn(
          "rounded-md bg-gradient-to-b grid place-items-center p-3",
          className
        )}
      >
        {icon}
      </div>
      <p className="text-[#555555] mt-3 text-xl font-semibold">{desc[0]}</p>
      <p className="text-[#555555] text-xl font-semibold">{desc[1]}</p>
    </div>
  );
}

export default CourseItem;
