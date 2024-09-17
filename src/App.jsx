import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/NavBar"; // Your navbar component
import HomePageBody from "./Components/HomePageComponets/HomePageBody"; // Homepage content
import Project from "./Components/ProjectPagecomponents/Project"; // Your projects section
import Workwithme from "./Components/HomePageComponets/Workwithme";
import CardDetails from "./Pages/CardDetail"; // Your card details component
import CardHeader from "./Components/CardHeader"; // Your separate header for CardDetails

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col bg-black min-h-screen">
      {location.pathname.startsWith("/card/") ? <CardHeader /> : <Header />}
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
                <section id="work with me">
                  <Workwithme /> {/* Projects section */}
                </section>
              </>
            }
          />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
