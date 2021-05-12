import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Hey");
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setTasks(data);
    console.log(data);
  };

  const deleteItem = (key) => {
    console.log("deleting");
    const list = [...tasks];
    const updateList = list.filter((item) => item.id !== key);
    setTasks(updateList);
    console.log(updateList);
  };
  return (
    <main>
      <Card className={classes.home}>
        <table>
          <tbody>
            {tasks.slice(0, 3).map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed}</td>
                <td>
                  <button
                    style={{ background: "red" }}
                    className={classes.button}
                    onClick={() => deleteItem(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={classes.button}>Add Task</button>
      </Card>
    </main>
  );
}

export default Tasks;
