import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Button from "../Button/Button";
import AOS from "aos";

export default function Jumbotron() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className=" bg-[#FFf7F8] min-h-[85vh]">
      <div className="container ">
        <div className="flex flex-col items-center lg:gap-x-32 lg:flex-row">
          <div className="flex flex-col lg:mt-24">
            <h4 className="text-xl font-bold uppercase text-orangeEduSri">
              Sudah 5 tahun sejak berdiri
            </h4>
            <h1
              className="text-[35px] sm:text-[40px] lg:text-[43px] xl:text-[53px] mt-2 leading-none font-bold to-[#6F3AFA]"
              data-aos="fade-right"
            >
              Berinvestasi Dalam <br /> Pengetahuan Memberikan <br />{" "}
              <span className="text-secondary">Banyak Keuntungan</span>
            </h1>
            <p
              className="mt-4 text-lg  text-[#A0A0A0]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Temukan potensi Anda dan raih impian dengan Pengetahuan yang
              tepat. <br />
              Kami hadir untuk membantu Anda mencapai puncak potensi Anda.
            </p>
            <Link
              href={"/layanan"}
              className="mt-5 lg:mt-8 w-fit lg:w-fit"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Button
                className={
                  "from-[#FF8087] to-[#ff7d89] opacity-90 hover:opacity-100"
                }
              >
                Belajar Sekarang
              </Button>
            </Link>
          </div>

          <div className="relative sm:mt-0">
            <figure data-aos="zoom-in">
              <Image
                src={"/assets/images/LandingPage/landingpage-jumbotron.jpg"}
                alt="Jumbotron Image"
                width={530}
                height={610}
                priority={true}
                quality={100}
                className="-scale-x-100"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
