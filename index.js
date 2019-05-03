// Add your code here
const submitData = (name, email) => {
    let formData = {
        name: name,
        email: email
    }

    let object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', object)
        .then(res => res.json())
        .then(parsedRes => {
            return document.body.innerHTML = parsedRes['id']
        })
        .catch(error => {
            alert('Unauthorized Access');
            document.body.innerHTML = error.message;
        });
}