import React from "react";
import { useLocation } from "react-router-dom";

export default function CampaignDetails() {
  const { state } = useLocation();
  const { campaign } = state || {};

  if (!campaign) {
    return <p>No campaign data available.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold">{campaign.title}</h1>
      <img
        src={campaign.image}
        alt={campaign.title}
        className="rounded-lg my-4"
      />
      <p>{campaign.description}</p>
      <h2 className="mt-4 text-lg font-semibold">
        Funds Raised: {campaign.fundsRaised}
      </h2>
    </div>
  );
}
