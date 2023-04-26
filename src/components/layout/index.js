import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../lib/routes";
import { useAuth } from "../../hooks/auth";
import Navbar from "./Navbar";



const Layout = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if( !isLoading && pathname.startsWith("/protected") && !user ){
            navigate(LOGIN)
        }
    }, [navigate, pathname, user, isLoading])

    if (isLoading) return "Loading auth user...";

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout