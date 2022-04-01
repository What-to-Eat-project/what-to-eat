// Get Data, link to API 

const recipeApp = {};

recipeApp.apiUrl ="https://www.themealdb.com/api/json/v1/1/list.php?i=list/images/media/meals/llcbn01574260722.jpg/preview";
recipeApp.apiKey = "1";

// Define the method to make request to the API
recipeApp.getRecipes = () => {
    const url = new URL(recipeApp.apiUrl)
    url.search = new URLSearchParams({
        client_id: recipeApp.apiKey,
        q: "recipes",
    })

    // fetch api call
    fetch(url).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        // call our displayData method, when we have data
        recipeApp.displayRecipes(jsonResponse);
    })
    // fetch(url)
    //         .then((res) => res.json())
    //         .then((recipeData) => console.log(recipeData));
};

recipeApp.displayRecipes = (dataFromApi) => {
    // display code
    console.log(dataFromApi)

    // query the document to find the ul element
    const ul = document.querySelector('ul');

    dataFromApi.forEach((imageObject) => {
        const listElement = document.createElement('li');
        const image = document.createElement('img');

        image.src = imageObject.strIngredient.regular;

        // append the image element to the parent li
        listElement.appendChild(image);
        // append the li to the ul gallery
        ul.appendChild(listElement);
    })
}

recipeApp.init = () => {
    console.log("Hello World")
    recipeApp.getRecipes();
}

recipeApp.init();