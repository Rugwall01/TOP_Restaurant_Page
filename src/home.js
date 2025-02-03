
export const home = (function() {

    // const front = document.querySelector('.main');
    const headline = document.createElement('h2');
    const testimonial = document.createElement('h4');

    headline.classList.add('headline');
    testimonial.classList.add('testimonial');

    const bold1 = document.createElement('div');
    const person1 = "— Elliot Ramsey, Food critic & culinary enthusiast";
    bold1.innerHTML = person1;
    bold1.classList.add('bold1');

    

    const bold2 = document.createElement('div');
    const person2 = "— Lena Whitmore, Food Enthusiast & World Traveler";
    bold2.innerHTML = person2;
    bold2.classList.add('bold2');


    headline.textContent = `"a symphony of spice & flavor!"\n "szechuan garden delivers perfection."`;

    testimonial.textContent = ` "A Culinary Gem – Szechuan Garden is Pure Magic! 

If you’re looking for an unforgettable dining experience, look no further than Szechuan Garden! From the moment you step inside, you’re welcomed by the tantalizing aroma of sizzling spices and the warm hospitality of the staff.

The menu is an absolute masterpiece—every dish bursts with authentic Szechuan flavors, perfectly balancing heat, umami, and richness. The Chongqing Spicy Chicken is crispy, fiery, and addictive, while the Dan Dan Noodles have the perfect blend of savory, nutty, and spicy goodness. And don’t even get me started on their Mapo Tofu—silky, bold, and packed with that signature numbing sensation from premium Szechuan peppercorns.

Beyond the food, the atmosphere is charming and inviting, blending modern elegance with traditional Chinese decor. Whether you’re here for a casual night out or a special celebration, Szechuan Garden delivers an experience that’s second to none.

 10/10 – A must-visit for spice lovers and foodies alike!"  

 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0  

\n

 "An Explosion of Flavor in Every Bite! 

Szechuan Garden is nothing short of spectacular! Every dish is a perfect harmony of heat, spice, and bold flavors that keep you coming back for more. The Twice-Cooked Pork was incredibly tender, infused with just the right amount of smokiness, and the Szechuan Hot Pot? Absolutely divine—an adventure for the taste buds!

The ambiance is warm and inviting, with a touch of modern elegance that makes the dining experience even more special. Whether you're a spice lover or just looking for an authentic culinary journey, this is the place to be.

 Szechuan Garden has officially set the standard for Chinese cuisine!" 

 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 `;


 testimonial.append(bold1, bold2);

 const getHeadline = () => headline;
 const getTestimonial = () => testimonial;

 return { getHeadline, getTestimonial }
})();