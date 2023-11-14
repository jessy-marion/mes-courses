import Submit from "./Submit.jsx";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

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

  async function patchData() {
    try {
      const response = await fetch(
        `https://restapi.fr/api/courses/${item._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item: input }),
        },
      );
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      const updatedItem = await response.json();
      console.log(updatedItem);

      const selectedData = APIState.data.map((el) =>
        el._id === updatedItem._id ? updatedItem : el,
      );
      setAPIState({ ...APIState, data: selectedData });
    } catch (error) {
      console.log("erreur", error);
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (modif) {
      patchData();
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

//TODO: faire en sorte que l'input se vide après le submit
