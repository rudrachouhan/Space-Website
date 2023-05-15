import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ clickable: true }}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      className="z-50"
    >
      <SwiperSlide>
        <div
          className="flex justify-around duration-700 ease-in-out"
        >
          <div className="w-[40%] self-end mb-36 flex flex-col space-y-4 ">
            <p className="text-slate-400 text-4xl font-normal">COMMANDER</p>
            <p className="text-white text-5xl font-medium">DOUGLAS HURLEY</p>
            <p className="mt-72 text-slate-400 text-xl">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
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
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="flex justify-around duration-700 ease-in-out"
        >
          <div className="w-[40%] self-end mb-36 flex flex-col space-y-4 ">
            <p className="text-slate-400 text-4xl font-normal">
              MISSION SPECIALIST
            </p>
            <p className="text-white text-5xl font-medium">MARK SHUTTLEWORTH</p>
            <p className="mt-72 text-slate-400 text-xl">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
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
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="flex justify-around duration-700 ease-in-out"
        >
          <div className="w-[40%] self-end mb-36 flex flex-col space-y-4 ">
            <p className="text-slate-400 text-4xl font-normal">PILOT</p>
            <p className="text-white text-5xl font-medium">VICTOR GLOVER</p>
            <p className="mt-72 text-slate-400 text-xl">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>

          <div>
            <img
              src="./assets/crew/image-victor-glover.png"
              alt="douglas-hurley"
              className="object-cover h-[500px] mb-0"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="flex justify-around duration-700 ease-in-out"
        >
          <div className="w-[40%] self-end mb-36 flex flex-col space-y-4 ">
            <p className="text-slate-400 text-4xl font-normal">
              FLIGHT ENGINEER
            </p>
            <p className="text-white text-5xl font-medium">ANOUSHEH ANSARI</p>
            <p className="mt-72 text-slate-400 text-xl">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>

          <div>
            <img
              src="./assets/crew/image-anousheh-ansari.png"
              alt="douglas-hurley"
              className="object-cover h-[500px] mb-0"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
