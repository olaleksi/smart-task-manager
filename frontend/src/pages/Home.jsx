import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import Loader from "../components/Loader";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (task) => {
    const newTask = await createTask(task);
    setTasks([newTask, ...tasks]);
  };

  const handleUpdate = async (id, updated) => {
    const updatedTask = await updateTask(id, updated);
    setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="container">
      <h1>Smart Task Manager</h1>

      <TaskForm onCreate={handleCreate} />

      {loading && <Loader />}
      {error && <p>{error}</p>}

      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Home;
