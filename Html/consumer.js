const randomPost = async (id) => {
  const URLUSER = `https://jsonplaceholder.typicode.com/users/`;
  const usersResponse = await fetch(URLUSER);
  const usuarios = await usersResponse.json();

  usuarios.forEach((usuario) => {
    const nuevaCard = document.createElement("div");
    nuevaCard.classList.add("col-md-4", "mb-4");

    const nuevaCardHtml = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${usuario.name}</h5>
          <p class="card-text">${usuario.company.catchPhrase}</p>
        </div>
      </div>
    `;

    nuevaCard.innerHTML = nuevaCardHtml;
    contenedor.appendChild(nuevaCard);
  });
};

const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("contenedor-cards");

boton.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the form from submitting

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const nuevaCard = document.createElement("div");
      nuevaCard.classList.add("col-md-4", "mb-4");
      var palabrasDelUsuario = document.getElementById("id-post");

      const nuevaCardHtml = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Victor Rollins</h5>
            <p class="card-text">${palabrasDelUsuario.value}</p>
          </div>
        </div>
      `;

      nuevaCard.innerHTML = nuevaCardHtml;
      contenedor.appendChild(nuevaCard);
      palabrasDelUsuario.value = "";
    });
});

window.addEventListener("load", function () {
  console.log("Cargado");
  //genera un id aleatoria del 1 al 10
  var id = Math.floor(Math.random() * 11);
  randomPost(id);
});
