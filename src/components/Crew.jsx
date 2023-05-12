import React from "react";
import Header from "./Header";
import "../index.css";

export default function Crew() {
  return (
    <div className="crew flex flex-col min-h-screen">
      <Header highLight={"CREW"} />
      <div className="w-[45%] pl-20 mb-8 mt-8">
        <span className="mr-2 text-2xl text-slate-500 mt-40">02</span>
        <span className="text-white text-2xl font-medium tracking-widest">
          MEET YOUR CREW
        </span>
      </div>
      <div
        className="relative w-full "
        id="default-carousel"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
          {/* Item 1 */}
          <div className="flex justify-around duration-700 ease-in-out" data-carousel-item>
            <div
              className="w-[40%] self-end mb-36 flex flex-col space-y-4 "
              
            >
              <p className="text-slate-400 text-4xl font-normal">COMMANDER</p>
              <p className="text-white text-5xl font-medium">DOUGLAS HURLEY</p>
              <p className="mt-72 text-slate-400 text-xl">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>

            <div>
              <img
                src="./assets/crew/image-douglas-hurley.png"
                alt="douglas-hurley"
                className="object-cover h-[500px] mb-0"
              />
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex justify-around duration-700 ease-in-out" data-carousel-item>
            <div
              className="w-[40%] self-end mb-36 flex flex-col space-y-4 "
              
            >
              <p className="text-slate-400 text-4xl font-normal">
                MISSION SPECIALIST
              </p>
              <p className="text-white text-5xl font-medium">
                MARK SHUTTLEWORTH
              </p>
              <p className="mt-72 text-slate-400 text-xl">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>

            <div>
              <img
                src="./assets/crew/image-mark-shuttleworth.png"
                alt="mark-shuttleworth"
                className="object-cover h-[500px] mb-0"
              />
            </div>
          </div>
          {/* item 3 */}
          <div className="flex justify-around duration-700 ease-in-out" data-carousel-item>
            <div
              className="w-[40%] self-end mb-36 flex flex-col space-y-4 "
              
            >
              <p className="text-slate-400 text-4xl font-normal">COMMANDER</p>
              <p className="text-white text-5xl font-medium">DOUGLAS HURLEY</p>
              <p className="mt-72 text-slate-400 text-xl">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>

            <div>
              <img
                src="./assets/crew/image-douglas-hurley.png"
                alt="douglas-hurley"
                className="object-cover h-[500px] mb-0"
              />
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex justify-around duration-700 ease-in-out" data-carousel-item>
            <div
              className="w-[40%] self-end mb-36 flex flex-col space-y-4 "
              
            >
              <p className="text-slate-400 text-4xl font-normal">COMMANDER</p>
              <p className="text-white text-5xl font-medium">DOUGLAS HURLEY</p>
              <p className="mt-72 text-slate-400 text-xl">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>

            <div>
              <img
                src="./assets/crew/image-douglas-hurley.png"
                alt="douglas-hurley"
                className="object-cover h-[500px] mb-0"
              />
            </div>
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
