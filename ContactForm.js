import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../context/contact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  useEffect(() => {
    if (contactContext.current !== null) {
      setContact(contactContext.current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "Personal"
      });
    }
  }, [contactContext, contactContext.current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal"
  });

  const { name, email, phone, type } = contact;
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (contactContext.current === null) {
      contactContext.addContact(contact);
    } else {
      contactContext.updateContact(contact);
      //contactContext.clearCurrent();
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "Personal"
    });
  };
  const clearAll = () => {
    contactContext.clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-dark">
        {contactContext.current ? "Edit Contact" : "Add contact"}
      </h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={onChange}
      ></input>
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="Personal"
        checked={type === "Personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="Professional"
        checked={type === "Professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div>
        <button
          className="btn btn-dark btn-block"
          type="submit"
          value={contactContext.current ? "Edit Contact" : "Add contact"}
        >
          {contactContext.current ? "Edit Contact" : "Add contact"}
        </button>
        {/* {contactContext.current && (
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        )} */}
      </div>
    </form>
  );
};
export default ContactForm;
