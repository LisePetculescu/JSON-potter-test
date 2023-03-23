"use-strict";

window.addEventListener("load", startApp);

async function startApp() {
  console.log("start is starting...");
  const harry = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  console.log(harry);
  showCharacter(harry);

  const snape = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json"
  );
  showCharacter(snape);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  document.querySelector("section").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <article>
    <h2>${character.name}</h2>
    <img src="${character.image}">
    </article>`
  );
}
