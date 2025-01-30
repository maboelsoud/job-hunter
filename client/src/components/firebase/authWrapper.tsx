
import { Navigate, Outlet } from "react-router";


export function PublicRoute({auth, defaultPath = "/"} : {auth: boolean, defaultPath?: string}) {


    return (
        !auth? <Outlet /> : <Navigate to={defaultPath} />
    )
}

export function PrivateRoute({auth, defaultPath = "/"} : {auth: boolean, defaultPath?: string}) {


    return (
        auth? <Outlet /> : <Navigate to={defaultPath} />
    )
}