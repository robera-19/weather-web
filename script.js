// Fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

// Display weather data
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.style.display = "block";

  document.getElementById("location").textContent = data.name || "N/A";
  document.getElementById("weather-icon").src = data.weather?.[0]?.icon || "";
  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main || "N/A";
  document.getElementById("main-temperature").textContent =
    data.main?.temp ?? "N/A";
  document.getElementById("feels-like").textContent =
    data.main?.feels_like ?? "N/A";
  document.getElementById("humidity").textContent =
    data.main?.humidity ?? "N/A";
  document.getElementById("wind").textContent = data.wind?.speed ?? "N/A";
  document.getElementById("wind-gust").textContent = data.wind?.gust ?? "N/A";
}

// Event listener for button
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-select").value;
  if (!city) return; // do nothing if no city is selected
  showWeather(city);
});
