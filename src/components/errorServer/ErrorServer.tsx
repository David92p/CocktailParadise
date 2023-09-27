import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorServer: React.FC = () => {
  return (
    <div className="flex flex-col justify-top items-center pt-24 gap-8 w-full min-h-screen py-auto bg-red-200">
      <h1 className="font-bold mx-auto text-5xl sm:text-7xl text-[#ff0404]">
        Error 404
      </h1>
      <RiErrorWarningLine className="h-24 w-24" color="#ff0404" />
      <Link to="/" className="flex gap-4 cursor-pointer">
        <span className="text-2xl sm:text-3xl font-bold">Back to Home</span>
        <BsArrowCounterclockwise className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default ErrorServer;
