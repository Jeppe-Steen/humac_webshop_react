import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Frontpage from './Pages/Frontpage/Frontpage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Products from './Pages/Products/Products';
import Shoppingcard from './Pages/Shoppingcard/Shoppingcard';

import TermsOfTrade from './Pages/TermsOfTrade/TermsOfTrade'
import CookiePolicy from './Pages/CookiePolicy/CookiePolicy'
import PersonalDataPolicy from './Pages/PersonalDataPolicy/PersonalDataPolicy'
import UndoBuy from './Pages/UndoBuy/UndoBuy'


function App() {

  const [pageScrolled, setPageScrolled] = useState(0);
  const [onTop, setOnTop] = useState(true);
  const [shoppingcard, setShoppingcard] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPageScrolled(window.scrollY);
        })
        
        if(!pageScrolled == 0) {
            setOnTop(false);
        } else {
          setOnTop(true);
        }
    }, [window.scrollY]);

  return (
    <Router>
      <Navigation onTop={onTop} shoppingcard={shoppingcard} />

      <Switch>
        <Route exact path="/Forside"> <Frontpage /> </Route>
        <Route exact path="/Produkter/:categoryId"> <Products /> </Route>
        <Route exact path="/Produkter/:categoryId/:productId"> <ProductPage shoppingcard={shoppingcard} setShoppingcard={setShoppingcard} /> </Route>
        <Route exact path="/Indkøbskurv"> <Shoppingcard shoppingcard={shoppingcard} setShoppingcard={setShoppingcard} /> </Route>

        {/* her mangler der lige at blive lavet nogle sider */}
        <Route exact path="/Handelsbetingelser"> <TermsOfTrade /> </Route>
        <Route exact path="/Persondatapolitik"> <PersonalDataPolicy /> </Route>
        <Route exact path="/Cookiepolitik"> <CookiePolicy /> </Route>
        <Route exact path="/Fortrydelse"> <UndoBuy /> </Route>


        <Route exact path="/">
          <Redirect to="/Forside"></Redirect>
        </Route>

        <Route path="/">
          <p>Denne side findes ikke</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
