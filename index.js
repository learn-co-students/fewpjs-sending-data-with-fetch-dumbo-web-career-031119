function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}

// could not find bug in my could using ES6 syntax so took a solution that did work...-_-

// function submitData(name, email) {
//   fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         name,
//         email
//       })
//     })
//     .then(res => res.json())
//     .then((user) => {
//        document.body.innerHTML = user["id"]
//     })
//     .catch((error) => {
//        document.body.innerHTML = error.message
//     })
// }
