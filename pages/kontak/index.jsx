import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Button from "@/components/Button/Button";
import Head from "next/head";

export default function Kontak() {
  return (
    <>
      <Head>
        <title>Kontak Kami | EduSir</title>
      </Head>
      <main className="overflow-x-hidden">
        <section className="bg-[#FFf7F8] py-14 lg:pb-24 relative">
          <div className="container">
            <div className="flex flex-col text-center ">
              <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
                Hubungi Kami
              </h3>

              <hr className="bg-[#e5dfdf] w-1/4 sm:w-[10%] mx-auto h-[3px] mt-3" />
              <p className=" text-lg lg:text-xl  text-[#A0A0A0] max-w-lg md:mt-3 mt-10 mx-auto">
                Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
                saran, atau informasi lebih lanjut.
              </p>
              <div className="absolute hidden lg:block w-4 h-4 rounded-full bg-orangeEduSri top-[5rem] right-[12rem]" />
              <div className="absolute hidden lg:block w-8 h-8 rounded-full bg-orangeEduSri top-[8rem] right-[15rem]" />
              <div className="absolute hidden lg:block w-8 h-8 rounded-full bg-orangeEduSri top-[60%] left-[5rem]" />
              <div className="absolute w-9 h-9 rounded-full bg-greenEduSri top-[6rem] left-[17.5rem] z-0 hidden lg:block" />
              <div className="absolute w-9 h-9 rounded-full bg-primary top-[20rem] -left-[1.15rem] z-0 hidden lg:block" />
              <div className="absolute hidden lg:block w-24 h-24 rounded-full bg-secondary bottom-[3.5rem] right-[14rem]" />
              <div className="absolute hidden lg:block w-8 h-8 rounded-full bg-secondary bottom-[1.5rem] right-[21rem]" />

              <div className="relative grid grid-cols-1 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-14">
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <SlLocationPin className="text-3xl lg:text-4xl text-primary" />
                  <div className="flex flex-col ">
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                      123 - Jakabaring
                    </p>
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                      BGRN 329 - PLG
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <FiPhoneCall className="text-3xl lg:text-4xl text-primary" />
                  <div className="flex flex-col ">
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                      +628123456789
                    </p>
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                      0711-1234-6789
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <FiMail className="text-3xl lg:text-4xl text-primary" />
                  <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                    EDUSRI.com
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-12 px-6 mt-16 bg-white shadow-sm py-9 lg:px-12 xl:px-16 rounded-xl">
                <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
                  Ada Masukan?
                </h3>
                <div className="flex flex-col w-full gap-6 lg:flex-row ">
                  <div className="flex flex-col lg:w-1/4 gap-[28px] ">
                    <input
                      className="rounded-xl p-4 bg-[#FFf7F8] focus:outline-none focus:border-primary focus:border"
                      placeholder="Nama"
                    />
                    <input
                      className="rounded-xl p-4 bg-[#FFf7F8] focus:outline-none focus:border-primary focus:border"
                      placeholder="Email"
                    />
                    <input
                      className="rounded-xl p-4   bg-[#FFf7F8] focus:outline-none focus:border-primary focus:border"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="flex flex-col h-full lg:w-3/4 ">
                    <textarea
                      className="rounded-xl p-4 px-6 bg-[#FFf7F8] focus:outline-none focus:border-primary focus:border "
                      placeholder="Tuliskan saran dan masukanmu disini"
                      rows={"8"}
                    />
                  </div>
                </div>
                <a className="mx-auto w-fit">
                  <Button className={"opacity-90 hover:opacity-100"}>
                    Beri Masukan
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
