import React, { useEffect, useState } from "react";

import { Carousel, HomeResearch, Pending, ErrorServer } from "../index"; // COMPONENTS
import { Card } from "../index"; // INTERFACES
import { createCards } from "../../functions"; //FUNCTIONS

const Home: React.FC = () => {
  const CATEGORY: string[] = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Cocoa",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party Drink",
    "Beer",
    "Soft Drink",
  ];

  const GLASS: string[] = [
    "Cocktail glass",
    "Old-fashioned glass",
    "Whiskey Glass",
    "Collins glass",
    "Pousse cafe glass",
    "Champagne flute",
    "Whiskey sour glass",
    "Cordial glass",
    "Brandy snifter",
    "White wine glass",
    "Nick and Nora Glass",
    "Hurricane glass",
    "Coffee mug",
    "Shot glass",
    "Jar",
    "Irish coffee cup",
    "Punch bowl",
    "Pitcher",
    "Pint glass",
    "Copper Mug",
    "Wine Glass",
    "Wine Glass",
    "Coupette glass",
    "Beer pilsner",
    "Beer Glass",
    "Parfait glass",
    "Mason jar",
    "Margarita glass",
    "Martini Glass",
    "Balloon Glass",
    "Coupe Glass",
  ];

  const TIPOLOGY: string[] = ["Alcoholic", "Non Alcoholic", "Optional alcohol"];

  const [drinksHome, setDrinksHome] = useState<Card[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setPending(true);
    setError(false);
    try {
      const CARDS = createCards(
        "homeCards",
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      CARDS.then((cards) => {
        setPending(false);
        setError(false);
        setDrinksHome(cards);
      });
    } catch (e) {
      setPending(false);
      setError(true);
    }
  }, []);

  return (
    <div className="flex flex-col  bg-gradient-to-tr from-green-300 to-green-100">
      {error ? (
        <ErrorServer />
      ) : pending ? (
        <Pending />
      ) : (
        <Carousel cards={drinksHome} />
      )}
      {error && <ErrorServer />}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-around gap-12 md:gap-4 py-16 px-2 border-t-2 border-slate-400 bg-slate-100">
        <HomeResearch title="Category" options={CATEGORY}></HomeResearch>
        <HomeResearch title="Glass" options={GLASS}></HomeResearch>
        <HomeResearch title="Tipology" options={TIPOLOGY}></HomeResearch>
      </div>
    </div>
  );
};

export default Home;
