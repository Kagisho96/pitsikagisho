import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>

    {/* <div>
      <div className="mx-auto flex items-center justify-center">
      <img src={icon} alt="star" className="w-[35%] h-[35%] object-contain" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <p
          className="text-base font-semibold leading-6 text-gray-900"
        >
          Payment successful
        </p>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </div>
      </div>
    </div> */}
  </div>
);

const Business = () => (
  <section id="dashboard" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      “Don’t count the days, <br className="sm:block hidden" /> make the days count.”
      <span className="text-gradient"> – Muhammad Ali</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum laboriosam doloremque. Inventore et nobis minus esse, atque, impedit dolor minima ducimus explicabo magnam nihil nesciunt quaerat adipisci quos saepe?

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col bg-red-500 w-6/12 ${styles.scrollContent}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
  </section>
);

export default Business;
