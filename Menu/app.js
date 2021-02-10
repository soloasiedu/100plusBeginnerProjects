const cars = [
    {
        id: 1,
        title: "Larmbogini Aventador",
        category: "lamborghini",
        price: 1000000,
        img: "./images/aventador.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 2,
        title: "Buggati Veyron",
        category: "bugatti",
        price: 3000000,
        img: "./images/veyron.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 3,
        title: "Buggati chiron",
        category: "bugatti",
        price: 3500000,
        img: "./images/chiron.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 4,
        title: "Ferrai portofino",
        category: "ferrari",
        price: 2500000,
        img: "./images/ferrari-portofino.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 5,
        title: "Ferrai laferrari",
        category: "ferrari",
        price: 1500000,
        img: "./images/laferrari.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 6,
        title: "Ferrai 488",
        category: "ferrari",
        price: 500000,
        img: "./images/ferrari488.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 7,
        title: "Lamborghini huracan",
        category: "lamborghini",
        price: 4500000,
        img: "./images/hurican.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    },
    {
        id: 8,
        title: "Lamborghini urus",
        category: "lamborghini",
        price: 4000000,
        img: "./images/urus.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

    }
]

const sectionCenter = document.querySelector('.section-center');
const btns = document.querySelectorAll('.filter-btn');
const searchField = document.querySelector('.search');


window.addEventListener("DOMContentLoaded", function(){
   displayCarItems(cars);
})

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        // console.log(e.currentTarget.dataset.id);
        const filteredItems = cars.filter(function(carItem){
            if(carItem.category === category){
                return carItem;
            }
        });
        if(category === "all"){
            displayCarItems(cars);
        }else{
            displayCarItems(filteredItems);
        }
    });
});

function displayCarItems(carMenuItems){
    let carMenu = carMenuItems.map(function(carItem){
        return `<article class="car-item">
        <img src=${carItem.img} class="photo" alt=${carItem.title} />
        <div class="item-info">
          <header>
            <h4>${carItem.title}</h4>
            <h4 class="price">$${carItem.price}</h4>
          </header>
          <p class="item-text">${carItem.desc}</p>
        </div>
      </article>`;
    });
    carMenu = carMenu.join("");
    sectionCenter.innerHTML = carMenu;
}

searchField.addEventListener("input", function(e){
    console.log(e.currentTarget.value);
    let searchedItems = cars.filter(function(carItem){
        if(carItem.title.toUpperCase().includes(e.currentTarget.value.toUpperCase())){
            return carItem;
        }
    });
    if(e.currentTarget.value === ""){
        displayCarItems(cars);
    }else{
        displayCarItems(searchedItems);
    }
})

