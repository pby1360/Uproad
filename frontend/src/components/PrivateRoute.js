import { React } from 'react';
import { Route } from 'react-router';
import Auth from './AuthenticationService';

const PrivateRoute = ({component: Component, ...parentProps}) => {
  const isValid = () => {
    console.log("isValid ? : ", Auth.isUserLoggedIn() ? Auth.isExpired() ? false : true : false);
    return Auth.isUserLoggedIn() ? Auth.isExpired() ? false : true : false;
  }
  
  const logout = () => {
    alert("세션이 만료되었습니다 다시 로그인 해주세요.");
    Auth.logout();
    window.location.replace("/");
  }
  return (
    <Route
      {...parentProps}
      render={props => (
        isValid() ? (
         <Component {...props} />
        ) : (
        logout()
        )
      )}
    />
  );
}

export default PrivateRoute;