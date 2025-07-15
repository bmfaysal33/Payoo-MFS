



document.getElementById('btn-add-money').addEventListener('click', function (event) {


    event.preventDefault(); // prevents website from reloading...

    const enteredBalance = document.getElementById('balance').value;
    const enteredPin = document.getElementById('entered-pin').value;
    const accountBalance = document.getElementById('account-balance').innerText;


    // obsolete way to validate pin...

    if (enteredPin === '1234') {

        // Adding the value...

        const newBalance = parseFloat(accountBalance) + parseFloat(enteredBalance);
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

        // transaction Add money history 

        const div = document.createElement('div');
        div.classList.add('bg-green-500', 'rounded-xl', 'p-4', 'my-2');
        div.innerText = `Added : ${enteredBalance} tk, New balance: ${newBalance}`
        console.log(div);

        document.getElementById('transaction-info').appendChild(div);


        // Shows animation, when balance changes...

        const accountBalanceDiv = document.getElementById('acc-status');
        accountBalanceDiv.style.transition = 'background-color 0.25s';
        accountBalanceDiv.style.backgroundColor = '#37bf5c';
        setTimeout(() => {
            accountBalanceDiv.style.backgroundColor = '';
        }, 300);


    }
    else {
        alert('Wrong pin code...')
    }

})