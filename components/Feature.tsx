"use client";
import { FEATURE } from "@/constant";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine } from "react-icons/ri";
import { useState } from "react";


const Feature = () => {
  const NextArrow = (props: any) => {
    const {onClick} = props;
    return (
      <div onClick={onClick} className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 -right-3 z-10 hover:bg-slate-100">
        <RiArrowRightSLine/>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const {onClick} = props;
    return (
      <div onClick={onClick} className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 -left-3 z-10 hover:bg-slate-100">
        <RiArrowLeftSLine/>
      </div>
    );
  };

  var settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        },
      },

    ]
  };
  return (
    <section className="max-container padding-container bg-slate-100 py-24">
      <div className="m-auto w-[90%]">
        <h3 className="bold-52 capitalize pb-4 text-center">Featured Destinations</h3>
        <p className="mt-4 text-center">
          Explore the enchanting allure of Dubai's iconic landmarks and hidden
          gems. From the towering heights of Burj Khalifa to the pristine
          beaches of Jumeirah, our curated selection of featured destinations
          promises an unforgettable journey through the heart of this vibrant
          city.
        </p>
        <div className="pt-16">
          <Slider {...settings}>
            {
              FEATURE.map((feature) =>(
                <FeatureItem 
                  title={feature.title} URL={feature.URL} des={feature.des}                />
              ))
            }
          </Slider>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItem) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="mx-3 overflow-hidden border border-slate-200 group">
      <div className="overflow-hidden relative">
        <Image
          src={URL}
          alt="img"
          height={600}
          width={510}
          className="hover:scale-105 hover:rotate-2 transition-all duration-700"
        />
        {/* <Link
          href="/"
          className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter rounded-full -translate-x-1/2 -translate-y-1/2 group-hover: scale-100 transition-all duration-500"
        >
          <RiSearchLine />
        </Link> */}
      </div>
      <div className="px-5 py-3 bg-white">
        <div className="capitalize text-[17px] font-[500]">{title}</div>
        <div className="text-gray-500 my-2 text-[15px]">
          {showFullDescription ? des : `${des.slice(0, 90)}...`}
          <button
            className="text-blue-500 underline ml-1 cursor-pointer"
            onClick={toggleDescription}
          >
            {showFullDescription ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
