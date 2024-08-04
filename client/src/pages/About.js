import React from "react";
import Mission from "../components/Mission";

export default function About() {
  return (
    <div className="my-10 md:mx-36 mx-8 ">
      <h1 className="text-3xl font-bold text-center">About</h1>
      <div className="my-10 flex flex-col gap-10 items-center justify-center">
        <p className="text-lg text-gray-500">
          At <span className="text-emerald-700 font-bold">FundBux</span>, we
          believe in the power of community and the impact we can make when we
          come together to support a cause. Our platform is designed to connect
          passionate individuals with meaningful campaigns, enabling everyone to
          contribute to the betterment of society.
        </p>

        <p className="text-lg text-gray-500">
          Our mission is to provide a seamless and secure platform for
          fundraising, where anyone can create a campaign and share their story.
          We aim to empower individuals and organizations to reach their
          financial goals, whether it's for personal needs, community projects,
          or charitable causes.
        </p>
        <Mission />
      </div>
    </div>
  );
}
