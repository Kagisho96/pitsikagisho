import styles, { layout } from "../style";
import { PITSIKM } from "../assets";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
  className={`flex flex-row p-6 rounded-[20px] ${
    index !== features.length - 1 ? "mb-6" : "mb-0"
  } feature-card`}
>
  <div className={`w-[20%] md:w-[64px] h-[20%] md:h-[64px] ${styles.flexCenter} bg-dimBlue`}>
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
</div>

);

const handleViewResumeClick = () => {
  // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
  const resumePath = "https://docs.google.com/document/d/1vHxoDtUuuyCGCcI2barnRSxOXomvq-P2/edit?usp=sharing&ouid=117279439866730988520&rtpof=true&sd=true"
    // "https://drive.google.com/file/d/1EzrFIry_OpVsPRh3OmZgeOBLT5KerKPW/view?usp=sharing";

  // Open the resume PDF in a new tab
  window.open(resumePath, "_blank");
};

const Business = () => (
  <section id="aboutme" className={layout.section}>
    <div className={`${layout.sectionInfo} p-3`}>
      <h2 className={styles.heading2}>
        ABOUT
        <span className="text-gradient"> ME</span>{" "}
      </h2>

      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 mt-44">
        {/* <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-black sm:text-6xl lg:col-span-2 xl:col-auto">
          We’re changing the way people connect.
        </h1> */}
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-lg leading-8 text-gray-300">
            A driven candidate with one year of internship experience possesses
            a strong foundation in web development. Proficient in skill listed,
            they adeptly craft visually appealing and responsive websites while
            ensuring structured and semantically organized content. With
            familiarity in GitHub for version control and Node.js and React for
            server-side and front-end development
          </p>

          <button
            className="mt-10 py-2.5 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
            onClick={handleViewResumeClick}
          >
            View Resume <span aria-hidden="true">→</span>
          </button>

        </div>
        <img
          src={PITSIKM}
          alt=""
          className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
    </div>
    <div className="mt-36">
      <p className={`${styles.heading2} text-gradient`}>Skills & Experiences</p>
      <div className="flex-col w-[550px] max-h-[600px] overflow-y-auto mt-8 bg-gray-900 rounded-lg border border-gray-600">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
