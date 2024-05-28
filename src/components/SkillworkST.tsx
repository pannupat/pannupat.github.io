import React, { MouseEventHandler, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Skill1 } from "../constants";

interface SkillworkST {
  index: number;
  name: string;
  image: string;
  video: string;
}

const SKillCard1: React.FC<SkillworkST> = ({ index, image, video }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  return (
    <div onClick={openModal}>
      <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
        <div
          style={{ cursor: "pointer" }}
          className="group relative m-0 flex h-64 w-[300px] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg  xs:w-[320px]"
        >
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
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
        <div className="bg-opacity-0 rounded-lg overflow-hidden relative">
          <button
            style={{ cursor: "pointer" }}
            className=" top-0 right-0 m-2 text-white"
            onClick={closeModal}
          >
            &times;
          </button>
          <video
            className="w-[650px] h-[500px]  rounded-lg"
            src={video}
            controls
            autoPlay
            loop
          />

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

const SkillworkST = () => {
  return (
    <>
      {" "}
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div className="font-monster" variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center font-extrabold">
              3D Modeler
            </p>
            <h2
              className={`text-lime-600   md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
              Software Tester
            </h2>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-between gap-7`}
        >
          {Skill1.map((skill1, index) => (
            <SKillCard1 key={skill1.image} index={index} {...skill1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(SkillworkST, "");
