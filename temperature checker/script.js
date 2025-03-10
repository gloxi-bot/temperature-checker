// Function to Start Voice Recognition
function startListening(inputField) {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US"; // Set language to English

  recognition.onresult = function (event) {
      let spokenText = event.results[0][0].transcript;
      let number = parseInt(spokenText); // Convert spoken words to number
      
      if (!isNaN(number)) {
          document.getElementById(inputField).value = number; // Fill the correct input field
      } else {
          alert("Please speak a number!");
      }
  };

  recognition.start();
}

// Function to Calculate Weather Conditions
function calculateWeather() {
  let temperature = Number(document.getElementById("temperature").value);
  let humidity = Number(document.getElementById("humidity").value);

  if (isNaN(temperature) || isNaN(humidity)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers!";
      return;
  }

  let heatIndex = (temperature + humidity) / 2;
  let isHot = temperature > 30;
  let isSuperHot = heatIndex > 45;
  let isHumid = humidity > 60;
  let weatherCondition = `Temperature: ${temperature}°C, Humidity: ${humidity}%`;

  let resultText = `
      <p>Heat Index: ${heatIndex}</p>
      <p>Is it hot now in PRMSU Castillejos? ${isHot}</p>
      <p>So shall we go home? ${isSuperHot}</p>
      <p>Is humidity high? ${isHumid}</p>
      <p>${weatherCondition}</p>
  `;

  document.getElementById("result").innerHTML = resultText;
}
