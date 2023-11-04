


const apiKey = "ff743c216f7dfec42af2ab927f75b238";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units-metric";

async function checkWhether() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

checkWhether();
