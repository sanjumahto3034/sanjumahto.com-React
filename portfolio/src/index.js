import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './res/fonts/Raleway/static/Raleway-Thin.ttf';
import './res/fonts/Raleway/static/Raleway-ExtraLight.ttf';
import './res/fonts/Raleway/static/Raleway-Light.ttf';
import './res/fonts/Raleway/static/Raleway-Regular.ttf';
import './res/fonts/Raleway/static/Raleway-Medium.ttf';
import './res/fonts/Raleway/static/Raleway-SemiBold.ttf';
import './res/fonts/Raleway/static/Raleway-Bold.ttf';
import './res/fonts/Raleway/static/Raleway-ExtraBold.ttf';
import './res/fonts/Raleway/static/Raleway-Black.ttf';
import './res/fonts/Ubuntu/Ubuntu-Bold.ttf';
import './res/fonts/Ubuntu/Ubuntu-Light.ttf';
import './res/fonts/Ubuntu/Ubuntu-Medium.ttf';
import './res/fonts/Ubuntu/Ubuntu-Regular.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
