var offer =document.querySelector(".offer-bar")
var close=document.getElementById("offer-mark")
close.addEventListener("click",function(){
offer.style.display="none"
})
// side navbar
var sidenav=document.querySelector(".menubar-container")
var menuicon=document.getElementById("menu-icon")
menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft="0px"

})
// close-nav
var closenav=document.getElementById("close-mark")
var sidenav=document.querySelector(".menubar-container")
closenav.addEventListener("click",function(){
    sidenav.style.marginLeft="-65%"
})
var sliderleftbutton = document.getElementById("left-button")
var sliderrightbutton =document.getElementById("right-button")
var sliderimage= document.querySelector(".image")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)




