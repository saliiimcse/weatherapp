// https://home.openweathermap.org/api_keys
//email: selim11bd@gmail.com
const api_key = '4b6861ff9f020f06b5cc1cdd04d5532c';
const weatherData = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.sys.country);
    showData('show-city', data.name);
    showData('show-deg', data.main.temp);
    showData('show-enviroment', data.weather[0].main);
    showData('show-country', data.sys.country);
    
}
const showData = (id, text) =>{
    document.getElementById(id).innerHTML = text;
}
document.getElementById('btn-submit').addEventListener('click',function(){
    const feildValu = document.getElementById('input-value').value;
    weatherData(feildValu);
    // showData('show-city', feildValu);
    // console.log(data.name);

    
    document.getElementById('input-value').value = '';
})
weatherData('bhola');
