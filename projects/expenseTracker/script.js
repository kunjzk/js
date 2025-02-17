document.addEventListener("DOMContentLoaded", () => {
  // Listen for button click
  // Get values from the form
  // Sum the total expense up
  // Add items into a ul
  // Listen on the items delete button
  // Remove items from the ul & decrement the total expense
  // If all items are removed, revert back to initial view

  // Strategy: add expenses to local storage, then render them, then figure out event listners on delete buttons

  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = [];
  let totalAmount = calculateTotal();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name == "" || isNaN(amount) || amount <= 0) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: amount,
    };
    expenses.push(newExpense);
    saveExpensesToLocalStorage();
    renderTotalAmount();
    renderExpenses();

    // Clear input
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  });

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let expenseID = parseInt(e.target.getAttribute("data-id")); // tag is string by default
      console.log(expenseID);
      console.log(expenses);
      expenses = expenses.filter((e) => e.id !== expenseID); // filer returns a new array
      console.log(expenses);
      renderTotalAmount();
      renderExpenses();
    }
  });

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} = $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
        `;
      expenseList.appendChild(li);
    });
  }

  function renderTotalAmount() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function saveExpensesToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
