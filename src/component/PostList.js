import { useState, useEffect } from "react";

export function PostList (){
    const [posts,setPosts] =useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => {console.log(err)
        })
    },[])


    return (<>
    <>
        {
            posts.map(post => {
                return <div key={post.id} >
                    <div className="container">
                    <div className="newClass">
                    <h6>{post.title}</h6>
                    <p>{post.body}</p>
                    </div>
                    </div>
                    </div>
            })
        }
    </>
    </>)
}