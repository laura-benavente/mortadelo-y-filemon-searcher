import { getCharacters, filterCharacters } from "./data-business";
import { createCharacterRow } from "./utils";

const form = document.getElementById("form");
const searchInput = document.getElementById("name");

const displayCharacters = (characters) => {
  const charactersList = document.getElementById("charactersList");
  charactersList.innerHTML = "";
  const nodeList = [];

  for (let character of characters) {
    const node = createCharacterRow(character);
    nodeList?.push(node);

    for (let node of nodeList) {
      document.getElementById("charactersList")?.append(node);
    }
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = searchInput.value;
  if (text) {
    filterCharacters(text).then(displayCharacters);
  }
});

getCharacters()?.then(displayCharacters);

const formNode = document.getElementById("form");

if (formNode) {
  formNode.addEventListener("submit", filterCharacters);
}
