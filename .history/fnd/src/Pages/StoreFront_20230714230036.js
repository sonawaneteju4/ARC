import React from "react";
import "typeface-kanit";
import '../Pages/Search.css'


import { NavLink } from "react-router-dom";

const StoreFront = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <NavLink
          to="/services"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 dark:hover:bg-gray-200"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full bg-sky-500 text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <marquee>
            <span className="text-sm font-medium">
              All New Services Out Learn More !
            </span>
          </marquee>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;uiverse&nbsp;</span>
          <span aria-hidden="true" class="front-text">
            &nbsp;uiverse&nbsp;
          </span>
        </button>
        <h1
          style={{ fontFamily: "Kanit, sans-serif", fontWeight: "900" }}
          className="mb-4 tracking-wide text-3xl   leading-none md:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-teal-400 to-sky-400"
        >
          Introducing You To Fussion Of<br></br> Art And Modification
        </h1>
        <p className="mb-8 text-base font-mono text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi itaque
          in autem dolorum veniam ratione, rem ex quae nemo, accusamus id enim
          mollitia voluptas earum eaque est fuga perspiciatis molestias!
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            target="_blank"
            href="https://www.google.com/maps?ll=18.661648,73.752376&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=4163033090194085250"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-sky-400"
          >
            Direction
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className=" text-gray-700 uppercase text-xl font-extrabold">
            FEATURED IN
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="www.arcoustoms.in"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                className="h-16 hover:grayscale grayscale-0"
                src="/image/yt.png"
              ></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                className="h-16 hover:grayscale grayscale-0"
                src="/image/insta.png"
              ></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                className="h-16 hover:grayscale grayscale-0"
                src="/image/whatsapp.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreFront;
