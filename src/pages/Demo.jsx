import React from "react";
import { Link } from "react-router-dom";

export const Demo = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">Demo Page</h2>
      <p>Esta es una página de demostración. Actualmente no está en uso activo.</p>

      <Link to="/" className="btn btn-primary mt-4">
        Volver a contactos
      </Link>
    </div>
  );
};

