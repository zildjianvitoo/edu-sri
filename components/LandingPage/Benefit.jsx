import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import AOS from "aos";

export default function Benefit() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="bg-[#FFf7F8] py-14 relative">
      <div className="container">
        <div className="absolute hidden lg:block w-8 h-8 right-[18rem] top-[4rem] bg-orangeEduSri rounded-full" />
        <div className="flex flex-col items-center md:flex-row gap-y-10 md:gap-x-20 lg:gap-x-44">
          <figure className="" data-aos="fade-right" data-aos-delay="200">
            <Image
              src={"/assets/images/LandingPage/landingpage-benefit.jpg"}
              alt="benefit image"
              width={510}
              height={525}
              quality={100}
              className="sm:w-[430px] -scale-x-100"
            />
          </figure>
          <div className="flex flex-col ">
            {" "}
            <h3
              className="text-3xl font-semibold text-textColor lgtext-4xl"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              24/7 Dukungan Siswa
            </h3>
            <p
              className="mt-4 text-lg lg:text-xl  text-[#A0A0A0] max-w-lg font-medium"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Dapatkan dukungan siswa 24/7 untuk membantu Anda meraih
              keberhasilan akademik kapan pun Anda membutuhkannya. Kami siap
              membantu Anda dengan layanan terbaik.
            </p>
            <div data-aos="fade-left" data-aos-delay="400">
              <Button
                className={
                  "from-[#FF8087] to-[#ff7d89] opacity-90 hover:opacity-100 w-fit mt-10"
                }
              >
                Baca Selengkapnya
              </Button>
            </div>
            <figure className="absolute bottom-0 right-[13rem] hidden lg:block">
              <Image
                width={180}
                height={180}
                src={"/assets/images/vector-tali.jpg"}
                alt="Vector"
                className="hidden xl:block"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
