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
    <section className="bg-white py-14 lg:py-20">
      <div className="container ">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
            Kata Mereka Tentang Kami
          </h3>
          <hr className="bg-[#e5dfdf] w-1/4 sm:w-1/6 mx-auto h-[2px] mt-3" />
          <div>
            <Slider className="mt-14" {...settings}>
              <div className="flex flex-col justify-center w-full mx-auto">
                <figure>
                  <Image
                    width={186}
                    height={186}
                    src={"/assets/images/fotovito.png"}
                    alt="Foto Testimoni"
                    quality={100}
                    className="mx-auto rounded-full"
                  />
                </figure>
                <p className="text-lg lg:text-xl  text-[#A0A0A0] max-w-4xl !leading-relaxed font-medium mt-5 mx-auto">
                  Saya sangat terkesan dengan pengalaman belajar di platform
                  ini. Materi yang disajikan sangat informatif dan bermanfaat.
                  Saya merasa lebih percaya diri dalam memahami konsep-konsep
                  sulit. Selain itu, tim dukungan mereka sangat responsif dan
                  membantu. Saya merekomendasikan platform ini kepada siapa saja
                  yang ingin meningkatkan pengetahuan dan keterampilan mereka.
                  Terima kasih atas pengalaman belajar yang luar biasa
                </p>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
