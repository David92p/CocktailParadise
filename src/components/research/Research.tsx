import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "..";

interface ResearchType {
  link: string;
  name: string;
  cardsIngredients?: Card[];
  setIngredient?: React.Dispatch<React.SetStateAction<Card | undefined>>;
}
const Research: React.FC<ResearchType> = ({ link, name, setIngredient }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const [wordCall, setWordCall] = useState<string>("");

  const autoComplete = async () => {
    setIsError(false);
    const values: string[] = [];
    const word = document.getElementById(name) as HTMLInputElement;
    setInput(word.value);

    try {
      word.classList.remove("error");
      setIsOpen(true);
      const request = await axios.get(link + word.value);

      name == "navbar"
        ? request.data.drinks.forEach(
            (drink: { strDrink: string }, index: number) => {
              if (index < 6) values.push(drink.strDrink);
            }
          )
        : values.push(request.data.ingredients[0].strIngredient);

      setSearchValues(values);
      word.value == "" ? setIsOpen(false) : setIsOpen(true);
    } catch (e: unknown) {
      setIsError(true);
      setIsOpen(false);
      setSearchValues([]);
      word.classList.add("error");
    }
  };

  const search = async () => {
    setInput("");
    setIsOpen(false);
    if (name == "navbar") {
      if (wordCall) {
        setIsError(false);
        navigate(`drink/${wordCall}`);
        window.location.reload();
      }
    } else if (name == "ingredients") {
      if (wordCall) {
        await axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${wordCall}`
          )
          .then((res) => {
            const {
              idIngredient: id,
              strIngredient: name,
              strDescription: description,
            } = res.data.ingredients[0];
            return {
              id,
              name,
              img: `https://www.thecocktaildb.com/images/ingredients/${wordCall}-Medium.png`,
              description,
            };
          })
          .then((ingredient: Card) => {
            if (setIngredient) {
              setIngredient(ingredient);
            }
          });
      }
    }
  };

  useEffect(() => {
    setIsError(false);
    setIsOpen(false);
    setInput(wordCall);
  }, [wordCall, name]);

  return (
    <>
      <input
        value={input}
        type="text"
        maxLength={20}
        placeholder={
          name == "navbar" ? "Enter a cocktail name" : "Enter a ingredient"
        }
        id={name}
        onChange={autoComplete}
        className={
          name == "ingredients" ? "border-2 border-slate-300" : "border-2"
        }
      ></input>
      {isOpen && (
        <div
          className={
            name == "navbar"
              ? "flex flex-col items-start w-56 bg-green-200 2xl:bg-green-300 text-slate-700 2xl:font-bold rounded-lg p-2 2xl:absolute 2xl:z-20 2xl:top-20 2xl:left-0"
              : "flex flex-col items-start w-56 bg-green-200 2xl:bg-green-300 text-slate-700 2xl:font-bold rounded-lg p-2 2xl:absolute 2xl:z-20 2xl:top-20 2xl:left-[39%]"
          }
        >
          {searchValues.map((value: string, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setWordCall(value);
                }}
                className="hover:bg-green-100 w-full cursor-pointer rounded-r-lg py-1 px-2 text-lg hover:border-l-slate-500 hover:border-l-4"
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
      {isError && (
        <div
          className={
            name == "navbar"
              ? "flex flex-col items-start justify-start w-56 h-8 bg-red-200 text-slate-700 2xl:font-bold rounded-lg p-2 2xl:absolute 2xl:z-20 2xl:top-[80px] 2xl:left-0"
              : "flex flex-col items-start justify-start w-56 h-8 bg-red-200 text-slate-700 2xl:font-bold rounded-lg p-2 2xl:absolute 2xl:z-20 2xl:top-20 2xl:left-[39%]"
          }
        >
          Please enter a valid value....
        </div>
      )}
      <button type="button" className="btn" onClick={search}>
        Search
      </button>
    </>
  );
};

export default Research;
