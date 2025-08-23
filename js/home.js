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
    /* 
    addMoneyForm.classList.add("hidden");

    const addMoneySection = document.getElementById("add-money-section");
    const moneyAddedMessage = document.createElement("div");
    moneyAddedMessage.innerHTML = `
    <i class="fa-solid fa-check"></i>
    <div>
    <p>Money Added : ${addAmountInput}</p>
    <p>Updated Balance : ${updatedBalance}</p>
    </div>             
    `;
    moneyAddedMessage.classList.add(
      "bg-white",
      "p-8",
      "rounded-3xl",
      "flex",
      "justify-center",
      "items-center",
      "gap-4"
    );
    addMoneySection.appendChild(moneyAddedMessage); 
    
    */
  });
