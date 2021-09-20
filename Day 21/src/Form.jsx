import React from "react";
import { useState } from "react";


const toppings = ['Paneer','Aallo','tamatar','Daniya','Pudeena']

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false));

  const [showData , setshowData] = useState("");
   
  const handleSubmit = (event) => {
    setshowData("show_Data")
     console.log("submited");
     console.log(`Email: ${email} password : ${password} country :{country} term:${accepted} CCheckState:${checkedState}`);
     //to prevent refresh
     event.preventDefault();
   };


  return (
    <div>
      <form>
        <h1>Create Account</h1>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Enter email Id Here"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Country:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option key="india">India</option>
            <option key="usa">USA</option>
            <option key="canada">Canada</option>
          </select>
        </label>
        <br />
        <label>
          I accept all the Terms
          <input
            value={accepted}
            type="checkbox"
            name="acceptedTerms"
            onChange={(e) => {
              setAccepted((previousState) => {
                return !previousState;
              });

              // console.log(e.target.value);
            }}
          ></input>
        </label>
        <br />

        <div>
          {toppings.map((item, index) => {
            return (
              <div>
                <label>{item}</label>
                <input
                  type="checkbox"
                  value={item}
                  name={item}
                  checked={checkedState[index]}
                  onChange={() => {
                    const newState = checkedState.map((item, idx) =>
                      index === idx ? !item : item
                    );
                    setCheckedState(newState);
                  }}
                />
              </div>
            );
          })}
        </div>

        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        <hr />
        <br />
        {showData ? <h1>{`Email: ${email}`}</h1> : "No Data"}
      </form>
    </div>
  );
};

export default Form;