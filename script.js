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



const ingredientList = document.querySelectorAll('.base');
const milk = document.getElementById('milk');
const chocolate = document.getElementById('chocolate');
const sugar = document.getElementById('sugar');
const stir = document.getElementById('stir');
const mugImg = document.getElementById('mug-image');

let sugarUsed = 0;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

ingredientList.forEach((item) => {
    console.log(item);
    item.addEventListener('mousedown', () => {
        item.classList.add('shrink');
    });

    item.addEventListener('mouseup', () => {
        item.classList.remove('shrink');
    });
});

milk.addEventListener('click', async () => {
    milk.style.backgroundColor = 'rgba(209, 192, 171, 0.4)'
    milk.style.cursor = 'default';
    document.getElementById('milk-img').style.opacity = '0.4';
    document.getElementById('milk-txt').style.color = 'rgba(93, 81, 58, 0.4)';
    mugImg.src = 'images/mug2.png';
}, { once: true });

chocolate.addEventListener('click', async () => {
    chocolate.style.backgroundColor = 'rgba(209, 192, 171, 0.4)'
    chocolate.style.cursor = 'default';
    document.getElementById('chocolate-img').style.opacity = '0.4';
    document.getElementById('chocolate-txt').style.color = 'rgba(93, 81, 58, 0.4)';
    mugImg.src = 'images/mug3.png';
}, { once: true });

sugar.addEventListener('click', async () => {
    sugarUsed += 1;
    // update the hot choco image
    if (sugarUsed == 1) {
        mugImg.src = 'images/mug4.png';
    } else if (sugarUsed == 2) {
        mugImg.src = 'images/mug5.png';
    } else if (sugarUsed == 3) {
        mugImg.src = 'images/mug6.png';
    } else {
        sugar.style.backgroundColor = 'rgba(209, 192, 171, 0.4)'
        sugar.style.cursor = 'default';
        document.getElementById('sugar-img').style.opacity = '0.4';
        document.getElementById('sugar-txt').style.color = 'rgba(93, 81, 58, 0.4)';
        mugImg.src = 'images/mug7.png';
    }
});

stir.addEventListener('click', async () => {
    stir.style.backgroundColor = 'hsl(36, 5.40%, 81.80%)'
    stir.style.cursor = 'default';
    document.getElementById('stir-txt').style.color = 'rgba(93, 81, 58, 0.4)';
    mugImg.src = 'images/mug8.png';
}, { once: true });



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
