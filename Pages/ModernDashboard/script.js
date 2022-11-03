let logoutBtn = document.getElementById('logoutBtn');
document.getElementById('ProfilePic').addEventListener('click', (ev) => {
     if(logoutBtn.style.display == 'flex') {
        logoutBtn.style.display = 'none';
    }else{
         logoutBtn.style.display = 'flex';
     }
})

const menuSwitch = document.getElementById('menu'), sideBarCont = document.getElementById('sideBar');

menuSwitch.onclick = ()=>{
    sideBarCont.style.width = '14rem'
}

sideBarCont.onclick = ()=> {
    sideBarCont.style.width = '0.1rem'
}