import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Project({ image, link, icon }) {
  return (
    <div className=" border-[1px] bg-[#545454] aspect-video hover:-translate-y-1 transition w-[95vw] max-w-[500px] overflow-hidden rounded-[1.5em] sm:rounded-[2.5em]">
      <a href={link} className="overflow-hidden rounded-[1em]">
        <Image
          height={10000}
          width={10000}
          alt=""
          src={image}
          className={`${
            icon ? "pt-12 px-12" : ""
          } w-full h-[80%] aspect-video overflow-hidden rounded-t-[1em] `}
        />
        <div className="h-[20%] bg-[#333333] text-white text-[1.3rem] flex flex-row justify-center gap-2 items-center align-middle overflow-hidden rounded-b-[1em]">
          Visitar <BsArrowUpRight color="#fff" size={20} />
        </div>
      </a>
    </div>
  );
}
