const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/", async (req,res)=>{
  const workout = await Workout.create(req.body);
  res.json(workout);
});

router.get("/:userId", async (req,res)=>{
  const workout = await Workout.find({userId:req.params.userId});
  res.json(workout);
});

module.exports = router;