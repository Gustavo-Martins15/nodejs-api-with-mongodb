const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruit')



//getting all
router.get('/', async (req,res)=>{
    try{
        const fruits = await Fruit.find()
        res.json(fruits)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//getting by id
router.get('/:id',getUser, (req,res)=>{
    res.send(req.fruit)
})

//creating
router.post('/', async (req,res)=>{
    const fruit = new Fruit({
        name:req.body.name,
        family:req.body.family,
        vitamin:req.body.vitamin
    })

    try{
        const newFruit = fruit.save()
        res.status(201).json(newFruit)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

//deleting by id
router.delete('/:id',getUser, async(req,res)=>{
    try{
        await res.fruit.remove()
        res.json({message:'deleted fruit'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
});

//updating by id
router.patch('/:id',getUser, async (req,res)=>{
    if(req.body.name !== null){
        res.fruit.name = req.body.name
    }

    if(req.body.family !== null){
        res.fruit.family = req.body.family
    }

    if(req.body.vitamin !== null){
        res.fruit.vitamin = req.body.vitamin
    }

    try{
        const updatedFruit = await res.fruit.save()
        res.status(400).json(updatedFruit)
    }catch(err){
        res.json({message: err.message})
    }
})

async function getUser (req,res,next){
    let fruit
    try{
        fruit = await Fruit.findById(req.params.id)
        if(fruit === null){
            return res.status(404).json({message: "cannot find fruit"})
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }

    res.fruit = fruit

    next()
}

module.exports = router