

async function getWeather() {
  const apiKey = '81b868434f7b518dc3ace5cc90b6ce36';
  const city = document.getElementById('cityInput').value; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    
    console.log('Status Response:', response);

    if (!response.ok) throw new Error('Data cuaca tidak ditemukan');

    const data = await response.json();

 
    console.log('Data Cuaca:', data);

    
    document.getElementById('weatherResult').classList.remove('hidden');
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    console.error('Error:', error.message);
    alert(error.message); 
  }
}
