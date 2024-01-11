// import { feedback } from "../constants";
// import styles from "../style";
// import FeedbackCard from "./FeedbackCard";

// const Testimonials = () => (
//   <section id="partners" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
//     <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

//     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
//       <h2 className={styles.heading2}>   
//         Dedication and Kind regards <br className="sm:block hidden" />from folks below
//       </h2>
//       <div className="w-full md:mt-0 mt-6">
//         <p className={`${styles.paragraph} text-left max-w-[450px]`}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis quae voluptas unde vel ea, commodi ipsum quam itaque excepturi libero quibusdam similique, soluta non consectetur minus quis dolorem autem?
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
//       {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
//     </div>
//   </section>
// );

// export default Testimonials;

import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import "animate.css"; // Import Animate.css

const Testimonials = () => (
  <section id="partners" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Work History */}
    <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate__animated animate__fadeInUp`}>
      <h2 className={styles.heading2}>Work History</h2>
      <div className="w-full md:mt-0 mt-6">
        {/* Add your work history content here */}
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Work history content goes here.
        </p>
      </div>
    </div>

    {/* Education */}
    <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate__animated animate__fadeInUp`}>
      <h2 className={styles.heading2}>Education</h2>
      <div className="w-full md:mt-0 mt-6">
        {/* Add your education content here */}
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Education content goes here.
        </p>
      </div>
    </div>

    {/* Hobbies */}
    <div className={`w-full flex justify-between items-center md:flex-row flex-col relative z-[1] animate__animated animate__fadeInUp`}>
      <h2 className={styles.heading2}>Hobbies</h2>
      <div className="w-full md:mt-0 mt-6">
        {/* Add your hobbies content here */}
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hobbies content goes here.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;

