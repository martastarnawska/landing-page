import Link from "next/link";
import "./Navigation.scss";
import Menu from "./Menu";
import logo from "../app/assets/logo.svg";
import Image from "next/image";

const Navigation = () => (
  <div className="navigation">
    <Link href="/">
      <div className="navigation__logoWrapper">
        <Image
          src={logo}
          alt="Republic of Relations logo"
          className="navigation__logo"
          priority
        />
      </div>
    </Link>
    <Menu/>
  </div>
);

export default Navigation;
