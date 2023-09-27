import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { createCards } from "../../functions";
import { Card } from ".."; //Interfaces
import { Drink } from ".."; //Components

interface Research {
  title: string;
  options: string[];
}

const HomeResearch: React.FC<Research> = ({ title, options }) => {
  const SETTINGS = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [select, setSelect] = useState<string>(options[0]);
  const [drinksCategory, setDrinksCategory] = useState<Card[]>([]);

  useEffect(() => {
    if (title == "Category") {
      const DRINKS = createCards(
        "HomeResearch",
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${select}`
      );
      DRINKS.then((drinks) => setDrinksCategory(drinks));
    } else if (title == "Glass") {
      const DRINKS = createCards(
        "HomeResearch",
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${select}`
      );
      DRINKS.then((drinks) => {
        setDrinksCategory(drinks);
      });
    } else if (title == "Tipology") {
      const DRINKS = createCards(
        "HomeResearch",
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${select}`
      );
      DRINKS.then((drinks) => setDrinksCategory(drinks));
    }
  }, [select, title]);

  const handleCategory = (category: string) => {
    const selection = document.getElementById(category) as HTMLDivElement;
    setValue(selection.innerText);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-80 gap-4 py-4 md:my-4 text-slate-700 rounded-2xl border-2 border-slate-400 bg-slate-100 shadow-2xl shadow-slate-900">
      <motion.label
        className="text-lg font-semibold"
        animate={{ fontSize: "30px", color: "#33BC2E" }}
      >
        Search by {title}
      </motion.label>
      <div className="flex flex-col gap-4 items-center w-[100%] px-4">
        <div className="relative flex flex-col items-center w-[100%]">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-green-200 p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-2 border-transparent hover:border-green-500"
          >
            {value ? value : `Select ${title}`}
            {!isOpen ? (
              <RiArrowDropDownLine size={35} />
            ) : (
              <RiArrowDropUpLine size={35} />
            )}
          </button>
          {isOpen && (
            <div
              id={title}
              className="bg-green-200 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full z-10"
            >
              {title == "Category" || title == "Tipology" ? (
                options.map((option: string, index) => {
                  return (
                    <div
                      key={index}
                      id={option}
                      onClick={() => handleCategory(option)}
                      className="hover:bg-green-100 w-full cursor-pointer rounded-r-lg py-1 px-2 text-lg hover:border-l-slate-500 hover:border-l-4"
                    >
                      {option}
                    </div>
                  );
                })
              ) : (
                <div className="grid grid-cols-3">
                  {options.map((option: string, index) => {
                    return (
                      <div
                        key={index}
                        id={option}
                        onClick={() => handleCategory(option)}
                        className="hover:bg-green-100 cursor-pointer rounded-r-lg py-1 pl-1 text-lg hover:border-l-slate-500 hover:border-l-4"
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="btn flex justify-center items-center"
          onClick={() => setSelect(value)}
        >
          <AiOutlineSearch size="25px" color={"black"} />
        </button>
      </div>
      <div className="sm:w-[100%] w-[80%] px-1">
        {/* <Card {...cardsCategory[0]} /> */}
        <Slider {...SETTINGS} arrows={true}>
          {drinksCategory.map((drink: Card) => {
            return <Drink {...drink} key={drink.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeResearch;
