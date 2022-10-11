const { Router } = require('express')
const question = require('../models/questions')
const tags = require('../models/tags')
const routes = Router()

routes.get('/tag',async (req, res) => {
    const data = await tags.find({});

    
    if(data){
        console.log(data)
        res.status(200).json({message:data})
    }else{
        res.status(500).json({message:"try again"})
    }
})

routes.post('/tag',async (req,res)=>{
    const {tagname} = req.body;

    const data = new tags({
        tagname,
    })

    const result = await data.save();

    if(result){
        console.log(result);
        res.status(200).json({message:result});
    }else{
        res.status(500).json({message:"Some error try again"})
    }
})

module.exports = {
    base: routes
}
