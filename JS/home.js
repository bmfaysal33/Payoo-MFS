



document.getElementById('btn-add-money').addEventListener('click', function (event) {


    event.preventDefault(); // prevents website from reloading...

    const enteredBalance = document.getElementById('balance').value;
    const enteredPin = document.getElementById('entered-pin').value;



    console.log(enteredBalance, enteredPin)

    if (enteredPin === '1234') {
        // console.log('New Balance Added');

        // Step- 1: get the value...


      const digitBalance = parseFloat('enteredBalance');

        // step - 2: add the balance
        // step 3: show the balance


    }
    else {
        alert('Wrong pin code...')
    }

})