
//it will return you all the div(in the form of array) that have a class panel

const panels=document.querySelectorAll('.panel');
// we are using an arrow function here
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        // with click it will add class "active" to the clicked panel
        panel.classList.add('active');
    });
});

//function to remove the class 'active' form all the panels
function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}