function convertToKilograms(){
    var number = document.querySelector('#numPounds').value;
    var weightInKilograms = (number * 1.82);
    document.getElementById('weightInKilo').textContent = 'Your weight in kilograms is: ' + weightInKilograms;
    
}