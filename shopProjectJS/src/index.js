
let shopCont = document.getElementById('Shop');

let itemsProps = [
    { quantity: 0, price: 45, _totalPrice: 0 },
    { quantity: 0, price: 45, _totalPrice: 0 },
    { quantity: 0, price: 45, _totalPrice: 0 },
    { quantity: 0, price: 45, _totalPrice: 0 }
];
const totalPriceForEachCard = () => {
    itemsProps.forEach(elem => elem._totalPrice = elem.quantity * elem.price);
    console.log(itemsProps)
}
const _fetchTotalItems = () => {
    let totalitems = 0;
    itemsProps.forEach(item => totalitems += item.quantity)
    document.getElementsByClassName('flag')[0].innerHTML = totalitems;
}



// fetch data from localStorage if exists? OtherWise Put -> [Demo-or-Initial]-Data
function _fetchLS(_LSName) {
    if (is_Empty(_LSName)) updateLS(_LSName, itemsProps);
    else itemsProps = readLS(_LSName);
}

// Filling The Cards In-The-Dom
function createShop() {

    for (let i = 0; i < itemsProps.length; i++) {
        const element = itemsProps[i];
        shopCont.innerHTML += `
            <h2 id="price">${element.price}</h2>
            <button onclick="dec(${i})">-</button>  
            <div id="${i}">${element.quantity}</div>
            <button  onclick="inc(${i})">+</button>`
    }
}

// onclick decrease -> Event-Function
const dec = (i) => {
    if (itemsProps[i].quantity > 0) {
        document.getElementById(i).innerHTML = --itemsProps[i].quantity;
        totalPriceForEachCard();
        _fetchTotalItems();
        updateLS("cardsProps", itemsProps);
    }
}

// onclick increase -> Event-Function
const inc = (i) => {
    if (itemsProps[i].quantity < 20) {
        document.getElementById(i).innerHTML = ++itemsProps[i].quantity;
        totalPriceForEachCard();
        _fetchTotalItems();
        updateLS("cardsProps", itemsProps);
    }
}

// Utility function to read data from ls
const readLS = localStorage_Name => JSON.parse(localStorage.getItem(localStorage_Name)); // Parsing String And Returning OBject!!

// utility function to [Write or Append] data in ls
function updateLS(localStorage_Name, data) {
    localStorage.setItem(localStorage_Name, JSON.stringify(data));
}
const is_Empty = localStorage_Name => {
    if (localStorage.getItem(localStorage_Name) == null)
        return true;
    return false;
}



totalPriceForEachCard();
_fetchLS('cardsProps');
_fetchTotalItems();
createShop();
// export { updateLS, readLS, is_Empty };
