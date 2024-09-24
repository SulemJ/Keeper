import React, { useState } from "react";
// import R
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);

  function handleClick(con) {
    setArr((prevValue) => {
      return [...prevValue, con];
    });
    console.log(arr);
  }
  function onDelete(id) {
    setArr((prevValue) => {
    return  prevValue.filter((a, index) => {
      return  index != id })
  })
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />
      {arr.map((a, index) => (
        <Note title={a.title} content={a.content} key={1} onDelete={onDelete} id={index}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
