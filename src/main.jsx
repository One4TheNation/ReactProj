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

// --sub_pages--
import RootedPage from "./pages/FaPage.jsx";
import JuniorPage from "./pages/FbPage.jsx";
import TagPage from "./pages/FcPage.jsx";
import TacPage from "./pages/FdPage.jsx";
import MePage from "./pages/FePage.jsx";
import NailPage from "./pages/FgPage.jsx";

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
        element: <RootedPage />,
      },
      {
        path: "portfolio/jb",
        element: <JuniorPage />,
      },
      {
        path: "portfolio/tag",
        element: <TagPage />,
      },
      {
        path: "portfolio/tac",
        element: <TacPage />,
      },
      {
        path: "portfolio/me",
        element: <MePage />,
      },
      {
        path: "portfolio/nnk",
        element: <NailPage />,
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
