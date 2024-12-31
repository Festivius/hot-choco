const recipe = document.getElementById('recipe');
const ingredients = document.getElementById('ingredients');
const toppings = document.getElementById('toppings');

const recipebutton = document.querySelector('label[for="recipe-button"]');
const ingredientsbutton = document.querySelector('label[for="ingredients-button"]');
const toppingbutton = document.querySelector('label[for="topping-button"]');

const toppingImages = document.querySelectorAll('.topping-img');

function hideAll() {
    recipe.style.display = 'none';
    ingredients.style.display = 'none';
    toppings.style.display = 'none';
    recipebutton.style.height = '100%';
    ingredientsbutton.style.height = '100%';
    toppingbutton.style.height = '100%';
    document.getElementById('menu').scrollTop = 0;
}

recipebutton.addEventListener('click', () => {
    hideAll();
    recipe.style.display = 'block';
    recipebutton.style.height = '114%';
});

ingredientsbutton.addEventListener('click', () => {
    hideAll();
    ingredients.style.display = 'block';
    ingredientsbutton.style.height = '114%';
});

toppingbutton.addEventListener('click', () => {
    hideAll();
    toppings.style.display = 'block';
    toppingbutton.style.height = '114%';
});

toppingImages.forEach((img) => {
    dragElement(img);
});

function dragElement(img) {
    img.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (img.classList.contains('decor')) {
            imgCopy = img;
        } else {
            imgCopy = img.cloneNode();
            imgCopy.style.position = 'absolute';
            imgCopy.classList.add('decor');
            document.body.appendChild(imgCopy);
        }

        console.log('mousedown');
        e.preventDefault();

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        console.log('drag');
        e.preventDefault();

        imgCopy.style.left = (e.clientX - 0.5 * imgCopy.offsetHeight) + "px";
        imgCopy.style.top = (e.clientY - 1.5 * imgCopy.offsetHeight) + "px";
        
        console.log(e.clientX + " " + e.clientY);
        console.log('position set: '+imgCopy.style.top+imgCopy.style.left);
    }

    function closeDragElement() {
        console.log('undrag');

        document.onmouseup = null;
        document.onmousemove = null;

        dragElement(imgCopy);
    }
}

