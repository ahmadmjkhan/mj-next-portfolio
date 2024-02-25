"use client";
import { benefits, portfolios, skills } from "@/app/constants";
import FaqSection from "@/components/FaqSection";
import PortfolioItem from "@/components/PortfolioItem";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

const page = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p
              className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded"
              data-aos="fade-down"
            >
              Hello There
            </p>
            <h1 className="text-grey">MJ Welcome's You</h1>
            <p
              className="text-grey-600"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              accusantium quia laudantium debitis maiores quisquam et similique.
              Atque similique quis commodi provident doloribus. Deleniti, porro
              explicabo fugit consequatur, quibusdam dolorem amet necessitatibus
              quaerat optio, at sed. Optio ipsum non eaque maxime. Qui.
            </p>
          </div>

          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact Now
            </Link>
            <Link href={"/contact"} className="btn">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* stats */}
          <div className="bg-peach-400 w-full py-6 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex">
            <div>
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Project Complete</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Year of Experience</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 tablet:hidden">
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Project Complete</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Year of Experience</p>
            </div>
          </div>
        </div>

        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src={"/images/hero.png"}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* skill slider */}
      <section className="max-width section-padding">
        {/* <div className="container m-auto absolute"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid grid-col-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 my-4">
          <div className="px-3">
            <div
              className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
              style={{ boxShadow: "#5700FF 3px 5px 1px 7px" }}
            >
              <div className="lg:py-5 md:py-6 sm:py-6 cursor-all-scroll">
                <Slider {...settings}>
                  <Image
                    src={"/images/mongodb.png"}
                    alt="mongodb"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                  <Image
                    src={"/images/reactjs.png"}
                    alt="reactjs"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                  <Image
                    src={"/images/nextjs.png"}
                    alt="nextjs"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                  <Image
                    src={"/images/mongodb.png"}
                    alt="mongodb"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                  <Image
                    src={"/images/reactjs.png"}
                    alt="reactjs"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                  <Image
                    src={"/images/nextjs.png"}
                    alt="nextjs"
                    className="h-12"
                    width="200"
                    height="20"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skill section */}

      <section className="max-width section-padding">
        <SectionHeading title="Creative Sills" subtitle="Lorem Ipsum Coloeo" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid grid-col-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <>
              <div key={index} className="box flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={35}
                    height={35}
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                  <p className="text-grey-600">{skill.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* benefit section */}
      <section className="max-width section-padding">
        <SectionHeading title="Benefits" subtitle="Lorem is ams" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* portfolio section */}
      <section>
        <SectionHeading
          title="section-padding max-width"
          subtitle="Lorem Here"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid grid-col-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>

        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
        >
          View All Projects
        </Link>
      </section>

      {/* testimonial sectios */}

      <div>
        <Testimonial />
      </div>

      {/* Faq Section */}

      <FaqSection />
    </>
  );
};

export default page;
