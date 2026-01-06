import {  Outlet } from "react-router-dom";
import NotAuthorized from "./NotAuthorized";
import { useAuth } from "../../context/AuthContext";


export default function AdminRoute() {
    const {user,isLoading}=useAuth()
  if (isLoading) return <div>Loading...</div>;
 if (!user || !user.isAdmin) return <NotAuthorized />;
  return <Outlet />;
}
