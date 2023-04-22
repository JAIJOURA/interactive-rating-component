let one = document.getElementsByTagName("button")[0];
let two = document.getElementsByTagName("button")[1];
let three = document.getElementsByTagName("button")[2];
let four = document.getElementsByTagName("button")[3];
let five = document.getElementsByTagName("button")[4];
let sub = document.getElementsByTagName("button")[5];
let cont= document.querySelector(".container");

let i=""
one.addEventListener("click" ,()=>{
    one.classList.toggle("active");
    i=1;

})
two.addEventListener("click" ,()=>{
    two.classList.toggle("active");
    i=2
})
three.addEventListener("click" ,()=>{
    three.classList.toggle("active");
     i=3
})
four.addEventListener("click" ,()=>{
    four.classList.toggle("active");
     i=4
})
five.addEventListener("click" ,()=>{
    five.classList.toggle("active"); 
     i=5
})
ihtml=""
sub.addEventListener("click",()=>{
ihtml=`<div class="thank-you"><div class="thank-you-img"><img src="images/illustration-thank-you.svg" alt="thank-you"></div>
    
    <span class="selected-para">You selected ${i} out of 5</span>
    
    
    <h2 class="center-heading">Thank you!</h2>
    
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!</p>
    </div>
    `   
    cont.innerHTML=ihtml;
})