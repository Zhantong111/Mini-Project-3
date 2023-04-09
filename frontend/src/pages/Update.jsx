import React, { useState } from "react"
import Post from "./Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [post,setPost] = useState({
        title:"",
        description:"",
        image:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPost(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8080/api/post", post)
            navigate("/")
        }catch(err){
            console.log(err)
        }


    }

    console.log(Post)
    return (
        <div className="form">
            <h1>Update New Post</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="desciption" onChange={handleChange} name="description" />
            <input type="text" placeholder="image" onChange={handleChange} name="image" />
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update;