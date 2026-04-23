import { useState } from "react";
import axios from "axios";

export default function Login(){
  const [form,setForm] = useState({email:"",password:""});

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login",form);
    localStorage.setItem("token",res.data.token);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})} />
        <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
          onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  )
}
