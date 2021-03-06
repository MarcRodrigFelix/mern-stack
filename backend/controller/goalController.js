const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel'); //IMPORT MODEL


// @descGet Get goals
// @routes GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req, res) => {
  const goals = await Goal.find() // GET GOALS FROM MODEL

  res.status(200).json(goals)
})

// @descGet Set goal
// @routes POST /api/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add some text')
  }

  const goal = await Goal.create({ // CREATE NEW GOAL
    text: req.body.text,
  })

  res.status(200).json(goal)
})

// @descGet Update goal
// @routes PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, 
    {
      new: true,
    }
  )

  res.status(200).json(updatedGoal)
})

// @descGet Delete goals
// @routes DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}