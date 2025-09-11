const loadCatagories = () => {
    manegeSpiner(true)
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then (data => displayCategories(data.categories));
};

const displayRemoveClass = () =>{
    const categorieClass = document.querySelectorAll(".categori-btn");
    categorieClass.forEach((btn) => btn.classList.remove('active'));
}

const loadLevelPlant = (id) => {
    manegeSpiner(true)
    let url = `https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayRemoveClass();
        const categoriesBtn = document.getElementById(`categoriesBtn ${id}`);
        categoriesBtn.classList.add('active');
        displayLoadCard(data.plants)
    });
}
const displayLoadCard = (plants) => {
    const cardArea = document.getElementById('card-area');
    cardArea.innerHTML = '';
    for(const plant of plants){
        // console.log (plant);
         const div = document.createElement('div');
         div.innerHTML = "";
         div.innerHTML = `
            <div class="card-area">
                    <img src="${plant.image}">
                    <h3 onclick="loadPlantDetails(${plant.id})">${plant.name}</h3>
                    <p>${plant.description}</p>
                    <div class="btn-price">
                        <button>${plant.category}</button>
                        <p><i class="fa fa-usd" aria-hidden="true"></i>${plant.price}</p>
                    </div> 
                    <button class="add-btn">Add to Cart</button> 
            </div>
         `;
          cardArea.appendChild(div);
    }
    manegeSpiner(false)
}
 const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then (res => res.json())
    .then (data => displayCard (data.plants));
 }
 loadPlants();

//   display details
const loadPlantDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayPlantDetails(details.plants);
}
const displayPlantDetails = (plant) => {
    console.log(plant)
    const detailsBox = document.getElementById('details_container');
    detailsBox.innerHTML = `
                <div>
                    <img class ="" src="${plant.image}">
                </div>
                <div>
                    <h2 class="font-semibold">Categories:<span class ="text-[12px] ml-[5px] text-[gray]">${plant.category}</span></h2>
                </div>
                <div>
                    <h2 class="font-semibold">Price:<span class ="text-[12px] ml-[5px] text-[gray] my-8">${plant.price}</span></h2>
                </div>
                <div>
                    <h2 class="font-semibold">Descriptions:<span class ="text-[12px] ml-[5px] text-[gray]">${plant.description}</span></h2>
                </div>

    `
    document.getElementById('my_modal_5').showModal();
}


// manage spinner
const manegeSpiner = (status) =>{
    if(status == true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('card-area').classList.add('hidden');
    }
    else{
        document.getElementById('card-area').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden'); 
    }
}

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
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card-area">
                    <img src="${plant.image}">
                    <h3 onclick="loadPlantDetails(${plant.id})">${plant.name}</h3>
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
    manegeSpiner(false)
 }

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
    for(categorie of categories){
        const categoriesPlants = document.createElement('div');
        categoriesPlants.innerHTML = `
                    <p id="categoriesBtn ${categorie.id}" class="hover:bg-blue-400 hover:text-[#fff] categori-btn mb-9 text-white" onclick="loadLevelPlant('${categorie.id}')">${categorie.category_name}</p>
                    
        `
        categoriesContainer.append(categoriesPlants);
    }
    // manegeSpiner(true)
}

loadCatagories ();
