import React from "react";
import CampaignsCarousel from "../components/CampaignsCarousel";
import Cta from "../components/Cta";

export default function Donate() {
  return (
    <>
      <div className="bg-slate-300">
        <CampaignsCarousel />
      </div>
      <div className="my-10 md:mx-36 mx-8">
        <h1 className="text-3xl font-bold text-center">
          Make a Difference Today
        </h1>
        <div className="my-10 flex flex-col gap-10 items-center justify-center">
          <p className="text-lg text-gray-500">
            Thank you for considering a donation to support a campaign on{" "}
            <span className="font-bold text-emerald-700">FundBux</span>. Your
            generosity helps bring dreams to life and supports causes that make
            a positive impact in our communities. Every contribution, big or
            small, plays a crucial role in achieving these goals.
          </p>
          <div className="my-5 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-3xl font-bold text-center">How to Donate</h2>
            <p className="text-lg text-gray-500">
              <span className="font-bold text-black">Find a Campaign : </span>
              Browse through the active campaigns on our platform. Each campaign
              has a unique story and a specific goal, allowing you to choose the
              one that resonates with you.
            </p>
            <p className="text-lg text-gray-500">
              <span className="font-bold text-black">Campaign : </span> Click on
              the "Donate" button on the campaign page. You'll be directed to a
              secure payment gateway where you can enter your donation amount
              and payment details.
            </p>
            <p className="text-lg text-gray-500">
              <span className="font-bold text-black">Confirmation : </span>
              After completing your donation, you will receive a confirmation
              email with the details of your contribution. The campaign creator
              will also be notified of your support.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Cta />
      </div>
    </>
  );
}
