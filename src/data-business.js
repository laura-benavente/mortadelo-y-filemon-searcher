export function getCharacters() {
  return fetch("http://localhost:3000/personajes")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
      }
    })
    .then((response) =>  response)
    .catch((error) => console.log("Se ha producido un error", error));
}

export function filterCharacters(name) {
  return fetch(`http://localhost:3000/personajes?nombre_like=${name}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
      }
    })
    .then((response) => response)
    .catch((error) => console.log("Se ha producido un error", error));
}