import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

export default function SuccessStory() {
  return (
    <section className="bg-[#FFf7F8] py-14 relative">
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row gap-y-10 gap-x-36">
          <figure className="rounded-lg">
            <Image
              width={507}
              height={335}
              src={"/assets/images/success-story.jpg"}
              alt="Gambar Success Story"
              className="relative z-10 rounded-lg"
            />
          </figure>
          <div className="flex flex-col ">
            <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
              Cerita Sukses Dari Alumni
            </h3>
            <p className=" text-lg lg:text-xl  text-[#A0A0A0] max-w-lg font-medium mt-5">
              Dapatkan dukungan siswa 24/7 untuk membantu Anda meraih
              keberhasilan akademik kapan pun Anda membutuhkannya. Kami siap
              membantu Anda dengan layanan terbaik.
            </p>
            <Button className={"w-fit mt-5"}>Baca Selengkapnya</Button>
            <div className="absolute w-5 h-5 rounded-full bg-orangeEduSri top-[2.5rem] right-[20rem] z-0 hidden md:block" />
            <div className="absolute w-7 h-7 rounded-full bg-secondary bottom-[2.5rem] left-[12rem] z-0 hidden md:block" />
            <div className="absolute w-9 h-9 rounded-full bg-greenEduSri bottom-[2.5rem] right-[14rem] z-0 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}