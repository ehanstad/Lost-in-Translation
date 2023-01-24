import { Route } from "react-router-dom";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, rest}) => {
  const cookies = new Cookies();
  return (
    <Route {...rest} render={props => (cookies.get('session') ? 
      <Component {...props} /> : 
      <redirect to='/' />)}/>
  );
}

export default PrivateRoute;