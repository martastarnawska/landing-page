import Image from "next/image";
import logo from '../app/assets/logo.svg'
import "./HeroSection.scss"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <Image
          src={logo}
          alt="Republic of Relations logo"
          className="hero__logo"
          priority
        />
      </div>
      <h1 className="hero__header">
        Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in 
        <b className="hero__header--emphasize"> bringing communities together </b>
      </h1>
      <p className="hero__description">
        <b className="hero__description--emphasize ">Lorem ipsum dolor sit amet, </b>
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et. 
      </p>
    </section>
  )
};

export default HeroSection;
