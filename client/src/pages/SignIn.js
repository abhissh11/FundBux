import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="md:mx-36 mx-5 min-h-[80vh] my-5 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center ">
        <div className="flex flex-col gap-5 w-3/4 md:w-1/2">
          <Link
            to="/"
            className="text-4xl font-bold text-white   
                bg-emerald-700 px-3 rounded-md hover:bg-emerald-800 w-fit"
          >
            FundBux
          </Link>
          <p className="text-md text-gray-500">
            Our mission is to provide a seamless and secure platform for
            fundraising, where anyone can create a campaign and share their
            story. We aim to empower individuals and organizations to reach
            their financial goals, whether it's for personal needs, community
            projects, or charitable causes.
          </p>
        </div>
        <div className="min-h-[20rem] w-3/4 md:w-1/2">
          <div className="  bg-emerald-600 border-2 border-emerald-900 p-5 rounded-xl">
            <h2 className="text-3xl font-bold text-white text-center py-2">
              Sign In
            </h2>
            <form className="flex flex-col gap-5 w-full items-center justify-center my-5">
              <input
                type="email"
                className=" md:w-3/4 w-full bg-gray-100 p-3 text-md font-semibold text-emerald-900 border-2 border-emerald-700 rounded-md focus:outline-none "
                placeholder="Your Email"
              />
              <input
                type="password"
                className="w-full md:w-3/4 bg-gray-100 p-3 text-md text-emerald-900 border-2 border-emerald-700 rounded-md focus:outline-none "
                placeholder="Password"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 w-full md:w-3/4 rounded-md text-lg font-semibold "
              >
                Sign In
              </button>
            </form>
          </div>
          <p className="text-center text-md font-semibold my-2">
            Haven't registered yet?
            <Link to="/signup" className="text-emerald-800 hover:underline">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
