import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, updateContact } from "../actions/actions";



const AddContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  useEffect(() => {
    if (id) {
      const contact = store.contacts.find((c) => c.id === parseInt(id));
      if (contact) setFormData(contact);
    }
  }, [id, store.contacts]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("⚠️ Todos los campos son obligatorios");
      return;
    }

    id
      ? await updateContact(dispatch, id, formData)
      : await addContact(dispatch, formData);

    navigate("/contacts");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{id ? "Edit contact" : "Add a new contact"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" className="form-control mb-2" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" className="form-control mb-2" placeholder="Enter phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" className="form-control mb-2" placeholder="Enter address" value={formData.address} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>
      <p className="mt-3 text-center">
  <a href="/contacts" className="text-decoration-none" style={{ color: "#000" }}>
    or get back to contacts
  </a>
</p>

    </div>
  );
};

export default AddContact;
