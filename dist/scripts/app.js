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

// app.js
fetch('team.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        // Hier kun je de JSON-gegevens verder verwerken
    })
    .catch(function() {
        console.log("Er is een fout opgetreden bij het ophalen van het bestand.");
    });
