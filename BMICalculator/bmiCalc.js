function calBMI(){

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    let bmi = ((weight / height / height) * 10000).toFixed(1);

    if( (height === '') || (height < 0) || (isNaN(height)) ){
        document.querySelector('#bmiValue').innerHTML = 'Please enter a valid height';
    }else if ((weight === '') || (weight < 0) || (isNaN(weight))){
        document.querySelector('#bmiValue').innerHTML = 'Please enter a valid weight';
    }else{
        document.querySelector('#bmiValue').innerHTML = bmi;
        document.querySelector('#bmiWeightGuide').innerHTML = 'BMI Weight Guide';
        document.querySelector('#underweight').innerHTML = 'Under Weight = Less than 18.6';
        document.querySelector('#normalweight').innerHTML = 'Noraml Weight = Between 18.6 and 24.9';
        document.querySelector('#overweight').innerHTML = 'Over Weight = Greater than 24.9';
    }
    
    


}