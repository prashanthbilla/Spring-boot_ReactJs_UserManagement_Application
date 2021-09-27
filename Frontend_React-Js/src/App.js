
import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import OneUserList from './components/OneUserList';
import CreateComponentList from './components/CreateComponentList';
import UpdateComponentList from './components/UpdateComponentList';
import EmptyList from './components/EmptyList';


function App() {
  return (
    <div>
    <Router>
      <div>
        <HeaderComponent/>
      </div>
       <div className="App">
       <switch>
       <Route path="/one/:id" exact component={OneUserList}></Route>
       <Route path="/" exact component={LoginComponent}></Route>
       <Route path="/empty" exact component={EmptyList}></Route>
        <Route path="/list" exact component={EmployeeListComponent}></Route>
        <Route path="/list/add-employee" exact component={CreateComponentList}></Route>
        <Route path="/list/update-employee/:id" exact component={UpdateComponentList}></Route>
        <Route path="/add-employee" component={CreateComponent}></Route>
        <Route path="/update-employee/:id" component={UpdateComponent}></Route>
      
      </switch>
      </div>
      <div>
        <FooterComponent/>
      </div>
      </Router>
    </div>
  );
}

export default App;
