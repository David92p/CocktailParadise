import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from ".."; //INTERFACE

const Drink: React.FC<Card> = ({ id, name, img }) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between h-72 w-full m-auto gap-3 sm:w-48 text-slate-700 cursor-pointer bg-slate-100 rounded-2xl border-2 border-slate-400"
    >
      <img
        src={img}
        alt={name}
        className="w-48 sm:w-36 rounded-full mx-auto mt-6"
      />
      <div
        className="flex items-center justify-center py-auto w-[100%] h-[30%] bg-white rounded-b-2xl px-3"
        onClick={() => {
          navigate(`details/${name}`);
        }}
      >
        <h1 className="text-xl sm:text-lg font-extrabold my-auto text-center">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Drink;
