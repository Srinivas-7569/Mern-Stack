// const rootElem=document.getElementById("root");
// const unorderlist=document.createElement("ul");
// const item1=document.createElement("li");
// item1.innerText="item1";
// const item2=document.createElement("li");
// item2.innerText="item2";

// unorderlist.appendChild(item1);                   //it is very tough so we write this in react
// unorderlist.appendChild(item2);
// rootElem.appendChild(unorderlist);

///use|this 
   // _


// const item1=React.createElement('li',{},"Item1");
// console.log("item1:",item1);
// const item2=React.createElement('li',{},"Item2");
// const list=React.createElement("ul",{},[item1,item2]);
// //in react the create element having three parameters 1.tag 2.attribute 3.valuue
// //craete a virtual dom
// const rootElem=document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(rootElem);

// reactRoot.render(list);


//jsx->createelement->object->react->dom->html->monitor
///jsx is extension of js;


//jsx
const list = (
  <ul>
    <li>item1</li>
    <li>item2</li>
  </ul>
);
const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);