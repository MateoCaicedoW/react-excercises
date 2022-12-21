import React from "react";
import ReactDOM from "react-dom/client";
// import {Greeting,UserCard} from "./Greeting";
// import {Product} from "./Product"
// import {Form} from "./Form"
// import {Greet} from "./Greet" 
import { Counter } from "./Counter";
import { Message } from "./MessageState";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>  
    
    <Message/>
    <Counter/>
    </>
);


