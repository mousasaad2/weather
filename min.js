

// let vid = document.querySelector(".vid");
// let di = document.querySelector(".di");

// let test = new XMLHttpRequest();
// test.open("GET", "https://mp3quran.net/api/v3/videos");
// test.send();

// test.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let respons = JSON.parse(this.responseText);

//         for (let i = 0; i < respons.videos.length; i++) {
//             let a = document.createElement("a");
//             let x = document.createTextNode(respons.videos[i].reciter_name);
//             a.addEventListener("click", () => {
//                 vid.src = respons.videos[i].videos[0].video_url;
//             });
//             a.appendChild(x);
//             di.appendChild(a);
//         }
//     }
// };





//  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
let key = "081d4d22ea981ca7d865497183ba9afc"

let inputSearch = document.querySelector(".inp")
let search = document.querySelector(".search")
let city = document.querySelector(".city")
let nameCity = document.querySelector(".name")
let weather = document.querySelector(".weather")
let temp = document.querySelector(".temp-p")
let humidity = document.querySelector(".humidity-p")
let wind = document.querySelector(".wind-p")
search.addEventListener("click",()=>{
    weather.style.right = "-100%"
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputSearch.value}&appid=${key}`)
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            city.innerHTML = ""
            nameCity.innerHTML = ""
            temp.innerHTML = ""
            humidity.innerHTML = ""
            wind.innerHTML = ""
        }
    })
    .then(data =>{
            weather.style.right = "0"
            city.innerHTML = data.sys.country
            nameCity.innerHTML = data.name
            temp.innerHTML = Math.round(data.main.temp) + "°C"
            humidity.innerHTML = data.main.humidity
            wind.innerHTML = Math.round(data.wind.speed) + "/km"
    })
})









// new Promise((res,rej)=>{

//     fetch("https://mp3quran.net/api/v3/languages")
//     .then(response => {
//         if(response.ok){
//             return response.json()
//         }
//         else{
//             rej("AAAAAAAA")
//         }
//         res()
//     })
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i])
//         }
//     }).catch(() =>{
//         error => console.log(error);
//     })
// })









