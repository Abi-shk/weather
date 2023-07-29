function convert(abc){
data=parseInt(abc)-273
return data
}
async function getWeather(){
   const value=document.getElementById('searchbox').value
   console.log(value);
   const result=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b41ec3be35c7dac8aabbc21ba253137a`)
   const data=await result.json()
   console.log(data);
let temp=convert(data.main.temp)
let tempa=convert(data.main.temp_max)
let tempb=convert(data.main.temp_min)



const myDate = new Date();

const dayOfMonth = myDate.getDate();
const month = myDate.getMonth() + 1; // Adding 1 to get the month in the range 1-12
const year = myDate.getFullYear();

let dates=(`${dayOfMonth}/${month}/${year}`);


   document.getElementById('climate').innerHTML=data.weather[0].main
   document.getElementById('climate1').innerHTML=data.weather[0].description
   document.getElementById('temp').innerHTML=temp
   document.getElementById('place').innerHTML=value
   document.getElementById('tempmax').innerHTML=tempa
   document.getElementById('tempmin').innerHTML=tempb
   document.getElementById('wind').innerHTML=data.wind.speed
   document.getElementById('humidity').innerHTML=data.main.humidity
   document.getElementById('date').innerHTML=dates

   let weather =data.weather[0].main
   console.log(weather)
   let pic=document.getElementById('wallpaper')
   if(weather==='Clouds'){
     pic.classList.add("cloudy")
   }
   else {
      pic.classList.add("clear")
   }

}
