import React from "react";
import { useState, useEffect } from "react";

function UseEFFECT() {
  const [resourceType, setResourcType] = useState("posts");

//for api
 const [items, setItems] = useState([]);

//always on rendering the app
//   console.log("render");

//   only renders when resource type is changed
//   useEffect(() => {
//     console.log("rsource type changed");
//   }, [resourceType]);

  //renders on once at Starting only
//   useEffect(() => {
//     console.log("On Mount");
//   }, [])

// fetching the Api
  // useEffect(()=>{
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then(jsondata => setItems(jsondata));
  // },[resourceType])



// useEffect(() => {
//     fetchItems();
// })

// const fetchItems = async() => {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     const posts = await res.json();
//     console.log(posts,'json format');
// }

  return (
    <div>
      <button onClick={() => setResourcType("posts")}>Posts</button>
      <button onClick={() => setResourcType("users")}>Users</button>
      <button onClick={() => setResourcType("comments")}>Comments</button>
      

      <h1>{resourceType}</h1>

      {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>;
      })} 

    </div>


  );
}

export default UseEFFECT;