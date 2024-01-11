import styles from "../style";
import { discount, robot, hero12 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-0`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">SIMPLE</span> profile display for{" "}
            <span className="text-white">PITSI KAGISHO</span> the great.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
<<<<<<< HEAD
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[75px] leading-[50px]">
            <span className="text-gradient">Hello I'm</span>{" "}
            <span className="text-[64px] font-extrabold">Pitsi Kagisho</span>
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">a Full Stack-Developer</span>{" "}
=======
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          “Dream big, <br className="sm:block hidden" />{" "}
            <span className="text-gradient">work hard.”</span>{" "}
>>>>>>> parent of 6b9bb51 (initial commit)
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[30px] text-[20px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        by Sherly Swoopes.
        </h1> */}
        <p className={`${styles.paragraph} mt-5`}>
        A skilled Full Stack Developer proficient in CSS, HTML, JavaScript, GraphQL, Prisma, Hasura, GitHub, Node.js, and React. Expertise spans front-end and back-end development, creating dynamic interfaces, efficient data querying, robust databases, real-time synchronization, version control, server-side scripting, and responsive web app development.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero12}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
