let isClicked = null;

// Function to handle fruit button clicks
function handleFruitClick(fruit) {
  isClicked = fruit;
}

// Add event listeners to fruit buttons
document.querySelector(".b-apples").addEventListener("click", function () {
  handleFruitClick("apples");
});

document.querySelector(".b-bananas").addEventListener("click", function () {
  handleFruitClick("bananas");
});

// Add event listener to form submission
document
  .getElementById("input-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("input-enter-name").value;
    if (name) {
      if (isClicked) {
        alert(name + " likes " + isClicked + "!"); // Display a greeting
      } else {
        alert("ERROR: Please select a fruit.");
      }
    } else {
      alert("ERROR: NO INPUT DETECTED");
    }
  });
