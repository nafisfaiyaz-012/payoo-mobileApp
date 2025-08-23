// event on logout button
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "../index.html";
});
// event on add money button
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankInput = document.getElementById("bank-input").value;
    const accountNumberInput = document.getElementById(
      "account-number-input"
    ).value;
    const addAmountInput = parseInt(
      document.getElementById("add-amount-input").value
    );
    const pinInput = document.getElementById("pin-input").value;

    const availableBalance = document.getElementById("available-balance");
    const availableBalanceNumber = parseInt(availableBalance.innerText);
    if (accountNumberInput.length < 11) {
      alert("Invalid Account No.");
      return;
    }
    if (pinInput.length < 4 || pinInput.length > 4) {
      alert("Invalid Pin");
      return;
    }
    const updatedBalance = availableBalanceNumber + addAmountInput;

    availableBalance.innerText = updatedBalance;
    const addMoneyForm = document.getElementById("add-money-form");
    addMoneyForm.reset();

    //extra added a new message after the money add
    document.getElementById("add-money-message").style.display = "block";
    document.getElementById("add-money-section").style.display = "none";

    //add money msg update
    document.getElementById("money-added").innerText =
      "Money Added : " + addAmountInput;
    document.getElementById("updated-balance").innerText =
      "Updated Balance : " + updatedBalance;
  });
//add money div event
document.getElementById("add-money-div").addEventListener("click", function () {
  //start section hiding
  document.getElementById("start-section").style.display = "none";

  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("cashout-message").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";
  document.getElementById("transfer-msg").style.display = "none";
});
//cashout div event
document.getElementById("cashout-div").addEventListener("click", function () {
  //start section hiding
  document.getElementById("start-section").style.display = "none";

  document.getElementById("cashout-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("add-money-message").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";
  document.getElementById("transfer-msg").style.display = "none";
});
//withdraw button event
document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const balanceAfterWithdraw = availableBalance - withdrawAmount;
    console.log(balanceAfterWithdraw);
    document.getElementById("available-balance").innerText =
      balanceAfterWithdraw;
    document.getElementById("cashout-form").reset();

    //cashout message
    document.getElementById("cashout-message").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";

    //cashout message update
    document.getElementById("cashout-money").innerText =
      "CashOut Money : " + withdrawAmount;
    document.getElementById("updated-balance-after-cashout").innerText =
      "Updated Balance : " + balanceAfterWithdraw;
  });
// send now button event
document
  .getElementById("btn-send-now")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const balanceAfterTransfer = availableBalance - transferAmount;
    document.getElementById("available-balance").innerText =
      balanceAfterTransfer;
    document.getElementById("transfer-money-form").reset();

    //vanishing tranfer money form
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("transfer-msg").style.display = "block";

    //transfer msg update
    document.getElementById("trasnferred-money").innerText =
      "Transferred Money : " + transferAmount;
    document.getElementById("balance-after-transfer").innerText =
      "Balance after transfer: " + balanceAfterTransfer;
    console.log(balanceAfterTransfer);
  });
// transfer money card event
document.getElementById("transfer-div").addEventListener("click", function () {
  //start section hiding
  document.getElementById("start-section").style.display = "none";

  document.getElementById("transfer-money-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("cashout-message").style.display = "none";
  document.getElementById("add-money-message").style.display = "none";
  document.getElementById("transfer-msg").style.display = "none";
});
