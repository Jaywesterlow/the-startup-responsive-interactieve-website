import team from "./team.js";

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

function createTeamCards(team) {
    return team.map(member => `
      <div class="card">
        <div class="card-title">
          <img src="${member.img}" alt="portrait of ${member.first_name} ${member.last_name}">
          <article>
            <h3>${member.first_name} ${member.last_name}</h3>
            <h4>${member.job_title}</h4>
          </article>
        </div>
        <div class="card-body">
          <p>${member.department}</p>
          <p>${member.bio}</p>
        </div>
      </div>
    `).join('');
  }
  
  document.getElementById('team-grid').innerHTML = createTeamCards(team);

function filter(job) {
    return team.filter(member => member.job_title === job);
}

console.log(filter('Managing Director'));


