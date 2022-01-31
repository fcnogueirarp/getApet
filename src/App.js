import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* components */
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Container from './components/Layout/Container';
import Message from './components/Layout/Message';

/* pages */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

/* context */
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
