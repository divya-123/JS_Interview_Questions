//Creating a prototype of an array : splice1()

const A = [1,2,3,4,5,6,7,8,9,10];

//console.dir(Array.prototype);

Array.prototype.splice1 = function (start, deleteCount, itemToAdd) {
    //console.log(typeof arguments);

    let removedElements = [];
    //let transformedArray = this;
    const itemsToBeAdded = Array.from(arguments).slice(2);
    let transformedArray = [];

    //console.log(itemsToBeAdded);

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
            //check the number of elements to be counted to delete
            const itemsToBeAddedCount = itemsToBeAdded.length;
            const count = length > deleteCount ? deleteCount : length;
            const endIndex = start + itemsToBeAddedCount;

            //push all the elements of A into transformed array before the start element
                for (let m = 0; m< start; m++){
                    transformedArray.push(this[m]);
                }
            //push the elements of A into removed array after the start and before end Index
                for(let i = start, j = 1 ; j <=count ; i++, j++){
                    removedElements.push(this[i]);
                }
            //push all elements of itemsToBEAdded into transformed array after the endIndex of A 
                for(let n=0; n<itemsToBeAddedCount; n++){
                    transformedArray.push(itemsToBeAdded[n]);
                }
            //push all elements of A after the endIndex into transformed Array
                for(let k = endIndex ; k < this.length ; k++ ){
                    transformedArray.push(this[k]);
                }
            
        }
    //if start <0
       else if(start<0){

            const startIndex = this.length + start;
            const length = this.length-startIndex;
            //check the number of elements to be counted to delete
            const itemsToBeAddedCount = itemsToBeAdded.length;
            const count = length > deleteCount ? deleteCount : length;
            const endIndex = startIndex + itemsToBeAddedCount;

            //push all the elements of A into transformed array before the start element
                for (let m = 0; m< startIndex; m++){
                    transformedArray.push(this[m]);
                }
            //push the elements of A into removed array after the start and before end Index
                for(let i = startIndex, j = 1 ; j <=count ; i++, j++){
                    removedElements.push(this[i]);
                }
            //push all elements of itemsToBEAdded into transformed array after the endIndex of A 
                for(let n=0; n<itemsToBeAddedCount; n++){
                    transformedArray.push(itemsToBeAdded[n]);
                }
            //push all elements of A after the endIndex into transformed Array
                for(let k = endIndex ; k < this.length ; k++ ){
                    transformedArray.push(this[k]);
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

B = A.splice1(-2,3,99,100,101);

//console.log(transformedArray);
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

//splice(4,2,100,200)