import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import Navmenu from "./Navmenu";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import NewCemetery from "../routeComponents/cemetery/NewCemetery";
import CemeteryList from "../routeComponents/cemetery/CemeteryList";
import CemeteryDetail from "../routeComponents/cemetery/CemeteryDetail";
import NewGrave from "../routeComponents/grave/NewGrave";
import GraveDetail from "../routeComponents/grave/GraveDetail";
import NewBuried from "../routeComponents/buried/NewBuried";
import BuriedDetail from "../routeComponents/buried/BuriedDetail";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navmenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/cemetery/new-cemetery" component={NewCemetery} />
          <Route
            exact
            path="/cemetery/:cemetery/grave/:grave/buried/:id"
            component={BuriedDetail}
          />
          <Route
            exact
            path="/cemetery/:cemetery/grave/:grave/new-buried"
            component={NewBuried}
          />
          <Route
            exact
            path="/cemetery/:cemetery/grave/:grave"
            component={GraveDetail}
          />
          <Route
            exact
            path="/cemetery/:cemetery/new-grave"
            component={NewGrave}
          />
          <Route exact path="/cemetery/:cemetery" component={CemeteryDetail} />
          <Route exact path="/cemetery" component={CemeteryList} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
