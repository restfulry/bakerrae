import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <nav className={footerStyles.nav}>
      <ul>
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

export default Footer;
