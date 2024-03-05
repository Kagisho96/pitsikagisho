import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Destiny is not a destination, <br className="sm:block hidden" />it's an
        adventure.
        <span className="text-gradient"> – Mphaka Johannes</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        *Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga atque voluptatibus sunt natus quisquam ab minima quasi hic distinctio totam ullam molestiae fugit doloribus numquam, cupiditate, quia, dolorem iure aliquam!*
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[90%] h-[90%] relative z-[5]" />
    </div>
  </section>
);

export default CardDeal;
