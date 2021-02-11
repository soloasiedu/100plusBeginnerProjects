const storeItemsContainer = document.getElementById('store-items');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchField = document.getElementById('search-item');
// const storeItems = document.querySelectorAll('.store-item');
// const arrayItems = Array.from(storeItems);


const storeArray = [
    {   
        id: 1,
        class: "sweets",
        dataItem: "sweets",
        imgUrl: "img/sweets-1.jpeg",
        name: "sweet item",
        price: 5
    },
    {   
        id: 2,
        class: "cupcakes",
        dataItem: "cupcakes",
        imgUrl: "img/cupcake-1.jpeg",
        name: "cupcake item",
        price: 5
    },
    {   
        id: 3,
        class: "cakes",
        dataItem: "cakes",
        imgUrl: "img/cake-1.jpeg",
        name: "cake item",
        price: 5
    },
    {   
        id: 4,
        class: "dougnuts",
        dataItem: "dougnuts",
        imgUrl: "img/doughnut-1.jpeg",
        name: "dougnut item",
        price: 5
    },
    {   
        id: 5,
        class: "sweets",
        dataItem: "sweets",
        imgUrl: "img/sweets-2.jpeg",
        name: "sweet item",
        price: 10
    },
    {   
        id: 6,
        class: "cupcakes",
        dataItem: "cupcakes",
        imgUrl: "img/cupcake-2.jpeg",
        name: "cupcakes item",
        price: 10
    },
    {   
        id: 7,
        class: "cakes",
        dataItem: "cakes",
        imgUrl: "img/cake-2.jpeg",
        name: "cake item",
        price: 10
    },
    {   
        id: 8,
        class: "dougnuts",
        dataItem: "dougnuts",
        imgUrl: "img/doughnut-2.jpeg",
        name: "dougnut item",
        price: 10
    },
    {   
        id: 9,
        class: "sweets",
        dataItem: "sweets",
        imgUrl: "img/sweets-3.jpeg",
        name: "sweet item",
        price: 15
    },
    {   
        id: 10,
        class: "cupcakes",
        dataItem: "cupcakes",
        imgUrl: "img/cupcake-3.jpeg",
        name: "cupcake item",
        price: 15
    },
    {   
        id: 11,
        class: "cakes",
        dataItem: "cakes",
        imgUrl: "img/cake-3.jpeg",
        name: "cake item",
        price: 15
    },
    {   
        id: 12,
        class: "dougnuts",
        dataItem: "dougnuts",
        imgUrl: "img/doughnut-3.jpeg",
        name: "dougnut item",
        price: 15
    }



]


window.addEventListener('DOMContentLoaded', function(){
    displayAllItems(storeArray);
})

searchField.addEventListener('input', function(e){
    let searchedArray = storeArray.filter(function(item){
        if(item.name.toUpperCase().includes(e.currentTarget.value.toUpperCase())){
            return item;
        }
    })
    displayAllItems(searchedArray);
})

function displayAllItems(array){
    let displayItems = array.map(function(item){
        return `<!-- single item -->
        <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${item.class}" data-item=${item.dataItem}>
          <div class="card ">
            <div class="img-container">
              <img src=${item.imgUrl} class="card-img-top store-img" alt="">
              <span class="store-item-icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </div>
            <div class="card-body">
              <div class="card-text d-flex justify-content-between text-capitalize">
                <h5 id="store-item-name">${item.name}</h5>
                <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${item.price}</strong></h5>

              </div>
            </div>


          </div>
          <!-- end of card-->
        </div>
        <!--end of single store item-->`
    })
    displayItems = displayItems.join("");
    storeItemsContainer.innerHTML = displayItems;
}

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let dataID = e.currentTarget.dataset.filter;
        const filteredArray = storeArray.filter(function(item){
            if(dataID === item.dataItem){
                return item;
            }
        })

        if(dataID === 'all'){
            displayAllItems(storeArray);
        }else{
            displayAllItems(filteredArray);
        }
    })
})