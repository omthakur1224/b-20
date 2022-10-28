const express = require('express');

const app = express();

const port = 8000;

app.listen(port,(req,res)=>{
  console.log(`app is running on port ${port}`)
})
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
      //pass second argument as path where you want to store your uploades
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //you can define the file name for the files to store in your folder
      cb(null, file.fieldname + '-' + uniqueSuffix)

    }
  })
  
  const upload = multer({ storage: storage })
  
  app.post('/profile', upload.single('avatar'), function (req, res, next) {
 //param inside the upoad.single is to be same as fieldname in postman/thunderclient
    console.log('posting')
    res.send('done')
  
  })
  app.post('/profiles', upload.array("photos"), function (req, res) {
   res.send("done multiple uploads")
  })