
const Button = Array.from(document.getElementsByClassName("btn"));
const showCont = Array.from(document.getElementsByClassName('ShowCont'));

const inputs = Array.from(document.getElementsByClassName('inputFields'));
const toBeShownUserData = Array.from(document.getElementsByClassName('userData'));
const SaveChanges = (document.getElementById('SaveChanges'));

SaveChanges.addEventListener('click', ()=> {
    inputs.forEach((elem, pos) => {
        console.log(elem.value) ;
        toBeShownUserData[pos].innerHTML = elem.value;
    })
    setTimeout(() => {
        
        Button[0].click();
    }, 100);
}) 

Button.forEach((elem, pos) => {
    elem.onclick = () => {
        toBeShownUserData.forEach((elem, pos) => {
            console.log(elem.value) ;
            inputs[pos].value = elem.innerHTML;
        })  

        const clickedBtn = pos;
        showCont.forEach((elem, pos) => {
            elem.style.display = 'none';

            Button[pos].style.background = 'white';
            Button[pos].style.borderBottom = '2px solid #fff';
        })      
        // Container
        showCont[clickedBtn].style.display = 'block'

        // Buttons
        Button[clickedBtn].style.background = '#f0f0f0';
        Button[clickedBtn].style.borderBottom = '2px solid #65c8fd';
        
    }
})
Button[0].click();

