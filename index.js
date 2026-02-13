// Global variable
const distanceInMiles = 100;

// Function that calculates estimated arrival time
function estimatedArrivalTime() {
  // Local variable
  const milesPerHour = 50;
  // Return distance divided by speed
  return distanceInMiles / milesPerHour;
}

// Assign the result to the HTML element
document.getElementById('result').innerHTML = estimatedArrivalTime();

