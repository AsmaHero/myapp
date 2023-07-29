// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/game', function(req,res) { 
    res.sendFile(path.join(__dirname + '/arcadeGame-master/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 


//add the router 
app.use('/', router); 
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
// set path for static assets

 
app.listen(process.env.PORT || 5000);

console.log('Running at Port 5000'); 