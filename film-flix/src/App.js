// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer'


function App() {
  return (
    <Switch>
      <Route path='/'>
        <MainContainer/>
      </Route>
    </Switch>
  );
}

export default App;