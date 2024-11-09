import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="shadow-sm shadow-slate-200 sticky top-0 bg-white z-50 bg-opacity-95">
      <div className=" flex flex-row justify-between px-6 md:px-14 py-6 items-center">
        <div className="flex flex-row gap-20">
          <div className="flex flex-row-reverse gap-4">
            <div className="">
              <Link
                to="/"
                className="text-4xl font-bold text-white   
                bg-emerald-700 px-3 rounded-md hover:scale-110 "
              >
                F.
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
          {isAuthenticated ? (
            <div className="">
              <Dropdown label={user.email} dismissOnClick={true} className="">
                <DropdownItem>
                  <Link to="/create-campaign">Start a Campaign</Link>
                </DropdownItem>
                <DropdownItem onClick={handleLogOut}>Sign out</DropdownItem>
              </Dropdown>
              {/* <span></span>
              <button >Log Out</button> */}
            </div>
          ) : (
            <Link
              to="signin"
              className=" text-lg font-semibold  px-5 py-2 bg-emerald-700 text-white rounded-md hover:bg-black "
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* on small screen */}
      {showMenu && (
        <>
          <div className="h-[100vh] max-w-64 absolute px-4 left-0 bg-white border top-0  ">
            <div className="right-0 absolute m-6">
              <X
                size={32}
                onClick={handleMenuClick}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-5 items-center my-20">
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
