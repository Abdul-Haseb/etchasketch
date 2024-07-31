// Select the container element and the reset button
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");

// Function to create a grid with the specified size
const createGrid = (size) => {
  // Calculate the size of each square box based on the container's width and the grid size
  const boxSize = container.clientWidth / size;

  // Loop to create the grid boxes
  for (let i = 0; i < size * size; i++) {
    // Create a new div element for each grid box
    const box = document.createElement("div");
    // Add the 'square' class to each box for styling
    box.classList.add("square");
    // Set the width and height of each box to make them square
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    // Append the box to the container
    container.appendChild(box);

    // Add an event listener to change the background color of the box on mouseover
    //     box.addEventListener("mouseover", () => {
    //       box.style.backgroundColor = generateRandomColor();
    //     });

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = generateRandomColor;

      if (box.style.opacity <= 0.9) {
        box.style.opacity = parseFloat(+box.style.opacity + 0.1);
      }
    });
  }
};

// Function to prompt the user for a custom grid size and create the grid
const createCustomGrid = () => {
  // Clear the existing grid by setting the container's inner HTML to an empty string
  container.innerHTML = "";
  // Prompt the user to enter a grid size between 1 and 100
  const userGridSize = prompt("Please enter a number between 1 to 100");

  // Check if the user input is valid (a number between 1 and 100)
  if (userGridSize > 0 && userGridSize <= 100) {
    // Create the grid with the specified size
    createGrid(userGridSize);
  }
};

// Function to generate a random RGB color
const generateRandomColor = () => {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the color in rgb() format
  return `rgb(${r}, ${g}, ${b})`;
};

// Add an event listener to the reset button to call the createCustomGrid function on click
resetButton.addEventListener("click", createCustomGrid);

// Create the initial 16x16 grid when the page loads
createGrid(16);
