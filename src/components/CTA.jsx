import styles from "../style";
import Button from "./Button";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    {/* <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>First dashboard of many!!!!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga ipsum iusto magnam architecto doloremque eos quaerat beatae?
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}

    <div className="py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 text-white">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Get in touch
              </h2>
              <div className="rounded-2xl mt-8">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:collaborate@example.com"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8 mt-8">
              <div className="rounded-2xl p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:collaborate@example.com"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              {/* Repeat the similar structure for Press, Join our team, and Say hello */}
              <div className="rounded-2x p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:collaborate@example.com"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
