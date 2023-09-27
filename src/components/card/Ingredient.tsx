import React from "react";
import { Card } from ".."; //INTERFACE
import { motion } from "framer-motion";

const Ingredient: React.FC<Card> = ({ id, name, img }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-72 w-[80%] mx-auto sm:w-48 text-slate-700 cursor-pointer bg-slate-100 rounded-2xl border-2 border-slate-400"
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      key={id}
    >
      <img
        src={img}
        alt={name}
        className="w-48 sm:w-36 rounded-full mx-auto mt-6"
      />
      <div className="flex items-center justify-center py-auto w-[100%] h-[30%] bg-white rounded-b-2xl px-3">
        <h1 className="text-xl sm:text-lg font-extrabold my-auto text-center">
          {name}
        </h1>
      </div>
    </motion.div>
  );
};

export default Ingredient;
