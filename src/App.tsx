import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Main,
  Navbar,
  StarsCanvas,
  CellCanvas,
  Expected,
  SKill1,
} from "./components/index.tsx";
import Hobbies from "./components/Hobbies.tsx";

const App = () => {
  // const lenis = useRef<Lenis>();
  // useEffect(() => {
  //   lenis.current = new Lenis({ wrapper: window });

  //   function raf(time: DOMHighResTimeStamp) {
  //     lenis.current && lenis.current.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0  ">
        <div className="bg-cover  bg-no-repeat bg-center">
          <Navbar />
          <Main />
          <About />
          <Expected />
          <Hobbies />
          <Experience />
          <SKill1 />
          <Contact />
          <div className="fixed -z-50 top-0 left-0 w-full h-full ">
            {" "}
            <CellCanvas />
          </div>
          <div className="fixed -z-40 top-0 left-0 w-full h-full ">
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
