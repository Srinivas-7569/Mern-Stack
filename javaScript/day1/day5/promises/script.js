const request=window.fetch("https://dummyjson.com/products");
console.log("request:",request);
console.log("request:",request);

const successCb=(response)=>{
    console.log("response",response);
}
const error=((err)=>{
    alert("Unable to get products-->",err.message)
});