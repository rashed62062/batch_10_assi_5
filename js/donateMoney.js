document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueByID("input-add-money");

    

    //        const pinNumber = getInputFieldValueById("input-pin-number");

    
 
    if (isNaN(addMoney)) {
      alert("filed to add money");
      return;
    }
    // wrong way to verify do not try at your  serious website

    const balance = getTexFiledValueById("account-balance");
     const savingBalance = getTexFiledValueById("trip-balance");
       const   casH =  savingBalance - addMoney;
       document.getElementById("trip-balance").innerText = casH;

    const  newBalance = balance + addMoney;

    document.getElementById("account-balance").innerText = newBalance;

    //  add to transaction history

//     const p = document.createElement("p");
//     p.innerText = ` ${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh `;

//     console.log(p);

//     //  should be a
//     document.getElementById("history-container").appendChild(p);




//  
  const div = document.createElement('div');
  div.classList.add('bg-black')



div.innerHTML = `


<h4 class="text-2xl font-bold"></h4>

<p>${addMoney}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>

`
 document.getElementById('history-container').appendChild(div);
 });


document.getElementById("show-btn").addEventListener("click", function () {
  showSectionById("add-donate-section");
});

document
  .getElementById("transaction-container")
  .addEventListener("click", function () {
    showSectionById("transaction-section");
  });


//    card 

