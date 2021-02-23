import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"
import Browse from "./pages/Browse"
import ItemDetail from "./pages/ItemDetail"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route> 
            <Route exact path="/cart">
              <Cart />
            </Route> 
            <Route exact path="/browse">
              <Browse />
            </Route> 
            <Route path="/browse/:itemId">
              <ItemDetail />
            </Route> 
          </Switch>
        </div>
      
      <Footer />

    </div>
  );
}

export default App;
