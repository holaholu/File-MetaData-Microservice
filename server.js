var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });





app.set("view engine","ejs");
app.use (express.static("public"));

app.get('/', function (req, res) {

           res.render("index");

})



app.post('/filedata', upload.single('file'), function (req, res, next) {
  // req.file is the file data
  var result=req.file.size+" Bytes";
  result= {
       "File size of uploaded document is : " : result
  };
  res.json(result);
 
});



app.listen(process.env.PORT, function () {
  console.log('Server is up and running!')
})