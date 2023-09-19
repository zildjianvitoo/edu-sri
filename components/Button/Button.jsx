import cn from "@/utils/cn";
import React, { Children } from "react";

export default function Button({ children, className }) {
  return (
    <button
      className={cn(
        "text-lg lg:text-xl font-medium rounded-[50px] bg-gradient-to-r from-[#9086c9] to-[#8d92c6] text-white px-6 lg:px-8 py-2 lg:py-3",
        className
      )}
    >
      {children}
    </button>
  );
}
