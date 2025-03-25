import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
//----------------------------------------------
import SamsungOne from "./pages/SamsungOne.jsx";
import SamsungTwo from "./pages/SamsungTwo.jsx";
import SamsungThree from "./pages/SamsungThree.jsx";
import SamsungFour from "./pages/SamsungFour.jsx";
//----------------------------------------------

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
        path: "project",
        element: <ProjectPage />,
      },
      {
        path: "project/samsungone",
        element: <SamsungOne />,
      },
      {
        path: "project/samsungtwo",
        element: <SamsungTwo />,
      },
      {
        path: "project/samsungthree",
        element: <SamsungThree />,
      },
      {
        path: "project/samsungfour",
        element: <SamsungFour />,
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
