// fetch("ejercicio.json")
//   .then((response) => response.json()) //se convierte a un array de objetos
//   .then((data) => {
//     //`data` es el array de objetos.
//     document.getElementById("ejercicioJson").textContent = JSON.stringify(
//       data,
//       null,
//       2
//     );
//   })
//   // .then((data) => {
//   //   console.log(Array.isArray(data));
//   // })

//   .catch((error) => console.error("Error al cargar el JSON:", error));

fetch("ejercicio.json")
  .then((response) => response.json()) // Convierte la respuesta a un array de objetos
  .then((data) => {
    const listaDatos = document.getElementById("listaDatos");

    //  posiciones pares
    //el folter sirve para crear un nevo array de data
    const datosPares = data.filter((_, index) => index % 2 === 0);

    // Crear un elemento de lista por cada objeto y añadirlo al DOM
    datosPares.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Nombre: ${item.nombre}, Cédula: ${item.cedula}, Fecha: ${item.fecha}, Estatura: ${item.estatura}`;
      listaDatos.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

// lista normal sin filtrar
fetch("./ejercicio.json")
  .then((response) => response.json()) // Convierte la respuesta a un array de objetos
  .then((data) => {
    // Referencia a la lista en el DOM
    const ejercicioJsonLista = document.getElementById("ejercicioJson");

    // Crear un elemento <li> por cada objeto en el JSON y añadirlo a la lista
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Nombre: ${item.nombre}, Cédula: ${item.cedula}, Fecha: ${item.fecha}, Estatura: ${item.estatura}`;
      ejercicioJsonLista.appendChild(listItem);
    });
  });
