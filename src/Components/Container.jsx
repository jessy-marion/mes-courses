import Input from "./Input.jsx";
import Item from "./Item.jsx";
import { useEffect, useState } from "react";

export default function Container() {
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
  /*else if (Array.isArray(APIState.data))
    /!*content = <Item item={APIState.data} />;*!/ console.log("Test");*/ else if (
    APIState.data?.length > 0
  )
    content = (
      <ul>
        {APIState.data.map((el, i) => {
          return <Item key={`${i}-${el.item}`} item={el} />; //
          /*return <li key={el.i}>{el.item}</li>;*/
        })}
      </ul>
    );

  useEffect(() => {
    /*setAPIState({ ...APIState, loading: true });*/

    // GET
    async function fetchData() {
      setAPIState({ ...APIState, loading: true });
      try {
        const response = await fetch("https://restapi.fr/api/courses");

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        const data = await response.json();
        setAPIState({
          loading: false,
          error: null,
          data: Array.isArray(data) ? data : [data],
        });
      } catch (error) {
        setAPIState({ loading: false, error: true, data: undefined });
        console.log("erreur", error);
      }
    }

    // POST
    async function sendData() {
      try {
        const response = await fetch("https://restapi.fr/api/courses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        const addItem = await response.json();
        console.log(addItem);

        setAPIState((APIState) => ({
          ...APIState,
          data: [...APIState.data, addItem],
        }));

        /*fetchData();*/
      } catch (error) {
        setAPIState({ loading: false, error: true, data: undefined });

        console.log("erreur", error);
      }
    }

    if (newItem.item) {
      sendData();
    } else {
      fetchData();
    }
  }, [newItem]);

  return (
    <div className={"bg-amber-100 p-28 shadow-lg"}>
      <h1>Mes Courses</h1>
      <Input newItem={newItem} setNewItem={setNewItem} />
      <ul>{content}</ul>
    </div>
  );
}

/*"/data/dataArray.json"*/
