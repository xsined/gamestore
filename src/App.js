import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from "react-redux";
import {HomePage} from './pages/home-page';
import {GamePage} from './pages/game-page';
import {OrderPage} from './pages/order-page';
import {Header} from './components/header';
import {store} from "./redux";

function App () {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route exact path="/" Component={HomePage} />
              <Route exact path="/app/:title" Component={GamePage} />
              <Route exact path="/order" Component={OrderPage} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;







