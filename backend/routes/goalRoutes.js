const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controller/goalController')


router.get('/', getGoals
// (req, res) => { 
//   // res.send('Get Goals')
//   res.status(200).json({message: 'Get Goals'})}
)

router.post('/', setGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router