import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (

    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='  dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent shadow-sm shadow-gray-400 p-2 focus:outline-none text-lg rounded-full  ring-transparent cursor-pointer transition duration-100 ease-in-out '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class={`${
              isTablet ? "h-8 w-8" : "h-5 w-5"
            } text-skin-inverted `}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent shadow-md shadow-gray-300 p-2 focus:outline-none text-lg rounded-full  ring-transparent cursor-pointer transition duration-100 ease-in-out '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class={`${
              isTablet ? "h-8 w-8" : "h-5 w-5"
            } text-skin-inverted `}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toggle;