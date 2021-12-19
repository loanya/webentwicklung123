//fetch('GET http://localhost/')
//const cors = require('cors')

async function login() {
    const form = document.querySelector('form')

    const email = document.querySelector('[name=email]').value
    const password = document.querySelector('[name=password]').value

    const BASE_URL = "https://webtechbackend2.herokuapp.com"
    // const BASE_URL = " http://localhost:3000"

    const request_login = async (email, password) => {

        const loginUrl = "https://webtechbackend2.herokuapp.com"

        const response = await fetch(loginUrl, {
            method: "POST",
            /*credentials: "include",*/
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": email, "password": password }),
        });

        if(response.status===200){
            console.log("YAY")
        }

        if(response.status===401){
            console.log("Nay")
        }

        console.log("End of function")

        return response.status===200;

    }

    await request_login(email, password)
}

