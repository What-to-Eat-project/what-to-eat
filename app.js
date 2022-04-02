// Get Data, link to API 

const recipeApp = {};

recipeApp.apiUrl ="https://www.themealdb.com/api/json/v1/1/list.php?i=list/images/media/meals/llcbn01574260722.jpg/preview";

const url = new URL(recipeApp.apiUrl)
fetch(url)
    .then((res) => res.json())
    .then(data => {
        food_list = data.meals;
console.log(food_list);
    food_list.forEach(food => {
        const li = document.createElement("li");
        const node = document.createTextNode(food.strIngredient);
    })
});

const recipe = document.querySelector("#meal-type");
recipe.addEventListener("change", function(){
    console.log(recipe.value);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe.value}`)
    .then((res) => res.json())
    .then(data => {
        recipe_list = data.meals;
        console.log(recipe_list);

        recipe_list.forEach(recipes => {
            const list = document.createElement("li");
            const nodes = document.createTextNode(recipes.strMeal);
            list.appendChild(nodes);
            gallery.appendChild(list);

            const image = document.createElement("img");
            image.classList.add("recipe-image");
            image.src=recipes.strMealThumb;

            gallery.appendChild(image);


            

})
})
})

// selecting ONLY one category

// const menu = document.querySelectorAll("#meal-type");

// menu.forEach((individual_menu) => {
//     individual_menu.addEventListener('click', function () {

//         const selectedRecipe = this.id;

//         recipe_list.displayRecipe(recipe_list.recipes[selectedRecipe]);
//     })
// });