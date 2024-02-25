import { portfolios } from "@/app/constants";
import PortfolioSection from "@/components/PortfolioSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio -MJ",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">My Creative Porfolios</h2>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            deserunt assumenda reiciendis consequatur!
          </p>
        </div>
      </section>

      <PortfolioSection data={portfolios} title={"Project Done In 2023"} />
      <PortfolioSection
        data={portfolios.slice(3).concat(portfolios.slice(0, 3))}
        title={"Project Done In 2022"}
      />
      <PortfolioSection
        data={portfolios.slice(6).concat(portfolios.slice(0, 6))}
        title={"Project Done In 2021"}
      />
    </>
  );
};

export default page;
