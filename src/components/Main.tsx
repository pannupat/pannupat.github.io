import { motion } from "framer-motion";

import { styles } from "../styles";
import { HalowenCanvas } from "./canvas/index";

const Hero = () => {
  return (
    <div
      className={`relative rounded-lg  inset-0  py-[100px] pb-[200px] max-w-7xl  mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
    >
      <motion.div
        className="grid grid-cols-1 lg:flex flex-col   z-10 w-full h-full justify-center "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="mb-[-230px] mr-[20px] left-0  text-center w-full lg:text-[180px] sm:text-[140px] xs:text-[140px] text-[80px] lg:leadi ng-[98px]">
          <p
            className=" text-center lg:text-left text-lime-500   font-gundam font-black"
            style={{
              textShadow:
                "2px 3px 3px  white,6px 7px green,9px 15px 10px purple",
            }}
          >
            Port{" "}
          </p>
        </div>
        <div className=" h-full w-full ">
          <motion.div
            className="flex justify-center top-0 right-[280px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <HalowenCanvas />
          </motion.div>
        </div>
        <div className="z-10 mt-[-1550px] left-0  text-center w-full lg:text-[180px] sm:text-[140px] xs:text-[140px] text-[80px] lg:leadi ng-[98px]">
          <p
            className="text-center lg:text-right text-lime-500 font-gundam font-black"
            style={{
              textShadow:
                "2px 3px 3px  white,6px 7px green,9px 15px 10px purple",
            }}
          >
            Folio{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
