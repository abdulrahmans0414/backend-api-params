import { User } from "../models/user.js"

export const getAllUsers = async(req, res) => {
    const users = await User.find({})
  
    const keyword = req.query.keyword
    console.log(keyword);
    
        res.json({
            success: true,
            users,
        });
    };

export const register =  async(req, res) => {
const {name, email, password} = req.body

    const users = await User.create({
        name,
        email,
        password,
    });
    
        res.status(201).cookie("temp","lol").json({
            success: true,
            message:"Success"
        });
    };

export const getUserDetails =  async(req, res) => {
    const {id} = req.body;
    const user = await User.findById(id)
   
    res.json({
        success: true,
        user,
    })
}