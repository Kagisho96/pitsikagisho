import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="projects" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[80%] h-[90%] relative z-[0] px-0" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      I am unapologetically <br className="sm:block hidden" /> myself
      <span className="text-gradient"> – Pitsi Kagisho</span>{" "}
      </h2>
     
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt obcaecati voluptatibus dolorem quam aliquam dolor quas, culpa ullam! Voluptatibus tenetur veritatis neque qui ut officia deserunt. Architecto, totam ducimus.
      </p>
      <div  className={`grid gap-4 grid-cols-2`}>
        <div className={`cursor-pointer flex flex-row flex-wrap sm:mt-10 mt-6 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            <button type="button">
              PROJECT 1
            </button>      
            {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
            <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />  */}
          </div>
          <div className={`cursor-pointer flex flex-row flex-wrap sm:mt-10 mt-6 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            <button type="button">
              PROJECT 2
            </button>      
            {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
            <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />  */}
          </div>
        </div>
    </div>
  </section>
);

export default Billing;
