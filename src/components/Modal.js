import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariant = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: -100,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.7,
      delay: 0.5,
    },
  },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div variants={modalVariant} className="modal">
            <p>Want to make another order?</p>
            <Link to="/">
              <motion.button>Start Again</motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
