import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Custom hook usage
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="container">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>

      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            width: "200px",
            padding: "20px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
        >
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
