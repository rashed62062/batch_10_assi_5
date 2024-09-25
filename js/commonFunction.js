function getInputFieldValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function  getTexFiledValueById(id){
    const texValue = document.getElementById(id).innerText;
    const TextNumber = parseFloat(texValue);
    return TextNumber;
}



// function ShowSectionById(id){

//     // hide all section
//     document.getElementById('add-donate-section').classList.add('hidden');
//     document.getElementById('transaction-section').classList.add('hidden');
//     document.getElementById(''). classList.add('hidden');


//     //  show the section with  the provide id as parameter
//     document.getElementById(id).classList.remove('hidden');
// }



function showSectionById(id){
    //  hide all the sections
    document.getElementById('add-donate-section').classList.add('hidden');
    document.getElementById('relief-section').classList.add('hidden');
    document.getElementById('Quota-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');


    // document.getElementById('transaction-section').classList.add('hidden');
       //  show the section with the provide id as parameter
       document.getElementById(id).classList.remove('hidden');
 }


