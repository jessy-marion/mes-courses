export default function Done({ item, APIState, setAPIState }) {
  /*const [done, setDone] = useState(false);*/

  async function patchData() {
    try {
      const response = await fetch(
        `https://restapi.fr/api/courses/${item._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ done: !item.done }),
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

  function handleClick() {
    patchData();
  }

  return (
    <div onClick={handleClick} className={"inline mr-3 cursor-pointer"}>
      -
    </div>
  );
}
