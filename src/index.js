

import "./styles.css";
import { genHomePage } from "./pageLoad.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const orderBtn = document.querySelector('.order');
const locationBtn = document.querySelector('.locations');
const aboutBtn = document.querySelector('.about');

window.onload = (e) => {
    genHomePage.innerHTML = '';
    genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
    const page = () => genHomePage.buildPage();
    page();
};

homeBtn.addEventListener('click', () => {
    genHomePage.frontPage.innerHTML = '';
    genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
    const page = () => genHomePage.buildPage();
    page();
});

menuBtn.addEventListener('click', () => {
    genHomePage.frontPage.innerHTML = '';
    genHomePage.frontPage.append(menu.getCard1(), menu.getCard2(), menu.getCard3(), menu.getCard4());
    
    const page = () => genHomePage.buildPage();
    page();
});

orderBtn.addEventListener('click', () => {
    genHomePage.frontPage.innerHTML = '';
    // genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
    const page = () => genHomePage.buildPage();
    page();
});

locationBtn.addEventListener('click', () => {
    genHomePage.frontPage.innerHTML = '';
    // genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
    const page = () => genHomePage.buildPage();
    page();
});

aboutBtn.addEventListener('click', () => {
    genHomePage.frontPage.innerHTML = '';
    genHomePage.frontPage.append(about.getHours(), about.getAboutSect());
    
    const page = () => genHomePage.buildPage();
    page();
});




console.log("Image Path:", "./assets/twiceCookedPork.png");
