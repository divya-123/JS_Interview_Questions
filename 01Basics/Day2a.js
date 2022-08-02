//Creating a prototype of an array : splice1()

const A = [1,2,3,4,5,6,7,8,9,10];

//console.dir(Array.prototype);

Array.prototype.splice1 = function (start, deleteCount, itemToAdd) {

    let removedElements = [];
    let transformedArray = this;

    //if deleteCount = 0
    if(deleteCount == 0){
        return removedElements;
    }

    //if deleteCount > 0
    if(deleteCount > 0){
    //check start
    //if start =0 or >0
        if(start > 0 || start == 0 ){
            const length = this.length-start;
            const count = length > deleteCount ? deleteCount : length;
                for(let i = start, j = 1; j <=count; i++, j++){
                removedElements.push(this[i]);
                transformedArray[i]= itemToAdd;
            }
        }
    //if start <0
       else if(start<0){
        const startIndex = this.length + start;
        const length = this.length - startIndex;
            const count = length > deleteCount ? deleteCount : length;
            
                for(let i = startIndex , j=1 ; j<=count ; i++,j++){
                    removedElements.push(this[i]);
                    transformedArray[i]= itemToAdd;
                }
       }

        
    }

    //if deleteCount < 0
    else if(deleteCount < 0){
        return removedElements;
    }
    console.log(transformedArray);
    return removedElements;
};

// console.dir(Array.prototype);

B = A.splice1(1,1,100,200);

console.log(A);
console.log(B);

// console.log(A,B);

// Test Cases
// splice1(1,2) = [2,3] Done
// splice1(2,1) = [3] Done
// splice1(0,3) = [1,2,3] Done
// splice1(0,0) = [] Done
// splice1(0,-1) = [] Done
// splice1(-1,-1) = [] Done
// splice1(-3,2) = [8,9] Done
// splice1(-5,10) = [6,7,8,9,10] Not DOne