const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then (data => displayCategories(data.categories));
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
    for(categorie of categories){
        console.log(categorie);
        const categoriesP = document.createElement('div');
        categoriesP.innerHTML = `
                    <p>${categorie.category_name}</p>
        `
        categoriesContainer.append(categoriesP);
    }
}

loadCatagories ();
