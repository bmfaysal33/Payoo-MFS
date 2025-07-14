

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutPin = document.getElementById('cashout-pin').value;
    const cashoutAmount = document.getElementById('input-cash-out').value;
    const accountBalance = document.getElementById('account-balance').innerText;

    if (cashOutPin === '1234') {

        const cashoutBalance = parseFloat(accountBalance) - parseFloat(cashoutAmount);

        console.log(cashoutBalance);

        document.getElementById('account-balance').innerText = cashoutBalance;

                // Shows animation, when balance deducted...

        const accountBalanceDiv = document.getElementById('acc-status');

        accountBalanceDiv.style.transition = 'background-color 0.25s';

        accountBalanceDiv.style.backgroundColor = 'red';
        
        setTimeout(() => {
            accountBalanceDiv.style.backgroundColor = '';
        }, 300);

    }

    else{
        alert('Failed to cash out, Please try again...')
    }
})