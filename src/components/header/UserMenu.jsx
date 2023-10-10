"use client";

import { useState } from "react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden ">
      <button
        className="user__btn z-50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={isOpen ? "user__btn__line--open--1" : "user__btn__line"}
        ></div>
        <div
          className={isOpen ? "user__btn__line--open--2" : "user__btn__line"}
        ></div>
      </button>
      {isOpen ? (
        <>
          <div className="fixed bg-white bg-opacity-95 h-[100vh] w-[100vw] top-0 left-0 z-40"></div>

          <nav className="absolute top-32 left-6 z-50 ">
            <ul className="flex flex-col gap-14 xl:gap-24 2xl:gap-36 font-bold text-[1.30rem]">
              <li>
                <a href="/#projects" className="cursor-pointer text-[2rem]">
                  PROYECTOS
                </a>
              </li>
              <li>
                <a href="/#contact" className="cursor-pointer  text-[2rem]">
                  CONTACTO
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ericfluna"
                  target="_blank"
                  className="cursor-pointer  text-[2rem]"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
