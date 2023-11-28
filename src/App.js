import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Tasks from "./pages/tasks";
import CreateTask from "./components/CreateTask"
import ViewTask from "./components/ViewTask"

function App() {
  return (
    
<Router>
<div className="App">
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={'/sign-in'}>
        QT
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={'/sign-in'}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/sign-up'}>
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/tasks'}>
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="auth-wrapper">
    
    <div className="auth-inner">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        
      </Routes>
    </div>
    <div className='outer'>
          <Routes>
          <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
  </div>
  
  <Routes>
        <Route path = "/taskd/add-task/:id" component = {CreateTask}/>
        <Route path = "/view-task/:id" component = {ViewTask}/>
  </Routes>
</div>
</Router> 
  );
}

export default App;
