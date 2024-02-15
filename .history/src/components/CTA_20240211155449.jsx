import Button from "./Button";
import styles from "../style";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const CTA = () => (
  <section id="contacts" className="sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow p-8">
    <div className="">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-100">
          Get in touch
        </h2>
      </div>

      <div className="flex w-full mt-4 justify-between">
        <div className="flex">
          <dt className="flex-none">
            <span className="sr-only">Address</span>
            <BuildingOffice2Icon
              className="h-7 w-6 text-gray-200"
              aria-hidden="true"
            />
          </dt>
          <dd>
            <p className="font-poppins font-semibold xs:text-[15px] text-[10px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              190 Scheiding St, 
              <br />
              Pretoria Central, Pretoria, 0002
            </p>
          </dd>
        </div>

        <div className="flex">
          <dt className="flex-none">
            <span className="sr-only">Telephone</span>
            <PhoneIcon className="h-7 w-6 text-gray-200" aria-hidden="true" />
          </dt>
          <dd>
            <a
              className="font-poppins font-semibold xs:text-[15px] text-[10px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
              href="0721518903"
            >
              +27 72 151 8903
            </a>
          </dd>
        </div>

        <div className="flex">
          <dt className="flex-none">
            <span className="sr-only">Email</span>
            <EnvelopeIcon
              className="h-7 w-6 text-gray-200"
              aria-hidden="true"
            />
          </dt>
          <dd>
            <a
              className="font-poppins font-semibold xs:text-[15px] text-[10px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
              href="kagishopitsi@gmail.com"
            >
              kagishopitsi@gmail.com
            </a>
          </dd>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
