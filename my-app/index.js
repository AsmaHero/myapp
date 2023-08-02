// Import essential libraries 
const cors = require('cors');
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

router.get('/data/restaurants.json', function(req,res) { 
    res.sendFile(path.join(__dirname + '/restaurant-master/data/restaurants.json')); 
    //__dirname : It will resolve to your project folder. 
}); 





//add the router 


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "Accept",
    "x-client-key",
    "x-client-token",
    "x-client-secret",
    "Authorization"
  ],
}

app.use(cors(corsOptions),router)

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
// set path for static assets

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");
  next();
})
app.listen(process.env.PORT || 5500);

console.log('Running at Port 5500'); 