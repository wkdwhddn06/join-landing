import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Nav from "./component/navbar/Nav.jsx";
import LandingPage from "./pages/landing/LandingPage";
import CustomPage from "./pages/custom/CustomPage";

const App = () => (
  <RouterContanier>
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/custom" component={CustomPage} />
    </BrowserRouter>
  </RouterContanier>
);

const RouterContanier = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

export default App;
