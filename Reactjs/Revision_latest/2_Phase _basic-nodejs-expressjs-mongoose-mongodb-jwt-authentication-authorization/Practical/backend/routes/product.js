const express = require('express');
const router = express.Router();


const {
    createProduct,getListProduct,deleteListProduct,updateProduct
} = require('../controller/product');

const {verifyAuthToken} = require('../middlewares/auth');


router.post('/create',verifyAuthToken,createProduct);
router.get('/list',verifyAuthToken,getListProduct);
router.delete('/list/:id',verifyAuthToken,deleteListProduct);
router.patch('/list/:id',verifyAuthToken,updateProduct);

module.exports = router;