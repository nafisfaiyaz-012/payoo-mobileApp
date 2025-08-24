//saving input dynamically into an array
const transactionDataArray = [];
//reusable function for repetitive task
function getNumberFromInput(str) {
  return parseInt(document.getElementById(str).value);
}
//logout button feature
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "index.html";
});
//toggle feature function
function toggleFeature(sectionId) {
  const forms = document.getElementsByClassName("form");
  const messages = document.getElementsByClassName("message");
  for (const form of forms) {
    form.style.display = "none";
  }
  for (const message of messages) {
    message.style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
}
function toggleFeatureStyle(divId) {
  const allButtonDiv = document.getElementsByClassName("toggle-style");
  for (const button of allButtonDiv) {
    button.classList.remove("border-[blue]", "bg-[lightblue]");
    button.classList.add("border-gray-300");
  }
  document.getElementById(divId).classList.remove("border-gray-300");
  document
    .getElementById(divId)
    .classList.add("border-[blue]", "bg-[lightblue]");
}
//add money button feature
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankInput = document.getElementById("bank-input").value;

    const accountNumberInput = document.getElementById(
      "account-number-input"
    ).value;

    const addAmountInput = getNumberFromInput("add-amount-input");

    const pinInput = document.getElementById("pin-input").value;

    const availableBalanceNumber = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumberInput.length < 11) {
      alert("Invalid Account No.");
      return;
    }

    if (pinInput.length < 4 || pinInput.length > 4) {
      alert("Invalid Pin");
      return;
    }

    const updatedBalance = availableBalanceNumber + addAmountInput;

    document.getElementById("available-balance").innerText = updatedBalance;

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

    const dataCollection = {
      name: "Add Money",
      money: addAmountInput,
      date: new Date().toLocaleTimeString(),
    };
    transactionDataArray.push(dataCollection);
  });
//withdraw button feature
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

    const dataCollection = {
      name: "Cash Out",
      money: withdrawAmount,
      date: new Date().toLocaleTimeString(),
    };
    transactionDataArray.push(dataCollection);
  });
// send now button feature
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

    const dataCollection = {
      name: "Transfer Money",
      money: transferAmount,
      date: new Date().toLocaleTimeString(),
    };
    transactionDataArray.push(dataCollection);
  });

//add money card feature
document.getElementById("add-money-div").addEventListener("click", function () {
  toggleFeature("add-money-section");
  toggleFeatureStyle("add-money-div");
});
//cashOut card feature
document.getElementById("cashout-div").addEventListener("click", function () {
  toggleFeature("cashout-section");
  toggleFeatureStyle("cashout-div");
});
// transfer money card feature
document.getElementById("transfer-div").addEventListener("click", function () {
  toggleFeature("transfer-money-section");
  toggleFeatureStyle("transfer-div");
});

//transaction card feature
document
  .getElementById("transactions-div")
  .addEventListener("click", function () {
    toggleFeatureStyle("transactions-div");
    toggleFeature("transactions-section");
    const transactionSection = document.getElementById(
      "transaction-card-section"
    );
    transactionSection.innerText = "";
    console.log(transactionDataArray);
    for (const data of transactionDataArray) {
      const section = document.createElement("section");

      section.innerHTML = `
      <div class="bg-white flex justify-between items-center p-3 rounded-xl  mt-4">
                <div class="flex gap-4">
                    <div class="my-auto p-3 rounded-full ml-4 bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <p>${data.name + " : " + data.money}</p>
                        <p>${data.date}</p>

                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical mr-4"></i>
                </div>
            </div>
      `;
      document.getElementById("transaction-card-section").appendChild(section);
    }

    //
  });
