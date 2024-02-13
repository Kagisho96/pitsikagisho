import "animate.css";
import FeedbackCard from "./FeedbackCard";
import styles from "../style";
import { quotes } from "../assets";
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
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex">
      <div className="flex">
        <div className="pt-10">
          <img
            src={quotes}
            alt="double_quotes"
            className="w-[42.6px] h-[27.6px] object-contain"
          />
        </div>
        <div className="ml-3">
          <h1 className="font-poppins text-[30px] leading-[32.4px] text-white my-10 font-bold">
            HOBBIES
          </h1>
        </div>
      </div>
    </div>

    <div className="">
      <div className="flex">
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        
      </p>
    </div>
  </div>
  </section>
);

export default Testimonials;
