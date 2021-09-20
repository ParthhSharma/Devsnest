import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        setTemplates(data.data.memes);
      });
  }, []);

  return (
    <div className="App">
      <h1>MEME GENERATOR</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme}  setMeme={setMeme}/>
      )}
    </div>
  );
}

export default App;