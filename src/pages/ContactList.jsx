import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadContacts } from "../actions/actions";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    loadContacts(dispatch); // ✅ Carga los contactos al iniciar
  }, []);

  console.log("👉 Contactos cargados:", store.contacts);

  return (
    <div className="container mt-4">
      {/* Botón arriba a la derecha */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" onClick={() => navigate("/add")}>
          Add new contact
        </button>
      </div>

      {/* Contactos en lista vertical */}
      <div>
        {store.contacts.length > 0 ? (
          store.contacts.map((contact) => (
            <div key={contact.id} className="mb-3">
              <ContactCard contact={contact} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No hay contactos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;

