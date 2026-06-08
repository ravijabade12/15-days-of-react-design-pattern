import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "John Doe");
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName(" Doe")}>Change Name</button>
    </div>
  );
};

export default LocalStorage;
