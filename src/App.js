import React from "react";
import foto from "./foto/foto.jpg";
import "./app.css";
import { easeInOut, motion, spring } from "framer-motion";

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
              ease: [0, 0.5, 0.3, 0.8],
            }}
          >
            <span className="name-animation transition ease-in-out duration-500 hover:-translate-y-1">
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
              <span className="transition-color ease-in-out duration-700 hover:text-white">
                I am a second-year Informatics student at Universitas Multimedia
                Nusantara with a strong passion for learning and skill
                development. Currently focused on frontend development, I am
                also expanding my expertise in backend development and
                cybersecurity. In addition to my academic pursuits, I enjoy
                photography and videography. I am dedicated to exploring new
                interests and continuously improving my abilities.
              </span>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-4 mt-2">
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/steven-jonathan-33a9b8315/"
            >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/stev.jo__?igsh=eWdyZTQ2ZTAxcngz"
            >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            <a target="_blank" href="https://github.com/stevjoo">
              <motion.div
                initial={{ x: "-400%", opacity: 0, rotate: -140 }}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>

            {/* <a href="#"> 
              <motion.div
                initial={{ x: "-500%", opacity: 0, rotate: -140 }}
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
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
                  </svg>
                </motion.button>
              </motion.div>
            </a>
            */}
          </div>

          <a target="_blank" href="https://wa.me/+628111396967">
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
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
          className="object-cover h-full w-full"
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
