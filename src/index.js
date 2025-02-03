

import "./styles.css";
// import { page } from "./pageLoad.js";
import { genHomePage } from "./pageLoad.js";
import { home } from "./home.js";

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const orderBtn = document.querySelector('.order');
const locationBtn = document.querySelector('.locations');
const aboutBtn = document.querySelector('.about');

window.onload = (e) => {
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
    // genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
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
    // genHomePage.frontPage.append(home.getHeadline(), home.getTestimonial());
    
    const page = () => genHomePage.buildPage();
    page();
});




