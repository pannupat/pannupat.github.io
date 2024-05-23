import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Skill3 } from "../constants";

interface SkillworkFR {
  index: number;
  description: string;
  name: string;
  tag: string;
  image: string;
}

const SKillCard3: React.FC<SkillworkFR> = ({
  index,
  description,
  tag,
  name,
  image,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <div className="group relative m-0 flex h-64 w-[300px] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg  xs:w-[320px]">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        <img
          src={image}
          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
          {name}
        </h1>
        <h1 className="text-sm font-light text-gray-200 shadow-xl">
          {description}/{tag}
        </h1>
      </div>
    </div>
  </motion.div>
);

const SkillworkFR = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center font-extrabold">
            Frontend Developer
          </p>
          <h2
            className={`text-fuchsia-400  font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] text-center`}
            style={{
              textShadow:
                "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
            }}
          >
            Frontend Developer Work
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {Skill3.map((skill3, index) => (
          <SKillCard3 key={skill3.name} index={index} {...skill3} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(SkillworkFR, "");
