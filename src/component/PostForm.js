import { useState } from "react"

export function PostForm(){
     const [userId,setUserId]=useState("")
     const [title,setTitle]=useState('')
     const [body, setBody]=useState('')

     const handleSubmit = (event) =>{
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
     }

    return <form onSubmit={handleSubmit}>
    <div>
        <input 
            type="text" 
            placeholder= "User id" 
            value={userId} 
            onChange={e =>setUserId(e.target.value)}/>
     </div>
    <div>
        <input type="text" 
            value={title} 
            onChange={e =>setTitle(e.target.value)}
            placeholder="Title" />
    </div>
    <div>
        <input 
            type="text" 
            placeholder="body" 
            value={body} 
            onChange={e =>setBody(e.target.value)}/>
    </div>
    <button type="submit" >submit</button>
</form>

}