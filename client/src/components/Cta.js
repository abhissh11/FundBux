import { BadgeDollarSign, ChevronsRight, Hand } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="my-20">
      <div className="px-6 flex flex-col md:flex-row gap-10 justify-center">
        <div className="flex flex-col gap-6 justify-center items-start">
          <Hand
            size={78}
            className="p-4 bg-yellow-100 text-emerald-700 rounded-full"
          />
          <div className="flex flex-col gap-3 justify-between items-start">
            <h1 className="text-3xl font-bold text-emerald-700">Victims</h1>
            <p className="text-slate-500 text-lg font-semibold">
              Start a social movements and fundraising for the change
            </p>
          </div>
          <Link to="/donate">
            <button className="px-4 py-2 inline-flex gap-2 items-center bg-emerald-700 text-white text-xl font-semibold rounded-lg">
              Start a Campaign{" "}
              <span>
                <ChevronsRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-6 justify-center items-start">
          <BadgeDollarSign
            size={78}
            className="p-4 bg-yellow-100 text-emerald-700 rounded-full"
          />
          <div className="flex flex-col gap-3 justify-between items-start">
            <h1 className="text-3xl font-bold text-emerald-700">Sponsors</h1>
            <p className="text-slate-500 text-lg font-semibold">
              Funding campaigns in line with the vision of a better world
            </p>
          </div>
          <Link to="/donate">
            <button className="px-4 py-2 inline-flex gap-2 items-center bg-emerald-700 text-white text-xl font-semibold rounded-lg">
              Sposnor Campaigns{" "}
              <span>
                <ChevronsRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-20 py-20 bg-emerald-700 flex flex-row flex-wrap gap-10 items-center justify-evenly ">
        <div className="text-white flex flex-col  gap-3">
          <h1 className="text-5xl font-bold ">50,000</h1>
          <p className="text-lg font-semibold">Signature every hours</p>
        </div>
        <div className="text-white flex flex-col  gap-3">
          <h1 className="text-5xl font-bold ">20,000</h1>
          <p className="text-lg font-semibold">Victory each month</p>
        </div>
        <div className="text-white flex flex-col  gap-3">
          <h1 className="text-5xl font-bold ">1,000,000</h1>
          <p className="text-lg font-semibold">Fundraised per year</p>
        </div>
      </div>
    </div>
  );
}
