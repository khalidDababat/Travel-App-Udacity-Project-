



async function handelsubment(event){
    event.preventDefault(); 

     //console.log("Hi Khalid ");
     const date = document.getElementById('date').value; 


   const location = await getCountry(); 
   const {lng ,lat,countryName} = location; 
      // console.log("Hi Khalid ");
  

  const days = getdays(date); // get Remaing Days Until Travell To City 
   
  
   const weather = await getweather(lng,lat ,days); 
   //console.log(weather);


   const image = await getcityImage(countryName); 
  // console.log("The Value Image In Client",image);

  updateUI(countryName,date,days,weather,image); 

} 


async function updateUI(city ,date,days,weather,image){
      
    
    document.getElementById('Rdays').innerHTML =
     `The Reaming Days To Travel<mark> ${days}</mark>`;
    document.getElementById('cityname').innerHTML =`
     the Country he wents To Travell <mark>${city}</mark>
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
     `The Expected Weather is <mark>${weather.description}</mark>`:
     `The weather is :${weather.description}`;
     document.getElementById('cityImage').innerHTML =
     `<img src="${image.image}" alt="The image Is Not Found">`;
}




//***************************************************************8 */

async function getcityImage(name){

    try{
        
        //console.log("The Contry name :",name);  
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
        //console.log("The hhhhh",alldata); 
        
        
        
        return alldata; 
      
    }catch(e){
          console.log("Error" ,e);
    }
}

export {handelsubment};
export { getCountry, getweather, getcityImage };
