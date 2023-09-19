import React from "react";
import { MdOutlineScience } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";
import { RiUserVoiceLine } from "react-icons/ri";
import { BsDatabase } from "react-icons/bs";
import { MdOutlinePsychologyAlt } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { TbSocial } from "react-icons/tb";
import CourseItem from "./CourseItem";

const courses = [
  {
    className: "from-[#9e94d0] to-[#887ec5]",
    icon: <MdOutlineScience className="text-4xl text-white" />,
    desc: ["Ilmu Tentang", " Kesejahteraan"],
  },
  {
    className: "from-[#FFA0A8] to-[#FF727D]",
    icon: <HiOutlineCode className="text-4xl text-white" />,
    desc: ["Programming Untuk", " Semua Orang"],
  },
  {
    className: "from-[#F6C277] to-[#F3B55E]",
    icon: <RiUserVoiceLine className="text-4xl text-white" />,
    desc: ["English Untuk", " Perkembangan Karir"],
  },
  {
    className: "from-[#97E9A1] to-[#85D98E]",
    icon: <LiaMoneyBillWaveSolid className="text-4xl text-white" />,
    desc: ["Pasar", " Finansial"],
  },
  {
    className: "from-[#9e94d0] to-[#887ec5]",
    icon: <MdOutlineScience className="text-4xl text-white" />,
    desc: ["Pengenalan", " Digital Marketing"],
  },
  {
    className: "from-[#FFA0A8] to-[#FF727D]",
    icon: <BsDatabase className="text-4xl text-white" />,
    desc: ["Belajar", " Data Science"],
  },
  {
    className: "from-[#F6C277] to-[#F3B55E]",
    icon: <MdOutlinePsychologyAlt className="text-4xl text-white" />,
    desc: ["Pengenalan", " Psikologi"],
  },
  {
    className: "from-[#97E9A1] to-[#85D98E]",
    icon: <FaFigma className="text-4xl text-white" />,
    desc: ["Belajar", " UI/UX"],
  },
  {
    className: "from-[#9e94d0] to-[#887ec5]",
    icon: <TbSocial className="text-4xl text-white" />,
    desc: ["Pengenalan", " Digital Marketing"],
  },
  {
    className: "from-[#FFA0A8] to-[#FF727D]",
    icon: <HiOutlineCode className="text-4xl text-white" />,
    desc: ["Belajar", " Web Development"],
  },
];

function CourseList() {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          className={course.className}
          icon={course.icon}
          desc={course.desc}
        />
      ))}
    </div>
  );
}

export default CourseList;
