
function cf(){
    //library which generates a random value    

    //initialize a variable with a random number
    this.value = Math.random();
    let stopId = setInterval((()=>{this.value = Math.random()}),1000);
    //on start, change the variable every one second
    this.start = function() {        
        if(stopId === null){
            stopId = setInterval((()=>{this.value = Math.random()}),1000);
        } else if (stopId !== null){
            return;
        }
    };

    //on stop, register the last registered value
    this.stop = function() {
        if(stopId!== null){
            clearInterval(stopId);
            stopId = null;
        } else if (stopId === null){
            return;
        }
    };

    //to get Value print that value which is last registered
    this.getValue = function () {
        console.log(this.value);
    };
 
    //There are n callbacks. Array of callback functions
    let callbacks = []; 
    // use the latest value in those callback functions

    //When user calls a function through eventListener
    this.addEventListener = function (callbackFunction) {
    //The browser should loop through the callbacks array
        callbacks.push(callbackFunction);
        setTimeout(()=>{
            callbacks.forEach(()=>{callbackFunction(this.value)});
        },1000);       

    };
    
    
}
const obj= new cf();
obj.addEventListener((val1)=>{console.log('In 1st Listener' + val1)});
obj.addEventListener((val2)=>{console.log('In 2nd Listener' + val2)});
obj.addEventListener((val3)=>{console.log('In 3rd Listener'+ val3)});


