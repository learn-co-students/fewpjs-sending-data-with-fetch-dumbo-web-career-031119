// Add your code here

function submitData(name, email) {

    fetch("http://localhost:3000/users", { //patching to json url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object, document.querySelector('body'))
            document.querySelector('body').innerHTML = object.id
        }).catch(function (error) {
            // document.querySelector('body').innerHTML += (error.message);
            // document.querySelector('body').innerHTML += `<p>${error.message}</p>`
        });
}

// submitData()