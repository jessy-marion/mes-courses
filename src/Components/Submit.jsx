export default function Submit({ modif }) {
  return (
    <button
      className={
        "p-1 ml-3 text-2xl bg-amber-50  border-2 border-black rounded shadow-md transition ease-in-out duration-500 hover:bg-amber-100 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:text-amber-500 hover:border-amber-500 hover:font-ex"
      }
    >
      {modif ? "Modifier" : "Ajouter"}
    </button>
  );
}
