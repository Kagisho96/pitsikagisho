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
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
        Get in touch
      </h2>
    </div>

    <div className="flex flex-col sm:flex-row w-full mt-4 justify-between">
      <div className="flex items-center mb-4 sm:mb-0">
        <BuildingOffice2Icon className="h-7 w-6 text-gray-200" aria-hidden="true" />
        <p className="text-gradient font-poppins font-semibold text-sm sm:text-base lg:text-lg text-gray-200 ml-3">
          190 Scheiding St, <br className="sm:hidden" /> Pretoria Central, Pretoria, 0002
        </p>
      </div>

      <div className="flex items-center mb-4 sm:mb-0">
        <PhoneIcon className="h-7 w-6 text-gray-200" aria-hidden="true" />
        <a className="text-gradient font-poppins font-semibold text-sm sm:text-base lg:text-lg text-gray-200 ml-3" href="tel:+27721518903">
          +27 72 151 8903
        </a>
      </div>

      <div className="flex items-center">
        <EnvelopeIcon className="h-7 w-6 text-gray-200" aria-hidden="true" />
        <a className="font-poppins font-semibold text-sm sm:text-base lg:text-lg text-gray-200 ml-3" href="mailto:kagishopitsi@gmail.com">
          kagishopitsi@gmail.com
        </a>
      </div>
    </div>
  </div>
</section>

);

export default CTA;
