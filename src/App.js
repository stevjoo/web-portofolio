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
        <div className="flex flex-col text-left mb-2 lg:text-right lg:mb-0">
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
                Hi, I'm a Computer Science student at Universitas Multimedia Nusantara. I love learning new things and building my skills. When I'm not hitting the books, you can find me with a camera, capturing moments that tell stories, or mixing audio to create immersive soundscapes. I'm also a Software Engineer and currently learning more about Cybersecurity. Always exploring new interests and trying to be better at what I do.</span>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-4 mt-2">

          <div className="flex space-x-4">
            <a target='_blank' href='#'>
              <motion.div
                initial={{ x: "-200%", opacity: 0, rotate: -140 }}
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

            <a target='_blank' href='https://www.instagram.com/stev.jo__?igsh=eWdyZTQ2ZTAxcngz'>
              <motion.div
                initial={{ x: "-300%", opacity: 0, rotate: -140 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 5,
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
                initial={{ x: "-400%", opacity: 0, rotate: -140 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 6,
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
                initial={{ x: "-500%", opacity: 0, rotate: -140 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 7,
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
              initial={{ y: "50%", opacity: 0 }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mt-2 px-4 py-2 bg-yellow-400 rounded-lg hover:scale-110 text-black hover:bg-white font-bold flex items-center"
                onClick={() => null}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-0 mr-3"
                >
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
                Contact Me
              </motion.button>
            </motion.div>
          </a>

        </div>
      </div>
      {/* Image Section */}

      <div className="lg:w-2/5 flex justify-center lg:justify-end items-end brightness-200 grayscale hover:grayscale-0 transition ease-in-out duration-500 ">
        <motion.div
          className='object-cover h-full w-full'
          initial={{ x: "0%", opacity: 0 }}
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
          <img src={foto} alt="Steven Jonathan" className="ngefadefoto" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;