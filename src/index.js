const app = require('./app');
const { conexionBD } = require('./db');
const { PORT } = require('./config');

app.listen(PORT, async () => {
  console.log(`Server is running on port:${PORT}`);
  await conexionBD();
});
