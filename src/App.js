import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { history } from './utils/history';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/" exact component={Body}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
