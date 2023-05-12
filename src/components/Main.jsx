import React from "react";
import Header from "./Header";
import "../index.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main w-full">
      <Header highLight={"HOME"} />
      <div className="w-screen h-screen main flex justify-between pt-28 items-center">
        <div className="w-[35%]  ml-12 ">
          <h3 className="text-2xl font-bold mb-3 text-gray-400">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="text-9xl font-semibold text-white">SPACE</h1>
          <p className="mt-5 text-lg text-gray-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="rounded-full h-56 w-56 bg-white text-black/[0.7] font-extrabold text-3xl flex justify-center items-center mr-32 mb-32">
          <Link to={"/destination"}>
            {" "}
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
