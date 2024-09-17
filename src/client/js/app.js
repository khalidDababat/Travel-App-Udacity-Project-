import { all } from "axios";

const form = document.querySelector('form');



function handelsubment(event){
    event.preventDefault(); 


    
//   const location = getCountry(); 
     getCountry(); 



} 
 
async function getCountry(){
    const city = document.getElementById('city').value;
    try{

        const res =await fetch('http://localhost:4000/getcity',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({city})
        });  
        const alldata = await res.json(); 
        console.log(alldata);

    }catch(e){
          console.log("Error" ,e);
    }
}



export {handelsubment};