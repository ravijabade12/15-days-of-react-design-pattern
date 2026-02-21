import React from "react";

const UncontrolledContactformNoref = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted:", data);
    alert(`Hello ${data.name}, your email is ${data.email}`);
  };
  return (
    <div>
      <form
        action="
      "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border rounded-2xl p-2 my-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded-2xl p-2 my-3"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border rounded-2xl p-2 my-3"
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="border rounded-2xl p-2 my-3"
        ></textarea>
        <button className="bg-purple-500 text-white p-1 rounded">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledContactformNoref;
