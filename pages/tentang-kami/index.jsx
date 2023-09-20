import Button from "@/components/Button/Button";
import Intro from "@/components/LandingPage/Intro";
import cn from "@/utils/cn";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

export default function TentangKami() {
  const [activeFaq, setActiveFaq] = useState(1);

  const onOpenFaqHandler = (value) => {
    if (activeFaq === value) {
      setActiveFaq(0);
    } else {
      setActiveFaq(value);
    }
  };

  return (
    <>
      <Head>
        <title>Tentang Kami | EduSir</title>
      </Head>
      <main className="overflow-x-hidden">
        <Intro />
        <section className="bg-[#FFf7F8] py-14 lg:py-20 relative">
          <div className="container ">
            <div className="flex flex-col justify-center gap-y-20">
              <div className="relative flex flex-col items-center md:flex-row gap-y-6 gap-x-12 lg:gap-x-24 xl:gap-x-36">
                <figure
                  className="relative z-10 rounded-lg "
                  data-aos="fade-right"
                >
                  <Image
                    width={507}
                    height={335}
                    src={
                      "/assets/images/TentangKami/tentangkami-ceritaalumni.jpg"
                    }
                    alt="Gambar Cerita Alumni"
                    className="relative z-10 rounded-lg"
                  />
                </figure>
                <div className="flex flex-col ">
                  <h3
                    className="text-3xl font-semibold text-textColor lg:text-4xl"
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    Cerita Sukses Para Alumni
                  </h3>
                  <p
                    className=" text-lg md:text-base lg:text-xl  text-[#A0A0A0] max-w-lg md:mt-3 mt-5"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    Tonton inspirasi cerita sukses dari para alumni kami yang
                    telah mencapai prestasi gemilang setelah menyelesaikan
                    program kami. Mereka adalah bukti nyata bahwa pendidikan di
                    sini memberikan landasan kuat untuk sukses dalam karier dan
                    kehidupan. Temukan perjalanan mereka dan dapatkan motivasi
                    untuk meraih impian Anda
                  </p>
                  <div data-aos="fade-left" data-aos-delay="300">
                    {" "}
                    <Button
                      className={"w-fit mt-5 opacity-90 hover:opacity-100"}
                    >
                      Tonton Selengkapnya
                    </Button>
                  </div>

                  <div
                    className="absolute w-9 h-9 rounded-full bg-secondary -bottom-[1.15rem] left-[6rem] z-0 hidden lg:block"
                    data-aos="zoom-in"
                  />
                  <div
                    className="absolute w-11 h-11 rounded-full bg-[#e0e0e0] bottom-0 right-[14rem] z-0 hidden xl:block"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center md:justify-start md:mr-auto md:flex-row-reverse gap-y-6 gap-x-12 lg:gap-x-24 xl:gap-x-36">
                <figure className="rounded-lg">
                  <Image
                    width={507}
                    height={335}
                    src={
                      "/assets/images/TentangKami/tentangkami-perjalanan.jpg"
                    }
                    alt="Gambar Tentang Kami Perjalanan"
                    className="relative z-10 rounded-lg"
                  />
                </figure>
                <div className="flex flex-col md:text-right">
                  <h3
                    className="max-w-md ml-auto text-3xl font-semibold text-textColor lg:text-4xl"
                    data-aos="fade-right"
                  >
                    Tutorial Cara Tergabung Dalam Kelas Kami | Mari Mulai!
                  </h3>
                  <p
                    className=" text-lg md:text-base lg:text-xl  text-[#A0A0A0] max-w-lg md:mt-3 mt-5"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    Kami akan membimbing Anda langkah demi langkah untuk
                    bergabung dalam kelas kami. Ikuti tutorial kami yang mudah
                    dipahami, dan mulai perjalanan Anda menuju pengetahuan dan
                    pengembangan diri yang lebih baik. Mari mulai perjalanan
                    belajar Anda bersama kami!
                  </p>
                  <Link
                    href="/register"
                    className="w-[45%] md:ml-auto"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <Button
                      className={"w-full mt-5 opacity-90 hover:opacity-100"}
                    >
                      Mari Mulai
                    </Button>
                  </Link>
                  <div
                    className="absolute w-5 h-5 rounded-full bg-orangeEduSri top-[2.5rem] right-[20rem] z-0 hidden lg:block"
                    data-aos="zoom-in"
                  />
                  <div
                    className="absolute w-7 h-7 rounded-full bg-greenEduSri bottom-[5rem] left-[12rem] z-0 hidden lg:block"
                    data-aos="zoom-in"
                  />
                  <div
                    className="absolute w-9 h-9 rounded-full bg-orangeEduSri bottom-[4rem] right-[18rem] z-0 hidden xl:block"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFf7F8] py-14 lg:py-20 relative">
          <div className="container">
            <div className="flex flex-col justify-center text-center ">
              <h3 className="text-3xl font-semibold text-textColor lg:text-4xl">
                Pertanyaan Yang Sering Diajukan
              </h3>
              <hr className="bg-[#e5dfdf] w-1/4 sm:w-1/6 mx-auto h-[3px] mt-3" />
              <div className="flex flex-col gap-5 mt-9">
                <div
                  className={
                    "rounded-lg bg-white shadow-md py-8 px-10 cursor-pointer "
                  }
                  onClick={() => onOpenFaqHandler(1)}
                >
                  <div className="flex justify-between text-left ">
                    <div
                      className={" grid  grid-rows-[0fr] overflow-hidden "}
                      style={{ transition: "grid-template-rows 200ms" }}
                    >
                      <h4
                        className={cn(
                          "text-2xl font-semibold text-[#525252] lg:text-3xl",
                          {
                            "text-primary ": activeFaq === 1,
                          }
                        )}
                      >
                        Apa itu EduSri?
                      </h4>
                      <p
                        className={cn(
                          "min-h-0 max-w-[90%] mt-5 hidden opacity-0 text-lg lg:text-xl  text-[#A0A0A0]",
                          {
                            "block opacity-100": activeFaq === 1,
                          }
                        )}
                      >
                        EduSri merupakan platform atau program yang menyediakan
                        akses ke pendidikan dan pelatihan melalui internet,
                        termasuk kursus online, pelatihan jarak jauh, webinar,
                        dan sumber daya pembelajaran digital lainnya.
                      </p>
                    </div>
                    {activeFaq === 1 ? (
                      <BiMinus className="text-5xl text-primary" />
                    ) : (
                      <BiPlus className="text-3xl text-textColor" />
                    )}
                  </div>
                </div>
                <div
                  className={
                    "rounded-lg bg-white shadow-md py-8 px-10 cursor-pointer "
                  }
                  onClick={() => onOpenFaqHandler(2)}
                >
                  <div className="flex justify-between text-left ">
                    <div
                      className={" grid  grid-rows-[0fr] overflow-hidden "}
                      style={{ transition: "grid-template-rows 200ms" }}
                    >
                      <h4
                        className={cn(
                          "text-2xl font-semibold text-[#525252] lg:text-3xl",
                          {
                            "text-primary ": activeFaq === 2,
                          }
                        )}
                      >
                        Bagaimana saya dapat mendaftar dan mengakses layanan
                        EduSri?
                      </h4>
                      <p
                        className={cn(
                          "min-h-0 max-w-[90%] mt-5 hidden opacity-0 text-lg lg:text-xl  text-[#A0A0A0]",
                          {
                            "block opacity-100": activeFaq === 2,
                          }
                        )}
                      >
                        Anda dapat mendaftar ke layanan edukasi berbasis online
                        dengan membuat akun atau profil pengguna di Halaman
                        Daftar. Setelah mendaftar, Anda akan mendapatkan akses
                        ke konten pembelajaran dan alat pembelajaran seperti
                        video, materi, dan tes. Semua layanan Gratis tanpa
                        dipungut biaya!
                      </p>
                    </div>
                    {activeFaq === 2 ? (
                      <BiMinus className="text-5xl text-primary" />
                    ) : (
                      <BiPlus className="text-3xl text-textColor" />
                    )}
                  </div>
                </div>
                <div
                  className={
                    "rounded-lg bg-white shadow-md py-8 px-10 cursor-pointer "
                  }
                  onClick={() => onOpenFaqHandler(3)}
                >
                  <div className="flex justify-between text-left ">
                    <div
                      className={" grid  grid-rows-[0fr] overflow-hidden "}
                      style={{ transition: "grid-template-rows 200ms" }}
                    >
                      <h4
                        className={cn(
                          "text-2xl font-semibold text-[#525252] lg:text-3xl",
                          {
                            "text-primary ": activeFaq === 3,
                          }
                        )}
                      >
                        Apa keuntungan tergabung dalam layanan EduSri?
                      </h4>
                      <p
                        className={cn(
                          "min-h-0 max-w-[90%] mt-5 hidden opacity-0 text-lg lg:text-xl  text-[#A0A0A0]",
                          {
                            "block opacity-100": activeFaq === 3,
                          }
                        )}
                      >
                        Layanan EduSri menawarkan fleksibilitas belajar, akses
                        ke berbagai topik, dan kesempatan untuk mendapatkan
                        sertifikat resmi dari pemerintah secara gratis, dan juga
                        dapat meningkatkan kredibilitas dan kualifikasi Anda.
                      </p>
                    </div>
                    {activeFaq === 3 ? (
                      <BiMinus className="text-5xl text-primary" />
                    ) : (
                      <BiPlus className="text-3xl text-textColor" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
