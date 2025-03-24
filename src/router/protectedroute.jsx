import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isMobile = window.innerWidth < 768; // Ajuste la largeur selon ton besoin

  return isMobile ? <Navigate to="/" replace /> : element;
};

export default ProtectedRoute;