import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){
  const [workouts,setWorkouts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/workouts/USER_ID")
    .then(res=>setWorkouts(res.data));
  },[]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Fitness Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {workouts.map(w=>(
          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold">{w.type}</h2>
            <p>Duration: {w.duration} min</p>
            <p>Calories: {w.calories}</p>
          </div>
        ))}
      </div>
    </div>
  )
}