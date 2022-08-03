const A=[1,2,3,4];

const B = A.reduce((prevValue, curValue, curIndex, A)=>{
    return prevValue + curValue;
},0);

console.log(B);