


// Get The Data From The Table
console.log(document.getElementById('signup'))
document.getElementById('signup').addEventListener("submit",submitForm)

function submitForm(event) {
    
    const data = document.getElementById('signup');
    console.log(data[1])

    /*
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // You can log the form object to check data
    console.log('Form data:', formObject);

    // Send the data to the server via fetch
    fetch('/submit', {
      method: 'POST',
      body: new URLSearchParams(formObject)  // Encoding data as x-www-form-urlencoded
    })
    .then(response => response.json())
    .then(data => console.log('Response from server:', data))
    .catch(error => console.error('Error:', error))
    */
}


// google meet api
/*
const {SpacesServiceClient} = require('@google-apps/meet').v2;

const meetClient = new SpacesServiceClient()

async function callCreateSpace() {
    const request = {}

    const response = await meetClient.createSpace(request)
    console.log(response)
}

callCreateSpace()
*/

/* tutor sign up */