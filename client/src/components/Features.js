import { HandCoins, HandHeart, Users } from "lucide-react";
import React from "react";

export default function Features() {
  const cards = [
    {
      icon: <Users />,
      title: "Became Volunteer",
      description:
        "Became a volunteer if you are a otivated & ready to support people and the community.",
    },
    {
      icon: <HandCoins />,
      title: "Quick Fundraise",
      description:
        "The simplest and quickest way to make a donation, so you can support people in need.",
    },
    {
      icon: <HandHeart />,
      title: "Start a Donation",
      description:
        "Start donating for our campaigns to support poor people and our children’s to school.",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold text-center">
            Our Features
          </h1>
          <p className="text-xl text-slate-500 text-center">
            We believe that we can save more life with you.
          </p>
        </div>
        <div className="my-20">
          <div className="flex flex-col  md:flex-row justify-between md:px-16">
            {cards.map((cd, index) => (
              <>
                <div
                  key={index}
                  className="m-5 p-4 py-10 rounded-3xl bg-yellow-100 flex flex-col gap-5 justify-between items-center "
                >
                  <div className="p-4 bg-emerald-700 rounded-full text-white">
                    {cd.icon}
                  </div>
                  <h1 className="text-emerald-800 text-2xl font-bold">
                    {cd.title}
                  </h1>
                  <p className="text-lg text-gray-500">{cd.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
