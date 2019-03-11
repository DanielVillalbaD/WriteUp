import React from "react";
import { Router, Route } from "react-router-dom";
import { Home } from "../components/home/home";
import { NotFound } from "../components/notFound/notFound";
import SignUp from "../components/share/signUp/signUp";
import { Books } from "../components/books/books";
import Login from "../components/share/login/login";
import { Header } from "../components/share/header/header";
import { Footer } from '../components/share/footer/footer';
import Lector from "../components/lector/lector";
import { Upload } from "../components/upload/upload";
import Callback from '../components/Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';
import { MagicSidebar } from '../components/home/components/magic-sidebar';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


export const AppRouter = () => {
  return (

    <Router history={history}>
      <div>
        <Header />
        <MagicSidebar />
          <Route path="/" exact={true} render={(props) => <Home auth={auth} {...props} />}/>
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/libros" render={(props) => <Books auth={auth} {...props} />} />
          <Route path="/lector" component={Lector} />
          <Route path="/upload" render={(props) => <Upload auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        <Footer />
      </div>
    </Router>
  );
}
