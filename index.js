var express = require('express');
var cors = require('cors');
require('dotenv').config()
var app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({extended:true}))
app.use(upload.single('upfile'))
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse',  function (req, res,) {
 const {originalname, mimetype,size} = req.file
 res.json({
  name: originalname,
  type:mimetype,
  size
 })

})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
