import React, { useState } from "react";
import logo from "../starter-code/assets/shared/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ highLight }) {
  return (
    <>
      <div className="flex w-full h-auto justify-between items-center pt-6 ml-12">
        <div className="w-[40%] flex items-center justify-between">
          <img src={logo} alt="logo"/>
          <hr className="w-[80%] mr-[-2rem]" />
        </div>
        <div className="w-[60%]">
          <ul className="flex gap-7 items-center pl-16 bg-slate-500/[0.4] py-6 ">
            <Link to={"/"}>
              <li
                className={`cursor-pointer ${
                  highLight === "HOME" ? "border-b-2 border-white " : ""
                }`}
              >
                {" "}
                <span className="text-xl text-white font-bold mr-2">
                  00
                </span>{" "}
                <span className="text-white/[0.8] text-lg font-semibold">
                  HOME
                </span>
              </li>
            </Link>
            <Link to={"/destination"}>
              <li
                className={`cursor-pointer ${
                  highLight === "DESTINATION" ? "border-b-2 border-white " : ""
                }`}
              >
                {" "}
                <span className="text-xl text-white font-bold mr-2">
                  01
                </span>{" "}
                <span className="text-white/[0.7] text-lg font-semibold">
                  DESTINATION
                </span>
              </li>
            </Link>
            <Link to={"/crew"}>
              <li
                className={`cursor-pointer ${
                  highLight === "CREW" ? "border-b-2 border-white " : ""
                }`}
              >
                {" "}
                <span className="text-xl text-white font-bold mr-2">
                  02
                </span>{" "}
                <span className="text-white/[0.7] text-lg font-semibold">
                  CREW
                </span>
              </li>
            </Link>
            <Link to={"/technology"}>
              <li
                className={`cursor-pointer ${
                  highLight === "TECHNOLOGY" ? "border-b-2 border-white " : ""
                }`}
              >
                {" "}
                <span className="text-xl text-white font-bold mr-2">
                  03
                </span>{" "}
                <span className="text-white/[0.7] text-lg font-semibold">
                  TECHNOLOGY
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
