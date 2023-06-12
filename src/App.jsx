import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";

const App = () => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "300px",
    }}
  >
    I'm MFE-HEADER app 😃
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
