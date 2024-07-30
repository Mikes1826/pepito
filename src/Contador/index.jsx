import React from "react";
import { useState } from "react";
import "./Contador.css";


function Contador (){
    const [count, setCount] = useState(0);
    return (
        <div className="button-container">
            <button onClick = {() => setCount((count) => count + 1)}>
                count is {count} 
            </button>
        </div>
    );
};

export { Contador };