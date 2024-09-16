// src/App.jsx or src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/NavBar"; // Your navbar component
import HomePageBody from "./Components/HomePageComponets/HomePageBody"; // Homepage content
import Project from "./Components/ProjectPagecomponents/Project"; // Your projects section
import Workwithme from "./Components/HomePageComponets/Workwithme";
import CardDetails from "./Pages/CardDetail"; // Your card details component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col bg-black  ">
        <Header /> {/* Navbar with links to sections */}
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <HomePageBody /> {/* Your main homepage content */}
                  </section>
                  <section id="projects">
                    <Project /> {/* Projects section */}
                  </section>
                  <section id="work with me ">
                    <Workwithme /> {/* Projects section */}
                  </section>
                </>
              }
            />
            <Route path="/card/:id" element={<CardDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
