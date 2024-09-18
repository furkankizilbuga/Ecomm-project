import axios from "axios"
import { useEffect, useState } from "react"

export default function CommentMock() {

    const [data, setData] = useState({
        email: "",
        content: "",
        createdAt: ""
    });

    useEffect(() => {
        axios.get("http://localhost:9000/jun/shop/comments/2")
        .then(res => {
            const comment = res.data[0];
    
            setData({
                ...data,
                email: comment.user.email,
                content: comment.content,
                createdAt: comment.createdAt
            })
    
        })
        .catch(err => console.log(err))
    }, [])

    

    return(
        <div className="flex flex-col items-center">
            <h2 className="text-primaryBlue">{data.email}</h2>
            <p>{data.content}</p>
            <p className="text-red-300">{data.createdAt}</p>
        </div>
    )
}