// Enter your code below.
// Step 1
const resourcesDiv = document.querySelector('.javascript-resources');
const showResourcesButton = document.getElementById('show-resources');

// Step 2
showResourcesButton.addEventListener('click', () => {
     resourcesDiv.classList.remove('d-none')
});

// Step 3
// when hovering bolds the letters
resourcesDiv.addEventListener('mouseover', function (event) {
    console.log(event.target);

    event.target.classList.contains('list-group-item') && event.target.classList.add('fw-bold');
});

// when no longer hovering goes back to normal letters
resourcesDiv.addEventListener('mouseout', function (event) {
    event.target.classList.contains('list-group-item') && event.target.classList.remove('fw-bold');
});

// when clicked becomes italic
resourcesDiv.addEventListener('click', function (event) {
    event.target.classList.contains('list-group-item') && event.target.classList.add('fst-italic');
});