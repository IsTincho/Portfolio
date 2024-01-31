import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import AboutMeView from "./components/AboutMe/AboutMeView";
import MyProjectsView from "./components/MyProjects/MyProjectsView";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/about-me" element={<AboutMeView />} />
          <Route path="/my-projects" element={<MyProjectsView />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
