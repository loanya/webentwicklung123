//fetch('GET http://localhost/')
//const cors = require('cors')

function login() {
    window.alert("eqredq")
    const form = document.querySelector('form')

    const email = document.querySelector('[name=email]')
    const password = document.querySelector('[name=password]')

    const BASE_URL = " https://webtechbackend2.herokuapp.com"

    const login = async (email, password) => {

    const loginUrl = `${BASE_URL}/login`

    const response = await fetch(loginUrl, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if(response.status===200){
        console.log("YAY")
    }

    if(response.status===401){
        console.log("Nay")
    }

    return response.status===200;

    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(email.value)
        // window.alert("yes!")
        login()
        //     .then(wasSuccessfullLogin => {
        //         if (wasSuccessfullLogin) {
        //             console.log('it worked');
        //             //loginError.classList.add('hidden')
        //         }
        //     })
    })

}