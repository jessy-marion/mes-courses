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
    <div
      onClick={handleClick}
      className={
        "inline ml-3 cursor-pointer cursor-pointer text-2xl transition ease-in-out duration-150 hover:text-amber-500 hover:border-amber-500 hover:font-ex"
      }
    >
      <i className="fa-solid fa-check transition ease-in-out duration-500 hover:scale-150"></i>
    </div>
  );
}
