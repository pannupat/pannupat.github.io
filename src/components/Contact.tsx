import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { GolemCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_nyu0lnv",
          "template_ar9p3zb",
          formRef.current,
          "7mQaQEBYE1M77CATq"
        )
        .then(
          () => {
            setLoading(false);
            setNotification({
              type: "success",
              message: "Thankyou for your Contact",
            });

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error("EmailJS Error:", error);

            setNotification({
              type: "error",
              message: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
            });
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <GolemCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white bg-opacity-20  p-8 rounded-2xl"
      >
        <h2
              className={`text-lime-600  py-4 font-gundam md:text-[45px] font-black sm:text-[35px] xs:text-[35px] text-[35px] text-center`}
              style={{
                textShadow:
                  "2px 3px 3px  white,6px 7px purple,10px 8px 4px  #85df50",
              }}
            >
              Contact
            </h2>
        {notification && (
          <div
            className={`mt-4 p-4 rounded-lg text-center text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white  font-gundam font-medium mb-4 w-full text-center">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className="bg-white py-2 px-6  font-gundam placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white  font-gundam font-medium mb-4 w-full text-center">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=""
              className="bg-white py-2 px-6  font-gundam placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-gundam font-medium mb-4 w-full text-center">
              Message For Me
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=""
              className="bg-white py-4 px-6  font-gundam placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="w-full flex justify-center items-center">
            <button
              style={{ cursor: "pointer" }}
              type="submit"
              className="bg-white hover:bg-fuchsia-600 hover:text-white py-3 px-8 rounded-xl outline-none w-fit text-fuchsia-500 font-bold shadow-md shadow-lime-500"
            >
              {loading ? (
                "Sending..."
              ) : (
                <h4
                  className={`text-lime-600 font-gundam  md:text-[30px] sm:text-[20px] xs:text-[20px] text-[20px] text-center`}
                  style={{
                    textShadow:
                      "2px 3px 3px  white,4px 7px purple,8px 8px 4px  #85df50",
                  }}
                >
                  Send{" "}
                </h4>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
