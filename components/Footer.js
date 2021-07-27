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
          <Link href="/contact">CONTACT</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
