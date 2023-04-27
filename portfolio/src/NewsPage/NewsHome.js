import React from "react";
import "./NewsHome.css";
import {json} from "react-router-dom";
import {useState} from "react";
var API_KEY = "d3b43c6cda8f4e5c8f5f4050588bb436";
var BASE_URL = "https://newsapi.org/v2/top-headlines?";
var text = "Hello World";
var counter = 0;
// const [buttonText, setButtonText] = useState("Click");

function handleClick() {
  counter++;
  document.getElementById("clickDiv").innerHTML = "Clicked " + counter;
  console.log("[ React Js ] Clicked " + counter);
}

const NewsPage = () => {
  return (
    <div className="mainDiv">
      <button className="NewsPageBtn" onClick={handleClick}>
        Button
      </button>
      <div id="clickDiv"></div>
    </div>
  );
};
// function NewsPage() {
//     newsHomeWebPage = <div className="testHelloWorld">{text}</div>;

//   return newsHomeWebPage;
// }

getNews();

function getNews(source) {
  var data = null;

  var xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(JSON.parse(this.responseText));
    }
  });

  xhr.open("GET", BASE_URL + "sources=bbc-news&apiKey=" + API_KEY);
  xhr.setRequestHeader("Accept", "*/*");
  //   xhr.setRequestHeader("User-Agent", "Thunder Client (https://www.thunderclient.com)");

  xhr.send(data);
}

function setJsonData(json) {
  console.log(json);
}

export default NewsPage;
