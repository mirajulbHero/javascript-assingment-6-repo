const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then (data => displayCategories(data.categories));
};

// const loadCard = (id) => {
//     let url = `https://openapi.programming-hero.com/api/category/${id}`
//     console.log(url)
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLoadCard(data));
// }
// const displayLoadCard = (cards) => {
//     const cardArea = document.getElementById('card-area');
//     cardArea.innerHTML = '';
//     for(const card of cards){
//         console.log (card);
//     }
// }
 const loadCard = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then (res => res.json())
    .then (data => displayCard (data.plants));
 }
 loadCard();

//  category:"Evergreen Tree"
// description :"A tall, dense evergreen tree often planted for privacy screens. Its wood is resistant to decay and pests."
// id: 17
// image:"https://i.ibb.co.com/YTJjYcGX/cypress-min.jpg"
// name:"Cypress"
// price: 1300
 const displayCard = (plants) =>{
    // console.log(plants)
    const cardArea = document.getElementById('card-area');
    cardArea.innerHTML = '';
    for(const plant of plants){
        console.log(plant);
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card-area">
                    <img src="${plant.image}">
                    <h3>${plant.name}</h3>
                    <p>${plant.description}</p>
                    <div class="btn-price">
                        <button>${plant.category}</button>
                        <p><i class="fa fa-usd" aria-hidden="true"></i>${plant.price}</p>
                    </div> 
                    <button class="add-btn">Add to Cart</button> 
                </div>
        
        `
        cardArea.append(card);
    }
 }

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
    for(categorie of categories){
        const categoriesP = document.createElement('div');
        categoriesP.innerHTML = `
                    <p>${categorie.category_name}</p>
                    
        `
        categoriesContainer.append(categoriesP);
    }
}

loadCatagories ();
