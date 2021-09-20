import React, { useState } from "react";
import "./App.css";
// import Form from "./Form";
// import UseEFFECT from "./UseEFFECT";
import Card from "./Card";

function App() {
  const [userInput, setUserInput] = useState({ food: "", calorie: "" });
  const [state, setState] = useState([]);

  const handleDelete = (index) => {
    setState((prevState) => prevState.filter((val, idx) => idx != index));
  };

  function handleEdit(val, idx) {
    console.log(val, idx);
    const newState = state.map((value, index) => {
      return index === idx ? val : value;
    });
    setState(newState);
  }

  return (
    <div className="App">
      <h1> Calorie Tracker </h1>

      <hr />
      <form>
        <label>
          FoodItem
          <input
            type="text"
            required
            placeholder="Enter Item"
            onChange={(e) =>
              setUserInput({ ...userInput, food: e.target.value })
            }
            value={userInput.food}
          ></input>
        </label>
        <br />
        <label>
          Calories
          <input
            type="number"
            placeholder="Enter Calorie"
            required
            onChange={(e) =>
              setUserInput({ ...userInput, calorie: e.target.value })
            }
            value={userInput.calorie}
          ></input>
        </label>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("ITEM ADDED");
            setState([...state, userInput]);
            setUserInput({ food: "", calorie: "" });
          }}
        >
          Add
        </button>
      </form>

      <div className="cards">
        {state.map((val, idx) => (
          <Card
            food={val.food}
            calorie={val.calorie}
            key={idx}
            index={idx}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;