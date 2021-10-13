import React, { useState } from "react";
import Link from "next/link";
import About from "@components/common/About";

export const Footer = () => {
  const [mode, setMode] = useState("auto");
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li className="mt-6">
                      <Link href="/contact">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/about">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          About
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/shipping">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Shipping
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/return">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Returns and refunds
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/faq">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          FAQ
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="/privacy">
                        <a
                          href="javascript:void(0)"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Privacy policy
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="/terms">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <Link href="/">
            <a href="/"></a>
          </Link>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            2021 Tato.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
