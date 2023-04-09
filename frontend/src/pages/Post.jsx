import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Post = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        const fetchAllPost = async ()=>{
            try{
                const res = await axios.get("http://localhost:8080/api/post")
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllPost()
    },[])

    return <div>
        <h1>Post</h1>
        <div className="Post">
            {post.map(post=>(
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <h2>{post.description}</h2>
                    {<img src="" alt="" />}
                    <button className="update"><Link to={`/update/${post.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button>
            <Link to="/add">Add new post</Link>
        </button>
          
           
    </div>
}

export default Post