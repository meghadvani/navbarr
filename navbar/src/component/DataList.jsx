import React, { useState, useRef, useEffect } from "react";

const DataList = ({ theme }) => {
  const [contact, setContact] = useState([
    { id: 1, name: "John", mobile: "1234567890" },
    { id: 2, name: "Alice", mobile: "9876543210" },
    { id: 3, name: "Bob", mobile: "5556667777" },
  ]);

  const [NewContact, setNewContact] = useState({
    name: "",
    mobile: "",
  });

  const ContactRef = useRef(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContact(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const handleChang = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...NewContact, [name]: value });
  };

  const addContact = (e) => {
    e.preventDefault();
    if (!NewContact.name || !NewContact.mobile) return;

    const newId = contact.length + 1;

    const updatedContacts = [...contact, { ...NewContact, id: newId }];
    setContact(updatedContacts);
    setNewContact({ name: "", mobile: "" });

    ContactRef.current.focus();
  };

  const removeContact = (id) => {
    const updatedContacts = contact.filter((person) => person.id !== id);
    setContact(updatedContacts);
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  return (
    <>
      <h1>contact List</h1>
      <form onSubmit={addContact}>
        <div style={{ display: "flex", gap: "1px", marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            ref={ContactRef}
            value={NewContact.name}
            onChange={handleChang}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="mobile"
            value={NewContact.mobile}
            onChange={handleChang}
            placeholder="Mobile No"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>

      {contact.length === 0 ? (
        <p>No contact in the list.</p>
      ) : (
        <table style={tableStyle}>
          <thead width="100%">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Mobile No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.mobile}</td>
                <td>
                  <button onClick={() => removeContact(person.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DataList;
