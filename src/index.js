

import "./styles.css";
// import { page } from "./pageLoad.js";
import { genHomePage } from "./pageLoad.js";

window.onload = (e) => {
    const page = () => genHomePage.buildPage();
    page();

}


console.log("Test");