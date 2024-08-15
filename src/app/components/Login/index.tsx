"use client"
import { ChangeEvent, useState } from "react";

const Login = ()=> {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    

    return(
        <form className="w-2/5 border p-10">
            <h2>LOGIN</h2>
            <input placeholder="Enter username" 
            type="text"
            required
            className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            />
            <br/>
            <input placeholder="Enter password"
            type="password" 
            required className="border w-full px-4 py-6 border-gray-500 rounded-xl my-4"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
            <br/>
            <button 
            type="submit"
            className="rounded-xl bg-green-500 text-white cursor-pointer px-6 py-4">
            Submit
            </button>
                           
        </form>
    )
}

export default Login;