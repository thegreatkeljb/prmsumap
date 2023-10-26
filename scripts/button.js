let isClicked = false;

function clicked (id) {
    let elem = document.getElementById(id);
    const text = elem.querySelector('span');
    const svg = elem.querySelector('.nav-link svg');
    const buttons = document.querySelectorAll('.nav-item .nav-link');

    if (isClicked) {
        isClicked = false;
        elem.style.background = "none";
        text.style.color = 'white';
        svg.style.filter = 'invert()';
        buttons.forEach(button => button.hidden = false);    
    } else {
        isClicked = true;
        elem.style.background = "linear-gradient(to right, #E1AD01, #f7de8c)";
        text.style.color = 'black';
        svg.style.filter = 'none';      
        buttons.forEach(button => {
            if (button !== elem) {
                button.hidden = true;
            }
        }); 
    }
};

function handleHover(id) {
    const hovElem = document.getElementById(id);

    const text = hovElem.querySelector('span');
    const svg = hovElem.querySelector('.nav-link svg');
    
    hovElem.addEventListener('mouseenter', () => {
        if (!isClicked){
            hovElem.style.background = "linear-gradient(to right, #E1AD01, #f7de8c)";
            text.style.color = 'black';
            svg.style.filter = 'none';
        }    
    });
    hovElem.addEventListener('mouseleave', () => {
        if (!isClicked){
            hovElem.style.background = "none";
            text.style.color = 'white';
            svg.style.filter = 'invert()';
        }     
    });
}


