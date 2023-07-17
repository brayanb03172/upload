const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).send('No se ha proporcionado ningún archivo.');
  } else {
    const fileUrl = path.join(__dirname, req.file.path);
    res.send(`Enlace para descargar el archivo: <a href="${fileUrl}">${fileUrl}</a>`);
  }
});

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000.');
});
