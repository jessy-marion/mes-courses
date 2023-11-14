import { useEffect } from "react";

export default function Delete({ item, APIState, setAPIState }) {
  async function deleteData() {
    try {
      const response = await fetch(
        `https://restapi.fr/api/courses/${item._id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      const data = await response.json();
      console.log(data);
      const filtered = APIState.data.filter((el) => el._id !== item._id);

      setAPIState({
        ...APIState,
        data: filtered,
      });
    } catch (error) {
      console.log("erreur", error);
    }
  }
  function handleClick() {
    deleteData();
  }

  return (
    <div
      onClick={handleClick}
      className={
        "inline ml-2 cursor-pointer cursor-pointer text-2xl transition ease-in-out duration-150  hover:text-amber-500 hover:border-amber-500 hover:font-ex "
      }
    >
      <i className="fa-solid fa-xmark transition ease-in-out duration-500 hover:scale-150"></i>
    </div>
  );
}
