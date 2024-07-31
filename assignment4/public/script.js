// let form=document.getElementById("form1")
// let latitude=document.getElementById("latitude")
// let country=document.getElementById("country")
// let div2=document.querySelector(".div2")
// let p1=document.querySelector(".p1")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     // console.log(document.getElementById("address").value)
//     weatherfun()
//     // form.reset()

// })
// let errorf=document.getElementById("error")
// let longtiude=document.getElementById("longtiude")
// let forcastf=document.getElementById("forcast")
// locationf=document.getElementById("location")
// let weatherfun=async()=>{
//     try{
//         const address=document.getElementById("address").value
//         const res=await fetch("http://localhost:3000/weather?address="+address)
//         const data=await res.json()
//         console.log(data)
//         if(data.error){
//             errorf.style.display="block"
//             errorf.innerHTML=data.error
//             p1.style.display="none"

//         }
//         else{
//             locationf.innerHTML=data.location
//             forcastf.innerHTML=data.forcast
//             console.log(data)
//             errorf.style.display="none"
//             p1.style.display="none"
//             div2.style.display="block"  
//         }

//     }
//     catch(e){
//         console.log(e)

//     }

// }
let form = document.querySelector("form");
let content = document.querySelector(".div2");
let country = document.getElementById("address");
let message = document.querySelector(".p1");
let lat = document.getElementById("latitude");
let long = document.getElementById("longtiude");
let name_ = document.getElementById("country");
let weather = document.getElementById("forcast");
let error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  weatherFun();
});

async function weatherFun() {
  let response = await fetch(
    "http://localhost:3000/weather?address=" + country.value
  );
  let data = await response.json();
  console.log(data)
  if (data.error) {
    error.style.display = "block";
    message.style.display = "none";
    content.style.display = "none";
    error.innerHTML = data.error;
  } else {
    error.style.display = "none";
    message.style.display = "none";
    content.style.display = "block";
    name_.innerHTML = country.value;
    lat.innerHTML = data.latitude;
    long.innerHTML = data.longitude;
    weather.innerHTML = data.weather;
  }
}
