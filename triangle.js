function calculateHypotenuse() {
    // Get the values of opposite and adjacent from the input boxes
    let opposite = parseFloat(document.getElementById('opposite').value);
    let adjacent = parseFloat(document.getElementById('adjacent').value);

    // Validate the inputs
    if (isNaN(opposite) || isNaN(adjacent)) {
        alert("Please enter valid numbers for opposite and adjacent sides.");
        return;
    }

    // Calculate the hypotenuse using the Pythagorean theorem
    let hypotenuse = Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));

    // Display the result in the hypotenuse textbox
    document.getElementById('hypotenuse').value = hypotenuse.toFixed(2);
}
