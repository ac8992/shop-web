import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screen/Home";
import Login from "./screen/Login";
import { client } from "./apollo";
import NotFound from "./screen/NotFound";
import routes from "./screen/routes";
import { GlobalStyles } from "./styles";
import Join from "./screen/Join";

function App() {
  //  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path={routes.home} exact>
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path={routes.login}>
              <Layout>
                <Login />
              </Layout>
            </Route>
            <Route path={routes.join}>
              <Layout>
                <Join />
              </Layout>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
