const textElement = document.querySelector("#name");
const button = document.querySelector("#btn");

// Initialize a click counter
let clickCount = 0;

// Fetch the colors from the JSON file
fetch('colors.json')
  .then(response => response.json())
  .then(data => {
    const colors = data.colors;

    // Function to handle button clicks
    function handleButtonClick() {
      // Increment the click counter
      clickCount++;

      // Determine the color based on the click count
      const colorIndex = (clickCount - 1) % colors.length; // Use modulo to cycle through colors
      const selectedColor = colors[colorIndex];

      // Change the background color
      document.body.style.backgroundColor = selectedColor;

      // Log the current color to the console (optional for debugging)
      console.log(`Click ${clickCount}: Color changed to ${selectedColor}`);
    }

    // Attach the event listener to the button
    button.addEventListener("click", handleButtonClick);
  })
  .catch(error => console.error('Error loading colors.json:', error));
