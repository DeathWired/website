const divResult = document.getElementById("divResult");
const username = "deafwired";
const baseURL = `https://api.github.com/users/${username}/repos`;

fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((i) => {
      const repo = document.createElement("a");
      repo.target = "_blank";
      repo.href = i.html_url;
      repo.className = "projects";
      repo.style = "text-align:center; text-decoration: none;";
      if (i.description == null) {
        repo.innerHTML = "<div><h2>" + i.name + "</h2></div>";
      }
      if (i.description !== null) {
        repo.innerHTML =
          "<div><h2>" + i.name + "</h2><p>" + i.description + "</p></div>";
      }
      divResult.appendChild(repo);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
