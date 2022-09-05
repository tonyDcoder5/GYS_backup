import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listResources, listContacts } from "../utils/api";
import Downloadables from "./Downloadables";
import LocalSupport from "./LocalSupport";
import UrgentSupport from "./UrgentSupport";

export default function Resources() {
  const [contacts, setContacts] = useState([]);
  const [contactsError, setContactsError] = useState(null);

  useEffect(() => {

    const fetchContacts = async () => {
      try {
        const abortController = new AbortController();
        const response = await listContacts(abortController.signal);
        setContacts(response);
      } catch (error) {
        setContactsError(error);
      }
    };
    fetchContacts();
  }, []);

  const localContacts = contacts.filter((contact)=> contact.contact_level === "local");

  const urgentContacts = contacts.filter((contact)=> contact.contact_level === "urgent");

  return (
    <div className="resources">
      <UrgentSupport contacts={urgentContacts}/>
      <LocalSupport contacts={localContacts} /> 
      <Downloadables />
    </div>
  );
}
