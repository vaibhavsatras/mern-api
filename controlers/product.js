const productModel = require("../model/products")

const addProduct = (req,resp)=>{
        
    // const {title,description,productImg,price} = req.body

    // if(!title && !description && !price) throw new Error('Please Enter All Product Details...')
    
    const productData = new productModel({

        title: 'Computer Book',
        description: 'Computer Funtdamentals',
        productImg: '/images/image4.jpg',
        price: 'Rs.350.00'

    })

    const data  = productData.save();

    data.then((result)=>{

        resp.status(200).json({result: 'Data Save Successfully', result})

    })

}

const ProductList = (req,resp)=>{

    const Products = productModel.find()
    
    Products.then((data)=>{

        return data

    })


}

module.exports = {

    addProduct,
    ProductList

}