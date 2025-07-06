

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutPin = document.getElementById('cashout-pin').value;
    const cashoutAmount = document.getElementById('input-cash-out').value;
    const accountBalance = document.getElementById('account-balance').innerText;

    if (cashOutPin === '1234') {

        const cashoutBalance = parseFloat(accountBalance) - parseFloat(cashoutAmount);

        console.log(cashoutBalance);

        document.getElementById('account-balance').innerText = cashoutBalance;
    }
})