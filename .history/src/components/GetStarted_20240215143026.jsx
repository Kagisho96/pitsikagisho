import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full p-4`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[10px] leading-[23.4px]">
          <span className="text-white">Get to</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[28px] h-[28px] object-contain" />
      </div>
      <a href="#!" download="/assets/Muzuvukile Resume.pdf" >Download CV</a>

      <p className="font-poppins font-medium text-[10px] leading-[18px]">
        <span className="text-gradient">Documents</span>
      </p>
    </div>
  </a>
);

export default GetStarted;
