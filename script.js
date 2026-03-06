const calculate = document.getElementById('calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = parseFloat(document.getElementById('amount').value);
    let percentage = parseFloat(document.getElementById('discount-percentage').value);
    let discountAmt = document.getElementById('discount-amount');
    let FinalPay = document.getElementById('pay');

    // 🔴 Check if input is not a valid number
    if (isNaN(billAmt)) {
        alert("Only numbers will come here");
        amountInput.focus();
        return;
    }


    discountAmt.value = billAmt * percentage / 100;
    FinalPay.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});


