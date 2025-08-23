
/* 
//to use this first disable the login button
 document.getElementById('mobile-number-input').addEventListener('keyup',function(event){
    if(event.target.value === '01701748500'){
        document.getElementById("btn-login").disabled = false;
    }
    else{
        document.getElementById("btn-login").disabled = true;
    }
    
})
*/

//login button functionality
document.getElementById("btn-login")
.addEventListener("click", function (e) {
    e.preventDefault();
    //normal showed in the class
    const mobileCheck = '01701748500';
    const pinCheck = '48215'
    const mobileNumberInput = document.getElementById('mobile-number-input').value;
    const pinInput = document.getElementById('pin-input').value;
    // console.log(mobileNumberInput,pinInput);
    
    if(mobileCheck === mobileNumberInput && pinCheck === pinInput){
        window.location.href = 'home.html';
        
    }
    else{
        alert('Invalid Credentials');
    }


});
//-----------------------------------------------------------------------------------------------------------
/* //event on add money card
document.getElementById("add-money-div").addEventListener("click", function () {
  //removing previous border
  document.getElementById("add-money-div").classList.remove("border-gray-300");
  //adding new classlist
  document
    .getElementById("add-money-div")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  //removing class list from cashout div so that when add money selected it should not be visible
  document
    .getElementById("cashout-div")
    .classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //again adding cashout previous border so that when add money selected cashout border go back to its previous version
  document.getElementById("cashout-div").classList.add("border-gray-300");
  //setting hidden feature
  document.getElementById("add-money-section").hidden = false;
  document.getElementById("cashout-section").hidden = true;
  //hiding cashout message
  document.getElementById("cashout-message").hidden = true;
});
//event on cashout card
document.getElementById("cashout-div").addEventListener("click", function () {
  //removing classlist from add money div so that when chasout selected add money should not be visible
  document
    .getElementById("add-money-div")
    .classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //adding add money previous class list
  document.getElementById("add-money-div").classList.add("border-gray-300");
  //removing cashout previous border so that new border is visible
  document.getElementById("cashout-div").classList.remove("border-gray-300");
  //adding new classlist to the cashout div so that new border is visible
  document
    .getElementById("cashout-div")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById("add-money-section").hidden = true;
  document.getElementById("cashout-section").hidden = false;
  //hiding add money when clicked into cashout
  document.getElementById("money-added-message").hidden = true;
});
// event on withdraw money
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentInput = document.getElementById("agent-input").value;
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );

    const withdrawPin = document.getElementById("withdraw-pin").value;
    const updatedBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const updatedBalanceAfterWithdraw = updatedBalance - withdrawAmount;

    document.getElementById("available-balance").innerText =
      updatedBalanceAfterWithdraw;

    //now displaying cashout message
    document.getElementById("cashout-section").hidden = true;
    document.getElementById("cashout-message").hidden = false;

    document.getElementById("cashout-money").innerText =
      "CashOut Money : " + withdrawAmount;
    document.getElementById("updated-balance-after-cashout").innerText =
      "Updated Balance : " + updatedBalanceAfterWithdraw;
  }); */