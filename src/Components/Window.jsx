import { useEffect, useState } from "react";

export default function Window() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`window-animation border-4 border-black shadow-2xl bg-white  rounded text-black font-sans text-2xl text-red-500 mb-24 p-3 ${
        visible ? "block" : "invisible"
      }`}
    >
      <h2>
        🛒 Bienvenue sur l'app Mes Courses ! Ici vous pourrez faire une liste de
        courses persistante afin ne de rien oublier.
      </h2>
    </div>
  );
}
