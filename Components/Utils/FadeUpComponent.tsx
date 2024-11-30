import React, {ReactNode} from 'react'
import { motion } from 'framer-motion';
interface Props {
    children?: ReactNode
    // any props that come into the component
}

const FadeUpComponent = ({children} : Props) => {
  return (
    <motion.div
      className="absolute"
      initial={{
        opacity: 0,
        x: 100, // Starting 50px below
      }}
      animate={{
        opacity: 1,
        x: 0, // Moves to the original position
      }}
      transition={{
        duration: 0.8, // Smooth animation
        ease: "easeInOut", // Easing effect
      }}
    >{children}</motion.div>
  )
}

export default FadeUpComponent