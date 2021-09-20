import React, { useState } from "react";

const Meme = ({ meme , setMeme}) => {
//   console.log(meme);

const [form, setForm] = useState({
  template_id: meme.id,
  username : "mansi14400",
  password : "mansi@123",
  boxes : [],
})

const generateMeme = () => {
  console.log(form);

  let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
  // console.log(url);

  form.boxes.map((box, index) => {
    url += `&boxes[${index}][text]=${box.text}`;
  });
  console.log(url);

  fetch(url).then(res => res.json())
  .then(res => {
      setMeme({...meme,url: res.data.url})
  })
}

  return (
    <div className="meme">
      <img src={meme.url} alt="meme-image" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            type="text"
            key={index}
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          ></input>
        ))}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={() => setMeme(null)}>Choose Template</button>
      </div>
    </div>
  );
};

export default Meme;