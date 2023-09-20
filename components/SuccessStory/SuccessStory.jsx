import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import AOS from "aos";

export default function SuccessStory() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="bg-[#FFf7F8] py-14 lg:pb-24 relative">
      <div className="container">
        <div className="flex flex-col items-center md:flex-row gap-y-6 gap-x-12 lg:gap-x-24 xl:gap-x-36">
          <figure
            className="rounded-lg relative z-10"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              width={507}
              height={335}
              src={"/assets/images/success-story.jpg"}
              alt="Gambar Success Story"
              className="relative z-10 rounded-lg"
            />
          </figure>
          <div className="flex flex-col ">
            <h3
              className="text-3xl font-semibold text-textColor lg:text-4xl"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Cerita Sukses Dari Alumni
            </h3>
            <p
              className=" text-lg lg:text-xl  text-[#A0A0A0] max-w-lg font-medium md:mt-3 mt-5"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Dapatkan dukungan siswa 24/7 untuk membantu Anda meraih
              keberhasilan akademik kapan pun Anda membutuhkannya. Kami siap
              membantu Anda dengan layanan terbaik.
            </p>
            <div data-aos="fade-left" data-aos-delay="500">
              <Button className={"w-fit mt-5 opacity-90 hover:opacity-100"}>
                Baca Selengkapnya
              </Button>
            </div>
            <div
              className="absolute w-5 h-5 rounded-full bg-orangeEduSri top-[2.5rem] right-[20rem] z-0 hidden lg:block"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <div className="absolute w-7 h-7 rounded-full bg-secondary bottom-[5rem] left-[12rem] z-0 hidden lg:block" />
            <div
              className="absolute w-9 h-9 rounded-full bg-greenEduSri bottom-[5.5rem] right-[14rem] z-0 hidden xl:block"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
