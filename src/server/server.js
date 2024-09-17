projectData ={}; 

/*run server and routes */
const express = require('express'); 

/* Start up an instance of app */
const app = express();
app.use(express.json());
/* Dependencie */
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

const cors = require('cors');
app.use(cors()); 

const dotenv = require('dotenv');
dotenv.config();


// main project folder
app.use(express.static('dist')); 


const port = 4000;


// Set Up The Server
app.listen(port ,()=>{
    console.log(`running on localhost: ${port}`);
}) 

app.get('/' ,(req,res)=>{
    res.sendFile(path.resolve('dist/index.html'));
})
 
const userstring = process.env.USER; 
const userint    = process.env.USERINT; 
const username   = userstring.concat(userint);

app.post('/getcity',async (req,res) =>{
     
   
    const city  = req.body.city;
    // console.log("The username is ",username );
//https://secure.geonames.org/searchJSON?placename=London&maxRows=1&username=khalid2000
    try{
        
        console.log("The City is ",city );
        const apiurl = `https://secure.geonames.org/searchJSON?placename=${city}&maxRows=1&username=${username}`;

        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiurl); 
         
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = response.json();  
        res.send(data);
        
    
    }catch(e){
        res.status(500).json({ message: 'Failed to fetch data', error: e.message });
    }
    

});
