"use client"
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import Link from "next/link";
import Image from "next/image";
import burgerMenuIcon from "../app/assets/menu.svg";
import burgerMenuOpen from "../app/assets/menu-open.svg";
import polishFlag from "../app/assets/poland.svg";
import usFlag from "../app/assets/united-states.svg";
import "./Menu.scss";

const Menu = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLanguage = () => i18n.language;

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className={`menu menu--${isMenuOpen ? "open" : "closed"}`} ref={menuRef}>
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
            {t('menu.ourServices')}
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#AboutUs"}
            onClick={toggleMenuOpen}
          >
            {t('menu.aboutUs')}
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#ContactUs"}
            onClick={toggleMenuOpen}
          >
            {t('menu.contactUs')}
          </Link>
        </li>
        <li className="menu__listItem">
          <Link
            className="menu__link"
            href={"/#OurOffices"}
            onClick={toggleMenuOpen}
          >
            {t('menu.ourOffices')}
          </Link>
        </li>
        <li className="menu__listItem menu__listItem--button">
          <button
            onClick={() => {
              getLanguage() === "en" ? changeLanguage('pl') : changeLanguage('en');
              toggleMenuOpen();
            }}
            className="menu__changeLngButon"
          >
            <Image
              src={getLanguage() === "en" ?  polishFlag : usFlag}
              alt="change language flag"
              // alt={getLanguage() === "en" ? "change language for polish" : "change language for english"}
              className="menu__flag"
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}; 

export default Menu;
