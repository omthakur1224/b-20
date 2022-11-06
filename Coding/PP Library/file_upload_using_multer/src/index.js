const express = require('express');

const app = express();

const port = 8000;

//http://localhost:8000

app.listen(port,(req,res)=>{
  console.log(`app is running on port ${port}`)
})

const multer  = require('multer')

// var upload = multer()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
//creating storage here

const upload = multer({ storage: storage })

app.post('/profile', upload.single('profile_pic'), function (req, res, next) {
  
  console.log("working fine for single upload")
  res.send('single file ')
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log('working fine for multiple uploads')
  res.send('multiple files uploaded')
})
console.log('this is multer operation')










// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//       //pass second argument as path where you want to store your uploades
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       //you can define the file name for the files to store in your folder
//       cb(null, file.fieldname + '-' + uniqueSuffix)

//     }
//   })
  
//   const upload = multer({ storage: storage })
  
//   app.post('/profile', upload.single('avatar'), function (req, res, next) {
//  //param inside the upoad.single is to be same as fieldname in postman/thunderclient
//     console.log('posting')
//     res.send('done')
  
//   })
//   app.post('/profiles', upload.array("photos"), function (req, res) {
//    res.send("done multiple uploads")
//   })
