"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import burgerMenuIcon from "../app/assets/menu.svg"
import burgerMenuOpen from "../app/assets/menu-open.svg"
import "./Menu.scss";

const Menu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`menu menu--${isMenuOpen ? "open" : "closed"}`}>
      <button
        className="menu__button"
        onClick={toggleMenuOpen}
      >
        <Image
          src={isMenuOpen ? burgerMenuOpen : burgerMenuIcon}
          alt="burger menu icon"
          className="menu__icon"
        />
      </button>

      <ul className={`menu__list menu__list--${isMenuOpen? "open" : "closed"}`}>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#OurServices"}
            onClick={toggleMenuOpen}
          >
            Our Services
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#AboutUs"}
            onClick={toggleMenuOpen}
          >
            About Us
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#ContactUs"}
            onClick={toggleMenuOpen}
          >
            Contact Us
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#OurOffices"}
            onClick={toggleMenuOpen}
          >
            Our Offices
          </Link>
        </li>
      </ul>
    </nav>
  )
}; 

export default Menu;
