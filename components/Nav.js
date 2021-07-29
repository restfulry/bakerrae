import Link from "next/link";
import Image from "next/image";
import navStyles from "../styles/Nav.module.css";

// import logo from "../public/logo_ig_round.png";

// const logo = require("../public/images/20200927_A7S04418_004-min.jpg");

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Image src="/logo_ig_round.png" width="50" height="50" alt="pic" />
        </li>
        <li>
          <Link href="/">ORDER</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
