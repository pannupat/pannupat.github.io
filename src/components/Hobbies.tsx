import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { hobbiess } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

interface Hobbies {
  iconBg: string;
  icon: string;
  name: string;
  title: string;
  points: string[];
}

interface Props {
  hobbies: Hobbies;
  onClick: () => void;
}

const HobbiesCard: React.FC<Props> = ({ hobbies, onClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(220, 218, 216, 0.2)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: hobbies.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={hobbies.icon}
            alt={hobbies.name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        onClick={onClick}
        style={{ cursor: "pointer", textAlign: "center" }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h3 className="text-white text-[24px] font-bold">{hobbies.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {hobbies.name}
        </p>
      </motion.div>
    </VerticalTimelineElement>
  );
};
const Modal: React.FC<{ hobby: Hobbies; onClose: () => void }> = ({
  hobby,
  onClose,
}) => {
  return (
    <div className="  fixed inset-0  bg-opacity-50  flex justify-center items-center">
      <div className="z-0 fixed inset-0 flex items-center justify-center  bg-black bg-opacity-75">
        <motion.div
          className="  bg-lime-600 shadow-[0px_0px_10px_6px_green] shadow-white bg-opacity-45 mt-20  text-white p-5 rounded-lg font-gundam w-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <h2 className="text-2xl font-bold  mb-4 text-center">
            {hobby.title}
          </h2>
          <p className="text-lg mb-4 text-center  ">{hobby.name}</p>
          <ul className="list-disc ml-5 w-full">
            {hobby.points.map((point, index) => (
              <li key={index} className="text-base mb-2 ">
                {point}
              </li>
            ))}
          </ul>
          <div className="w-full items-center flex justify-center">
            <button
              style={{ cursor: "pointer" }}
              className="mt-4 bg-white text-fuchsia-500 font-black border-2 border-fuchsia-400 py-1 items-center w-40  hover:shadow-[0px_0px_10px_6px_white] hover:bg-fuchsia-300 hover:text-white hover:border-lime-500 px-4 rounded-xl"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobbies | null>(null);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="font-gundam"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center font-extrabold">
          This is My Hobbies.
        </p>
        <h2
              className={`text-lime-600  py-4 font-gundam md:text-[45px] font-black sm:text-[35px] xs:text-[35px] text-[35px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
Hobbies            </h2>
      </motion.div>

      <div className="mt-20 flex font-gundam flex-col">
        <VerticalTimeline>
          {hobbiess.map((hobby: Hobbies, index: number) => (
            <HobbiesCard
              key={`hobbiesss-${index}`}
              hobbies={hobby}
              onClick={() => setSelectedHobby(hobby)}
            />
          ))}
        </VerticalTimeline>
      </div>

      {selectedHobby && (
        <Modal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />
      )}
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
