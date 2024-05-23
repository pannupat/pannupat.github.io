import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CursorifyProvider } from "@cursorify/react";
import Cursor from "./components/Cursor.tsx";
import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CursorifyProvider
      cursor={<Cursor />}
      opacity={1}
      delay={1}
      defaultCursorVisible={false}
      breakpoint={997}
    >
      <App />
    </CursorifyProvider>
  </React.StrictMode>
);
