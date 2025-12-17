fetch("destinos.json")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("destinos-container");

    data.destinos.forEach(destino => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${destino.imagen}" alt="${destino.nombre}">
        <div class="card-body">
          <h3>${destino.nombre}</h3>
          <p>${destino.descripcion}</p>
          <p><strong>Duración:</strong> ${destino.duracion}</p>
          <p><strong>Desde:</strong> ${destino.precio}</p>
          <a class="link" href="#">Ver paquetes</a>
        </div>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando JSON:", error));
