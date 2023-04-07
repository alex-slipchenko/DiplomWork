import { Navigate, Outlet } from "react-router-dom";
const PrivateRote = (redirectPart = '/login') => {

    if (!localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'));
        return <Navigate to={redirectPart} replace />
    } else {
        return <Outlet />
    }


}

export default PrivateRote;