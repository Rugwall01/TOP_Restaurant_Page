
import goldenDragon1 from "./assets/goldenDragonCuttout1.png";


export const about = (function() {

    const hours = document.createElement('div');
    hours.classList.add('bizHours');


    const aboutSect = document.createElement('div');
    aboutSect.classList.add('aboutSect');

    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const card4 = document.createElement('div');
    const card5 = document.createElement('div');

    const card5Title = document.createElement('div');
    
    card1.classList.add('aboutCard1');
    card2.classList.add('aboutCard2');
    card3.classList.add('aboutCard3');
    card4.classList.add('aboutCard4');
    card5.classList.add('aboutCard5');

    card5Title.classList.add('aboutCard5Title');

    card1.innerText = `Liang Wei – Founder & Owner
A lifelong lover of Szechuan cuisine, Liang Wei grew up in Chengdu, where the 
bold, aromatic flavors of his hometown shaped his passion for food. After spending 
years traveling the world and experiencing global culinary techniques, he decided 
to bring a truly authentic Szechuan dining experience to Lakeport. His vision 
for Szechuan Garden is simple: to honor tradition, use the freshest organic 
 ingredients, and create an atmosphere where every guest feels like family. 
 Liang’s dedication to excellence ensures that every dish served is a true reflection
of Szechuan’s rich heritage.
`;

    card2.innerText = `Emily Zhao – General Manager
Emily Zhao’s expertise in hospitality is the heartbeat of Szechuan Garden. With 
over a decade of experience managing fine dining establishments, she combines 
her sharp leadership skills with a deep appreciation for authentic cuisine. Emily 
ensures that every guest enjoys an unforgettable dining experience, from the 
moment they walk in to the last sip of tea. Her commitment to impeccable service, 
seamless operations, and a warm, welcoming atmosphere makes her an integral part of our team.
`;
    card3.innerText = `Chef Han Ming – Executive Chef
Chef Han Ming is a master of Szechuan cuisine, bringing over 20 years of 
experience from prestigious restaurants in China and abroad. Trained in 
traditional techniques and always pushing culinary boundaries, he expertly 
balances the numbing heat of Szechuan peppercorns with layers of rich, aromatic 
flavors. Han’s philosophy revolves around using the finest organic ingredients 
and time-honored methods to create dishes that are both authentic and 
innovative. His passion and artistry make every plate a masterpiece.
`;
    card4.innerText = `Leo Feng – Sous Chef
Leo Feng is the right hand of Chef Han, ensuring that every dish leaving the 
kitchen meets the highest standards. Born into a family of chefs, he developed a 
deep respect for food craftsmanship from an early age. His precision, creativity, 
and dedication to fresh, locally sourced ingredients make him an invaluable part 
of the culinary team. Whether he’s perfecting the wok technique or experimenting 
with modern takes on classic Szechuan dishes, Leo brings energy and expertise to every service.
`;


    card5.innerHTML = `At Szechuan Garden, we bring the bold, fiery, and complex flavors of authentic Szechuan cuisine to your table. Our passion for excellence starts with the highest quality, fresh, and organic ingredients, sourced locally whenever possible to support our community and ensure the purest flavors in every dish.
<span class="dot">·</span>
Rooted in tradition yet crafted for the modern palate, our menu is a celebration of Szechuan’s rich culinary heritage—where mouth-numbing spices, aromatic herbs, and perfectly balanced flavors come together in every bite. Whether you’re a longtime lover of Szechuan cuisine or discovering it for the first time, we are committed to delivering a world-class dining experience that excites the senses and leaves a lasting impression.
<span class="dot">·</span>
Join us and savor the true taste of Szechuan, where authenticity meets innovation, and every meal is an unforgettable journey.
\n <span class="dot">·</span>

<img src="${goldenDragon1}" alt="golden dragon" id="dragImg1"> <img src="${goldenDragon1}" alt="golden dragon" id="dragImg2">
`;

    card5Title.innerHTML = `OUR PHILOSOPHY<span></span>`;

    hours.innerHTML = `<span id="hrsDays">
                       Monday
                       Tuesday
                       Wednesday
                       Thursday
                       Friday
                       Saturday
                       Sunday
                       </span>
                       <span id="hrsHours">
                       <p>9am - 3pm, 5pm - 9pm<p>
                       <p>9am - 3pm, 5pm - 9pm<p>
                       <p>9am - 2pm, 5pm - 9pm<p>
                       <p>9am - 3pm, 5pm - 9pm<p>
                       <p>9am - 3pm, 5pm - 10pm<p>
                       <p>10am - 3pm, 5pm - 8pm<p>
                       <p>10am - 3pm, 5pm - 8pm<p>
                       </span>`;

    card5.append(card5Title);


    aboutSect.append(card1, card2, card3, card4, card5);

    const getAboutSect = () => aboutSect;
    const getHours = () => hours;

    return { getAboutSect, getHours }


})();

