import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RacerLogin from "./pages/RacerLogin"; // Make sure 'RacerLogin' is the correct file name
import SecurityLogin from "./pages/SecurityLogin"; // Make sure 'SecurityLogin' is the correct file name
import FrontdeskLogin from "./pages/FrontdeskLogin"; // Make sure 'frontdesklogin' is the correct file name
import FlagBearer from "./pages/FlagBearer";
import RaceFlags from "./pages/race-flags";
import { SocketProvider } from "./context/SocketContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/racer",
    element: <RacerLogin />,
  },
  {
    path: "/security",
    element: <SecurityLogin />,
  },
  {
    path: "/frontdesk",
    element: <FrontdeskLogin />,
  },
  {
    path: "/flagbearer",
    element: <FlagBearer />,
  },
  {
    path: "/race-flags",
    element: <RaceFlags />,
  },
]);
root.render(
  <React.StrictMode>
    <SocketProvider>
      {" "}
      {/* Provides socket for the whole app */}
      <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>
);
