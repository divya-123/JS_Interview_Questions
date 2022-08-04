// const A=[1,2,3,4];

// const B = A.reduce((prevValue, curValue, curIndex, A)=>{
//     return prevValue + curValue;
// },0);

// console.log(B);


const button = document.querySelector('button');

// button.onclick = function (){
//     alert('Hiiii');
// };

const buttonClickHandler = () =>{
    alert('Button was clicked!!');
};

// button.onclick = buttonClickHandler; // for only one function handler

button.addEventListener('click',buttonClickHandler); //best way to add an event. Works for multiple functions on Click.
setTimeout(()=>{
    button.removeEventListener('click', buttonClickHandler);
}, 2000);