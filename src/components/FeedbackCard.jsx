import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, company, workduration, role, img }) => (
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
          <p className="text-xl text-gray-200 font-semibold">{role}</p>
          {/* <p className="text-gray-300 my-2">{company}</p>
          <p className="text-sm text-gray-300">{workduration}</p> */}
        </div>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={img} alt="" className="h-10 w-10 rounded-full" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-300 my-2">
            <p>
              <span className="absolute inset-0" />
              {company}
            </p>
          </p>
          <p className="text-sm text-gray-300">{workduration}</p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
