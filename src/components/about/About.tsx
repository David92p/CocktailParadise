import React from "react";

import foto1 from "../../assets/TheCocktailDB1.png";
import foto2 from "../../assets/TheCocktailDB2.png";
import foto3 from "../../assets/TheCocktailDB3.png";

const About: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 min-h-screen bg-gradient-to-r from-green-200 to-green-100">
      <div className="w-full bg-slate-100 rounded-2xl">
        <h1 className="text-4xl font-bold text-center py-2">
          The Cocktail Paradise
        </h1>
        <p className="sm:text-3xl text-md text-justify px-8 py-4 tracking-wide">
          Cocktail Paradise was created to help users find the most famous
          cocktails, and more, in the world. You can use the find function in
          the search bar at the top to find what you like. Once you have
          selected the desired cocktail, obtain all the suggested ingredients, a
          brief description of the preparation is at your disposal. Use the
          various sections of the homepage to classify your cocktails or move to
          the ingredients sections if you intend to search for cocktails with a
          specific ingredient, a short description will tell you about your
          search when possible.
        </p>
      </div>
      <div className="flex flex-col items-center w-[70%] bg-slate-100 rounded-xl my-4">
        <img
          src={foto1}
          alt="foto-1"
          className="w-56 sm:w-80 sm:h-48 my-6 mx-auto rounded-xl"
        />
        <p className="sm:text-2xl text-md text-justify px-8 pt-10 tracking-wide">
          The project was created thanks to the library provided by React, using
          the api provided by{" "}
          <a
            href="https://www.thecocktaildb.com/"
            className="font-bold"
            target="_BLANK"
          >
            TheCocktailDB
          </a>
        </p>
        <img
          src={foto3}
          alt="foto-3"
          className="w-32 h-32 sm:w-72 sm:h-72 rounded-full m-6"
        />
        <p className="sm:text-2xl text-md text-justify px-8 tracking-wide">
          The project uses one of the main libraries, such as "axios", for API
          management and other animation and transition libraries such as
          "framer-motion" and react-slick".
        </p>
        <img
          src={foto2}
          alt="foto-2"
          className="w-56 sm:w-80 sm:h-48 my-6 mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;
