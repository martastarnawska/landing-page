import Image from "next/image";
import placeholder from "../app/assets/placeholder.png";
import "./AboutUs.scss";

const AboutUs = () => (
  <section className="aboutUs">
    <div className="aboutUs__heading">
      <h2 className="aboutUs__header">About Us</h2>
      <span className="dot aboutUs__dot"></span>
    </div>
    <div className="card">
      <Image 
        src={placeholder}
        alt="portrait"
        className="card__portrait"
      />
      <div className="card__description card__description--first">
        <p className="card__name">
          <span className="card__firstName">
            <span className="dot card__dot"></span>
            <span>Imię</span>
          </span>
          <b className="card__lastName">Nazwisko</b>
        </p>
        <p className="card__bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et 
        </p>
      </div>
    </div>
    <div className="card card--reversed">
      <Image 
        src={placeholder}
        alt="portrait"
        className="card__portrait"
      />
      <div className="card__description  card__description--second">
        <p className="card__name">
        <span className="card__firstName">
            <span>Imię</span>
            <span className="dot card__dot"></span>
          </span>
          <b className="card__lastName">Nazwisko</b>
        </p>
        <p className="card__bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et 
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs