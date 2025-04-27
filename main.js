const billInput = document.getElementById("billvalue");
const peopleInput = document.getElementById("people");
const tipInputButtons = document.querySelectorAll(".button");
const customTipInput = document.getElementById("tipcustom");

// Result elements

const totalAmount = document.querySelector(".result");
const totalAmountPerPerson = document.querySelector(".total-result");

// Function to update results
function updateResults(tipAmount, totalAmountValue) {
  totalAmount.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountPerPerson.textContent = `$${totalAmountValue.toFixed(2)}`;
}

// calculate tip
tipInputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", (e) => {
    e.preventDefault();

    const tipPercentage =
      parseFloat(inputButton.innerText.replace("&", "")) / 100;
    amount = parseFloat(billInput.value);
    people = peopleInput.value;

    const tipAmount = (amount * tipPercentage) / people;
    const totalAmountValue = amount / people + tipAmount;

    updateResults(tipAmount, totalAmountValue);
  });
});

// Calculate tip for the custom percentage
function calculateCustomTip() {
  amount = parseFloat(billInput.value);
  people = peopleInput.value;
  cutomTipPercentage = parseFloat(customTipInput.value) / 100;

  const customTip = (amount * customtipPercentage) / people;
  const totalAmountValue = amount / people + customTip;

  updateResults(customTip, totalAmountValue);
}

// Code for the clear results button
document.querySelector(".reset-button").addEventListener("click", () => {
  totalAmount.innerHTML = "$0.00";
  totalAmountPerPerson.innerHTML = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
});
