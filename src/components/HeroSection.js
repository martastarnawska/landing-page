"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Trans, useTranslation } from 'react-i18next';
import logo from '../app/assets/logo.svg';
import Menu from "./Menu";
import "./HeroSection.scss";

const HeroSection = () => {
  const { t } = useTranslation();

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
          <Trans i18nKey="hero.welcomeText" t={t}>
            Our daily bread is to
            <b className="hero__header--emphasize"> connect right people in Poland and America </b>
            in their desire to create and tighten bonds in business, culture or simply in bringing communities together.
          </Trans>
        </h1>
      </div>
      <div className="hero__description">
        <p>{t('hero.description-part1')}</p>
        <p>{t('hero.description-part2')}</p>
      </div>
    </section>
  )
};

export default HeroSection;
