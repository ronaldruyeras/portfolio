var menu = document.querySelector('nav ul');
var btn = document.getElementById('togglebtn');
var navbarlinks = document.querySelectorAll('#mymenu a');


btn.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle('open');
});


// add event listener to each link
navbarlinks.forEach(elem => elem.addEventListener("click", function(e){
    if(menu.classList.contains("open")){
        menu.classList.remove("open");
        //console.log(this);
    }

}));

const mySkills = [
    {skill:'HTML',level:'70%'},
    {skill:'CSS',level:'60%'},
    {skill:'JAVASCRIPT',level:'75%'},
    {skill:'MYSQL',level:'75%'},
    {skill:'NODEJS',level:'50%'},
    {skill:'PHP/CODEIGNITER',level:'40%'},
    {skill:'JAVA',level:'60%'},
];

const skill_div = mySkills.map(function(s){
  return `<div class="skillBox">
                <p>${s.skill}<span class="float-right">${s.level}</span></p>
                <div class="skill">
                    <div class="skill_level" style="width: ${s.level}"></div>
                </div>
            </div>`;
});

console.log(skill_div.join(''));
document.getElementById('skills').innerHTML = ' <h2>Skills</h2>'+ skill_div.join('');