const btn = document.getElementById('btnInsert');
const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const output = document.getElementById('isOutput');

btn.addEventListener('click', function(){
    const key = inpKey.value;
    const value = inpValue.value;
    console.log(key);
    console.log(value);
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();  
    }
});
for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += `${key}: ${value}<br />`;
}