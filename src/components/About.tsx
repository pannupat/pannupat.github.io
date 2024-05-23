import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { PackCanvas } from "./canvas";
import { styles } from "../styles";

const About = () => {
  return (
    <>
      <div className="m-4 font-gundam  lg: rounded-lg ">
        <div className="flex flex-col items-center text-center">
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[24px] text-secondary uppercase pt-[50px] tracking-wider text-center font-extrabold">
              Introduction
            </p>
            <h2
              className={`text-lime-600  py-4 font-gundam md:text-[45px] font-black sm:text-[35px] xs:text-[35px] text-[35px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
              About Me
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As for Expected job position it will be the position that i want to
            work or want to work in.
          </motion.p>
        </div>

        <div
          className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="grid grid-cols-1  w-full h-full lg:flex flex-row items-center text-center">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="h-[700px] w-full lg:h-[550px]"
            >
              <PackCanvas />
            </motion.div>

            <div className="w-full h-full ">
              <div className="w-full  flex justify-start lg:justify-center">
                <div className=" font-black lg:text-[30px] sm:text-[20px]  pb-9 xs:text-[20px] text-[20px] lg:leadi ng-[98px]  ">
                  <div className="text-fuchsia-500  flex  items-center pb-5 justify-between">
                    <div
                      style={{
                        textShadow:
                          "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
                      }}
                      className="lg:text-[40px] text-center w-full sm:text-[30px] xs:text-[30px] text-[30px] lg:leadi ng-[98px] mt-2 text-white pl-4"
                    >
                      {" "}
                      Who im i?
                    </div>
                  </div>
                  <div className="text-fuchsia-500  flex items-center py-4 justify-start">
                    <div className="w-42 flex justify-between lg:justify-end">
                      {" "}
                      fristname{" "}
                    </div>{" "}
                    <div className="lg:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] lg:leadi ng-[98px] mt-2 text-white pl-4">
                      {" "}
                      panupat
                    </div>
                  </div>
                  <div className="text-fuchsia-500  flex items-center py-4 justify-start">
                    <div className="w-42 flex justify-between lg:justify-end">
                      lastname{" "}
                    </div>{" "}
                    <div className="lg:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] lg:leadi ng-[98px] mt-2 text-white pl-4">
                      {" "}
                      phonyiam
                    </div>
                  </div>
                  <div className="text-fuchsia-500  flex items-center py-4 justify-start">
                    <div className="w-42 flex justify-between lg:justify-end">
                      Nickname{" "}
                    </div>{" "}
                    <div className="lg:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] lg:leadi ng-[98px] mt-2 text-white pl-4">
                      {" "}
                      Packing
                    </div>
                  </div>
                  <div className="text-fuchsia-500  flex items-center py-4 justify-start">
                    <div className="w-42 flex justify-between lg:justify-end">
                      age{" "}
                    </div>{" "}
                    <div className="lg:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] lg:leadi ng-[98px] mt-2 text-white pl-4">
                      {" "}
                      22 year
                    </div>
                  </div>
                  <div className="text-fuchsia-500  flex items-center py-4 justify-start">
                    <div className="w-42 flex justify-between lg:justify-end">
                      gender{" "}
                    </div>{" "}
                    <div className="lg:text-[20px]  sm:text-[15px] xs:text-[15px] text-[15px] lg:leadi ng-[98px] mt-2 text-white pl-4">
                      {" "}
                      MALE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
