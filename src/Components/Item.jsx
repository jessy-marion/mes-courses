import { useState } from "react";
import Done from "./Done.jsx";
import Delete from "./Delete.jsx";
import Input from "./Input.jsx";
import { Tooltip } from "react-tooltip";

export default function Item({ item, APIState, setAPIState }) {
  const [dbclick, setDbclick] = useState(false);

  const selectedItem = item.item;

  function handleClick(e) {
    switch (e.detail) {
      case 1:
        break;
      case 2:
        setDbclick(!dbclick);
        break;
      default:
        break;
    }
  }

  return dbclick ? (
    <Input
      value={selectedItem}
      modif={dbclick}
      setModif={setDbclick}
      item={item}
      APIState={APIState}
      setAPIState={setAPIState}
    />
  ) : (
    <li onClick={handleClick}>
      <span
        data-tooltip-id="tooltip"
        data-tooltip-content="Double cliquer pour modifier"
        data-tooltip-place={"left"}
        className={`${
          item.done ? "line-through" : ""
        } cursor-pointer text-4xl transition ease-in-out duration-500  hover:text-amber-500 hover:border-amber-500 hover:font-ex`}
      >
        {item && item.item}
      </span>
      <Tooltip id="tooltip" />
      <span>
        <Done item={item} APIState={APIState} setAPIState={setAPIState} />
        <Delete item={item} APIState={APIState} setAPIState={setAPIState} />
      </span>
    </li>
  );
}
