import React from "react";
import items from "../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MessageSquareText } from "lucide-react";

export default function CampaignsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Screen width of 1024px or less
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Screen width of 600px or less
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = items.carousel;

  return (
    <div className="bg-slate-300">
      <div className="py-32">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold text-center">
            Your Donation Matters
          </h1>
          <p className="text-xl text-slate-500 text-center">
            These campaigns need your help to achieve the goal.
          </p>
        </div>
        {/* carousel */}
        <div className="mt-20 px-20 ">
          <div className="">
            <Slider {...settings}>
              {data.map((d) => (
                <>
                  <div
                    key={d.id}
                    className="border-b-4 border-emerald-700  rounded-xl min-h-[400px]"
                  >
                    <div className="flex flex-col gap-4 justify-center pb-4">
                      <img
                        src={d.image}
                        alt="img"
                        className="h-[210px] rounded-xl  hover:cursor-pointer "
                      />
                      <div className="px-5  flex flex-col justify-between gap-6">
                        <div className=" flex flex-col gap-4">
                          <h1 className="text-xl font-semibold">{d.title}</h1>
                          <p>{d.description}</p>
                        </div>
                        <div className="flex flex-row gap-5 justify-between px-1 md:px-4">
                          <h2 className="md:px-4 bg-emerald-700 text-center rounded-md text-md font-semibold text-white">
                            {d.funds + " raised"}
                          </h2>
                          <MessageSquareText
                            size={32}
                            className="text-gray-800 p-2 bg-yellow-100 rounded-xl cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
