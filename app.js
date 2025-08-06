const express = require("express");
const tasksData = require("./task.json");
const app = express();
const port = 3000;

let tasks = tasksData.tasks;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GET /tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

// POST /tasks
app.post("/tasks", (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== "boolean") {
    return res.status(400).send("Invalid data");
  }
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    completed,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== "boolean") {
    return res.status(400).send("Invalid data");
  }
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.status(404).send("Task not found");
  tasks[idx] = {
    id: tasks[idx].id,
    title,
    description,
    completed,
  };
  res.json(tasks[idx]);
});

// DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.status(404).send("Task not found");
  const deleted = tasks.splice(idx, 1)[0];
  res.json(deleted);
});

// For manual testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Only start server if not in test mode
if (require.main === module) {
  app.listen(port, (err) => {
    if (err) {
      return console.log("Something bad happened", err);
    }
    console.log(`Server is listening on ${port}`);
  });
}

module.exports = app;
