import React, { useState } from "react";
import data from "../starter-code/assets/technology/techdata.json";
import Header from "../components/Header";

export default function Technology() {
  const [num, setNum] = useState(0);
  return (
    <div className="h-screen w-full flex flex-col tech">
      <Header highLight={"TECHNOLOGY"} />
      <div className="w-[45%] pl-20 mb-8 mt-8">
        <span className="mr-2 text-2xl text-slate-500 mt-40">03</span>
        <span className="text-white text-2xl font-medium tracking-widest">
          SPACE LAUNCH 101
        </span>
      </div>
      <div className="flex h-[calc(100% -135px)] justify-between">
        <div className="flex w-[60%]">
          <div className="text-white flex flex-col space-y-5 ml-28 mt-10">
            <div
              className={`rounded-full h-20 w-20 border text-center justify-center flex text-2xl border-slate-500 ${
                num === 0 ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                setNum(0);
              }}
            >
              <button>1</button>
            </div>
            <div
              className={`rounded-full h-20 w-20 border text-center justify-center flex text-2xl border-slate-500 ${
                num === 1 ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                setNum(1);
              }}
            >
              <button>2</button>
            </div>
            <div
              className={`rounded-full h-20 w-20 border text-center justify-center flex text-2xl border-slate-500 ${
                num === 2 ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                setNum(2);
              }}
            >
              <button>3</button>
            </div>
          </div>
          <div className="mt-10 ml-10 flex flex-col">
            <p className="text-slate-400">THE TERMINOLOGY...</p>
            <p className="text-white text-5xl mb-8">{data[num].name}</p>
            <p className="text-slate-400 text-xl">{data[num].description}</p>
          </div>
        </div>
        <div className="flex">
          <img src={data[num].images.portrait} alt="rocket" className="w-[80%] justify-center items-center h-[400px] w-full"/>
        </div>
      </div>
    </div>
  );
}
