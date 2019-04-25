// Add your code here
var body = document.querySelector("body");

function submitData(username, user_email)
{
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: user_email
        })
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        body.innerHTML += `<p>${json.id}</p>`
    })
    .catch(error => {
        body.innerHTML += `<p>Unauthorized Access.</p>`
    });
}