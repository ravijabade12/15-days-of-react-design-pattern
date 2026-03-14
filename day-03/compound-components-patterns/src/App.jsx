import { useState } from "react";
// import Modal from "./messy/Modal";
import Modal from "./with-pattern/modal/Modal";
import AccordionDemo from "./with-pattern/accordion/AccordionDemo";
import "./App.css";
import CardDemo from "./with-pattern/card/cardDemo";
import TabsDemo from "./with-pattern/tabs/tabsDemo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-6">
      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2>Welcome!</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal built with the Compound Component pattern.</p>
          <AccordionDemo />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => alert("Action performed!")}>Do Action</button>
        </Modal.Footer>
      </Modal> */}
      {/* <CardDemo /> */}
      <TabsDemo />
    </div>
  );
}

export default App;
