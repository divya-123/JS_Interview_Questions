//completed splice1

//start and stop constructor variable
function cf(){
    
    this.value = Math.random();
    const stopId = setInterval(()=>{this.value = Math.random()}, 1000);
    this.start = function(){
        setInterval(()=>console.log(this.value),1000);    
    }
    this.stop = function(){
    clearInterval(stopId);
    }
}
const obj= new cf();