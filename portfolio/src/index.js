import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "./res/fonts/Raleway/static/Raleway-Thin.ttf";
import "./res/fonts/Raleway/static/Raleway-ExtraLight.ttf";
import "./res/fonts/Raleway/static/Raleway-Light.ttf";
import "./res/fonts/Raleway/static/Raleway-Regular.ttf";
import "./res/fonts/Raleway/static/Raleway-Medium.ttf";
import "./res/fonts/Raleway/static/Raleway-SemiBold.ttf";
import "./res/fonts/Raleway/static/Raleway-Bold.ttf";
import "./res/fonts/Raleway/static/Raleway-ExtraBold.ttf";
import "./res/fonts/Raleway/static/Raleway-Black.ttf";
import "./res/fonts/Ubuntu/Ubuntu-Bold.ttf";
import "./res/fonts/Ubuntu/Ubuntu-Light.ttf";
import "./res/fonts/Ubuntu/Ubuntu-Medium.ttf";
import "./res/fonts/Ubuntu/Ubuntu-Regular.ttf";

import "./res/fonts/RobotoMono/RobotoMono-Bold.ttf";
import "./res/fonts/RobotoMono/RobotoMono-ExtraLight.ttf";
import "./res/fonts/RobotoMono/RobotoMono-Light.ttf";
import "./res/fonts/RobotoMono/RobotoMono-Medium.ttf";
import "./res/fonts/RobotoMono/RobotoMono-Regular.ttf";
import "./res/fonts/RobotoMono/RobotoMono-SemiBold.ttf";
import "./res/fonts/RobotoMono/RobotoMono-Thin.ttf";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./Modules/Resume";
import FlipCardPrivacyPolicy from "./Modules/Apps/FlipCard/FlipCardPrivacyPolicy";
import HindiHorrorStory from "./Modules/Apps/Hindi Horror Story/HindiHorrorStory";

const routePages = createBrowserRouter([
  {
    path: "/",
    element: <App />, //TODO: For Extra Test of Extra Spacing In Mobile UI...
  },
  {
    path: "/resume",
    element: <Resume></Resume>,
  },
  {
    path: "/games/flip-card/privacy-policy",
    element: <FlipCardPrivacyPolicy></FlipCardPrivacyPolicy>,
  },
  {
    path: "/apps/hindi-horror-story/privacy-policy",
    element: <HindiHorrorStory></HindiHorrorStory>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routePages} />
  </React.StrictMode>
);
reportWebVitals();
