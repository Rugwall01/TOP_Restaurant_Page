

export const order = (function() {

    const numItems = 4;
    const orderArea = document.createElement('div');
    orderArea.classList.add('orderArea');

    const items = [
        {name: "Twice-Cooked Pork", description: "Tender, juicy, smokey pork! Marinated in our house ponzu sauce and slow cooked for 16hrs!!", price: "$10.99"},
        {name: "Chongqing Spicy Chicken", description: "Crispy, fiery, tender chicken! Marinated in our house spicy sauce and glazed with Chongqing finishing sauce.", price: "$8.99"},
        {name: "Dan Dan Noodles", description: "Savory, nutty, spicy noodles! Marinated in our house spicy sauce and pan fried until crispy.", price: "$7.99"},
        {name: "Mapo Tofu", description: "Silky, bold, tender tofu! Topped with spring onions, crispy fried onions, and sesame seeds. Drizzled with spicy GREEN and RED Szechuan Peppercorn Sauce.", price: "$7.99"},
    ];

    let order1 = `${items[0].name.bold()} ${items[0].price.bold()} \n ${items[0].description.bold()}
    
    `;
    let order2 = `${items[1].name.bold()} ${items[1].price.bold()} \n ${items[1].description.bold()}
    
    `;
    let order3 = `${items[2].name.bold()} ${items[2].price.bold()} \n ${items[2].description.bold()}
    
    `;
    let order4 = `${items[3].name.bold()} ${items[3].price.bold()} \n ${items[3].description.bold()}
    
    `;

    let orders = [order1, order2, order3, order4];

    for(let i = 0; i < numItems; i++) {
        const item = document.createElement('div');
        item.classList.add(`orderItem`, `n${i}`);
        // item.classList.add(`${i}`);
        item.innerHTML = `${orders[i]}`;

        orderArea.append(item);
    }

    const getOrderArea = () => orderArea;

    return { getOrderArea };

})();