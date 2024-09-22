import { useState, useReducer } from "react";
import listReducer from "./listReducer";
import Task from "./Component";

export default function App() {
  const [task, setTask] = useState("");
  const [list, dispatch] = useReducer(listReducer, []);

  return (
    <div>
      <h1 className="m-2 p-2 text-3xl">To-do list</h1>
      <label htmlFor="newTask" className="m-4">
        Add new task:{" "}
      </label>
      <input
        className="border-2 border-black p-2 m-2"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
        name="newTask"
        id="newTask"
        value={task}
      />
      <button
        className="m-2 p-2 bg-green-200"
        onClick={() => {
          dispatch({
            type: "add task",
            payload: { newTask: { id: Date.now(), task: task, completed: false } },
          });
          setTask("");
          console.log(list);
        }}
      >
        Add task to list
      </button>
      <h2 className="m-2 p-2 text-2xl">List of tasks:</h2>
      {list.map((item) => {
        return <Task key={item.id} item={item} dispatch={dispatch} />;
      })}
    </div>
  );
}
