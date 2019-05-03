// Add your code here

let formData = {
    name: name,
    email: email
};

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }


    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };


    return fetch('http://localhost:3000/users', configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (parsedResponse) {
            document.body.innerHTML = parsedResponse["id"]
        })
        .catch(function (error) {
            alert("something went wrong dummy!");
            document.body.innerHTML = error.message;
        })
}