import { AuthContext} from "../../Auth/AuthContext";
import { useContext } from "react";
import Login from "../Login/Login";
import { types } from "../../types/types";
import mainScreen from "../mainScreen/mainScreen";


function Layout() {
    const {isLogged, dispatch} = useContext(AuthContext);
return (
<>
{isLogged.logged ? <> <mainScreen/>
<button onClick={() => {localStorage.removeItem('isLogged'),dispatch({type:types.logout})}}>Logout</button>
</>: <Login/>}
</>
)
}

export default Layout