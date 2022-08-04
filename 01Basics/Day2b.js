// Variable assigned to an object should be assigned a random value every 1 second. cf()

function cf(){
    
    this.value = setInterval(Math.random,1000);
    this.getValue = function(){
        setInterval(console.log(this.value),1000);
    
}

};
const obj= new cf();
obj.getValue();