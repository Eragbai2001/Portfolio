import React from "react";
import Header from "./Components/NavBar"; // Your navbar component
import HomePageBody from "./Components/HomePageComponets/HomePageBody"; // Homepage content
import Project from "./Components/ProjectPagecomponents/Project"; // Your projects section

const App = () => {
  return (
    <div className="  flex flex-col bg-black">
      <Header /> {/* Navbar with links to sections */}
      {/* Main content */}
      <main className="flex-grow">
        <section id="home">
          <HomePageBody /> {/* Your main homepage content */}
        </section>
        <section id="projects">
          <Project /> {/* Projects section */}
        </section>
      </main>
    </div>
  );
};

export default App;
