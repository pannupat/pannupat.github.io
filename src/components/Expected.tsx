import React from "react";
import { motion } from "framer-motion";
import { aboutme } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface ExpectedJob {
  index: number;
  title: string;
  icon: string;
}

const ExpectCard: React.FC<ExpectedJob> = ({ index, title, icon }) => (
  <div className="w- flex flex-row xs:w-[250px]  ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        style={{ backgroundColor: "rgba(220, 218, 216, 0.2)" }}
        className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center border-2 border-fuchsia-200   flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const Expected = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center ">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] font-gundam text-secondary uppercase tracking-wider text-center font-extrabold">
            Introduction
          </p>
          <h2
              className={`text-lime-600  py-4 font-gundam md:text-[45px] font-black sm:text-[35px] xs:text-[35px] text-[35px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
              Expected Job Position
            </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary font-gundam text-[17px] max-w-3xl leading-[30px]"
        >
          As for Expected job position it will be the position that i want to
          work or want to work in.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10 font-gundam justify-center ">
          {aboutme.map((expect, index) => (
            <ExpectCard key={expect.title} index={index} {...expect} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Expected, "");
