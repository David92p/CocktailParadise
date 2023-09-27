import React, { useState } from "react";
import { Research } from "../../../components";
import logo from "../../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const onMenu = () => {
    const containerLink = document.querySelector(
      ".container-link"
    ) as HTMLDivElement;
    if (menu) {
      containerLink.classList.add("absolute");
      setMenu(false);
    } else {
      containerLink.classList.remove("absolute");
      setMenu(true);
    }
  };

  return (
    <div className="container-nav">
      <div className="container-logo">
        <Link to="home">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 m-2 rounded-full ml-[30%] 2xl:w-16 2xl:ml-[30%]"
          />
          <h1 className="text-white tracking-wider">Cocktail Paradise</h1>
        </Link>
        {menu ? (
          <AiOutlineClose
            className="burger"
            color="white"
            onClick={() => onMenu()}
          />
        ) : (
          <RxHamburgerMenu
            className="burger"
            color="white"
            onClick={() => onMenu()}
          />
        )}
      </div>
      <div className="container-link absolute top-[-100%] 2xl:relative 2xl:top-[100%]">
        <NavLink to="home">Home</NavLink>
        <NavLink to="ingredients">Ingredients</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
      <div className="container-search">
        <Research
          link="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
          name="navbar"
        />
      </div>
    </div>
  );
};

export default Navbar;
