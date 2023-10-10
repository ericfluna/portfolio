"use client";

import Image from "next/image";
import { useEffect } from "react";
import { RiGlobalLine } from "react-icons/ri";
export default function Hero() {
  useEffect(() => {
    const $ = (selector) => document.querySelector(selector);
    const wrapper = $(".wrapper");
    const ticket = $(".ticket");
    if (wrapper && ticket) {
      const wrapperRect = wrapper.getBoundingClientRect();

      window.addEventListener("mousemove", (event) => {
        if (window.innerWidth > 1024) {
          const { clientX, clientY } = event;

          const offsetX = clientX - wrapperRect.left;
          const offsetY = clientY - wrapperRect.top;

          const rotationX =
            ((offsetX - wrapperRect.width / 2) / (wrapperRect.width / 2)) * 4;
          const rotationY =
            ((offsetY - wrapperRect.height / 2) / (wrapperRect.height / 2)) *
            4 *
            -1;

          ticket.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`;
        } else {
          ticket.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
      });
    }
  }, []);

  return (
    <article className="wrapper lg:hover:scale-105 mt-20 lg:mt-32">
      <div className="ticket flex flex-col custom__shadow px-4 lg:px-16 py-10 gap-10 rounded-[7em] items-center lg:mt-10">
        <h1 className="text-2xl lg:text-4xl font-bold break-all">
          DESARROLLADOR FULLSTACK
        </h1>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center align-middle sm:gap-10 max-w-2xl order-2 lg:order-1">
            <ul className="text-xl lg:text-2xl gap-10 text-center lg:text-left space-y-5 mb-5">
              <li>
                <label>- Lenguajes de programación (JavaScript, Java)</label>
              </li>
              <li>
                <label>
                  - Desarrollo Web (HTML, CSS, React, Next 13, Vite.js)
                </label>
              </li>
              <li>
                <label>- Desarrollo Backend (Node.js, Spring Boot) </label>
              </li>
              <li>
                <label>- Testing (cypress, playwright) </label>
              </li>
            </ul>
            <a
              href="/files/EricFernandezLuna_CV.pdf"
              download="EricFernandezLuna_CV"
            >
              <p className="underline underline-offset-1 mx-auto w-full text-lg lg:text-2xl text-center">
                Descargar currículum completo
              </p>
            </a>
          </div>

          <Image
            width={350}
            height={350}
            alt=""
            src={"/images/hero.svg"}
            className="order-1 lg:order-2 mb-10"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-evenly sm:w-full text-md font-bold m-auto gap-3">
          <label>
            IDIOMAS: <span className="ml-3">ESPAÑOL - CATALÁN - INGLÉS</span>
          </label>
          <label className="flex items-center gap-2 justify-center">
            <RiGlobalLine size={20} />
            BARCELONA - ESPAÑA
          </label>
        </div>
      </div>
    </article>
  );
}
