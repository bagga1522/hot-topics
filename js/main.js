
const container = document.getElementById('content');
const links = document.querySelectorAll('nav a');
let url = './partials/home.html';


function loadContent(urlFeed) {
    fetch(urlFeed)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.log('Error loading content:', error));
}


loadContent(url);


const selectContent = (event) => {
    
    event.preventDefault();

    
    const href = event.target.getAttribute('data-path');

    
    loadContent(`./partials/${href}`);
};


links.forEach(link => {
    link.addEventListener('click', selectContent);
});
