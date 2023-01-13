const toggleIcon = document.querySelector('.toggle-bars');
const header= document.querySelector('header');

toggleIcon.addEventListener('click',()=>{
    header.classList.toggle('active');
    toggleIcon.classList.toggle('active');
})

//typing animation 

const Text = document.querySelector('.typing');

const LoadText = () =>{
    setTimeout(()=>{
        Text.textContent = "CS Student";
    },0);
    setTimeout(()=>{
        Text.textContent = "Feelancer";
    },4000);
    setTimeout(()=>{
        Text.textContent = "Frentend Develper";
    },8000);
}
LoadText();
setInterval(LoadText,12000)

// scroll show and hide header or menu bar

const MenuHeader = document.querySelector('.menu');

let LastScrollY = 0;
window.addEventListener('scroll',()=>{

    if(window.scrollY > LastScrollY){   
        MenuHeader.classList.add('hide'); 
    }
    else{
        MenuHeader.classList.remove('hide');
    }
   LastScrollY = window.scrollY;
   activeMenu();
})

// active menu section
let li = document.querySelectorAll('.navbar a');
     let sec = document.querySelectorAll('section');
     function activeMenu(){
         let len = sec.length;
         while(--len && window.scrollY + 97 < sec[len].offsetTop){}
         li.forEach(item =>item.classList.remove("active"));
         li[len].classList.add('active');
     }
// links were clicked then header section will be removed

li.forEach((link)=>{
    link.addEventListener('click',()=>{
        header.classList.remove("active");
        toggleIcon.classList.remove('active');

    })
})

//open color panel

const ColorIcon = document.querySelector("#color-btn");
const ColorPanel =document.querySelector('.colors');
ColorIcon.addEventListener('click',()=>{
    ColorPanel.classList.toggle('active');
})
// change text highlight 
const buttons = document.querySelectorAll('.color');

buttons.forEach((btn ,index) =>{
     btn.classList.remove('active');
    btn.onclick = () =>{
        let color = btn.style.backgroundColor;
        document.querySelector(':root').style.setProperty('--skin-color',color);
        console.log('color:',color);
        ColorPanel.classList.remove('active')

    }

});


//light to datrk mode

moonIon = document.querySelector("#them-btn");
moonIon.addEventListener('click',()=>{
   moonIon.classList.toggle('fa-sun');
     ColorPanel.classList.remove('active');
   if(moonIon.classList.contains('fa-sun')){
       document.body.classList.add('active');
   }
   else{
    document.body.classList.remove('active');
   }
})

// send Email 

function sendMail(e){
    e.preventDefault();
    var Params = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        number:document.getElementById('number').value,
        message:document.getElementById('message').value,
    };

    const serviceID ="Your ServiceID";
    const templateID = "Your TemplateID";
    emailjs.send(serviceID, templateID,Params)
    .then(
        response =>{
            name:document.getElementById('name').value =""
            email:document.getElementById('email').value =""
            number:document.getElementById('number').value = ""
            message:document.getElementById('message').value = ""
            console.log(response); 
            alert("You Message Is Sent successfuly!");
       }
    )
    .catch((err)=> console.log(err));
}
    document.querySelector('.submit').addEventListener('click',sendMail);
// loading 

let load = document.querySelector('.loader-container');
function loader(){
  load.classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader,3000);
}
window.onload = fadeOut();