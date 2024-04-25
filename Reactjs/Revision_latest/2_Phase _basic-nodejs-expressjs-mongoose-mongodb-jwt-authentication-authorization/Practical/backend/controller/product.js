const Product = require('../models/product');

const createProduct= async(req,res)=>{
   try{
    console.log("inside the product controller",req.body);
    const post= new Product({...req.body});
    let result = await post.save();
    res.status(201).json({
        message:"successfully saved",
        post:result
    })
   }catch(err){
    res.status(500).json({
        message:err.message?err.message:'internal server error'
    })
   }
}

const getListProduct=async(req,res)=>{
    try{
        let query={}
        if(req.roles === 'employee'){
          query.email = req.body.email;
        }
        let result = await Product.find(query);
        res.status(200).json({
            message:'successfully fetched',
            post:result
        })

    }catch(err){
        res.status(500).json({
            message:err.message?err.message:'internal server error'
        })
    }
}

const deleteListProduct=async(req,res)=>{
    try{
        if(req.roles.includes('employee') ){
           return res.status(404).json({
                message:'Unauthorized transaction.Employee cannot delete the data'
            })
        }
        let result = await Product.deleteOne({_id:req.params.id});
        res.status(200).json({
            message:'successfully deleted',
            post:result
        })

    }catch(err){
        res.status(500).json({
            message:err.message?err.message:'internal server error'
        })
    }
}

const updateProduct= async(req,res)=>{
    try{
     let result = await Product.findByIdAndUpdate({_id:req.params.id},{...req.body})
     res.status(201).json({
         message:"successfully updated",
         post:result
     })
    }catch(err){
     res.status(500).json({
         message:err.message?err.message:'internal server error'
     })
    }
 }

module.exports.createProduct = createProduct;
module.exports.getListProduct = getListProduct;
module.exports.deleteListProduct = deleteListProduct;
module.exports.updateProduct = updateProduct;

