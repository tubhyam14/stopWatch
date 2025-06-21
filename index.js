let flag=false;
let startTime;
let elaspedTime=0;

function start(){
  

    if (!flag)
    {
        flag=true;
        startTime= Date.now()-elaspedTime;
        timer=setInterval(update,10);

    }


}

function stop(){
    clearInterval(timer)
    flag=false;

}

function reset(){
    let hour="00"
    let minute="00"
    let second="00"
    let milis="00"
    elaspedTime=0;
    document.getElementById("display").textContent=`${hour}:${minute}:${second}:${milis}`

}

function update(){

    if(flag){
    const currentTime=Date.now();
    elaspedTime=currentTime-startTime;
    let hour=String(Math.floor(elaspedTime/(1000*60*60))).padStart(2,"0");
    let minute=String(Math.floor(elaspedTime/(1000*60)%60)).padStart(2,"0");
    let second=String(Math.floor(elaspedTime/1000)%60).padStart(2,"0");
    let milis=String(Math.floor(elaspedTime%1000/10)).padStart(2,"0");


    document.getElementById("display").textContent=`${hour}:${minute}:${second}:${milis}`


    }

}


