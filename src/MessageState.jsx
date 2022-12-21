import { Button } from "./Button";
import { useState, useEffect } from "react";
import { Field } from "./Field";
export const Message = () => {

    const [message, setMessage] = useState("")

    useEffect(
        () => {
            console.log("Message changed");
        }
    , [])

    return(
        <div>
            <h2>Message App</h2>
            <Field handleChange={(e)=>{
                setMessage(e.target.value)
            }}/>
            <Button handler={
                () => showMessage(message)
            }/>
            <Field value={message} disabled={true}/>
        </div>

    )

}

const showMessage = (message) =>{
    alert(message)
}