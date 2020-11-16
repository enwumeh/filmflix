import React from 'react';
import Layout from "./layout/Layout";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
