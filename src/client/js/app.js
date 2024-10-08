
const er_city = document.getElementById('er_city');
const er_date = document.getElementById('er_date');

async function handelsubment(event){
    event.preventDefault(); 
    const date = document.getElementById('date').value; 

    

    
   // return The Information For City 
   const location = await getCountry(); 

   if(!Validate_Input()){
         return; 
   }
  
  if(!location){ 
    er_city.innerHTML = 'The Location Not Exist'; 
    er_city.style.display ='block'; 
  }else {
   
    
    const {lng ,lat,name} = location;

    if(lng &&lat){
    const days = getdays(date); // get Remaing Days Until Travell To City 
      
    //console.log(days);
    
     const weather = await getweather(lng,lat ,days); 
    // console.log("The value is",weather);
      
  
  
     const image = await getcityImage(name); 
     //console.log("The Value Image In Client",image);
  
    updateUI(name,date,days,weather,image); 
    } 
  }
    
    
   

   }


 
async function Validate_Input() { 
  
    er_city.style.display ="none"; 
    er_date.style.display ="none"; 
    const  city =document.getElementById('city').value; 
    const date  =document.getElementById('date').value;
    
    if(!city){
      er_city.innerHTML = 'Please Inter The City';
      er_city.style.display ='block'; 
      return; 
    }
    if(!date){
      er_date.innerHTML ='Please Enter The  Date';
      er_date.style.display ='block'; 
      return; 
    } 
    if(getdays(date) <0 ){
      er_date.innerHTML ="Please Enter The Valid Date ";
      er_date.style.display ='block'; 
      return;  
    }

    er_city.style.display ="none"; 
    er_date.style.display ="none"; 
   return true; 
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
        //console.log("The Data is Client ",alldata);

        return alldata; 
      
        
      
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




// function In The client Side To Send City To The Server And Fetch The Api Data 
async function getCountry(){
    const city = document.getElementById('city').value;

    if(city){
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
}else {
  er_city.innerHTML = 'This field cannot be left empty';
  er_city.style.display ='block'; 
 }
}

export {handelsubment};

