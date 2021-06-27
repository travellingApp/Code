const express = require('express');
const router = express.Router();

const UpPost=require('../controllers/uploadPost');

router.post('/UploadPost',UpPost);

module.exports=router