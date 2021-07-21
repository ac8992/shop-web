import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screen/Home";
import Login from "./screen/Login";
import NotFound from "./screen/NotFound";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
