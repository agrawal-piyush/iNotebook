var fetchuser = require('../middleware/fetchuser')
const express = require('express')
const router = express.Router()
const {body, validationResult } = require('express-validator')
const User = require('../models/User')
const bcrypt = require ('bcryptjs')
var jwt = require('jsonwebtoken')
const JWT_SECRET ="iamgood$boy"
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
  const salt = await bcrypt.genSalt(10)
  secPass =  await bcrypt.hash(req.body.password,salt) 
  user = await User.create({
  name: req.body.name,
  email: req.body.email,
  password: secPass
  })
  const data = {
    user:{
      id:user.id
    }
  }
  const authToken = jwt.sign(data,JWT_SECRET)
  //console.log(jwtData)
  res.json({authToken})
  //res.json(user)
}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal error occured")
}

})

///Logging a  user using POST"/api/auth"  No login required
router.post('/login' ,[
  body('email','Enter a valid email').isEmail(),
  body('password',"Password can't be blank"),
 
],async (req,res)=>{
  const errors = validationResult(req)
  if (!errors.isEmpty()) {

    return res.status(400).json({ errors: errors.array() });
  }

const {email, password} = req.body
try {
  let user = await User.findOne({email})
  if(!user){
    return res.status(400).json({error: "Please try to login with correct credentials"})
  }
  const passcomp=  await bcrypt.compare(password,user.password)
  if(!passcomp){
    return res.status(400).json({error: "Please try to login with correct credentials"})
  }

  const payload ={
    user:{
      id : user.id
    }
  }
  const authToken = jwt.sign(payload,JWT_SECRET)
  //console.log(jwtData)
  res.json({authToken})
 
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal error occured")
}
})


/////getting  user  details using POST"/api/auth"  No login required

router.post('/getuser',fetchuser ,async (req,res)=>{

try {
  userId =req.user.id
  const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal error occured")
  
}
})
module.exports = router