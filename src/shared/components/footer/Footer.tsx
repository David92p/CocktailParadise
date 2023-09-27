import React from "react";
import github from "../../../assets/git-hub.png";
import linkedin from "../../../assets/linkedin.png";
import instagram from "../../../assets/instagram.png";
import cuoricino from "../../../assets/cuoricino.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-28 bg-slate-700">
      <div className="flex justify-center gap-8 my-auto">
        <a
          href="https://it.linkedin.com/in/davide-panetta-065420207"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="w-8 h-8" />
        </a>
        <a href="https://github.com/David92p" target="_blank">
          <img src={github} alt="github" className="w-8 h-8" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" className="w-8 h-8" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center font-bold text-sm text-white tracking-wide mx-auto sm:mx-4">
          Designed and built with all the love in the world
        </p>
        <img src={cuoricino} alt="Passion for coding" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Footer;
