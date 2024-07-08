import { ArrowBigRight, CornerDownRight } from "lucide-react";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function AboutComponent() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1507653050-4053dc17dfbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/2000/3000",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/3000/2000",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1643321612557-57cef422f401?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1643321613180-68d62b93cb79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 1,
      rowSpan: 1,
    },
  ];
  return (
    <div className="my-28">
      <div className="p-4 md:px-10 flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="flex flex-row flex-wrap p-2 ">
          {images.map((img, index) => (
            <>
              <div key={index} className="p-2 ">
                <img
                  src={img.src}
                  alt="img"
                  className="max-h-[210px] rounded-xl"
                />
              </div>
            </>
          ))}
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-4xl text-gray-800 font-bold text-center">
              We are the Powerful, Free Fundraising Platform
            </h1>
            <p className="text-xl text-slate-500 text-center">
              Proven, multi-purpose crowdfunding technology for effective
              organizational individual fundraising.
            </p>
          </div>
          <div className="my-6 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <CornerDownRight
                size={40}
                className="p-2 bg-emerald-700 rounded-2xl text-white"
              />
              <h3 className="text-xl font-bold">Start your campaigns</h3>
            </div>
            <div className="flex gap-4 items-center">
              <CornerDownRight
                size={40}
                className="p-2 bg-emerald-700 rounded-2xl text-white"
              />
              <h3 className="text-xl font-bold">Share with friends</h3>
            </div>
            <div className="flex gap-4 items-center">
              <CornerDownRight
                size={40}
                className="p-2 bg-emerald-700 rounded-2xl text-white"
              />
              <h3 className="text-xl font-bold">Manage Donations</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
