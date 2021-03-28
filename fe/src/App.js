import React from "react";
import Profile from "../src/view/profile";
import Page1 from "../src/view/page1";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/profile" exact render={(props) => <Profile />} />
          <Route
            path="/kinds-of-sentence-1"
            exact
            render={(props) => <Page1 />}
          />
          <Redirect to="/profile" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
