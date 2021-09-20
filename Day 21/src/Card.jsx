import React from "react";
import { useState } from "react";

const Card = ({ food, calorie, idx, index, handleDelete, handleEdit }) => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({ food, calorie });

  return (
    <>
      <div className="card-container">
        {!visible ? (
          <div className="card">
            <h2>{food}</h2>
            <p>You Have consumed {calorie} calories.</p>
            <button onClick={() => handleDelete(index)}> Delete</button>
            <button onClick={() => setVisible(!visible)}>Edit</button>
          </div>
        ) : (
          <div className="edit-card">
            <input
              type="text"
              value={input.food}
              onChange={(e) => setInput({ ...input, food: e.target.value })}
            />
            <input
              type="number"
              value={input.calorie}
              onChange={(e) => setInput({ ...input, calorie: e.target.value })}
            />
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button
              onClick={() => {
                handleEdit(input, index);
                setVisible(!visible);
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;