



async function handelsubment(event){
    event.preventDefault(); 

    // console.log("Hi Khalid ");
    
   const location = await getCountry(); 
   const {lng ,lat,name} = location; 
   
   //console.log(lng ,lat,name);  
   
  const date = document.getElementById('date').value; 
  
  const days = getdays(date); // get Remaing Days Until Travell To City 

  
  const weather = await getweather(lng,lat ,days); 
  //console.log(weather);
  
  const image = await getcityImage(name); 
  //console.log(image);
   
  updateUI(location,date,days,weather,image); 

} 


async function updateUI(city ,date,days,weather,image){
     
    document.getElementById('Rdays').innerHTML =
     `The Reaming Days To Travel ${days}`;
    document.getElementById('cityname').innerHTML =`
     the City he wents To Travell ${city.name}
    `; 
    document.getElementById('travelDate').innerHTML =`
    The Travell Date is: ${date}
    `; 
    document.getElementById('temp').innerHTML =days > 7?
      `The Expected temperature is:${weather.temp} and The Temp max:${weather.app_max_temp}
       and The temp min:${weather.app_min_temp}`:
       `The Temperature is:${weather.temp}`
      ;
     document.getElementById('weather').innerHTML= days>7? 
     `The Expected Weather is ${weather.description}`:
     `The weather is :${weather.description}`;
     document.getElementById('cityImage').innerHTML =
     `<img src="${image.image}" alt="The image Is Not Found">`;
}




//***************************************************************8 */

async function getcityImage(name){
    
    try{
         
        
        const res =await fetch('http://localhost:4000/getimage',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name})
        });  
        const data = await res.json(); 
        //console.log(data); 
    
        return data; 
      
    }catch(e){
          console.log("Error" ,e);
    }



}





// ********************************************************
 
async function getweather(lng,lat ,days){
    try{
        
        
        const res =await fetch('http://localhost:4000/getweather',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({lng,lat,days})
        });  
        const alldata = await res.json(); 
        return alldata; 
        // console.log("The Data is Client ",alldata);
      
        
      
    }catch(e){
          console.log("Error" ,e);
    }

}


// Return The Remaing Days For Travelling 
function getdays(date){

    const now = new Date(); 
    const traveldate = new Date(date);

    const timed = traveldate.getTime() - now.getTime(); 
    const days = Math.ceil(timed /(1000 *3600 *24))
  
    return days; 

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
        
        
        
        return alldata; 
      
    }catch(e){
          console.log("Error" ,e);
    }
}


export { getCountry, getweather, getcityImage };
export {handelsubment};