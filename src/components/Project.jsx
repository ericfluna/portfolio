import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const techs = {
  JavaScript: "bg-[#EFD81D]",
  React: "bg-[#61DAFB]",
};

export default function Project({ image, link, icon, tecnologias }) {
  return (
    <div className="space-y-2 max-w-[500px] hover:-translate-y-1 transition">
      <div className=" border-[1px] bg-[#545454] aspect-video  w-[95vw] max-w-[500px] overflow-hidden rounded-[1.5em] sm:rounded-[2.5em]">
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
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center ">
        {tecnologias?.map((tec, index) => (
          <div key={index} className={`${techs[tec]} px-[1em] py-[0.75em] rounded-xl`}>
            <label className="uppercase font-bold text-white text-md">{tec}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
