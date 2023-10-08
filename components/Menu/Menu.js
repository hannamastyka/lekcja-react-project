import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={styles.container}>
      <div>Moja firma</div>
      <ul>
        <li>
          <a href="#oferta">Oferta</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;