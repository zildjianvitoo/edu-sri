import React, { useEffect } from "react";
import AOS from "aos";

export default function Intro() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#9e94d0] to-[#887ec5] py-14  relative">
      <div className="container ">
        <div
          className="absolute w-9 h-9 rounded-full right-[16rem] top-[3rem] bg-greenEduSri hidden lg:block"
          data-aos="fade-left"
          data-aos-delay="200"
        />
        <div className="flex flex-col gap-3 mt-3 text-center">
          <h3
            className="text-3xl font-semibold text-white lg:text-4xl"
            data-aos="fade-down"
          >
            Platform Pembelajaran Terbesar di Indonesia
          </h3>
          <h4
            className="text-lg text-white lg:text-xl "
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            obcaecati?
          </h4>
          <hr className="w-1/4 mx-auto mt-3 " />
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <div
              className="absolute w-6 h-6 rounded-full left-[30rem] top-[11rem] bg-orangeEduSri hidden lg:block"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <div
              className="flex flex-col p-16 text-white bg-center bg-cover sm:p-16 lg:p-20"
              style={{
                backgroundImage:
                  "url('/assets/images/LandingPage/landingpage-intro.svg')",
              }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
                4800
              </h4>
              <p className="mt-2 text-xl leading-none">
                Alumni <br />
                sukses
              </p>
            </div>
            <div
              className="flex flex-col p-16 text-white bg-center bg-cover sm:p-16 lg:p-20"
              style={{
                backgroundImage:
                  "url('/assets/images/LandingPage/landingpage-intro.svg')",
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
                7200
              </h4>
              <p className="mt-2 text-xl leading-none">
                Mentor <br />
                Ekspert
              </p>
            </div>
            <div
              className="flex flex-col p-16 text-white bg-center bg-cover sm:p-16 lg:p-20"
              style={{
                backgroundImage:
                  "url('/assets/images/LandingPage/landingpage-intro.svg')",
              }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h4 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
                5
              </h4>
              <p className="mt-2 text-xl leading-none">
                Tahun <br />
                perjalanan
              </p>
            </div>
            <div
              className="flex flex-col p-16 text-white bg-center bg-cover sm:p-16 lg:p-20"
              style={{
                backgroundImage:
                  "url('/assets/images/LandingPage/landingpage-intro.svg')",
              }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h4 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
                43.258
              </h4>
              <p className="mt-2 text-xl leading-none">
                Murid <br />
                Aktif
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
