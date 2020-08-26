import React from "react";
import LinkButton from "./LinkButton";

const CallToAction = () => (
  <div className="flex flex-col items-center max-w-2xl mx-auto px-4 pt-8 pb-12 xl:pt-16 2xl:pt-20 2xl:ml-32">
    <h2 className="text-center text-gray-500 text-lg tracking-wide font-thin">
      How can we help you?
    </h2>
    <div className="flex flex-col items-center w-full max-w-md mt-4 px-4 py-4 bg-white rounded shadow-md 2xl:max-w-xl">
      <h3 className="text-center text-gray-800 text-xl font-thin tracking-wide">
        Are you a member?
      </h3>
      <div className="my-2">
        <LinkButton link="#" linkText="Sign in Here" />
      </div>
      <h3 className="mt-4 text-center text-gray-800 text-xl font-thin tracking-wide">
        Want to hire Aggies?
      </h3>
      <div className="my-2">
        <LinkButton link="#" linkText="Register for Career Fair" />
      </div>
      <h3 className="mt-4 text-center text-gray-800 text-xl font-thin tracking-wide">
        Want to find a job?
      </h3>
      <div className="my-2 mb-4">
        <LinkButton link="#" linkText="Prepare for Career Fair" />
      </div>
    </div>
  </div>
);

export default CallToAction;
