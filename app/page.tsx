import ExampleSection from "@/Components/ExampleSection";
import { Hero } from "@/Components/Hero";
import { SignupFormDemo } from "@/Components/Partials/SignUpForm";
import { BentoGridThirdDemo } from "@/Components/SectionTwoGrid";
import Skills from "@/Components/Skills";
import { TimelineDemo } from "@/Components/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-dark-200 h-[790px] w-full">
        <BentoGridThirdDemo />
      </div>
      <div className="">
        <TimelineDemo />
      </div>
      
      {/* <GlobeDemo /> */}
      <ExampleSection />
      <SignupFormDemo />
    </>
  );
}
