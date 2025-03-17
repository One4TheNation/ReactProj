import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      // ---------------------
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      // -branding-
      {
        path: "portfolio/rg",
        // element: <RootedGem />
      },
      {
        path: "portfolio/jb",
        // element: <junior />
      },
      {
        path: "portfolio/tag",
        // element: <tag />
      },
      {
        path: "portfolio/tac",
        // element: <trans />
      },
      {
        path: "portfolio/me",
        // element: <mystical />
      },
      {
        path: "portfolio/rc",
        // element: <ray />
      },
      // ---------------------
      {
        path: "project",
        element: <ProjectPage />,
      },
      // -secondary-
      {
        path: "project/234",
        // element: <ProjectPage />,
        element: <h1>rootedgem</h1>,
      },
      // ---------------------
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
