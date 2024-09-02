const https = require('https');
const fs = require('fs');
const path = require('path');

// URL del archivo JSON en GitHub
const url = 'https://raw.githubusercontent.com/AlexHernande2/sistemas-distribuidos/main/ejercicio.json';
// Ruta donde se guardará el archivo localmente
const filePath = path.join(__dirname, 'ejercicio.json');

// Descargar y guardar el archivo
https.get(url, (res) => {
  const fileStream = fs.createWriteStream(filePath);
  res.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('JSON descargado y guardado en:', filePath);
  });
}).on('error', (err) => {
  console.error('Error al descargar el JSON:', err.message);
});
