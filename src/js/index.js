import "core-js/stable";
import "regenerator-runtime/runtime";

import "../scss/main.scss";
import OOP from "./components/OOP";

import "./components/Promises";
import "./components/Prototype";
import "./components/AsyncAwait";
import "./components/Array";

import './components/Debounce-Throttle';

//Javascript: The Hard Parts v2 Front End
import "./components/Functions";
import "./components/OOP";

if (process.env.NODE_ENV === "development") {
  require("../pug/index.pug");
  require("../pug/about.pug");
}
