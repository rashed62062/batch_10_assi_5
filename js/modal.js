// Function to show the modal
function showModal() {
    document.getElementById('my_modal_6').showModal(); // Show the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById('my_modal_6').close(); // Close the modal
}

// Add Event Listener to the Donation Button
document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueByID("input-add-money");

    if (isNaN(addMoney) || addMoney <= 0) {
        alert("Failed to add money");
        return;
    }

    const balance = getTextFieldValueById("account-balance");
    const savingBalance = getTextFieldValueById("trip-balance");
    const newTripBalance = savingBalance - addMoney;

    // Check if the donation exceeds the balance
    if (newTripBalance < 0) {
        alert("Insufficient balance for this donation");
        return;
    }

    document.getElementById("trip-balance").innerText = newTripBalance;

    const newBalance = balance + addMoney;
    document.getElementById("account-balance").innerText = newBalance;

    // Add to transaction history
    const div = document.createElement("div");
    div.classList.add("bg-stone-300");
    div.innerHTML = `
        <p>${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p class="text-sm"> Date: ${new Date()}</p>
    `;
    document.getElementById("history-container").appendChild(div);

    // Show the success modal
    showModal();
});
