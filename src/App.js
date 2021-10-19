import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ShowDetails from './Components/ShowDetails/ShowDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/details/:serviceId">
           <ShowDetails></ShowDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
