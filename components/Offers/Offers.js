import { offers } from "./date/offers";
import styles from "./Offers.module,css";
const Offers = () => {
  return (
    <secion>
      <h2>Oferta firmy</h2>
      <div className={styles.boxesContainer}>
        {offers.map((offer) => (
          <div className={styles.box}>
            <p>{offer.name}</p>
            {offer.isNew ? <p>nowość</p> : null}
            {offer.isNew ? <div className={styles.dot}></div> : null}
          </div>
        ))}
      </div>
    </secion>
  );
};
export default Offers;
