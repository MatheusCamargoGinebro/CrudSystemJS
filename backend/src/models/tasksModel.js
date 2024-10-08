const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;

  const query = "INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)";

  const createdTask = await connection.execute(query, [
    title,
    "pendente",
    new Date(Date.now()).toUTCString(),
  ]);

  return {insertId: createdTask[0].insertId};
};

const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const removedTask = await connection.execute(query, [id]);

  return removedTask;
};

const updateTask = async (id, NewTaskData) => {
  const { title, status} = NewTaskData;
  
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";

  const [updatedTask] = await connection.execute(query, [title, status, id]);

  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
