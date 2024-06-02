const jwt = require('jsonwebtoken')
const key = 'jsghbdfgc';

const Authorization = (user)=>{

    const token = jwt.sign({
        
        _id: user._id,
        name: user.name,
        email: user.email

    },key)
    if(!token) return new Error('Please Enter The Valid Token')
    
    return token

}

const Authintication = (token)=>{

    const user = jwt.verify(token,key)
    if(!user) return new Error('Please Enter The Valid Token');

    return user

}

module.exports = {

    Authorization,
    Authintication

}