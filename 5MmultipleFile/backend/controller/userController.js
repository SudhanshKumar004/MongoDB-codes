const productModel = require("../models/userModel")


const Datasave = async(req,res)=>{
    const {product, brand, price} = req.body;
    const imageUrls = req.files.map(files=>files.path);
    const defaultImage = imageUrls[0];

    const Product = await productModel.create({
        product:product,
        brand:brand,
        price:price,
        defaultImage:defaultImage,
        images:imageUrls
    })

    res.send(Product)
}

const DataDisplay = async(req,res)=>{
    const datasend = await productModel.find();

    res.send(datasend)
}

module.exports={
    Datasave,
    DataDisplay
}