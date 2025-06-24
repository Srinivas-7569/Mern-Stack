// const domRoot=document.getElementById("root");
// const reactRoot=ReactDOM.createRoot(domRoot);
// const Card1=(
//     <div className="card">
//         <h1>Invitation</h1>
//         <p>Description</p>
//     </div>
// );

// const Card2=(
//     <div className="card">
//         <h1>Warning!!</h1>
//         <p>Description</p>
//     </div>
// );

// const Card3=(
//     <div className="card">
//         <h1>Notificaion</h1>
//         <p>Description</p>
//     </div>
// );

// const container=(
//     <div>
//         {Card1}
//         {Card2}
//         {Card3}
//     </div>
// )
// reactRoot.render(container);



// const domRoot=document.getElementById("root");
// const reactRoot=ReactDOM.createRoot(domRoot);
// const Card1=(title)=>{
//     return(
//         <div class className="card"> 
//         <h1>{title}</h1>
//         <p>Description</p>
//         </div>
//     );
// };
// const Container=(
//     <div>
//         {Card1("hello")}
//         {Card1("hiii")}
//     </div>
// );
// reactRoot.render(Container)

//the function that returns a jsx or react element 
//the arguments that are pass to a component is called props




const domRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domRoot);
const Card1=(obj)=>{
    return(
        <div class className="card"> 
        <h1>{obj.title}</h1>
        <p>Description</p>
        </div>
    );
};

const Card2=(
    
        <div class className="card"> 
        <h1>------Done------</h1>
        <p>Description</p>
        </div>
    );

const Container=(
    <div>
        {Card1("hello")}
        <Card1 title="Notice"></Card1>
        {Card1({title:"warning!!"})}
        {Card2}
    </div>
);
reactRoot.render(Container)