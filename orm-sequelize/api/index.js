const express =require('express');
const app = express();

let PORT = 4000;
app.use(express.json());
app.listen(PORT, () => console.log(`Servidor Subindo ${PORT}`));