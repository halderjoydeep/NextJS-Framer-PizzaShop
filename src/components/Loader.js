import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { duration: 0.5, yoyo: Infinity },
      y: { duration: 0.25, yoyo: Infinity, ease: 'easeOut' },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
};

function Loader() {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <div>
        <button onClick={() => cycleAnimation()}>Toggle Loader</button>
      </div>
    </>
  );
}

export default Loader;
