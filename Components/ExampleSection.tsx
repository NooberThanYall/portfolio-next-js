import React from "react";
import Skills from "./Skills";
import { FlipWords } from "./UI/Flipwords";
import { FocusCards } from "./UI/FocusedCards";
import { PinContainer } from "./UI/3DPin";

const words = ["better", "cute", "beautiful", "modern"];
const cards = [
  {
    title: "Forest Adventure",
    src: "/node.png",
  },
  {
    title: "Valley of life",
    src: "/node.png",
  },
];

const ExampleSection = () => {
  return (
    <section className="w-full bg-dark-200 min-h-[400px]" id="portfolio">
      <Skills />
      <div className="max-w-[1400px] mx-auto py-14 flex justify-between items-center">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>

        <div className="flex items-center">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
            // className="w-36"

          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
            // className="w-36"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
