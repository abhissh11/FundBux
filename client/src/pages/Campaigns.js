import React from "react";
import Comp from "../components/Comp";

export default function Campaigns() {
  return (
    <div className="mt-5">
      <div className="my-10 md:mx-36 mx-8 flex flex-col gap-10 ">
        <h1 className="text-3xl font-bold text-center">
          Explore Our Campaigns
        </h1>
        <p className="text-lg text-gray-500">
          Welcome to the heart of{" "}
          <span className="text-emerald-700 font-bold">FundBux</span>, where
          you'll find a diverse range of campaigns created by individuals and
          organizations dedicated to making a difference. Whether you're looking
          to support medical expenses, educational projects, community
          initiatives, or other causes, there's a campaign here that needs your
          help.
        </p>
      </div>
      <Comp />
    </div>
  );
}
