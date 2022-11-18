  // setting time interval for Uganda
  var ugandaTime=document.querySelector('#time');
  var ugandaDate=document.querySelector('#date');
  setInterval(()=>{
    ugandaTimeFun();
},1000)

function ugandaTimeFun()
{
    var date =new Date();
            var optionsTime={
            timeZone:"Africa/Kampala",
            // weekday: 'long', 
            // year: 'numeric', 
            // month: 'long', 
            // day: 'numeric'   
        }

         ugandaTime.innerHTML= date.toLocaleTimeString("en-US",optionsTime);

            var optionsDate={
                    DateZone:"Africa/Kampala",
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'   
                }

         ugandaDate.innerHTML= date.toLocaleDateString("en-US",optionsDate);

        
}

// uganda