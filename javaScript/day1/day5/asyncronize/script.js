console.log("start")
const timeDelayInMS=10000;
const callbackFunc=()=>{
console.log("hello");
}

//window.setTimeout(callbackFunc,timeDelayInMS);
window.setInterval(callbackFunc,timeDelayInMS);//it will prinr hello for evry 10 seconds
console.log("end")