require('./database/database')
const express = require('express');
const router = require('./routers/userRouter');
const productRoute = require('./routers/productRouter')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = 5000
const path = require('path')


app.use(cors({

    origin: ["https://fornt-end-vbyj.vercel.app"],
    methods:["POST","GET"],
    credential: true

}));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.resolve('./public')))

app.get('/',(req,resp)=>{

        resp.send('Hello Vaibhav')

})
app.use('/user',router);
app.use('/product',productRoute)

app.listen(PORT, ()=>{console.log(`The Serever Is Running On http://localhost:${PORT}`)})
