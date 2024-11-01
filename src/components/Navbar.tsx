"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggle } from "./Toggle";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  /** Manyally toggle Dark Mode */
  // useEffect(() => {
  //   if (toggleState) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // });
  // const handleClick = async () => {
  //   setToggleState((prevState) => !prevState);
  // };

  return (
    <nav className="w-[50%] mx-auto flex flex-row justify-between items-center">
      <div className="flex">
        <a
          href="/"
          className="text-xl font-semibold border rounded-md p-2 hover:cursor-pointer hover:bg-black hover:text-white animate duration-150">
          Coin Tracker
        </a>
      </div>

      <div className="flex">
        <DarkModeToggle />
        {/** Manyally toggle Dark Mode */}
        {/* {toggleState ? (
          <div className="hover:cursor-pointer">
            <i
              className={`fa-solid fa-toggle-on fa-2xl`}
              onClick={handleClick}></i>
          </div>
        ) : (
          <div className="hover:cursor-pointer">
            <i
              className={`fa-solid fa-toggle-off fa-2xl`}
              onClick={handleClick}></i>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
