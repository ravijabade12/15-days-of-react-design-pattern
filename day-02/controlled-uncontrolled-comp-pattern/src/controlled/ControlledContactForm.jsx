import React, { useRef, useState } from "react";

const ControlledContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      nameRef.current.focus();
      return;
    }
    if (!formData.email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!formData.phone) {
      phoneRef.current.focus();
      return;
    }
    if (!formData.message) {
      messageRef.current.focus();
      return;
    }
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border rounded-2xl p-2 my-3"
          value={formData.name}
          onChange={handleChange}
          ref={nameRef}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded-2xl p-2 my-3"
          value={formData.email}
          onChange={handleChange}
          ref={emailRef}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border rounded-2xl p-2 my-3"
          value={formData.phone}
          onChange={handleChange}
          ref={phoneRef}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="border rounded-2xl p-2 my-3"
          value={formData.message}
          onChange={handleChange}
          ref={messageRef}
        ></textarea>
        <button className="bg-purple-500 text-white p-1 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ControlledContactForm;
