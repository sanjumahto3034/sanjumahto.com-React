import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Resume from "./Resume/Resume";
import TitleDiv from "./TitleDiv";
import NewsPage from "./NewsPage/NewsHome";
import DemoPage from "./DemoPage/DemoPage";
import LetsTalk from "./LetsTalkPage/LetsTalk";
import AllGames from "./AllGamesPage/AllGames";

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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./SideBarPage/SideBar";

const routePages = createBrowserRouter([
  {
    path: "/",
    element: <App />, //TODO: For Extra Test of Extra Spacing In Mobile UI...
    // element:<div><App/></div>,
  },
  {
    path: "resume",
    element: (
      <div className="index-center-align">
        <TitleDiv />
        <Resume />
      </div>
    ),
  },
  {
    path: "title",
    element: <TitleDiv />,
  },
  {
    path: "news",
    element: <NewsPage />,
  },
  {
    path: "demo",
    element: <LetsTalk />,
  },
  {
    path: "talk",
    element: (
      <div className="index-center-align">
        <TitleDiv />
        <LetsTalk />
      </div>
    ),
  },
  {
    path: "/games",
    // element:<div className='index-resume-div'><TitleDiv/><AllGames/></div>
    element: (
      <div className="index-center-align">
        <TitleDiv />
        <AllGames />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routePages} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
