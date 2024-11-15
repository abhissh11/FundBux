import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { serverURL } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setError("Please fill out all the fields!");
    }

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(`${serverURL}/api/user/signup`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      const data = await res.data;
      if (data) {
        setLoading(false);
      }
      navigate("/signin");
      return data;
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        setLoading(false);
      } else {
        setError("An unexpected error occurred.");

        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError("");
    }
  }, [error]);

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
          <div className=" flex flex-col justify-center items-center  bg-emerald-600 border-2 border-emerald-900 p-5 rounded-xl">
            <h2 className="text-3xl font-bold text-white text-center py-2">
              Sign Up
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full items-center justify-center my-5"
            >
              <input
                type="text"
                className=" md:w-3/4 w-full bg-gray-100 p-3 text-md font-semibold text-emerald-900 border-2 border-emerald-700 rounded-md focus:outline-none "
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
              <input
                type="email"
                className=" md:w-3/4 w-full bg-gray-100 p-3 text-md font-semibold text-emerald-900 border-2 border-emerald-700 rounded-md focus:outline-none "
                placeholder="Your Email"
                id="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="w-full md:w-3/4 bg-gray-100 p-3 text-md text-emerald-900 border-2 border-emerald-700 rounded-md focus:outline-none "
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="bg-black text-white py-3 w-full md:w-3/4 rounded-md text-lg font-semibold "
                disabled={loading}
              >
                Sign Up
              </button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
          <p className="text-center text-md font-semibold my-2">
            Already have an account?
            <Link to="/signin" className="text-emerald-800 hover:underline">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
