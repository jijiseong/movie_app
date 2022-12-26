import { useState } from "react";

function ToDo() {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setToDoList((curList) => [value, ...curList]);
    setValue("");
  };

  return (
    <div>
      <label htmlFor="todo">Todo</label>
      <input
        placeholder="ToDo"
        onChange={onChange}
        value={value}
        name="todo"
        type="text"
      />
      <button onClick={onClick}>OK</button>
      <hr />

      <ul>
        {toDoList.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <ToDo />
    </div>
  );
}

export default App;
