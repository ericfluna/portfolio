"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-36">
      <Hero />
      <Projects />
      <Contact/>
    </main>
  );
}
