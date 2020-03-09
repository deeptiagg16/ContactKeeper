import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";
import { text } from "express";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "ABC",
        email: "ABC@gmail.com",
        phone: "777-777-888-000",
        type: "Personal"
      },
      {
        id: "2",
        name: "XYZ",
        email: "XYZ@gmail.com",
        phone: "777-777-222-000",
        type: "Personal"
      },
      {
        id: "3",
        name: "EFG",
        email: "EFG@gmail.com",
        phone: "777-777-888-111",
        type: "Professional"
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    //console.log("hellooo");
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
    //console.log(state.contacts);
  };

  //Update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter Contact
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //Remove filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        clearFilter,
        filterContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
