import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTrash, FaEdit } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../actions/actions";

const ContactCard = ({ contact }) => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    await deleteContact(dispatch, contact.id);
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card mb-3 shadow-sm"
        style={{
          width: "400px",
          minHeight: "160px",
          overflow: "hidden"
        }}
      >
        <div className="card-body d-flex">
          {/* Avatar con iniciales personalizadas */}
          <div className="me-3 d-flex align-items-start">
          <img
  src="https://randomuser.me/api/portraits/men/32.jpg"
  alt="avatar"
  className="rounded-circle"
  style={{ width: "60px", height: "60px", objectFit: "cover" }}
/>
           
              {(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/60?text=👤";
              }}
            
          </div>

          {/* Contenido del contacto */}
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold text-capitalize mb-2">
                {contact.name || "Nombre no disponible"}
              </h5>
              <div>
                <FaEdit
                  className="text-secondary me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/edit/${contact.id}`)}
                />
                <FaTrash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={handleDelete}
                />
              </div>
            </div>

            <div className="text-muted mt-2">
              <div className="d-flex align-items-center mb-1 text-truncate" style={{ maxWidth: "100%" }}>
                <FaMapMarkerAlt className="me-2 text-danger" />
                <span className="text-truncate">{contact.address || "Dirección no disponible"}</span>
              </div>
              <div className="d-flex align-items-center mb-1">
                <FaPhone className="me-2 text-danger" />
                <span>{contact.phone || "Sin teléfono"}</span>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <span className="text-truncate">{contact.email || "Sin correo"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
