import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './components/shop/ShopPage';
import MainPage from './components/main/MainPage';
import ItemDetail from './components/shop/details/ItemDetail';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/details/:id/">
              <ItemDetail />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
