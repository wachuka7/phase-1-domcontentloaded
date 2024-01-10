// Your code goes here

// const text =document.querySelector('p');
// text.innerText= 'JavaScript is so cool. It lets me add text to my page programmatically.';
document.addEventListener("DOMContentLoaded", function(){ 
    const newText=document.querySelector('#text');
    newText.textContent="This is really cool!";
});