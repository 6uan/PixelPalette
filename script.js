
// State of Mouse Button - held down or not
let isMouseDown = false; // Default NOT held down


// Function that creates grid based on values from HTML
function createGrid() {
    const gridSize = document.getElementById('gridSize').value; // Grid Size
    const actionSelector = document.getElementById('action');
    const grid = document.getElementById('grid'); // Where Grid Exists

   // Clear the existing grid when creating a new one
    grid.innerHTML = ''; // Empty will Give Blank Screen

  
    // Set the CSS grid properties
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`;// Creates Horizonal Grid Size + Number of Columns
    grid.style.gridTemplateRows = `repeat(${gridSize}, 25px)`; // Creates Vertical Grid Size + Number of Rows

    // Create box grid to the Screen 
    // For Loop iterates for Number of boxes in the grid
    for (let i = 0; i < gridSize * gridSize; i++) {  //Ex. 10 * 10 = 100 boxes
        const box = document.createElement('div'); // Creates a div box
        box.classList.add('box'); // adds the classname 'box'

      
        // Event listeners - Controls Mouse Clicked/Held Variable
        box.addEventListener('mousedown', function(event) {
            isMouseDown = true; // Will be true until Mouse isn't pressed
            performAction(box, actionSelector.value); // Uses line 43 function
        });

        box.addEventListener('mouseover', function() {
            if (isMouseDown) { // Still true from earlier event listener
                performAction(box, actionSelector.value); // Uses line 43 function
            }
        });

        grid.appendChild(box);
    }
}

function performAction(box, action) {
    if (action === 'paint') { // if action is on 'paint' add the class filled
        box.classList.add('filled'); // will be background-color: black
    } else if (action === 'erase') { // if action is on 'erase' remove filled
        box.classList.remove('filled'); // will be empty
    }
}

// Reset the isMouseDown flag when mouse is released
document.addEventListener('mouseup', function() {
    isMouseDown = false;
});
