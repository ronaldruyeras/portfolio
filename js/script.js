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
    {skill:'html',level:'80%'},
    {skill:'css',level:'70%'},
    {skill:'javascript',level:'78%'},
    {skill:'mysql',level:'79%'},
    {skill:'node',level:'60%'},
    {skill:'python',level:'10%'},
    {skill:'java',level:'80%'},
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