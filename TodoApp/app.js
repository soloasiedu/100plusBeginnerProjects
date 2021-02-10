// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const grocery = document.getElementById("grocery");
const form = document.querySelector('.grocery-form');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
editFlag = false;
editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', populateFromLocalStorage);

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
        addToLocalStorage(id, value);
        grocery.value = "";

        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        list.appendChild(element);
        container.classList.add('show-container');
        displayInfo("Item added", 'success');
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = grocery.value;
        editLocalStorage(editID);
        grocery.value = '';
        displayInfo('Item edited', 'success');
        setBackToDefault();
    }
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

function setBackToDefault(){
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    items.forEach(function(item){
        list.removeChild(item);
    })
    container.classList.remove('show-container');
    displayInfo("Items cleared", "success");
    clearFromLocalStorage();
    setBackToDefault();
}

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayInfo("Item deleted", "danger");
    removeItemFromLocalStorage(id);
    setBackToDefault();
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling;
    editFlag = true;
    editID = element.dataset.id;
    grocery.value = editElement.innerHTML;
    submitBtn.textContent = 'edit';
    
}

function populateFromLocalStorage(){

    for(let i = 0; i < localStorage.length; i++){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        const key = localStorage.key(i);
        // console.log(key);
        attr.value = key;
        element.setAttributeNode(attr);
        const retrievedItem = localStorage.getItem(key);
        element.innerHTML += `<p class="title">${retrievedItem}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        list.appendChild(element);

    }
    if(localStorage.length > 0){
        container.classList.add('show-container');
    }
    
    // displayInfo("Item added", 'success');
    setBackToDefault();

}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    localStorage.setItem(id, value);
}

function removeItemFromLocalStorage(id){
    for(let i = 0; i < localStorage.length; i++){
        if(id === localStorage.key(i)){
            localStorage.removeItem(id);
        }
    }
}

function editLocalStorage(editID){
    for(let i = 0; i < localStorage.length; i++){
        if(editID === localStorage.key(i)){
            localStorage.setItem(editID, grocery.value);
            // console.log(editID);
            // console.log(grocery.value);
        }
    }
}

function clearFromLocalStorage(){
    localStorage.clear();
}

// ****** SETUP ITEMS **********
