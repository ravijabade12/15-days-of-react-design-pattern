function useClipboard() {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(text);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };
  return { copyToClipboard };
}

export { useClipboard };
