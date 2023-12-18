import { AuthContext} from "../../Auth/AuthContext";
import { useContext } from "react";
import Login from "../Login/Login";
import { types } from "../../types/types";


function Layout() {
    const {isLogged, dispatch} = useContext(AuthContext);
return (
<>
{isLogged.logged ? <> <h1>bienvenido a su cuenta!</h1>
<button onClick={() => {localStorage.removeItem('isLogged'),dispatch({type:types.logout})}}>Logout</button>
</>: <Login/>}
</>
)
}

export default Layout