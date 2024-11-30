import React from "react";
import { Spotlight } from "./UI/Spotlight";
import { BackgroundLines } from "./UI/Background-lines"
import Navbar from "./Navbar";

import HeroContent from "./Partials/HeroContent";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <Navbar />
      <Spotlight
        className="-top-40 left-0 md:left-24 w-20 md:-top-30"
        fill="gray"
      />
      <Spotlight
        className="-top-40 right-0 md:left-[1500px] rotate-90 w-80 md:-top-[200px]"
        fill="purple"
        rotation="90"
      />
      <HeroContent />
    </BackgroundLines>
  );
}
