const express = require('express');
const { mostFrequentOf, medianValueOf, meanValueOf } = require('./helper.js')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let result =  {
    operation: 'mean',
    value: null
}

app.get('/mean', (req, res, next) => {
    let { nums } = req.query
    const arr = nums.split(",")
    if (!arr.every(n => parseInt(n))) {
        return res.status(400).send({ message: "Only numbers allowed"})
    } else if(!req.query){
        return res.status(400).send({ message: "numbers are required"})  
    }
    
    result['value'] = meanValueOf(arr)

    res.json(result)
})

app.get('/median', (req, res, next) => {
    const { nums } = req.query
    const arr = nums.split(",")
    if (!arr.every(n => parseInt(n))) {
        return res.status(400).send({ message: "Only numbers allowed"})
    } else if(!req.query){
        return res.status(400).send({ message: "numbers are required"})  
    }

    arr.sort(function (a, b) { return a - b })
    
    const val = medianValueOf(arr)
    result['value'] = val
        
    res.json(result)
})

app.get('/mode', (req, res, next) => {
    const { nums } = req.query
    const arr = nums.split(",")
    if (!arr.every(n => parseInt(n))) {
        return res.status(400).send({ message: "Only numbers allowed"})
    } else if(!req.query){
        return res.status(400).send({ message: "numbers are required"})  
    }
    // helper function to get most frequent
    result['value'] = mostFrequentOf(arr)
    res.json(result)
})

app.listen(3000, () => console.log('App on port 3000 started'))