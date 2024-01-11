import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, company, workduration }) => (
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
            {name}
          </h1>
        </div>
      </div>
    </div>

    <div className="">
      <div className="flex">
        <div className="rounded shadow-md max-w-md ">
          <p className="text-xl font-semibold">Software Developer Intern</p>
          <p className="text-gray-600 text-sm">{company}</p>
          <p className="text-xs text-gray-500">{workduration}</p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
