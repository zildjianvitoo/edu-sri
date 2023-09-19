import cn from "@/utils/cn";
import React from "react";

function CourseItem({ className, desc, icon }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-white rounded-lg shadow z-[5]">
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
