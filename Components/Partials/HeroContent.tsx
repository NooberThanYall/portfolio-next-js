"use client"
import { SparklesCore } from "../UI/Sparkles";

import { motion } from 'framer-motion';
import { HoverBorderGradient } from '../UI/Hover-border-gradient';
import { Handshake } from "lucide-react";
export default function HeroContent() {
    return (
        <motion.div
        className="flex flex-col items-center "
        initial={{ opacity: 0, bottom: 0 }}
        animate={{ opacity: 1, bottom: 600, transition: {duration: .7, ease: 'easeInOut'} }}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Parham
          <br /> Mohebbi
        </h1>
        <div className="w-[40rem] h-14 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-xl mb-6">
          Spotlight effect is a great way to draw attention to a specific part
          of the page.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black min-w-28 dark:text-white flex gap-10 items-center space-x-2"
        >
          <span> <Handshake />Collab With Me</span>
        </HoverBorderGradient>
      </motion.div>
    )
}