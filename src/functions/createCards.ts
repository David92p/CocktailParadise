import axios from "axios";
import { Card } from "../components"; //INTERFACE

const createCards = async (name: string, url: string, ingredient?: string) => {
  let cards: Card[] = [];

  if (name == "homeCards") {
    while (cards.length < 8) {
      await axios.get(url).then((result) => {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: img,
        } = result.data.drinks[0];
        cards = cards.filter((drink) => drink.id !== id);
        cards.push({
          id,
          name,
          img,
        });
      });
    }
  } else if (name == "HomeResearch") {
    await axios.get(url).then((result) => {
      result.data.drinks.forEach(
        (drink: {
          idDrink: string;
          strDrink: string;
          strDrinkThumb: string;
        }) => {
          const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
          cards.push({ id, name, img });
        }
      );
    });
  } else if (name == "Ingredients") {
    while (cards.length < 3) {
      await axios.get(url).then(async (result) => {
        const ingredient =
          result.data.drinks[
            Math.floor(Math.random() * result.data.drinks.length)
          ].strIngredient1;
        await axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
          )
          .then((result) => {
            const {
              idIngredient: id,
              strIngredient: name,
              strDescription: description,
            } = result.data.ingredients[0];
            cards = cards.filter((ingredient) => ingredient.id !== id);
            cards.push({
              id,
              name,
              img: `https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`,
              description,
            });
          });
      });
    }
  } else if (name == "Ingredients-cards") {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .then((result) => {
        result.data.drinks?.forEach(
          (drink: {
            idDrink: string;
            strDrink: string;
            strDrinkThumb: string;
          }) => {
            const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
            cards.push({ id, name, img });
          }
        );
      });
  }
  return cards;
};

export default createCards;
