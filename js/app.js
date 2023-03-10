const API_KEY = `4b0473d71ee0e97f36acfb92a00c6726`;
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature =data =>{
    const temperature =document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    

}


loadTemperature('dhaka');
