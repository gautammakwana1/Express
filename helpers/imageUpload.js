const multer = require('multer');

const Image = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'images');
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    },
});

exports.upload = multer({storage: Image});