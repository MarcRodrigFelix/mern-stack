// @descGet Get goals
// @routes GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({message: `Get goals`})
}

// @descGet Set goal
// @routes POST /api/goals
// @access Private
const setGoal = (req, res) => {
  console.log(req.body)
  
  res.status(200).json({message: 'Set Goal'})
}

// @descGet Update goal
// @routes PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id} `})
}

// @descGet Delete goals
// @routes DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id} `})
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}