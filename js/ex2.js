const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
//picture
      const picture = document.createElement("img")
      picture.src = user.avatar_url;
      picture.style.height = "150px";
      picture.style.width = "150px";

//person name
      const name = document.createElement("div");
      name.textContent = user.name;
      name.style.fontSize = "20px";
//website url
      const website = document.createElement("a");
      website.href = user.blog;
      website.textContent = website.href;
//created on date
      const created = document.createElement("div");
      created.textContent = user.created_at;
      created.style.fontSize = "20px";

      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = "";
      infosElement.appendChild(picture);
      infosElement.appendChild(name);
      infosElement.appendChild(website);
      infosElement.appendChild(created);
    })
    .catch(err => {
      console.error(err.message);
    });
});