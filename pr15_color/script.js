// Function to change the background color based on user input
function changeBackgroundColor(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const colorInput = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorInput;
}

// Add event listener to the form
document.getElementById('colorForm').addEventListener('submit', changeBackgroundColor);
