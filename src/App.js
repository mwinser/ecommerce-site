import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">
          <ul>
            <li>Cart</li>
            <li>Login</li>
            <li>Create Account</li>
          </ul>
        </div>
      </nav>
    <div className="hero">
      <h1>Spring is in the air!</h1>
      <button>Shop Sales</button>
    </div>
    <div className="featured">
      <ul>
        <li>
          <img></img>
          <h3>Item Name</h3>
          <h4>$50.00</h4>
        </li>
        <li>
          <img></img>
          <h3>Item Name</h3>
          <h4>$50.00</h4>
        </li>
        <li>
          <img></img>
          <h3>Item Name</h3>
          <h4>$50.00</h4>
        </li>
      </ul>
    </div>
    <footer>
      <p>Copyright 2021</p>
      <p>Social Media Icons</p>
    </footer>
    </div>
  );
}

export default App;
