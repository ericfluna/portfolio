import Image from "next/image";

export default function Contact() {
  return (
    <article
      id="contact"
      className="-translate-y-20 mx-auto -mb-20 flex flex-col items-center justify-center align-middle text-center pt-10 lg:pt-32 w-full max-w-[450px] relative px-10"
    >
      <h1 className="text-2xl lg:text-4xl font-bold break-all">CONTACTO</h1>
      <Image
        height={100}
        width={100}
        alt=""
        src={"/images/dialog.png"}
        className="hidden lg:flex -rotate-12 absolute top-20 -left-28"
      />
      <Image
        height={100}
        width={100}
        alt=""
        src={"/images/cursor.png"}
        className="hidden lg:flex -rotate-12 absolute bottom-0 -right-32"
      />
      <form
        target="_blank"
        className="flex flex-col mx-auto my-10 gap-5 w-full"
        action="https://formsubmit.co/c245036231a7954882f86bfb6a321650"
        method="POST"
      >
        <div className="flex flex-col text-left gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tuemail@gmail.com"
            className="border-2 rounded-[5px] p-3"
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label htmlFor="message">Mensaje</label>
          <textarea
            type="message"
            id="message"
            name="message"
            required
            rows="6"
            cols="40"
            placeholder="queria contactarte debido a ..."
            className="border-2 rounded-[5px] p-3"
          />
        </div>

        <button
          type="submit"
          className="bg-[#333333] text-white px-[0.75em] py-[0.5em] text-xl rounded-md"
        >
          Enviar
        </button>
      </form>
    </article>
  );
}
