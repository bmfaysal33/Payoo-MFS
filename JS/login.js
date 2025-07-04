// console.log('Working... ')





     document.getElementById('button-login').addEventListener('click', function(event){
        event.preventDefault(); // This one prevents website from reloading after Text or Pin input
        console.log('Login button clicked...')


                // step 3: Get the phone number

                const phoneNumber = document.getElementById('phone-number').value;

                const pinNumber = document.getElementById('pin-number').value;


                        console.log(phoneNumber , pinNumber)

                        // This way of verification is Not recommended...

                        if ( phoneNumber === '01741' && pinNumber === '1234'){
                            window.location.href = 'home.html'

                            console.log('You are allowed to login...')
                        }
                        else {
                           alert(" Your Phone number or Pin code doesn't match ")
                        }


     })


