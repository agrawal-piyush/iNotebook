const express = require('express')
const router = express.Router()
const {body, validationResult } = require('express-validator')
const User = require('../models/User')

///creating user using POST"/api/auth"

router.post('/createuser' ,[
  body('name','Enter a valid name').isLength({min:3}),
  body('email','Enter a valid email').isEmail(),
  body('password','password length must be >5').isLength({min:5}),


],async (req,res)=>{
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
try{


  let user =  await User.findOne({email:req.body.email})
  //console.log(user)
  if (user){
    return res.status(400).json({error:"Sorry we can't entertain duplicate emails"})
  }
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  // .then(user => res.json(user))
  // .catch(err=> {console.log(err) 
  //   res.json({error :"please enter valid details", message:err.message})})
  res.json(user)
}
catch(error){
  console.error(error.message);
  res.status(500).send("some error occured")
}

})


module.exports = router