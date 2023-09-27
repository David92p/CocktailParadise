// COMPONENTS
import Home from "./home/Home";
import Ingredients from "./ingredients/Ingredients";
import About from "./about/About";
import Contact from "./contact/Contact";
import Drink from "./card/Drink";
import DrinkDetails from "./details/DrinkDetails";
import Ingredient from "./card/Ingredient";
import Research from "./research/Research";
import Carousel from "./carousel/Carousel";
import HomeResearch from "./research/HomeResearch";
import ErrorServer from "./errorServer/ErrorServer";
import Pending from "./pending/Pending";

// COMPONENTS
export {
  Home,
  Ingredients,
  About,
  Contact,
  Drink,
  DrinkDetails,
  Ingredient,
  Research,
  Carousel,
  HomeResearch,
  ErrorServer,
  Pending,
};

// INTERFACES
export interface Card {
  id: string;
  name: string;
  img: string;
  description?: string;
}
