import { testimonialList } from "@/utils/testimonialList";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  return (
    <section className="bg-white py-14 lg:py-20 relative">
      <div className="container ">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
            Kata Mereka Tentang Kami
          </h3>
          <figure className="absolute top-[10rem] right-[13rem] hidden lg:block">
            <Image
              width={115}
              height={115}
              src={"/assets/images/LandingPage/vector-tali-testi.png"}
              alt="Vector"
              quality={100}
            />
          </figure>
          <div className="absolute w-9 h-9 rounded-full bg-orangeEduSri top-[8.5rem] left-[16rem] z-0 hidden lg:block" />
          <div
            className="absolute w-5 h-5 rounded-full bg-secondary top-[60%] left-1/3
           z-0 hidden lg:block"
          />
          <div className="absolute w-9 h-9 rounded-full bg-greenEduSri top-[28.5rem] right-[24rem] z-0 hidden lg:block" />
          <hr className="bg-[#e5dfdf] w-1/4 sm:w-1/6 mx-auto h-[2px] mt-3" />
          <div>
            <Slider className="mt-14" {...settings}>
              {testimonialList.map((testi, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center w-full mx-auto "
                >
                  <figure>
                    <Image
                      width={186}
                      height={186}
                      src={testi.imageSource}
                      alt="Foto Testimoni"
                      quality={100}
                      className="mx-auto rounded-full"
                    />
                  </figure>
                  <h3 className="text-xl mt-2 font-semibold text-textColor lg:text-2xl">
                    {testi.name}
                  </h3>
                  <p className="text-base text-center lg:text-lg  text-[#A0A0A0] max-w-4xl !leading-relaxed font-medium mx-auto">
                    {testi.position}
                  </p>
                  <p className="text-lg text-center lg:text-xl  text-[#A0A0A0] max-w-4xl !leading-relaxed font-medium mt-5 mx-auto">
                    {testi.description}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
