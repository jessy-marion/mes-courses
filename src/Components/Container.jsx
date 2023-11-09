import Input from "./Input.jsx";
import Items from "./Items.jsx";
import Item from "./Item.jsx";
import { useEffect, useState } from "react";

export default function Container() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: null,
    data: undefined,
  });

  let content;

  if (APIState.loading) content = <p>Loading...</p>;
  else if (APIState.error) content = <p>Une erreur est survenue</p>;
  else if (APIState.data?.length > 0)
    content = (
      <ul>
        {APIState.data.map((el, i) => {
          return <Item key={`${i}-${el.item}`} item={el} />; //
          /*return <li key={el.i}>{el.item}</li>;*/
        })}
      </ul>
    );

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    async function fetchData() {
      try {
        const response = await fetch("/data/dataArray.json");

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        const data = await response.json();
        setAPIState({ loading: false, error: null, data: data });
      } catch (error) {
        setAPIState({ loading: false, error: true, data: undefined });
        console.log("erreur", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={"bg-amber-100 p-28 shadow-lg"}>
      <h1>Mes Courses</h1>
      <Input />
      <Items />
      {content}
    </div>
  );
}
