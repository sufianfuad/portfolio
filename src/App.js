
import './App.css';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
//React Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          {/* <Route path="*">
            
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
