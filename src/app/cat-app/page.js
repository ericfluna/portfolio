import CatApp from "@/components/cat-test/CatApp";
import React from "react";

export const metadata = {
  title: "Eric Luna | Cat App",
  description: "Proyecto sencillo basado en una prueba técnica para frontend junior",
};


export default function page() {
  return (
    <>
      <CatApp />
    </>
  );
}
