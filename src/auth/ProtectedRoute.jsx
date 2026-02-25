import { Navigate } from "react-router-dom";
import { auth } from "./auth";

export default function ProtectedRoute({ children }) {
  if (!auth.isAuthed()) return <Navigate to="/login" replace />;
  return children;
}