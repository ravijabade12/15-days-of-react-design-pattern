import React, { useRef } from "react";

const UncontrolledContactFormref = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    if (!nameRef.current.value) {
      nameRef.current.focus();
      return;
    }
    if (!emailRef.current.value.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!phoneRef.current.value) {
      phoneRef.current.focus();
      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }
    console.log("Form submitted:", name, email, phone, message);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border rounded-2xl p-2 my-3"
          ref={nameRef}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded-2xl p-2 my-3"
          ref={emailRef}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border rounded-2xl p-2 my-3"
          ref={phoneRef}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="border rounded-2xl p-2 my-3"
          ref={messageRef}
        ></textarea>
        <button className="bg-purple-500 text-white p-1 rounded">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledContactFormref;
