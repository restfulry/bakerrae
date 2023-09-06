import Link from "next/link";
import Image from "next/image";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
          <div className={navStyles.logo}>
            <Link href="/">
              <a>
                <Image src="/logo.png" width="70" height="70" alt="pic" />
              </a>
            </Link>
          </div>
      <ul>
        <li>
        </li>
        <li>
          <Link href="/">ORDER</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/bakerraexcafe/">
            <a target="_blank">INSTAGRAM</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
