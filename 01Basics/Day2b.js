// Variable assigned to an object should be assigned a random value every 1 second. cf()

function cf(){
    
    this.value = Math.random();
    this.getValue = function(){
        setInterval(console.log(this.value),1000);
    
}

};
const object = new cf();
object.getValue();