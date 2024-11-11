import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    {/* 개발안정성 검증 mode */}
    <App />
  </StrictMode>
);
