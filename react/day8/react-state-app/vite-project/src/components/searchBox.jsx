//re-rendering -->re-run the function
//component is rerendered only when the state change or props change
//state variables are give to use by react
//if te value the sate variable vhange==>state of the component has changed
import { useState } from "react";
import "./searchBox.css";
const SearchBox=()=>{
    // let searchText="fgh";
    const[monitor,remote] =useState();
    const handleSearch=(e)=>{
        // searchText=e.target.value;
        // console.log(searchText);
        remote(e.target.value)
        console.log(monitor);

    };
return(
    <div className="search">
        <input  className ="box" type="text" onKeyUp={handleSearch} />
        <h3>{monitor}</h3>
    </div>
);
};
export{SearchBox};