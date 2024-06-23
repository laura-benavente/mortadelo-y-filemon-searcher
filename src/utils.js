const createCharacterRow = (character) => {
  const element = document.createElement("div");
  const avatar = createAvatar(character);
  const name = createNameText(character);
  const specialty = createSpecialtyText(character);
  const skills = createSkillsText(character);

  element.appendChild(avatar);
  element.appendChild(name);
  element.appendChild(specialty);
  element.appendChild(skills);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.imagen;
  return element;
};

const createNameText = (character) => {
  const element = document.createElement("span");
  const category = document.createElement("b");
  category.append("Nombre: ");
  element.append(category);
  element.append(character.nombre);
  return element;
};

const createSpecialtyText = (character) => {
  const element = document.createElement("span");
  const category = document.createElement("b");
  category.append("Especialidad: ");
  element.append(category);
  element.append(character.especialidad);
  return element;
};

const createSkillsText = (character) => {
  const element = document.createElement("span");
  const category = document.createElement("b");
  category.append("Habilidades: ");
  element.append(category);
  element.append(character.habilidades);
  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.imagen;
  return element;
};

export { createCharacterRow };
