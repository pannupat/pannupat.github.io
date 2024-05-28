import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";
import Lenis from "lenis";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lenis = useRef<Lenis>();
  useEffect(() => {
    lenis.current = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.current && lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 z-100"
      >
        <nav
          className={`${
            styles.paddingX
          } w-full flex items-center py-10 fixed top-0 z-20 ${
            scrolled ? "bg-black bg-opacity-20" : "bg-transparent  "
          }`}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");

                lenis.current?.scrollTo(0);
              }}
            >
              <p
                style={{
                  cursor: "pointer",
                }}
                className="text-lime-400 text-[28px] font-gundam font-black cursor-pointer flex "
              >
                Panupat Phonyiam &nbsp;
                <span className="sm:block hidden"> | Profile</span>
              </p>
            </Link>

            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((nav) => (
                <motion.div
                  style={{ cursor: "pointer" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <li
                    key={nav.id}
                    style={{
                      cursor: "pointer",
                      boxShadow:
                        "-2px 3px 3px  white,-4px 7px green,-5px 15px 10px purple",
                    }}
                    className={`${
                      active === nav.title
                        ? "text-lime-500"
                        : "text-secondary  "
                    } hover:text-lime-500 hover:bg-blue-500 hover:bg-opacity-20 bg-white bg-opacity-30 border-2 p-2 px-3 rounded-xl text-[18px] font-gundam cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                  >
                    <div
                      onClick={() => {
                        lenis.current?.scrollTo(`#${nav.id}`);
                      }}
                    >
                      {nav.title}
                    </div>
                  </li>
                </motion.div>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <motion.div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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
                <ul className="list-none bg-opacity-97 bg-black p-5 rounded-xl flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.div
                      className=" w-full "
                      style={{ cursor: "pointer" }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <li
                        key={nav.id}
                        className={`${
                          active === nav.title
                            ? "text-lime-500"
                            : "text-secondary  "
                        } hover:text-lime-500 hover:bg-blue-500 hover:bg-opacity-20 bg-white text-center bg-opacity-20 border-2 p-2 px-3 rounded-xl text-[18px] font-gundam cursor-pointer`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <div
                          onClick={() => {
                            lenis.current?.scrollTo(`#${nav.id}`);
                          }}
                        >
                          {nav.title}
                        </div>
                      </li>
                    </motion.div>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
