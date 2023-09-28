import React from "react";
import { useRoutes } from "react-router-dom";
import {
  About,
  Contact,
  Ingredients,
  DrinkDetails,
  ErrorServer,
} from "../../../components";
import Main from "../main/Main";

const RoutesNav: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/details/:name",
      element: <DrinkDetails />,
    },
    {
      path: "ingredients",
      element: <Ingredients />,
    },
    {
      path: "ingredients/details/:name",
      element: <DrinkDetails />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <ErrorServer />,
    },
  ]);
};

export default RoutesNav;
