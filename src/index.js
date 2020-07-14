import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import emailjs from "emailjs-com";

emailjs.init("user_ikBfI3cvBCTv4zqVBoSsA");

ReactDOM.render(<App />, document.getElementById("root"));
