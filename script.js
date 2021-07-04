// login button click
let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let loginArea = document.querySelector('.login-area');
    let transectionArea = document.querySelector('.transection-area');
   
    loginArea.style.display = 'none';
    transectionArea.style.display = 'block';

})
 // the function is after deposit button click
let depositButton = document.querySelector('#deposit-button');
depositButton.addEventListener('click',(e)=>{
  e.preventDefault();
  let currentDepositAmount = document.querySelector('#deposit-amount').innerText;
  let currentDepositAmountNumber = parseFloat(currentDepositAmount);
  let depositInputAmount = document.querySelector('#deposit-input').value;
  let depositInputAmountNumber = parseFloat(depositInputAmount);
  let totalDepositAmount = currentDepositAmountNumber + depositInputAmountNumber;
  console.log(totalDepositAmount);
  document.querySelector('#deposit-amount').innerText = totalDepositAmount;
  document.querySelector('#deposit-input').value = "";
  let balanceAmount = document.querySelector('#balance-amount').innerText;
  let balanceAmountNumber = parseFloat(balanceAmount);
  let totalBalanceAmount = balanceAmountNumber + depositInputAmountNumber;
  document.querySelector('#balance-amount').innerText = totalBalanceAmount;
})


 // the function is after withdraw button click
;
 let withdrawButton = document.querySelector('#withdraw-button');
 withdrawButton.addEventListener('click',(e)=>{
     e.preventDefault();
     let balanceAmount = document.querySelector('#balance-amount').innerText;
   if(balanceAmount > 0){
    let currentWithdrawAmount = document.querySelector('#withdraw-amount').innerText;
    let currentWithdrawAmountNumber = parseFloat(currentWithdrawAmount);

    let inputWithdrawAmount = document.querySelector('#withdraw-input').value;
    
    let inputWithdrawAmountNumber = parseFloat(inputWithdrawAmount);
   
    let totalWithdrawAmount = currentWithdrawAmountNumber + inputWithdrawAmountNumber;
    console.log(totalWithdrawAmount);
    document.querySelector('#withdraw-amount').innerText = totalWithdrawAmount;
    document.querySelector('#withdraw-input').value = '';
    
    let balanceAmountNumber = parseFloat(balanceAmount);
    let totalAmount = balanceAmountNumber - inputWithdrawAmountNumber;
    document.querySelector('#balance-amount').innerText = totalAmount;
   }
   else{
       alert('THis is not working because balance not be working');
       document.querySelector('#withdraw-input').value = '';
   }

    



 })

