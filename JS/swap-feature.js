

        // Add Money Form....

document.getElementById('btn-add-money-form').addEventListener('click', function(){

    // Show cash out form....
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide add money form     

    document.getElementById('cash-out-form').classList.add('hidden');

})



                        // Cash Out Form....                  

document.getElementById('btn-cash-out-form').addEventListener('click', function(){

    // Show cash out form....
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide add money form

    document.getElementById('add-money-form').classList.add('hidden');

})



