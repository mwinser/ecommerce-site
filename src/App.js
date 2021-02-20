import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route> 
        </Switch>
      
      <Footer />

    </div>
  );
}

export default App;
