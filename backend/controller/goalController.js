const asyncHandler = require('express-async-handler')


// @descGet Get goals
// @routes GET /api/goals
// @access Private
const getGoals = asynchHandler( async (req, res) => {
  res.status(200).json({message: `Get goals`})
})

// @descGet Set goal
// @routes POST /api/goals
// @access Private
const setGoal = asynchHandler( async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add some text')
  } 

  res.status(200).json({message: 'Set Goal'})
})

// @descGet Update goal
// @routes PUT /api/goals/:id
// @access Private
const updateGoal = asynchHandler( async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id} `})
})

// @descGet Delete goals
// @routes DELETE /api/goals/:id
// @access Private
const deleteGoal = asynchHandler( async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id} `})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}