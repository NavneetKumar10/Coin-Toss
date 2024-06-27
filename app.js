function tossCoin() {
    // Get the coin element from the DOM
    var coin = document.querySelector('.coin');
    // Get the heads image element from the DOM
    var headsImage = document.querySelector('.heads-image');
    // Get the tails image element from the DOM
    var tailsImage = document.querySelector('.tails-image');
    // Get the result message element from the DOM
    var resultMessage = document.querySelector('#result-message');

    // Hide result images initially to reset the state
    headsImage.style.display = 'none';
    tailsImage.style.display = 'none';
    // Clear any previous result message
    resultMessage.textContent = '';

    // Ensure the coin element remains visible during the animation
    coin.style.display = 'block';
    // Log to the console that the flip animation is starting
    console.log('Starting flip animation');

    // Add the 'flipping' class to start the flip animation
    coin.classList.add('flipping');

    // Use setTimeout to delay execution of the code inside by 2000 milliseconds (2 seconds)
    setTimeout(function() {
        // Determine the result of the coin flip: 'Heads' or 'Tails'
        var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        // Log the result of the coin flip to the console
        console.log('Coin flip result:', result);

        // Display the corresponding result image and message after the flip animation
        if (result === 'Heads') {
            // Show the heads image
            headsImage.style.display = 'block';
            // Set the result message to "Heads it is!"
            resultMessage.textContent = 'Heads it is!';
        } else {
            // Show the tails image
            tailsImage.style.display = 'block';
            // Set the result message to "Tails it is!"
            resultMessage.textContent = 'Tails it is!';
        }

        // Remove the 'flipping' class to reset the animation state
        coin.classList.remove('flipping');
        // Log to the console that the animation has ended and the result is being shown
        console.log('Animation ended, showing result');
    }, 2000); // Wait for 2 seconds (2000 milliseconds) for the flip animation to complete
}
