// Función para descargar y guardar el archivo JSON desde GitHub
const descargarYGuardarJson = () => {
  const url =
    "https://raw.githubusercontent.com/AlexHernande2/sistemas-distribuidos/main/ejercicio.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dataStr = JSON.stringify(data, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "ejercicio.json";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch((error) =>
      console.error("Error al descargar el archivo JSON:", error)
    );
};

// Llamar a la función para descargar y guardar el JSON
descargarYGuardarJson();

// Procesar y mostrar los datos pares en la lista
fetch(
  "https://raw.githubusercontent.com/AlexHernande2/sistemas-distribuidos/main/ejercicio.json"
)
  .then((response) => response.json())
  .then((data) => {
    const listaDatos = document.getElementById("listaDatos");

    // Filtrar las posiciones pares
    const datosPares = data.filter((_, index) => index % 2 === 0);

    // Crear y añadir cada elemento a la lista en el DOM
    datosPares.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Nombre: ${item.nombre}, Cédula: ${item.cedula}, Fecha: ${item.fecha}, Estatura: ${item.estatura}`;
      listaDatos.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

// Procesar y mostrar todos los datos en la lista sin filtrar
fetch(
  "https://raw.githubusercontent.com/AlexHernande2/sistemas-distribuidos/main/ejercicio.json"
)
  .then((response) => response.json())
  .then((data) => {
    const ejercicioJsonLista = document.getElementById("ejercicioJson");

    // Crear y añadir cada elemento a la lista en el DOM
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Nombre: ${item.nombre}, Cédula: ${item.cedula}, Fecha: ${item.fecha}, Estatura: ${item.estatura}`;
      ejercicioJsonLista.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
