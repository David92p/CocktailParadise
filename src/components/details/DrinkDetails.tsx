import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import en from "../../assets/en.png";
import it from "../../assets/it.png";
import de from "../../assets/de.png";
import es from "../../assets/es.png";
import fr from "../../assets/fr.png";

interface Drink {
  id: string;
  name: string;
  img: string;
  category: string;
  base: string;
  otherIngredients: string[];
  glass: string;
  measures: string[];
  istructionsEn: string;
  istructionsIt: string;
  istructionsDe: string;
  istructionsEs: string;
  istructionsFr: string;
}

const DrinkDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [cocktailDetails, setCocktailDeatils] = useState<Drink | null>(null);

  const [language, setLanguages] = useState(cocktailDetails?.istructionsEn);

  const changeLanguage = (lang: string) => {
    if (lang == "en") setLanguages(cocktailDetails?.istructionsEn);
    if (lang == "it") setLanguages(cocktailDetails?.istructionsIt);
    if (lang == "de") setLanguages(cocktailDetails?.istructionsDe);
    if (lang == "es") setLanguages(cocktailDetails?.istructionsEs);
    if (lang == "fr") setLanguages(cocktailDetails?.istructionsFr);
  };

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.json())
      .then((res) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strCategory,
          strIngredient1,
          strGlass,
          strInstructions,
          strInstructionsIT,
          strInstructionsDE,
          strInstructionsES,
          strInstructionsFR,
        } = res.drinks[0];

        setCocktailDeatils({
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          category: strCategory,
          base: strIngredient1,
          otherIngredients: setIngredients(res.drinks[0])[0],
          glass: strGlass,
          measures: setIngredients(res.drinks[0])[1],
          istructionsEn:
            strInstructions ||
            "Sorry, we don't have preparation instructions in your selected language",
          istructionsIt:
            strInstructionsIT ||
            "Spiacenti, non abbiamo istruzioni di preparazione nella lingua selezionata",
          istructionsDe:
            strInstructionsDE ||
            "Leider haben wir keine Zubereitungsanleitung in der von Ihnen ausgewählten Sprache",
          istructionsEs:
            strInstructionsES ||
            "Lo sentimos, no tenemos instrucciones de preparación en el idioma seleccionado.",
          istructionsFr:
            strInstructionsFR ||
            "Désolé, nous n'avons pas d'instructions de préparation dans la langue sélectionnée",
        });
      });
  }, [name]);

  const setIngredients = (obj: {
    [x: string]: string;
  }): [string[], string[]] => {
    let i: number = 1;
    const ingredients: string[] = [];
    const measures: string[] = [];
    while (i < Object.keys(obj).length) {
      Object.keys(obj).forEach((key) => {
        if (key == `strIngredient${i}` && obj[key] !== null) {
          ingredients.push(obj[key]);
        }
        if (key == `strMeasure${i}` && obj[key] != "" && obj[key] != null) {
          measures.push(obj[key]);
        }
      });
      i++;
    }
    return [ingredients, measures];
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 w-[100%]">
      <div className="bg-gradient-to-r from-green-300 to-green-100 2xl:w-[90%] flex flex-col items-center 2xl:flex-row py-8 2xl:my-4 2xl:rounded-xl">
        {/* COCKTAIL PHOTO CONTAINER */}
        <div className="flex flex-col justify-center items-center gap-4 2xl:gap-10 text-slate-700 border-l-2 border-b-2 border-slate-700 rounded-bl-2xl rounded-tr-2xl mx-14 sm:mx-44 bg-slate-100 shadow-2xl shadow-slate-900">
          <img
            src={cocktailDetails?.img}
            alt={cocktailDetails?.name}
            className="w-[60%] sm:w-[70%] rounded-full mt-4"
          />
          <div className="w-[100%] font-extrabold text-3xl sm:text-4xl p-4 sm:mt-6 text-center rounded-bl-2xl border-slate-700 bg-white">
            {cocktailDetails?.name}
          </div>
        </div>

        {/* CONTAINER TEXT COCKTAIL */}
        <div className="flex w-[100%] mt-8 sm:mt-14">
          {/* CONTAINER TOOLS COCKTAIL */}
          <div className="w-[50%]">
            {cocktailDetails?.otherIngredients.map((ingredient, index) => {
              return (
                <div
                  className="flex items-end justify-center h-14 sm:h-20 font-bold sm:text-3xl text-center border-b border-gray-400 ml-10"
                  key={index}
                >
                  {ingredient}
                </div>
              );
            })}
          </div>
          <div className="w-[50%]">
            {cocktailDetails?.measures.map((measure, index) => {
              return (
                <div
                  className="flex items-end justify-center h-14 sm:h-20 sm:text-3xl text-center border-b border-gray-400 mx-10"
                  key={index}
                >
                  {measure}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PREPARATION TIPS */}
      <div className="flex flex-col 2xl:w-[90%]">
        <div className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-4xl text-justify 2xl:text-justify 2xl:mx-auto p-4 sm:p-8">
          {language ? language : cocktailDetails?.istructionsEn}
        </div>

        <div className="flex flex-col py-4">
          <div className="flex justify-center items-center gap-7 cursor-pointer">
            <img
              src={en}
              alt="En"
              className="w-10 h-8 sm:w-12 sm:h-10 2xl:w-10 2xl:h-8"
              onClick={() => changeLanguage("en")}
            />
            {/* <FaExchangeAlt /> */}
            <img
              src={it}
              alt="It"
              className="w-10 h-8 sm:w-12 sm:h-10 2xl:w-10 2xl:h-8"
              onClick={() => changeLanguage("it")}
            />
            <img
              src={de}
              alt="De"
              className="w-10 h-8 sm:w-12 sm:h-10 2xl:w-10 2xl:h-8"
              onClick={() => changeLanguage("de")}
            />
            <img
              src={es}
              alt="Es"
              className="w-10 h-8 sm:w-12 sm:h-10 2xl:w-10 2xl:h-8"
              onClick={() => changeLanguage("es")}
            />
            <img
              src={fr}
              alt="Fr"
              className="w-10 h-8 sm:w-12 sm:h-10 2xl:w-10 2xl:h-8"
              onClick={() => changeLanguage("fr")}
            />
          </div>
          <div className="text-center text-md sm:text-2xl lg:text-3xl 2xl:text-2xl font-bold">
            Change Language
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-300 to-green-100 w-[100%] 2xl:w-[90%] h-auto text-lg sm:text-2xl lg:text-4xl 2xl:text-3xl text-justify 2xl:text-center p-4 sm:p-8 2xl:mb-2 2xl:rounded-lg font-medium">
        This cocktail is on our list {cocktailDetails?.category}, we advise you
        to serve it in a glass {cocktailDetails?.glass}.
      </div>
    </div>
  );
};

export default DrinkDetails;
