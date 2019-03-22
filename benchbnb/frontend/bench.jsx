import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signUp, logIn, logOut }  from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    //TEST!
    window.signup = signUp;
    window.login = logIn;
    window.logout = logOut;
    window.store = store;
    //TESTED!!
    ReactDOM.render(<Root store={store}/>, root);
});