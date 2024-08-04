import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="bg-emerald-800 py-20 text-gray-200
    "
    >
      <div className="px-20 flex md:flex-row flex-col gap-10 justify-between">
        <div className="md:w-[20%]">
          <Link
            to="/"
            className="text-4xl font-bold text-white   
                bg-emerald-700 px-3 rounded-md hover:scale-110 "
          >
            F.
          </Link>
        </div>
        <div className="md:w-[40%] flex flex-col gap-3">
          <h2 className=" text-xl font-bold">About</h2>
          <p className=" text-md ">
            Our mission is to provide a seamless and secure platform for
            fundraising, where anyone can create a campaign and share their
            story. We aim to empower individuals and organizations to reach
            their financial goals, whether it's for personal needs, community
            projects, or charitable causes.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-md">Kolkata, India</p>
          <p className="text-md">contact@FundBux.com</p>
          <p className="text-md">+91-6207XXXXXX</p>
        </div>
      </div>
    </div>
  );
}
