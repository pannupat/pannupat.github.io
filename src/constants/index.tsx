import { ReactNode } from "react";
import {
  guitar,
  judo,
  movie,
  food,
  cake,
  gamedev,
  fronend,
  modeler,
  software,
  game,
  excercise,
  seanscience,
  drawing,
  firegolem,
  aston,
  drsilva,
  rickandmorty,
  antd,
  pokemon,
  quiz,
  register,
  logo_antd,
  logo_axios,
  logo_rtk,
  logo_reddux,
  bikverse,
  boat,
  silva,
  astonn,
  pack,
  antdClip,
  pokemonClip,
  rickandmortyClip,
  seanscienceClip,
  bikeverseClip,
  packClip,
  GolemClipp,
} from "../assets";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "hobbies",
    title: "Hobby",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const aboutme = [
  {
    title: "3D Modeler",
    icon: modeler,
  },
  {
    title: "Game Developer",
    icon: gamedev,
  },
  {
    title: "Frontend Developer",
    icon: fronend,
  },
  {
    title: "Software Tester",
    icon: software,
  },
];

const expect = [
  {
    title: "3D Modeler",
    icon: modeler,
  },
  {
    title: "Game Developer",
    icon: gamedev,
  },
  {
    title: "Frontend Developer",
    icon: fronend,
  },
  {
    title: "Software Tester",
    icon: software,
  },
];

interface Experience {
  iconBg: string;
  icon: string;
  name: string;
  title: string;
  points: string[];
  image: ReactNode;
}
const experiences: Experience[] = [
  {
    title: "Register",
    name: "AntdFramWork/React TypeScript/Taillwind Style/React Router Dom",
    icon: logo_antd,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "Create a new subscription form using Antd and Framer Motion with React TypeScript",
    ],
    image: (
      <Link
        style={{ cursor: "pointer" }}
        className="hover:shadow-sm hover:shadow-white "
        to={
          "https://github.com/pannupat/AntCssFramework/tree/main/src/workshop_css_framework"
        }
      >
        {" "}
        <img className="rounded-xl w-[500px] h-[full]" src={antd} alt="" />
      </Link>
    ),
  },
  {
    title: "RickandMorty API",
    name: "Axios/React TypeScript/Taillwind Style/Framer Motion/Rseact-Animated 3D Card",
    icon: logo_axios,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "Build APIs for data retrieval from Rick and Morty APIs with Axios and React TypeScript.",
    ],
    image: (
      <Link
        style={{ cursor: "pointer" }}
        className="hover:shadow-sm hover:shadow-white "
        to={
          "https://github.com/pannupat/AntCssFramework/tree/main/src/fetchdata"
        }
      >
        <img
          className="rounded-xl w-[500px] h-[full]"
          src={rickandmorty}
          alt=""
        />
      </Link>
    ),
  },
  {
    title: "Pokemon API",
    name: "RTK Query/Tailwind/React TypeScript/Framer Motion/Antd/React Spring",
    icon: logo_rtk,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "Create APIs for retrieving data from Pokemon APIs with RTK Query and React TypeScript",
    ],
    image: (
      <Link
        style={{ cursor: "pointer" }}
        className="hover:shadow-sm hover:shadow-white "
        to={"https://github.com/pannupat/RTKQueeryApi/tree/main/src"}
      >
        <img className="rounded-xl w-[500px] h-[full]" src={pokemon} alt="" />
      </Link>
    ),
  },
  {
    title: "Quiz",
    name: "Reduxjs/Redux Toolkit/Antd/Date Fns/Next Theme/Zod/Vaul",
    icon: logo_reddux,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "Create a Web Quiz using the information contained in JSON Quiz using Redux Toolkit and Antd and Date Fns.",
    ],
    image: (
      <Link
        style={{ cursor: "pointer" }}
        className="hover:shadow-sm hover:shadow-white "
        to={"https://github.com/pannupat/Redux_Quiz"}
      >
        {" "}
        <img className="rounded-xl w-[500px] h-[full]" src={quiz} alt="" />
      </Link>
    ),
  },
  {
    title: "Register Redux",
    name: "Redux/Antd/React TypeScript/Framer Motion/Tailwind/React Router Dom.",
    icon: logo_reddux,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "Create a new subscription form using Redux and Antd by showing that your registration information has been stored in the Redux Store.",
    ],
    image: (
      <Link
        style={{ cursor: "pointer" }}
        className="hover:shadow-sm hover:shadow-white "
        to={
          "https://github.com/pannupat/AntCssFramework/tree/main/src/workshop_redux"
        }
      >
        <img className="rounded-xl w-[500px] h-[full]" src={register} alt="" />
      </Link>
    ),
  },
];

// /////////////////////////////////////////////////////Hobby/////////////////////////////////////////////////////////////////

const hobbiess = [
  {
    title: "Develop Game",
    name: "SeanScience",
    icon: gamedev,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH :พัฒนาและทดสอบเกม",
      "EN :Developing and Testing Game.",
      "TH :ตัวเกมเป็นเกม 3D แนว ScienSifi,  Adventure, Puzzle, RolePlay and Story สอดแทรกความรู้วิทยาศาสตร์ผ่านเกม  .",
      "EN :The game is a 3D game in the style of ScienSifi, Adventure, Puzzle, RolePlay and Story, inserting science knowledge through the game. 3 .",
    ],
  },
  {
    title: "Play Game",
    name: "PC/Mobile",
    icon: game,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:งานอดิเรกเล่นเกมโดยส่วนใหญ่จะใช้เวลาไปกับเกมที่ฝึกใช้สมองอย่างการคาดการณ์ล่วงหน้า, การสังเกตุ, การวางแผน, และการวิเคราะห์องค์ประกอบต่างๆเพื่อพัฒนาตัวเอองด้านความรู้และการฝึกฝนในการพัฒนาเกม",
      "EN: Most of my gaming hobbies are spent on brain-training games such as foresight, observation, planning, and analyzing elements to develop knowledge and practice in game development.",
    ],
  },
  {
    title: "Play Music",
    name: "Electric Guitar/Violin",
    icon: guitar,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH: สนุกและผ่อนคลายทุกครั้งในการเล่นดนตรีเพราะได้ฝึกไหวพริบ ความจำ ควมเร็วของนิ้วแนวการเล่นจะเป็นการ Tab ตามทำนองเพลงทั้ง Electric guiar และ Violin",
      "EN: It's fun and relaxing every time you play music because you can train your wit, memory, and finger speed, the playing style will be tabbed to the melody of both Electric guiar and Violin",
    ],
  },
  {
    title: "Cook",
    name: "All",
    icon: food,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:เป็น 1 ในงานอดิเรกที่ชอบมากที่สุด ประเภทที่ชอบทำจะเป็นอาหารแถบเอเชียเพราะมีรสชาติที่จัดมากกว่าแถบยุโรปที่โดยส่วนใหญ่จะมีรถชาติที่กลางๆ",
      "EN: It is one of my favorite hobbies. My favorite type is Asian cuisine because it has a stronger flavor than European, where most of them have neutral national cars.",
    ],
  },
  {
    title: "Make dessert",
    name: "All",
    icon: cake,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:ประเภทขนมที่ชอบทำจะเป็นขนมทุกประเภท ทั้งในแถบเอเชียและแถบยุโรป",
      "EN: My favorite type of dessert is all types of sweets in Asia and Europe",
    ],
  },
  {
    title: "Watch Movie",
    name: "Animation/Series",
    icon: movie,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:แนวหนังที่ชอบจะเป็น  Disney Pixar Chinese Animation และ Japan Animation",
      "EN: My favorite type of movie is Disney Pixar Chinese Animation and Japan Animation",
    ],
  },
  {
    title: "Exercise",
    name: "Bodybuilder/helty",
    icon: excercise,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:เวทเทรนนิ่ง, คาร์ดิโอ, วิ่ง, ตีแบท, เล่นบาสเก็ตบอล,ส่วนใหญ่เวทเทรนนิ่ง",
      "EN: Weight Training, Cardio, Running, Batting, Basketball, Mostly Weight Training",
    ],
  },
  {
    title: "Practice martial arts",
    name: "Karate/Ikido/Tekwondo",
    icon: judo,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:ป้องกันตัว และเสริมสร้างความคล่องตัวควบคู่กับการออกกำลังกาย",
      "EN: Self-defense and agility along with exercise",
    ],
  },
  {
    title: "Molding 3 D models",
    name: "Game/Web/Other",
    icon: modeler,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:ส่วนใหญ่จะปั้นตัวละครน่ารักๆหรือตัวละครสำหรับเกมเก็บไว้หรือออกแบบและปั้นนตามแแบบที่ออกแบบไว้",
      "TH: Most of them are cute characters or characters for the game, keep them, or design and sculpt them according to the design.",
    ],
  },
  {
    title: "Drawing",
    name: "Portrait/Cartoon/Sketch",
    icon: drawing,
    iconBg: "rgba(255, 255, 255, 0.5)",
    points: [
      "TH:ประเภทงานที่วาดคือภาพเหมือน การ์ตูน และทิวทัศน์",
      "EN:The types of work drawn are portraits, cartoons, and landscapes.",
    ],
  },
];

const Skill1 = [
  {
    name: "Pokemon API",

    image: firegolem,
    video: boat,
  },
  {
    name: "Pokemon API",

    image: drsilva,
    video: silva,
  },
  {
    name: "Pokemon API",
    image: aston,
    video: astonn,
  },
];

const Skill2 = [
  {
    description: "Acion Adventure Puzzle game incorporates bioscience content.",
    name: "Sean Science",
    designation: "Panupat Phonyiam",
    tag: "#Unreal engine5 / #Blender / #Maximo",
    image: seanscience,
  },
];

const Skill3 = [
  {
    description:
      "Bike Verse is a design website made for comparison. Look at the information and look at motorcycles from different camps to make your decision easier.",
    name: "Bike Verse",
    designation: "Panupat Phonyiam",
    tag: "#HTML / #CSS / #JavaScript / #Bootstrap",
    image: bikverse,
  },
  {
    description:
      "Create a new subscription form using Antd and Framer Motion with React TypeScript",
    name: "Register Antdframwork",
    designation: "Pannupat Phonyiam",
    tag: "#React / #TypeScript / #Antd / #Framer Motion / #Tailwind / #React Router Dom",
    image: antd,
  },
  {
    description:
      "Create APIs for retrieving data from Pokemon APIs with RTK Query and React TypeScript",

    name: "Pokemon API",
    designation: "Panupat Phonyiam",
    tag: "#React / #TypeScript / #RTK Query / #React Router Dom / #Antd",
    image: pokemon,
  },
];

const Skill4 = [
  {
    name: "FIRE GOLEM",
    image: firegolem,
    video: GolemClipp,
    url: "example.com",
  },
  {
    name: "DR. SILVA",
    image: drsilva,
    video: silva,
    url: "example.com",
  },
  {
    name: "ASTON",
    image: aston,
    video: astonn,
    url: "example.com",
  },
  {
    name: "PACK",
    image: pack,
    video: packClip,
    url: "example.com",
  },
  {
    name: "ANTD REGISTER",
    image: antd,
    video: antdClip,
    url: "example.com",
  },
  {
    name: "POKEMON CARD API",
    image: pokemon,
    video: pokemonClip,
    url: "example.com",
  },
  {
    name: "RICK AND MORTY CARD API",
    image: rickandmorty,
    video: rickandmortyClip,
    url: "example.com",
  },
  {
    name: "SEAN SCIENCE",
    image: seanscience,
    video: seanscienceClip,
    url: "example.com",
  },
  {
    name: "BIKE VERESE",
    image: bikverse,
    video: bikeverseClip,
    url: "example.com",
  },
];

export {
  aboutme,
  experiences,
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  hobbiess,
  expect,
};
