import React from "react";
import Header from "./Header";
import { Slider } from "./Slider";

function Crew() {
  return (
    <div className="crew">
      <Header highLight={"CREW"} />
      <div className="w-[45%] pl-20 mb-8 mt-8">
        <span className="mr-2 text-2xl text-slate-500 mt-40">02</span>
        <span className="text-white text-2xl font-medium tracking-widest">
          MEET YOUR CREW
        </span>
      </div>
    <Slider />
    </div>
  );
}

export default Crew;
