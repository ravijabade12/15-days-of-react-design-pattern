import React, { useState } from "react";
import { useClipboard } from "../hooks/useClipboard";

const CopyClipboard = () => {
  const { copyToClipboard } = useClipboard();
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => copyToClipboard(value)}>Copy to Clipboard</button>
    </div>
  );
};

export default CopyClipboard;
