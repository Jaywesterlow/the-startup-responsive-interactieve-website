const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
const body = document.querySelector('body');

window.onload=function(){
  menuBtn.addEventListener("click", openMenu);
}

function openMenu(){
  menuBtn.classList.toggle('active')
  menuContent.classList.toggle('menuOpen')
  body.classList.toggle('maxHeight')
}

fetch('team.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    console.log(obj);
}).catch(function (error) {
    console.error('er is iets fout gegaan!');
    console.error(error);
})
