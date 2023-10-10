import style from "./Header.module.css";
const Header = () => {
  return (
    <header
      className={styles.container}
      style={{ backgroundImage: "url(/public/background.jpeg)" }}
    >
      obrazek i info o firmie
    </header>
  );
};
export default Header;
