import React from 'react'
import { AnimatedTooltip } from './UI/AnimatedToolTip'
const people = [
    {
      id: 1,
      name: "80%",
      designation: "JavaScript",
      image:
        "https://zeba.academy/wp-content/uploads/2022/11/javascript-basics.png",
    },
    {
      id: 2,
      name: "90%",
      designation: "React JS",
      image:
        "/react.png",
    },
    {
      id: 3,
      name: "70%",
      designation: "Next JS",
      image:
        "/next.png",
    },
    {
      id: 4,
      name: "60%",
      designation: "Tailwind CSS",
      image:
        "/tailwind.png",
    },
    {
      id: 5,
      name: "70%",
      designation: "Node JS",
      image:
        "/node.png",
    },
    {
      id: 6,
      name: "80%",
      designation: "Appwrite",
      image:
        "/appwrite.png",
    },
  ];
const Skills = () => {

  return (
    <div className="flex flex- items-center justify-center mt-10 w-full">
      <AnimatedTooltip items={people} />
      {/* <div className="max-w-7xl mx-auto">
      
      </div> */}
    </div>
  )
}

export default Skills