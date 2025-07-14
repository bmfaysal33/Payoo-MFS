

        // Show Add Money Form and Hide other forms....

document.getElementById('btn-add-money-form').addEventListener('click', function(){

    // Show add money form....
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide cash out form     
    document.getElementById('cash-out-form').classList.add('hidden');

     // hide transaction form
    document.getElementById('transaction').classList.add('hidden');

})



                        // show Cash Out Form and Hide other forms ...                  

document.getElementById('btn-cash-out-form').addEventListener('click', function(){

    // Show cash out form....
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide add money form
    document.getElementById('add-money-form').classList.add('hidden');

    // hide cash out form
    document.getElementById('cash-out-form').classList.add('hidden');

})



                        // show Transaction history

                        document.getElementById('btn-transaction-form').addEventListener('click', function(){
                            // Show transaction form

                            document.getElementById('transaction').classList.remove('hidden');

                            // Hide current form
                            document.getElementById('add-money-form').classList.add('hidden');
                            
                        })


