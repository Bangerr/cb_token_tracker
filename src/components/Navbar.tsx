"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  useEffect(() => {
    if (toggleState) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  const handleClick = async () => {
    setToggleState((prevState) => !prevState);
  };
  return (
    <nav className="w-full mt-5 flex flex-row justify-between items-center">
      <div className="flex">
        <a
          href="/"
          className="border rounded-md p-2 hover:cursor-pointer hover:bg-black hover:text-white animate duration-150">
          <h1 className="text-xl font-semibold">Coin Tracker</h1>
        </a>
      </div>
      <div className="flex">
        <p className="mr-2">Darkmode:</p>
        {toggleState ? (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
