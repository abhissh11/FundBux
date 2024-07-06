import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="shadow-sm shadow-slate-200">
      <div className=" flex flex-row justify-between px-6 md:px-14 py-6 items-center">
        <div className="flex flex-row gap-20">
          <div className="flex flex-row-reverse gap-4">
            <div className="">
              <Link
                to="/"
                className="text-2xl font-bold text-emerald-700 hover:border-l-2 px-2 border-emerald-700"
              >
                FundBux
              </Link>
            </div>
            <div className="">
              {showMenu ? (
                <X
                  size={32}
                  onClick={handleMenuClick}
                  className="cursor-pointer"
                />
              ) : (
                <MenuIcon
                  size={32}
                  className="md:hidden cursor-pointer"
                  onClick={handleMenuClick}
                />
              )}
            </div>
          </div>

          {/* items list */}

          <div className=" md:block hidden">
            <div className="flex flex-row gap-5 items-center">
              <Link
                to="/campaigns"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
              >
                Campaigns
              </Link>
              <Link
                to="/about"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
              >
                About
              </Link>
              <Link
                to="/donate"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to="signin"
            className=" text-lg font-semibold  px-5 py-2 bg-emerald-700 text-white rounded-md hover:bg-black "
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* on small screen */}
      {showMenu && (
        <>
          <div className="bg-slate-300 h-svh max-w-64">
            <div className="flex flex-col gap-5 items-center">
              <Link
                to="/campaigns"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
                onClick={handleMenuClick}
              >
                Campaigns
              </Link>
              <Link
                to="/about"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
                onClick={handleMenuClick}
              >
                About
              </Link>
              <Link
                to="/donate"
                className=" text-lg font-semibold  hover:border-b-2 border-b-emerald-600 p-2 transition-all "
                onClick={handleMenuClick}
              >
                Donate
              </Link>
              <div className="">
                <Link
                  to="signin"
                  className=" text-lg font-semibold  px-5 py-2 bg-emerald-700 text-white rounded-md hover:bg-black "
                >
                  Start Your Campaign
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
