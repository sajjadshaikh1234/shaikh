
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NotFound from './component/pages/NotFound';
import Addusers from './users/Addusers';
import Edituser from './edituser/EditUser';
import Views from './users/Views';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path="/" >
          <Home />
          </Route>
          <Route  exact path="/about" >
          <About />
          </Route>  
          <Route  exact path="/Contact" >
          <Contact />
          </Route>
          <Route  exact path="/notfound" >
          <NotFound />
          </Route>
          <Route  exact path="/addusers" >
          <Addusers />
          </Route>

          <Route exact path ="/edituser:id" >
            <Edituser />
          </Route>
          <Route exact path ="/viewsuser:id" >
            <Views />
          </Route>
        {/* <Route  path="/about" element={<About />} />
        <Route  path="/contact" element ={<Contact />} />
        <Route path="*" element ={<NotFound  />} />   
        <Route path="/addusers" element={<Addusers />} /> */}
       </Switch>
      
    </div>
    </Router>
  );
}

export default App;
