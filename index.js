// Add your code here

const { bodyParser } = require("json-server")

function submitData(userName, userEmail) {

    let config = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({

            name: `${userName}`,
            email: `${userEmail}`,
        })
    }
    
    
    
    return fetch('http://localhost:3000/users', config)
    .then(resp => resp.json())
    .then(userInfo => {

        let id = userInfo.id;
        let newID = document.createElement('p');
        let body = document.querySelector('body');
        
        newID.textContent = id;

        body.appendChild(newID)


    })
    .catch(error => {

        let body = document.querySelector('body');
        let errorMessage = document.createElement('p');

        errorMessage.textContent = error.message

        body.appendChild(errorMessage)
    })
}