import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Cinnamon rolls, pastries, & cold brew concentrate.</span>
      </h1>
      <p className={headerStyles.description}>WEEKLY DROPS </p>
    </div>
  );
};

export default Header;
