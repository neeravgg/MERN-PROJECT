import React, { useState, useContext } from "react";
import SidebarContext from "../assests/context/SidebarContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import faq from "../assests/FAQ/faq.json";

export default function UnitTest() {
  const { Open } = useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "pl-[14rem] px-6" : "pl-[4rem] px-6";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center`}
    >
      {/* main page */}
      <div
        className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
      >
        <div
          className={`flex flex-col h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  ${
            isLaptop && "w-8/12"
          } 
            ${isTablet && "w-10/12"} 
           `}
        >
          <span
            className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:bg-zinc-700 font-bold capitalize `}
          >
            FAQs
          </span>

          <span
            className={`${
              isTablet && "text-xl"
            } text-lg text-skin-muted dark:theme-dark italic `}
          >
            Let's start the Unit test
          </span>
        </div>
        <div
          className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full px-5 py-5 
              ${isTablet && "px-5 py-12 w-10/12"} 
              ${isLaptop && "px-14 w-9/12"}`}
        >
          {/* selection card */}
          <div className={`flex flex-col gap-3 w-full`}>
            {/* card */}
            {faq.map((menu) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`flex w-full h-12 justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                      <span>{menu.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                     {menu.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
