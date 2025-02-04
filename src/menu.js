import twiceCookedPork from './assets/twiceCookedPork.png';
import chongqingChicken from './assets/chongqingChicken.png';
import danDanNoodles from './assets/danDanNoodles.png';


export const menu = (function (){

    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const card4 = document.createElement('div');
    
    card1.classList.add('menuCard1');
    card2.classList.add('menuCard2');
    card3.classList.add('menuCard3');
    card4.classList.add('menuCard4');


    const items = [
        {name: "Twice-Cooked Pork", description: "Tender, juicy, smokey pork! Marinated in our house ponzu sauce and slow cooked for 16hrs!!", price: "$10.99"},
        {name: "Chongqing Spicy Chicken", description: "Crispy, fiery, tender chicken! Marinated in our house spicy sauce and glazed with Chongqing finishing sauce.", price: "$8.99"},
        {name: "Dan Dan Noodles", description: "Savory, nutty, spicy noodles! Marinated in our house spicy sauce and pan fried until crispy.", price: "$7.99"},
        {name: "Mapo Tofu", description: "Silky, bold, tender tofu! Topped with spring onions, crispy fried onions, and sesame seeds. Drizzled with spicy GREEN and RED Szechuan Peppercorn Sauce.", price: "$7.99"},
    ];


    card1.innerHTML = `${items[0].name.bold()} ${items[0].price.bold()} \n ${items[0].description.bold()}
    <img src="${twiceCookedPork}" alt="Twice Cooked Pork">
    `;
    card2.innerHTML = `${items[1].name.bold()} ${items[1].price.bold()} \n ${items[1].description.bold()}
    <img src="${chongqingChicken}" alt="Chonqing Chicken">
    `;
    card3.innerHTML = `${items[2].name.bold()} ${items[2].price.bold()} \n ${items[2].description.bold()}
    <img src="${danDanNoodles}" alt="Dan Dan Noodles">
    `;
    card4.innerHTML = `${items[3].name.bold()} ${items[3].price.bold()} \n ${items[3].description.bold()}
    <img src="${twiceCookedPork}" alt="Mapo Tofu">
    `;

    const getCard1 = () => card1;
    const getCard2 = () => card2;
    const getCard3 = () => card3;
    const getCard4 = () => card4;

    return { getCard1, getCard2, getCard3, getCard4 }

})();

