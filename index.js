const express = require('express');

const PORT = 3000;

const authMiddleware = require('./middlewares/AuthMiddlware');
const controllers = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.get('/tasks', authMiddleware, controllers.getAllTasks);
app.post('/login', controllers.login);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
