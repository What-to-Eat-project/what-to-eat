// Get Data, link to API 

const recipeApp = {};

recipeApp.apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s";

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

    recipe_list.forEach(recipes => {
        const list = document.createElement("li");
        const htmlToAppend = `
            <div class="meal-name-container"> 
                <p class="meal-name">${recipes.strMeal}</p> 
            </div>
            <a href=${recipes.strSource}>
                <img src= ${recipes.strMealThumb} class="recipe-image">
            </a>
        `
        list.innerHTML = htmlToAppend;

        gallery.appendChild(list);

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
