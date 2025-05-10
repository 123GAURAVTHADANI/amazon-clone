import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <h1>Hello!!</h1>
      <div className="page-container">
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>

          <Route exact path="/product/:productId">
            <ProductPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </div>
      <footer>THis is PW SKILLS!!</footer>
    </Router>
  );
}

export default App;
