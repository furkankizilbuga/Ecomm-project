/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react"

export default function RegisterMock() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [response, setResponse] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:9000/jun/register", formData)
        .then(res => {
            console.log(res);
            setResponse(res.data.message);
        })
        .catch(err => {
            console.log(err);
            setResponse(err.response.data.message);
        })
    }

    return(
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
            <input onChange={inputHandler} name="email" placeholder="Email giriniz" value={formData.email}></input>
            <input onChange={inputHandler} name="password" type="password" placeholder="Şifre giriniz" value={formData.password}></input>
            <button className="bg-green-300 px-8 py-2 rounded">Kayıt ol</button>
            <p>{response}</p>
        </form>
    )
}