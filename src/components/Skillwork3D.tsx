import React, { MouseEventHandler, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Skill4 } from "../constants";

interface Skillwork3D {
  index: number;
  name: string;
  image: string;
  video: string;
  url?: string | Element;
}

const SKillCard4: React.FC<Skillwork3D> = ({ index, name, image, video }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  console.log(modalIsOpen);

  return (
    <div onClick={openModal}>
      <motion.div
        className="w-full flex justify-center "
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
      >
        <div
          style={{ cursor: "pointer" }}
          className="group relative m-0 flex h-64 w-[300px] rounded-3xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg  xs:w-[320px] border-8 border-fuchsia-400 border-opacity-50"
        >
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border  opacity-90 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src={image}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skill Modal"
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="flex flex-col bg-opacity-0 rounded-lg overflow-hidden relative">
          <div>
            <div className="text-white py-5 text-[30px] font-gundam text-center">
              {name}
            </div>

            <video
              className="w-full h-[450px] rounded-xl "
              src={video}
              controls
              autoPlay
              loop
            />
          </div>

          <div className="py-4">
            <button
              style={{ cursor: "pointer" }}
              className="text-fuchsia-500 font-black border-2 border-fuchsia-400 py-1 items-center w-full hover:shadow-[0px_0px_10px_6px_white] hover:bg-fuchsia-300 hover:text-white hover:border-lime-500 px-4 rounded-xl"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const Skillwork3D = () => {
  return (
    <>
      <div
        className={`mt-12 bg-black-100 shadow-md   bg-opacity-20 rounded-[20px]`}
      >
        <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div className="font-gundam" variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center font-extrabold">
              Works
            </p>
            <h2
              className={`text-lime-600  py-4 font-gundam md:text-[45px] font-black sm:text-[35px] xs:text-[35px] text-[35px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
              Works
            </h2>
          </motion.div>
          <div className="w-full flex justify-center ">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary pb-[50px] font-gundam text-[17px] text-center max-w-4xl leading-[30px]"
            >
              I have experience in many different fields.
            </motion.p>
          </div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center text-center gap-10 `}
        >
          {Skill4.map((skill4, index) => (
            <SKillCard4 key={index} index={index} {...skill4} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skillwork3D, "work");
