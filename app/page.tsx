'use client'
import { useState } from "react";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/NavBar";
import ScreenSizeDisplay from "./components/ScreenSize";
import HeroSection from "./components/HeroSection";



export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <HeroSection />
      <ScreenSizeDisplay />
    </>
  )
}