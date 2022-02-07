const app = require('./app');
const { conexionBD } = require('./db');

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Server is running on port:${port}`);
  await conexionBD();
});
