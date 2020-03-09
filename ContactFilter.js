import React, { useRef, useEffect, useContext } from "react";
import ContactContext from "../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  useEffect(() => {
    if (contactContext.filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = e => {
    if (text.current.value !== "") {
      contactContext.filterContacts(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      ></input>
    </form>
  );
};
export default ContactFilter;
