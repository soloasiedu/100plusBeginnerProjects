function computeAmount(){
    const loanAmount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest_rate').value;
    const monthsToPay = document.getElementById('months').value;

    const interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
    console.log(interest);

    let payment = ((loanAmount / monthsToPay) + interest).toFixed(2);
    console.log(payment);

    if((loanAmount === '') || (loanAmount < 0) || (isNaN(loanAmount))){
        document.getElementById('payment').innerHTML = 'Please enter a valid amount';
    }else if((interestRate === '') || (interestRate < 0) || (isNaN(monthsToPay))){
        document.getElementById('payment').innerHTML = 'Please enter a valid interest rate';
    }else if((monthsToPay === '') || (monthsToPay < 0) || (isNaN(monthsToPay))){
        document.getElementById('payment').innerHTML = 'Please enter a valid number of months';
    }else{
        document.getElementById('payment').innerHTML = 'Monthly Payment = $'.concat(payment);
    }
    

};