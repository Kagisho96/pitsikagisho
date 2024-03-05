import GetStarted from "./GetStarted";
import styles from "../style";
import { discount, hero12, robot } from "../assets";

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
            <span className="text-white animate-bounce">PITSI KAGISHO</span> the
            great.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[75px] leading-[50px]">
            <span className="text-gradient">Hello I'm</span>{" "}
            {/* <span className="text-[64px] font-extrabold">Pitsi Kagisho</span> */}
            <span
              className="text-[64px] font-bold"
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
              <span className="letter-animation">P</span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.1s" }}
              >
                i
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.2s" }}
              >
                t
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.3s" }}
              >
                s
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.4s" }}
              >
                i
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.5s" }}
              >
                {" "}
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.6s" }}
              >
                K
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.7s" }}
              >
                a
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.8s" }}
              >
                g
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "0.9s" }}
              >
                i
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "1s" }}
              >
                s
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "1.1s" }}
              >
                h
              </span>
              <span
                className="letter-animation"
                style={{ animationDelay: "1.2s" }}
              >
                o
              </span>
            </span>
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">a Full Stack-Developer</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[30px] text-[20px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        by Sherly Swoopes.
        </h1> */}
        <p className={`${styles.paragraph} mt-5`}>
          A skilled Full Stack Developer proficient in CSS, HTML, JavaScript,
          GraphQL, Prisma, Hasura, GitHub, Node.js, and React. Expertise spans
          front-end and back-end development, creating dynamic interfaces,
          efficient data querying, robust databases, real-time synchronization,
          version control, server-side scripting, and responsive web app
          development.
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
