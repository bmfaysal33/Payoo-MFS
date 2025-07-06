

        // Show Add Money Form and Hide Cash out form....

document.getElementById('btn-add-money-form').addEventListener('click', function(){

    // Show cash out form....
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide add money form     

    document.getElementById('cash-out-form').classList.add('hidden');

})



                        // show Cash Out Form and Hide Add money form ...                  

document.getElementById('btn-cash-out-form').addEventListener('click', function(){

    // Show cash out form....
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide add money form

    document.getElementById('add-money-form').classList.add('hidden');

})



