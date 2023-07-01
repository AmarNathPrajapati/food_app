const express = require('express');
const router = express.Router();
const User = require("../models/User");
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const jwtsecret = "developing_myself_as_a_good_software_developer";

router.post('/createuser', 
//peforming validation thru express validator
[
    body('email',"Please Enter Valid Email").isEmail().normalizeEmail(), 
    body('password',"Please Enter Strong Password").isLength(
        {min: 5}
    ),
], async (req, res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        await User.create({
            name: req.body.name, 
            email: req.body.email, 
            password: hashedPassword, 
            location: req.body.location
            })
        res.json({success: true})
    } catch (err) {
        res.status(500).json({"message": "User not added", "error": err})
    }
})
router.post('/login', 
//peforming validation thru express validator
[
    body('email',"Enter the valid Crendentials").isEmail().normalizeEmail(), 
    body('password',"Enter the valid Crendentials").isLength(
        {min: 5}
    ),
], async (req, res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
    try {
        const userData = await User.findOne({email: req.body.email});
        if (!userData) {
            return res.status(400).json({
                success: false,
                message: "User not found"
                });
            }
        //compare password with userdata password
        const passwordCompare = await bcrypt.compare(req.body.password,userData.password);
        if(!passwordCompare){
            return res.status(400).json({
                success: false,
                message: "User not found"
                });
        }
        if(passwordCompare){
            //creating a data object for the jwt signature.
            const data = {
                user:{
                    id: userData.id
                }
            }
            //sign the data with jwt
            const authtoken = jwt.sign(data, jwtsecret);
            return res.json({
                success:true,
                authtoken:authtoken
            })
        }
        res.json({success: true})
    } catch (err) {
        res.status(500).json({"message": "User not added", "error": err})
    }
})

module.exports = router;
