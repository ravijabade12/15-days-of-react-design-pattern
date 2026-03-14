import { useState } from "react";

const ToggleComponent = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    setIsToggled(!isToggled);
  }
  return <div onClick={handleToggle}>{children(isToggled)}</div>;
};

export default ToggleComponent;
