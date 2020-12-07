import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Nav from "./component/navbar/Nav.jsx";
import LandingPage from "./pages/landing/LandingPage";
import CustomPage from "./pages/custom/CustomPage";
import SupportPage from "./pages/support/SupportPage";
import BusinessPage from "./pages/business/BusinessPage";

const App = () => (
  <RouterContanier>
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/custom" component={CustomPage} />
      <Route exact path="/support" component={SupportPage} />
      <Route exact path="/business" component={BusinessPage} />
    </BrowserRouter>
  </RouterContanier>
);

const RouterContanier = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

export default App;
