const userModel = require("../model/users")
const { Authorization } = require("../services/authorization")

const addUser = (req,resp)=>{

    const {name,email,password} = req.body

    if(!name && !email && !password) resp.json({result:"Please Enter The Valid Data..."})
    

    const user = new userModel({

        name,
        email,
        password

    })

    const data = user.save()
    data.then((result)=>{

        resp.status(200).json({result:'Data Save Successfully',result})

    })

}

const SignIn = (req,resp)=>{

    const {email,password} = req.body

    if(!email && !password) return new Error('Please Enter The Valid Email And Password...')
    
    const isMatch = userModel.matchpassword(email,password)
    
    isMatch.then((user)=>{

        const token = Authorization(user)
        
        resp.status(200).json({result:'Loged In Successfully...',
        user:user,
        token:token

        })

    })

}

module.exports =  {
    addUser,
    SignIn
}