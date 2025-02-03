
export const genHomePage = (function(){

    const header = document.querySelector('.head');
    const navBar = document.querySelector('.nav');
    const navBtns = document.querySelectorAll('.navBtn');

    const content = document.querySelector('#content');

    const frontPage = document.createElement('div');
    const searchBar = document.createElement('input');
    const headline = document.createElement('h2');
    const testimonial = document.createElement('h4');

    frontPage.classList.add('main');
    // searchBar.classList.add('search');
//     headline.classList.add('headline');
//     testimonial.classList.add('testimonial');
    
//     headline.textContent = `A Symphony of Spice & Flavor –\n Szechuan Garden Delivers Perfection`;

//     testimonial.textContent = ` "A Culinary Gem – Szechuan Garden is Pure Magic! 

// If you’re looking for an unforgettable dining experience, look no further than Szechuan Garden! From the moment you step inside, you’re welcomed by the tantalizing aroma of sizzling spices and the warm hospitality of the staff.

// The menu is an absolute masterpiece—every dish bursts with authentic Szechuan flavors, perfectly balancing heat, umami, and richness. The Chongqing Spicy Chicken is crispy, fiery, and addictive, while the Dan Dan Noodles have the perfect blend of savory, nutty, and spicy goodness. And don’t even get me started on their Mapo Tofu—silky, bold, and packed with that signature numbing sensation from premium Szechuan peppercorns.

// Beyond the food, the atmosphere is charming and inviting, blending modern elegance with traditional Chinese decor. Whether you’re here for a casual night out or a special celebration, Szechuan Garden delivers an experience that’s second to none.

//  10/10 – A must-visit for spice lovers and foodies alike!"  

//  \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 — Elliot Ramsey (Food critic & culinary enthusiast) 

// \n

//  "An Explosion of Flavor in Every Bite! 

// Szechuan Garden is nothing short of spectacular! Every dish is a perfect harmony of heat, spice, and bold flavors that keep you coming back for more. The Twice-Cooked Pork was incredibly tender, infused with just the right amount of smokiness, and the Szechuan Hot Pot? Absolutely divine—an adventure for the taste buds!

// The ambiance is warm and inviting, with a touch of modern elegance that makes the dining experience even more special. Whether you're a spice lover or just looking for an authentic culinary journey, this is the place to be.

//  Szechuan Garden has officially set the standard for Chinese cuisine!" 

//  \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 — Lena Whitmore, Food Enthusiast & World Traveler`;


    const buildPage = () => {

        // frontPage.append(headline, testimonial);
        content.append(frontPage);

    }



    return { frontPage, content, buildPage }

})();



// export const page = () => genHomePage.buildPage();

