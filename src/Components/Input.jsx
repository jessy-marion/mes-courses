import Submit from "./Submit.jsx";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { patchData } from "../apiService.js";

export default function Input({
  setNewItem,
  modif,
  setModif,
  item,
  APIState,
  setAPIState,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (modif) setInput(item.item);
  }, [item, modif]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (modif) {
      patchData(input, item, APIState, setAPIState);
      setModif(false);
    } else setNewItem({ item: input, done: false });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        value={input}
        data-tooltip-id={"toolTip"}
        data-tooltip-content={"Ajouter un article"}
        data-tooltip-place={"bottom"}
        onChange={(e) => handleChange(e)}
        className={
          "mt-1 outline-none border-b-2 bg  border-black bg-transparent text-2xl w-44 "
        }
        type="text"
      />
      <Tooltip id="toolTip" />
      <Submit modif={modif} />
    </form>
  );
}
