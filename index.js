// Add your code here




const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email 
        })
    }).then(resp => resp.json()).then(parsedData => {
        renderData([parsedData])
    }).catch(error => {
        document.body.innerHTML = error.message;
    });
}

const renderData = (parsedData) => {
    parsedData.forEach(element => {

        const newDiv = document.createElement('div');
        newDiv.innerHTML += `${element.id}`
        document.body.append(newDiv);
    });
}