// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const grocery = document.getElementById("grocery");
const form = document.querySelector('.grocery-form');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editItem;
editFlag = false;
editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);


// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
        list.appendChild(element);
        container.classList.add('show-container');
    }
    else if(value && editFlag){}
    else{
        displayInfo("Please enter a value", "danger");
    }
}

function displayInfo(message, successOrDanger){
    alert.textContent = message;
    alert.classList.add(`alert-${successOrDanger}`);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${successOrDanger}`);
    },1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
