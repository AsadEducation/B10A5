// toogle features 

const toggleDonate = replyId('toggle-donate');
const toggleHistory = replyId('toggle-history');
const donateSection = replyId('donate-section');
const historySection = replyId('history-section');


toggleDonate.addEventListener('click', function (event) {
    donateSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    toggleDonate.classList.add('bg-[#B4F461]');
    toggleHistory.classList.remove('bg-[#B4F461]');

})

replyId('toggle-history').addEventListener('click', function (event) {
    historySection.classList.remove('hidden');
    donateSection.classList.add('hidden');

    toggleHistory.classList.add('bg-[#B4F461]');
    toggleDonate.classList.remove('bg-[#B4F461]');
})





// showing modal after noakhali donation

replyId('noakhali-btn').addEventListener('click', function (event) {


    mainBalance = parseFloat(replyId('main-balance').innerText);
    noakhaliBalance = parseFloat(replyId('noakhali-balance').innerText);
    noakhaliInput = replyId('noakhali-input').value;

    if (!isValid(noakhaliInput)) {
        alert('Invalid Donation Amount');
        replyId('noakhali-input').value = '';
        return;
    }

    mainBalance -= parseFloat(noakhaliInput);
    replyId('main-balance').innerText = mainBalance;
    noakhaliBalance += parseFloat(noakhaliInput);
    replyId('noakhali-balance').innerText = noakhaliBalance;
    replyId('noakhali-input').value = '';

    //make transaction history


    const amount = noakhaliBalance;
    const fund =   "Noakhali-Flood-Relief";
    const place = "Noakhali";

    const currentTime = new Date();

    // transaction history 
    addTransactionHistory(amount,fund,place,currentTime)
    //if donation is a success
    replyId('noakhali-modal').showModal();
})



// showing modal after feni donation

replyId('feni-btn').addEventListener('click', function (event) {


    mainBalance = parseFloat(replyId('main-balance').innerText);
    feniBalance = parseFloat(replyId('feni-balance').innerText);
    feniInput = replyId('feni-input').value;

    if (!isValid(feniInput)) {
        alert('Invalid Donation Amount');
        replyId('feni-input').value ='';
        return;
    }

    mainBalance -= parseFloat(feniInput);
    replyId('main-balance').innerText = mainBalance;
    feniBalance += parseFloat(feniInput);
    replyId('feni-balance').innerText = feniBalance;
    replyId('feni-input').value ='';

    //make transaction history


    const amount = feniBalance;
    const fund =   "feni-Flood-Relief";
    const place = "feni";

    const currentTime = new Date();

    // transaction history 
    addTransactionHistory(amount,fund,place,currentTime)
    //if donation is a success
    replyId('feni-modal').showModal();
})

//showing modal for qouta 

replyId('qouta-btn').addEventListener('click', function (event) {


    mainBalance = parseFloat(replyId('main-balance').innerText);
    qoutaBalance = parseFloat(replyId('qouta-balance').innerText);
    qoutaInput = replyId('qouta-input').value;

    if (!isValid(qoutaInput)) {
        alert('Invalid Donation Amount');
        replyId('qouta-input').value = '';
        return;
    }

    mainBalance -= parseFloat(qoutaInput);
    replyId('main-balance').innerText = mainBalance;
    qoutaBalance += parseFloat(qoutaInput);
    replyId('qouta-balance').innerText = qoutaBalance;
    replyId('qouta-input').value = '';

    //make transaction history


    const amount = qoutaBalance;
    const fund =   "qouta-Flood-Relief";
    const place = "qouta";

    const currentTime = new Date();

    // transaction history 
    addTransactionHistory(amount,fund,place,currentTime)
    //if donation is a success
    replyId('qouta-modal').showModal();
})






