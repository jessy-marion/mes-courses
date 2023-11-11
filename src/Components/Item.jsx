import { useState } from "react";
import Done from "./Done.jsx";
import Delete from "./Delete.jsx";
import Input from "./Input.jsx";

export default function Item({ item, APIState, setAPIState }) {
  const [dbclick, setDbclick] = useState(false);

  function handleClick(e) {
    switch (e.detail) {
      case 1:
        console.log("simple click");
        break;
      case 2:
        console.log("double click");
        console.log(item._id);
        setDbclick(!dbclick);
        break;
      default:
        console.log("click");
        break;
    }
  }

  return dbclick ? (
    <Input
      modif={dbclick}
      setModif={setDbclick}
      item={item}
      APIState={APIState}
      setAPIState={setAPIState}
    />
  ) : (
    <li onClick={handleClick} className={item.done ? "line-through" : ""}>
      {item && item.item}{" "}
      <Done item={item} APIState={APIState} setAPIState={setAPIState} />
      <Delete item={item} APIState={APIState} setAPIState={setAPIState} />
    </li>
  );
}
