// Get Data, link to API 

const recipeApp = {};

recipeApp.apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s";

// recipeApp.categories = function(){
//     fetch(recipeApp.apiUrl)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })
// }

recipeApp.getRecipe = function(query){
    const url = new URL(recipeApp.apiUrl)

    url.search = new URLSearchParams({
        s: query
    })

    fetch(url)
        .then((res) => res.json())
        .then(function(data){
            document.querySelector('#gallery').innerHTML = ''
            recipeApp.displayRecipe(data.meals)
        })
}

recipeApp.displayRecipe = function(data){
    const recipe_list = data;
    console.log(recipe_list);
    // document.querySelector('#gallery').innerHTML = ''

    recipe_list.forEach(recipes => {
        const list = document.createElement("li");
        const nodes = document.createTextNode(recipes.strMeal);
        list.appendChild(nodes);
        gallery.appendChild(list);

        const anchor = document.createElement("a")
        anchor.href=recipes.strSource; 


        console.log(anchor)

        const image = document.createElement("img");
        image.classList.add("recipe-image");
        image.src=recipes.strMealThumb;

        gallery.appendChild(image);
        gallery.appendChild(anchor);
    })
}

const recipe = document.querySelector("#meal-type");
recipe.addEventListener("change", function(){
    recipeApp.getRecipe(this.value)
})

recipeApp.getUserInput = function(){
    document.querySelector('#meal-type').addEventListener("change", function(){
        const category = this.value
        recipeApp.getRecipe(category)
    })
}

recipeApp.init = function(){
    recipeApp.getUserInput()
}
// selecting ONLY one category

