import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige automáticamente a /contacts cuando se carga Home
    navigate("/contacts");
  }, []);

  return null; // No renderiza nada en pantalla, solo redirige
};
