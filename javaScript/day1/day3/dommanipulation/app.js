//append for last
//prepand for first
//inser for any position
const title=document.createElement("h1");
const parent=document.getElementById("root");
const title1=document.createElement("h1");
title.innerText="hello from dom1";
title1.innerText="hello from dom2";
title1.style.color="red";
title1.style.textDecoration="underline";
parent.append(title1);
parent.append(title);