document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueByID("input-add-money");

    if (isNaN(addMoney)) {
      alert("filed to add money");
      return;
    }

    if (addMoney < 0 && addMoney && addMoney <= newBalance) {
      alert(" failed amount");
      // document.getElementById('my_modal_6').close();
      return;
    }

    // wrong way to verify do not try at your  serious website

    const balance = getTexFiledValueById("account-balance");
    const savingBalance = getTexFiledValueById("trip-balance");
    const casH = savingBalance - addMoney;
    document.getElementById("trip-balance").innerText = casH;

    const newBalance = balance + addMoney;

    document.getElementById("account-balance").innerText = newBalance;

    //  add to transaction history

    const div = document.createElement("div");
    div.classList.add("bg-stone-300");

    div.innerHTML = `

<h4 class="text-2xl font-bold"></h4>

<p>${addMoney}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p class="text-sm"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>

`;
    document.getElementById("history-container").appendChild(div);
  });

//   function

document.getElementById("show-btn").addEventListener("click", function () {
  showSectionById("add-donate-section");
});

document
  .getElementById("transaction-container")
  .addEventListener("click", function () {
    showSectionById("transaction-section");
  });

//      card 2

document
  .getElementById("relief-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueByID("relief-input");

    // validated

    if (isNaN(addMoney)) {
      alert("filed to add money");
      return;
    }

    if (addMoney < 0 && addMoney && addMoney <= newBalance) {
      alert(" failed amount");
      // document.getElementById('my_modal_6').close();
      return;
    }

    // wrong way to verify do not try at your  serious website

    const balance = getTexFiledValueById("relief-amount");
    const savingBalance = getTexFiledValueById("trip-balance");
    const casH = savingBalance - addMoney;
    document.getElementById("trip-balance").innerText = casH;

    const newBalance = balance + addMoney;

    document.getElementById("relief-amount").innerText = newBalance;

    //  add to transaction history

    const div = document.createElement("div");
    div.classList.add("bg-stone-300");

    div.innerHTML = `
  
  <h4 class="text-2xl font-bold"></h4>
  
  <p>${addMoney}Taka is Donate for Flood Relief in Feni,Bangladesh</p>
  <p class="text-sm"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
  
  `;
    document.getElementById("history-container").appendChild(div);
  });

//   function

// card 3

document
  .getElementById("quota-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueByID("quota-input");





    
 if (isNaN(addMoney)){
  alert('filed to add money');
  return;
 }

    
    if(addMoney < 0 &&  (addMoney) &&  addMoney <= newBalance){
    
      alert(' failed amount');
      // document.getElementById('my_modal_6').close();
      return;
    }

    // wrong way to verify do not try at your  serious website

    const balance = getTexFiledValueById("quota-ammount");
    const savingBalance = getTexFiledValueById("trip-balance");
    const casH = savingBalance - addMoney;
    document.getElementById("trip-balance").innerText = casH;

    const newBalance = balance + addMoney;

    document.getElementById("quota-ammount").innerText = newBalance;

    //  add to transaction history

    const div = document.createElement("div");
    div.classList.add("bg-stone-300");

    div.innerHTML = `
  
  <h4 class="text-2xl font-bold"></h4>
  
  <p>${addMoney}Taka is Aid for Injured in the Quota Movement</p>
  <p class="text-sm"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
  
  `;
    document.getElementById("history-container").appendChild(div);
  });

//   function
