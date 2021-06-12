import logo from './logo.svg';
import './App.css';
import UserForm from './cmp/UserForm';
import SimpleModal from './cmp/PopupForm';
import DataTable from './cmp/UserTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
  <Switch>
  <Route path="/addUser">
      <UserForm/>
    </Route>
    <Route path="/">
      <DataTable />
    </Route>
    
  </Switch>
    </Router>
    </div>
  );
}

export default App;
