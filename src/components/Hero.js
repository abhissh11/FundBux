import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-yellow-50 flex flex-col md:flex-row gap-10 p-10 pt-20 justify-center items-center">
      <div className="flex-1 ">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl text-emerald-700 font-bold text-center">
              Fundraising for the people and cause you care
            </h1>
            <p className="text-xl text-slate-700 text-center">
              We provide a trusted donation channel for peoples of worldwide to
              support people and organizers.
            </p>
          </div>
          <div className="flex flex-row gap-8">
            <Link to="/">
              <button className="bg-emerald-800 px-4 py-2 md:px-8 md:py-3 rounded-md text-white text-lg font-semibold hover:bg-emerald-900">
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button
                className="border border-emerald-800 bg-gray-200 px-4 py-2 md:px-8 md:py-3 
              rounded-md md:text-lg font-semibold text-emerald-800 hover:bg-gray-300"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://www.canadahelps.org/media/Fundraising-1.png"
          alt="Heroes-img"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
