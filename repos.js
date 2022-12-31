const divResult = document.getElementById("divResult");
async function getRepos() {
  const response = await fetch("https://api.github.com/users/deathwired/repos");
  const result = await response.json();
  result.forEach((i) => {
    const repo = document.createElement("a");
    repo.target = "_blank";
    repo.href = i.html_url;
    repo.className = "projects";
    repo.style = "text-align:center; text-decoration: none; color:white;";
    if (i.description == null) {
      repo.innerHTML = "<div><h2>" + i.name + "</h2></div>";
    }
    if (i.description !== null) {
      repo.innerHTML =
        "<div><h2>" + i.name + "</h2><p>" + i.description + "</p></div>";
    }
    divResult.appendChild(repo);
  });
}
getRepos();
