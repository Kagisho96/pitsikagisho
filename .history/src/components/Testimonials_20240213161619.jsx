import "animate.css";
import FeedbackCard from "./FeedbackCard";
import styles from "../style";
import { feedback } from "../constants";

const Testimonials = () => (
  <section
    id="experience"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    {/* Feedback */}
    <div
      className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] animate__animated animate__fadeInRight`}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    
  </section>
);

export default Testimonials;
