import React from "react";

import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/zildjianvito/",
    icon: <RiLinkedinFill className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://github.com/zildjianvitoo",
    icon: <AiFillGithub className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.instagram.com/zildjianvitoo/",
    icon: <AiOutlineInstagram className="w-4 h-5 group-hover:text-white" />,
  },
];

const quickLinks1 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/kategori",
    name: "Kategori",
  },
  {
    path: "/Kelas",
    name: "Cari Kelas",
  },
  {
    path: "/kontak",
    name: "Kontak Kami",
  },
];

const quickLinks2 = [
  {
    path: "/",
    name: "Minta Kelas Baru",
  },
  {
    path: "/",
    name: "Cari Lokasi",
  },
  {
    path: "/",
    name: "Minta Pendapat",
  },
  {
    path: "/",
    name: "Konsultasi",
  },
];

const quickLinks3 = [
  {
    path: "/",
    name: "Tentang Kami",
  },
  {
    path: "/",
    name: "Donasi",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-16 bg-gradient-to-b from-[#9e94d0] to-[#887ec5] text-white">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-between md:flex-row  gap-[30px]  ">
          <div>
            <div className="flex ">
              <h3 className="font-semibold text-[32px]  lg:text-[40px]">
                EduSri.
              </h3>
            </div>
            <p className="text-[16px] leading-7 font-medium text-text-color">
              Copyright EduSri © {year} dikembangkan oleh Pake Nanya all right
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="flex items-center justify-center transition duration-200 border border-white rounded-full w-9 h-9 group hover:bg-primary hover:border-none hover:scale-110"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color">
              Link Cepat
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-medium hover:text-[#FFf7F8]  "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color">
              Saya Ingin
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-medium hover:text-[#FFf7F8] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color">
              Dukungan
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks3.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-medium  hover:text-[#FFf7F8] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
