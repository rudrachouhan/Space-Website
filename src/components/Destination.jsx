import React from "react";
import Header from "./Header";
import "../index.css";
import data from "../starter-code/destinationsdata";
import { useState } from "react";

export default function Destination() {
  const [num, setNum] = useState(0);
  const [planet, setPlanet] = useState("MOON");

  return (
    <>
      <div className="dest w-full min-h-screen flex flex-col justify-between space-y-12">
        <Header highLight={"DESTINATION"} />
        <div className=" w-screen ">
          <div className=" w-[45%] pl-20 mb-8 mt-8">
            {" "}
            <span className="mr-2 text-2xl text-slate-500 mt-40">01</span>{" "}
            <span className="text-white text-2xl font-medium tracking-widest">
              PICK YOUR DESTINATION
            </span>{" "}
          </div>

          
        </div>
        <div className="flex items-end justify-around flex-col">
        <div className="flex w-auto text-xl justify-end pr-40 text-gray-400">
            <ul className="flex gap-8">
              <li
                onClick={() => {
                  setNum(0);
                  setPlanet("MOON");
                }}
                className={`cursor-pointer ${
                  planet === "MOON" ? "border-b-2 border-white" : ""
                }`}
              >
                MOON
              </li>
              <li
                onClick={() => {
                  setNum(1);
                  setPlanet("MARS");
                }}
                className={`cursor-pointer ${
                  planet === "MARS" ? "border-b-2 border-white" : ""
                }`}
              >
                MARS
              </li>
              <li
                onClick={() => {
                  setNum(2);
                  setPlanet("EUROPA");
                }}
                className={`cursor-pointer ${
                  planet === "EUROPA" ? "border-b-2 border-white" : ""
                }`}
              >
                EUROPA
              </li>
              <li
                onClick={() => {
                  setNum(3);
                  setPlanet("TITAN");
                }}
                className={`cursor-pointer ${
                  planet === "TITAN" ? "border-b-2 border-white" : ""
                }`}
              >
                TITAN
              </li>
            </ul>
          </div>
          <div className="flex items-start justify-around w-full">
          <div>
          <img src={data[num]?.images?.png} alt="planet" />
          </div>
          <div className="mr-12 ml-16">
            <h1 className="text-[100px] font-semibold text-white ">{data[num]?.name}</h1>
            <p className=" w-96 text-xl text-gray-400">{data[num].description}</p>
            <hr className="mt-14 mb-8 text-slate-900"/>
            <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">AVG. DISTANCE</p>
                  <p className="text-white text-xl">{data[num].distance}</p>
                </div>
                <div>
                  <p className="text-gray-400">EST. TRAVEL TIME</p>
                  <p className="text-white text-xl">{data[num].travel}</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
