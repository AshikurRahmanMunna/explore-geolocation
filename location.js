const display = document.getElementById("display");
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    display.innerHTML = "getLocation is not available";
  }
};

function showPosition(position) {
  display.style.color = "green";
  display.innerHTML = `Latitude: ${position.coords.latitude} <br /> Longitude: ${position.coords.longitude}<br /> Accuracy: ${position.coords.accuracy}<br /> Altitude: ${position.coords.altitude}<br /> Altitude Accuracy: ${position.coords.altitudeAccuracy}<br /> Heading to the north: ${position.coords.heading}<br /> Speed: ${position.coords.speed}<br /><br /> Timestamp: ${position.timestamp}`;
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      display.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      display.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      display.innerHTML = "An unknown error occurred.";
      break;
  }
}
