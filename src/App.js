import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unSubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line
    unSubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );

    return () => {
      unSubscribeFromAuth();
      setCurrentUser(null);
    };
  }, []);


  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
