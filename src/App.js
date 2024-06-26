import React from 'react';
import foto from "./foto/foto.jpg";
import './app.css';
import { easeInOut, motion, spring } from "framer-motion"

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Text and Icons Section */}
      <div className="lg:w-3/5 flex flex-col justify-center py-8 px-8">
        <div className="flex flex-col text-center lg:text-right">
          <motion.div
            className="text-3xl mt-20 lg:text-4xl font-bold text-yellow-400 mb-2"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 4,
              delay: 0,
              ease: [0, 0.5, 0.3, 0.8]
            }}
          >
            <span className='name-animation transition ease-in-out duration-500 hover:-translate-y-1'>
              Steven Jonathan
            </span>
          </motion.div>

          <motion.div
            initial={{ x: "5%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 4,
              type: "spring",
              damping: 20,
              stiffness: 20,
              ease: "0, 0.5, 0.3, 0.8",
            }}
          >
            <p className="text-gray-400 mb-3">
              <span className='transition-color ease-in-out duration-700 hover:text-white'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </span>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-4 mt-2">

          <div className="flex space-x-4">
            <a target='_blank' href='#'>
              <motion.div
                initial={{ x: "-200%", opacity: 0, rotate: -140}}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 4,
                  type: "spring",
                  damping: 20,
                  stiffness: 20,
                  ease: "0, 0.5, 0.3, 0.8",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-yellow-400 rounded-full hover:scale-110 hover:bg-white"
                  onClick={() => null}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            <a target='_blank' href='#'>
              <motion.div
                initial={{ x: "-300%", opacity: 0, rotate:-140}}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 4,
                  type: "spring",
                  damping: 20,
                  stiffness: 20,
                  ease: "0, 0.5, 0.3, 0.8",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-yellow-400 rounded-full hover:scale-110 hover:bg-white"
                  onClick={() => null}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            <a href='#'>
              <motion.div
                initial={{ x: "-400%", opacity: 0, rotate: -140}}
                animate={{ x: 0, opacity: 1, rotate: 0}}
                exit={{ x: "100%" }}
                transition={{
                  duration: 4,
                  type: "spring",
                  damping: 20,
                  stiffness: 20,
                  ease: "0, 0.5, 0.3, 0.8",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-yellow-400 rounded-full hover:scale-110 hover:bg-white"
                  onClick={() => null}
                >
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            <a href='#'>
              <motion.div
                initial={{ x: "-500%", opacity: 0, rotate: -140}}
                animate={{ x: 0, opacity: 1, rotate: 0}}
                exit={{ x: "100%" }}
                transition={{
                  duration: 4,
                  type: "spring",
                  damping: 20,
                  stiffness: 20,
                  ease: "0, 0.5, 0.3, 0.8",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-yellow-400 rounded-full hover:scale-110 hover:bg-white"
                  onClick={() => null}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>
          </div>


          <a target='_blank' href='https://wa.me/+628111396967'>
            <motion.div
              initial={{ y: "50%" , opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 4,
                type: "spring",
                damping: 20,
                stiffness: 20,
                ease: "0, 0.5, 0.3, 0.8",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mt-2 px-4 py-2 bg-yellow-400 rounded-lg hover:scale-110 hover:bg-white font-bold"
                onClick={() => null}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </a>
        </div>
      </div>
      {/* Image Section */}
      <div className="lg:w-2/5 flex justify-center lg:justify-end items-end grayscale">
        <img src={foto} alt="Steven Jonathan" className="ngefadefoto object-cover h-full w-full" />
      </div>
    </div>
  );
}

export default App;
