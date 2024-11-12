import React, { useEffect, useState } from "react";
import axios from "axios";
import { HandCoins, UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const getCampaigns = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://fundbux-backend.onrender.com/api/campaign/getCampaigns"
      );
      const data = await res.data;
      if (data) {
        setLoading(false);
        setErr(null);
        setCampaigns(data.campaigns);
      }
    } catch (error) {
      setErr(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);
  // console.log(campaigns);

  if (loading) {
    return (
      <>
        <div className="flex justify-center item-center min-h-screen m-20">
          <h1 className="text-xl font-semibold">
            Data is loading from the server. the server is deployed on Render
            free version. It might take 50 secs for activation & loading of
            components. <span className="text-green-600">Loading...</span>
          </h1>
        </div>
      </>
    );
  }

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
      <div className="flex flex-row flex-wrap justify-center  m-20 gap-4 gap-y-14">
        {campaigns &&
          campaigns.map((c) => (
            <>
              <Link to={`/campaign/${c.id}`} key={c.id} state={{ campaign: c }}>
                <div
                  className="w-64 h-72 border-2 border-gray-600 flex flex-col gap-2 rounded-xl hover:scale-105 transition-all delay-75"
                  onClick={() =>
                    navigate(`/campaign/${c.id}`, { state: { campaign: c } })
                  }
                >
                  <img src={c.image} alt={c.title} className="rounded-xl" />
                  <div className="p-2 hover:bg-gray-100 rounded-xl flex flex-col gap-4">
                    <h1 className="text-lg font-bold">{c.title}</h1>
                    <div className="flex items-center justify-between">
                      <h2 className=" px-4 py-2 bg-gray-900 text-white rounded-lg">
                        -- raised{" "}
                      </h2>
                      <button
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg
                    hover:bg-green-700"
                      >
                        <span>
                          <HandCoins />
                        </span>
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
}
