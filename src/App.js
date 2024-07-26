import React from "react";

import "./App.css";
import {
  Navbar,
  Header,
  Footer,
  ProjectList,
  About,
  Contact,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
