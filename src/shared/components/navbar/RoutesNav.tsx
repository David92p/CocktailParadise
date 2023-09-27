import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
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
      path: "home",
      element: <Main />,
    },
    {
      path: "home/details/:name",
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
      path: "drink/:name",
      element: <DrinkDetails />,
    },
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      path: "*",
      element: <ErrorServer />,
    },
  ]);
};

export default RoutesNav;
