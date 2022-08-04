//completed splice1

//start and stop constructor variable
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
    }

}
const obj= new cf();

// 4 states : start start() Do nothing
// stop() start() Start
// start stop() clearInterval
// stopped stop() Dp nothing


// On creation of the Object, 
// 1. random value is assigned
// 2. random value changes every one second 
// 3. on stopping, the timer as well as the value assignment should stop 
