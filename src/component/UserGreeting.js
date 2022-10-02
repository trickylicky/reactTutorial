import { useState } from "react";


export function UserGreeting(){
    const [isEqualTrue , setisEqualTrue] = useState(false)

     const isLoggedIn = false
    function handleLogin(){

        setisEqualTrue(!isLoggedIn)
    }
    
    return (
    <>
    <div>welcome {isEqualTrue && "tricky"}</div>
    <button onClick={handleLogin} >log in</button>
    </>

    )
}