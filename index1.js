const geo = navigator.geolocation.getCurrentPosition(success, error);
async function success(e) {
  console.log(e);
  lat = e.coords.latitude;
  lon = e.coords.longitude;
  const apiKey = `42a2d790bbeb87e5535cfe99a11a99a6`;
  const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const weatherJson = await getWeather.json();
  console.log(weatherJson);
}
function error(error) {
  console.log(error);
}
a = 1





