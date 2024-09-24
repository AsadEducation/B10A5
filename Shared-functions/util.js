
function replyId(id) {
    return document.getElementById(id);
}


function isValid(InputText) {

    if (InputText == '' || isNaN(InputText)) return false;

    else if (parseFloat(InputText) < 0 || parseFloat(InputText) > mainBalance) return false;

    return true;

}


function addTransactionHistory(amount, fund, place, currentDate) {

    newHTML = `
        <div class="border rounded-lg p-3 mt-5 text-center bg-yellow-200">
        <h2 class="text-xl md:text-2xl font-bold "> ${amount} Taka is Donated For ${fund} ${place}.</h2>
        <p>Date : ${currentDate} </p>
       </div>
   `
    historySection.innerHTML += newHTML;
}

