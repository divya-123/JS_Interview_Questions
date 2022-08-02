
//Creating a prototype of Array : divyaMap 
//Solution submitted on 1st Aug 2022
Array.prototype.divyaMap = function (enteredFunction) {

    let B = [];

    for(let i=0; i<this.length; i++){
        let b = enteredFunction(this[i]);
        B.push(b);
    }

    return B;

}

const A = [1,2,3,4];

B = A.divyaMap(m=>m*2);

const C = [7,8,9,10];




// console.log(A,B,__proto__);
console.log(C);

// Object.setPrototypeOf(A, {
//     ...Object.getPrototypeOf(A),
//     divyaMap: function() {
//         A.map();
//     }
// });

