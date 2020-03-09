import React, { useContext } from "react";
import ContactContext from "../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { id, name, email, phone, type } = contact;
  const onDelete = () => {
    contactContext.deleteContact(id);
    contactContext.clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-dark text-left">{name} </h3>
      <span
        style={{ float: "right" }}
        className={
          "badge " + (type === "Professional" ? "badge-success" : "badge-blue")
        }
      >
        {type}
      </span>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => contactContext.setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
export default ContactItem;
