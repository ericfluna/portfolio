import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Container from "../Container";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <div className="fixed top-0 w-full pt-12 pb-4 backdrop-blur-sm bg-white/80 z-40 ;
    ">
      <Container>
        <div className="flex justify-between items-center px-[5%] 2xl:px-[15%]">
          <Logo />
          <Navbar />
          <UserMenu/>
        </div>
      </Container>
    </div>
  );
}
