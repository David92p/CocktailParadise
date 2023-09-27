import React, { useEffect, useState } from "react";
import { Card } from ".."; //INTERFACE
import { Ingredient, Carousel, Research, ErrorServer } from ".."; // Components
import createCards from "../../functions/createCards";
import Pending from "../pending/Pending";

const Ingredients: React.FC = () => {
  const [cardsIngredients, setCardsIngredients] = useState<Card[]>([]);
  const [cardsCocktail, setCardsCocktail] = useState<Card[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [ingredient, setIngredient] = useState<Card>();
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Load cardsIngredients
  useEffect(() => {
    setPending(true);
    setError(false);
    try {
      const CARDS = createCards(
        "Ingredients",
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      CARDS.then((cards) => {
        setPending(false);
        setError(false);
        setCardsIngredients(cards);
      });
    } catch (e) {
      setPending(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    setIngredient(cardsIngredients[index]);
  }, [index, cardsIngredients]);

  useEffect(() => {
    setPending(true);
    try {
      const CARDS = createCards(
        "Ingredients-cards",
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`,
        ingredient?.name
      );
      CARDS.then((cards) => {
        setPending(false);
        setError(false);
        setCardsCocktail(cards);
      });
    } catch (error) {
      setPending(false);
      setError(true);
    }
  }, [ingredient]);

  return (
    <div className="flex flex-col bg-gradient-to-tr from-green-300 to-green-100">
      <div className="flex flex-col pt-6">
        {error ? (
          <ErrorServer />
        ) : pending ? (
          <Pending />
        ) : (
          ingredient && <Ingredient {...ingredient}></Ingredient>
        )}
        <div className="flex justify-center gap-8 w-[100%] py-6 mt-4 bg-slate-100 border-t-2 border-slate-400">
          <button
            className="btn"
            onClick={() =>
              index == 0
                ? setIndex(cardsIngredients.length - 1)
                : setIndex(index - 1)
            }
          >
            Prev{" "}
          </button>
          <button
            className="btn"
            onClick={() =>
              index == cardsIngredients.length - 1
                ? setIndex(0)
                : setIndex(index + 1)
            }
          >
            Next{" "}
          </button>
        </div>
      </div>
      <div className="container-search bg-slate-100  border-b-2 border-slate-400 h-[100%]">
        <Research
          link="https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
          name="ingredients"
          cardsIngredients={cardsIngredients}
          setIngredient={setIngredient}
        />
      </div>
      {cardsCocktail.length > 0 ? (
        <Carousel cards={cardsCocktail} />
      ) : (
        <h1 className="text-xl text-center font-bold items-center">
          Sorry, there is currently no data for the selected ingredient
        </h1>
      )}

      <div className="w-[100%] text-2xl sm:text-4xl lg:text-5xl 2xl:text-4xl text-justify 2xl:text-justify 2xl:mx-auto p-4 sm:p-8">
        {ingredient?.description ? <p>{ingredient.description}</p> : null}
      </div>
    </div>
  );
};

export default Ingredients;
