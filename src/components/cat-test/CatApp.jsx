"use client";
import useRandomFact from "@/hooks/cat-test/useRandomFact";
import useRandomCatImage from "@/hooks/cat-test/useRandomCatImage";
import Loading from "@/components/cat-test/Loading";
import Image from "next/image";

export default function CatApp() {
  const { randomFact, getRandomFact } = useRandomFact();
  const { randomCatImage } = useRandomCatImage({ randomFact });

  return (
    <main className="flex flex-col align-middle items-center gap-[30px] mt-32 max-w-5xl mx-auto">
      <p className="border-b-[1px] pb-2">
        Proyecto sencillo basado en una prueba tecnica real para junior, donde
        se trabaja el fetching de datos asíncrono, useState y useEffect. El
        objetivo era llamar a una api que te daba un dato curioso de gatos y con
        las tres primeras palabras de ese dato llamar a otra api de fotos
        aleatorias de gatos.
      </p>
      <h1 className="text-5xl font-bold">Cat App</h1>
      <button
        className="border px-[1.25em] py-[0.5em] text-lg font-bold bg-[#333333] hover:bg-[#525252] text-white rounded-xl"
        onClick={getRandomFact}
      >
        RESET
      </button>

      {randomCatImage && randomFact ? (
        <>
          <h2 className="max-w-3xl">{randomFact}</h2>
          <Image
            width={300}
            height={300}
            className=" rounded-2xl mb-2"
            alt={`Image of a cat saying something like: ${randomFact}`}
            src={randomCatImage}
          />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
