const { createHmac } = require('crypto')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

        name:{

            type: String,
            required: true

        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        profileImg:{

            type: String,
            default: '/logo.png'

        },
        role:{
            type: String,
            enum: ['USER','ADMIN'],
            default :'USER'
        } ,      
        salt:{
            type: String
        }

},{timestamps: true})


userSchema.pre('save',function (next){

        const user = this
        
        if(!user) throw new Error('Please Enter The User Data...')
        
        const salt = 'dnjdljdjdndnnhql';
        const  hashPassword = createHmac('SHA256',salt).update(user.password).digest('hex')

        this.salt = salt,
        this.password = hashPassword

        return next()

})

userSchema.static('matchpassword', async function (email,password){

        const user = await this.findOne({email:email})
        if(!user) throw new Error('Email Address Does Not Exists...')
        
        const salt = user.salt
        const oldPassword = user.password

        const newHashPassword = createHmac('SHA256',salt).update(password).digest('hex')

        if(oldPassword !== newHashPassword) throw new Error('The Password Does Not Matched')
        
        return user
        
})



const userModel = mongoose.model('users',userSchema)

module.exports = userModel