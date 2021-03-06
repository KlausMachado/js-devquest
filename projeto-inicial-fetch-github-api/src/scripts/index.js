import { getRepositories } from "/src/scripts/services/repositories.js";
import { getUser } from "/src/scripts/services/user.js";
import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";

function validateEmpytInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuario do GitHub");
    return true;
  }
}

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validateEmpytInput(userName)) return;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmpytInput(userName)) return;
    getUserData(userName);
  }
});

async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);
  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  screen.renderUser(user);
  console.log(user.numberFollowers)
  console.log(user.numberFollowing)
}
