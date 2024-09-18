import axios from "axios"
import { useEffect, useState } from "react"

export default function UserMock() {

    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        createdAt: ""
    });

    useEffect(() => {
        axios.get("http://localhost:9000/jun/user/email")
        .then(res => {
            const email = res.data;

            axios.get("http://localhost:9000/jun/user/findbyemail?email=" + email)
            .then(res => {
                setUserData({
                    ...userData,
                    email: res.data.email,
                    createdAt: res.data.createdAt
                })
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="flex flex-col items-center">
            <p>Email: {userData.email}</p>
            <p>First name: {userData.firstName}</p>
            <p>Last name: {userData.lastName}</p>
            <p>Created At: {userData.createdAt}</p>
        </div>
    )
}