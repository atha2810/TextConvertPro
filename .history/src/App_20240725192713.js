import React, { useState } from "react";
import profile from "./images/profile.jpg";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#082844";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar logo="TextConvert" mode={mode} toggleMode={toggleMode} />
        {/* <TextForm heading="Enter the text to analyse: " mode={mode}/> */}
        <Routes>
          <Route exact path="/about" element={<About imgSrc={profile} />} />
          {/* exact is usedto get exact path sometimes there are folders like /about-->componentX and /about/home-->componentY and if we want component from /about/home it will mistakenly will render from /about thats why */}

          <Route
            exact
            path="/TextConvertPro"
            element={<TextForm heading="Enter the text here ↓ " mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
