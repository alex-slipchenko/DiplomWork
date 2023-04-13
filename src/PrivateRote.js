import { Navigate, Outlet } from "react-router-dom";
const PrivateRote = ({ redirectParth = '/login' }) => {

    if (!localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'));
        return <Navigate to={redirectParth} replace />
    } else {
        return <Outlet />
    }


}

export default PrivateRote;