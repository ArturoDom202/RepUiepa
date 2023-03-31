const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
        let uploadPath = '';
        if (file.mimetype.startsWith('image')) {
          uploadPath = 'Archivos/images';
        } else {
          uploadPath = 'Archivos/pdfs';
        }
        cb(null, uploadPath);
      },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.fields([
    { name: 'pdf', maxCount: 1 },
    { name: 'img', maxCount: 1 }
  ])