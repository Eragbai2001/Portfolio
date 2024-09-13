import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./Layouts/MainLayouts";
import HomePage from "./Pages/Homepage";
import ProjectPage from "./Pages/ProjectPage";
import CardDetails from "./Pages/CardDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/:id" element={<CardDetails />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
