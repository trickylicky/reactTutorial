 import { useState } from "react"

 export function Message(){
    const [message,setMessage] =useState("welcome visitor")

    return (
        <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage("welcome you now typing")}>hello</button>
        </div>
    )
 }