import Submit from "./Submit.jsx";
import { useState, useEffect } from "react";
export default function Input({ newItem, setNewItem }) {
  const [input, setInput] = useState("");

  useEffect(() => {}, [newItem]);
  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNewItem({ item: input, done: false });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        value={input}
        onChange={(e) => handleChange(e)}
        className={"mt-4"}
        type="text"
      />
      <Submit />
    </form>
  );
}
