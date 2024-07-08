import { AreaChart, CircleDollarSign, WalletCards } from "lucide-react";
import React from "react";

export default function Mission() {
  return (
    <div className="my-20">
      <div className="">
        <div className="flex flex-col gap-5 items-start px-4 md:px-12">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold text-center">
            The mission and goal of our organization
          </h1>
          <p className="text-xl text-slate-500 text-center">
            We provide a trusted platform for peoples of worldwide to support
            people and organizers.
          </p>
        </div>
        <div className="mt-32 px-8 md:px-20 flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 items-center justify-center">
              <AreaChart
                size={60}
                className="p-2 bg-emerald-700 text-white rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Manage your campaigns</h2>
                <p className="text-lg text-slate-500">
                  Track how many people signed the petition by week, month,
                  year.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <CircleDollarSign
                size={60}
                className="p-2 bg-emerald-700 text-white rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Collecting donation</h2>
                <p className="text-lg text-slate-500">
                  Campaign owners can set up to receive donations from
                  supporters.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <WalletCards
                size={60}
                className="p-2 bg-emerald-700 text-white rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Withdraw your money</h2>
                <p className="text-lg text-slate-500">
                  Withdraw your money to bank account or Paypal easily with few
                  set up.
                </p>
              </div>
            </div>
          </div>
          {/* collaboration image div */}
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/employee-engagement-concept-illustration_114360-14534.jpg?w=826&t=st=1720436854~exp=1720437454~hmac=13b27687f598129aeedbf3845ae961abe1aec3ceacb43fee3421f5b68048b7b9"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
