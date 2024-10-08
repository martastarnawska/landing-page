"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Trans } from 'react-i18next';
import logo from '../app/assets/logo.svg';
import Menu from "./Menu";
import "./HeroSection.scss";

const HeroSection = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    }, [])
  });

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__navigation">
          <div className="hero__image-wrapper">
            <Image
              src={logo}
              alt="Republic of Relations logo"
              className="hero__logo"
              priority
            />
          </div>
          <div className={`hero__menuBar${scroll ? "--scrolled" : ""}`}/>
          <Menu/>
        </div>
        <h1 className="hero__header">
          <Trans i18nKey="hero.welcomeText">
            initial description
            <b className="hero__header--emphasize"> emphasize fraze </b>
          </Trans>
        </h1>
      </div>
      <p className="hero__description">
        <b className="hero__description--emphasize ">Lorem ipsum dolor sit amet, </b>
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et. 
      </p>
    </section>
  )
};

export default HeroSection;
