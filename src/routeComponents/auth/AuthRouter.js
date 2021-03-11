import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

function AuthRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/signup`} component={Signup} />
        <Route path={`${props.match.path}/login`} component={Login} />
        <Route path={`${props.match.path}/logout`} component={Logout} />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
