import { useState } from "react";
import axios from "axios";

export default function Register(){
  const [form,setForm] = useState({name:"",email:"",password:""});

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register",form);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <h2 className="text-xl mb-4">Register</h2>
        <input className="border p-2 w-full mb-2" placeholder="Name"
          onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})} />
        <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
          onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="bg-green-500 text-white px-4 py-2 w-full">Register</button>
      </form>
    </div>
  )
}