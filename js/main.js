// Enter your code below.
const resourcesDiv = document.querySelector('.javascript-resources');
const showResourcesButton = document.getElementById('show-resources');

showResourcesButton.addEventListener('click', () => { resourcesDiv.classList.remove('d-none')});

const resourceList = resourcesDiv.querySelector('all');
