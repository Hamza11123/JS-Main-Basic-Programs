const shopCont = document.getElementById('Shop');
const totalBill = document.getElementById('tBill');

const getTotolBill = ()=>{
    let total = 0;
    selectedProducts.forEach(elem =>{
        total += elem._totalPrice;
    });
    return total;
}

// utility function to read data from ls
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

let selectedProducts = readLS('cardsProps').filter( product => product.quantity != 0);
totalBill.innerHTML = getTotolBill()+'$';

// console.log(selectedProducts)
selectedProducts.forEach((elem, ind)=>{
    shopCont.innerHTML += `
    <h2 id="tPrice-${ind}">${elem._totalPrice}</h2>
    <button onclick="dec(${ind})">-</button>
    <div id="${ind}">${elem.quantity}</div>
    <button onclick="inc(${ind})">+</button>`
})

// onclick decrease -> Event-Function
const dec = (i) => {
    if (selectedProducts[i].quantity > 0) {
        document.getElementById(i).innerHTML = --selectedProducts[i].quantity;

        selectedProducts[i]._totalPrice = selectedProducts[i].quantity * selectedProducts[i].price
        document.getElementById(`tPrice-${i}`).innerHTML = selectedProducts[i]._totalPrice;
        updateLS("selectedCardsProps", selectedProducts);
        totalBill.innerHTML = getTotolBill()+'$';
    }
}

// onclick increase -> Event-Function
const inc = (i) => {
    if (selectedProducts[i].quantity < 20) {
        document.getElementById(i).innerHTML = ++selectedProducts[i].quantity;
        selectedProducts[i]._totalPrice = selectedProducts[i].quantity * selectedProducts[i].price
        document.getElementById(`tPrice-${i}`).innerHTML = selectedProducts[i]._totalPrice;
        
        updateLS("selectedCardsProps", selectedProducts);
        totalBill.innerHTML = getTotolBill()+'$';
    }
}
