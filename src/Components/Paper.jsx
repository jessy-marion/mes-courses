import Input from "./Input.jsx";
import Item from "./Item.jsx";
import { fetchData, sendData } from "../apiService.js";
import { useEffect, useState } from "react";

export default function Paper() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: null,
    data: undefined,
  });
  const [newItem, setNewItem] = useState({
    item: undefined,
    done: false,
  });

  let content;

  if (APIState.loading) content = <p>Loading...</p>;
  else if (APIState.error) content = <p>Une erreur est survenue</p>;
  else if (APIState.data?.length > 0)
    content = (
      <ul>
        {APIState.data.map((el, i) => {
          return (
            <Item
              key={`${i}-${el.item}`}
              item={el}
              APIState={APIState}
              setAPIState={setAPIState}
            />
          );
        })}
      </ul>
    );

  useEffect(() => {
    if (newItem.item) {
      sendData(newItem, APIState, setAPIState);
    } else {
      fetchData(APIState, setAPIState);
    }
  }, [newItem]);

  return (
    <div
      className={`bg-amber-100 sm:w-full p-8 md:max-w-xl md:p-32 shadow-lg rounded-r-3xl paper `}
    >
      <h1 className={"mb-[15px]"}>Mes Courses</h1>
      <ul>{content}</ul>
      <Input setNewItem={setNewItem} />
    </div>
  );
}
