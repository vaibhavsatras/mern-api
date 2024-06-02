const { Authintication } = require("../services/authorization")


const Auth = (req,resp,next)=>{

        const token = req.localstorage?.token
        if(!token) throw new Error('Token Is Not Found...')
        
        const user =  Authintication(token)
        if(!user) throw new Error('User Not Found...')

        req.user = user

        return next()        

}


module.exports = {

    Auth

}