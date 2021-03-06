import { connect } from 'react-redux';
import { logIn } from '../../actions/session';
import Login from './login';

const mdp = dispatch => ({
    logInUser: formUser => dispatch(logIn(formUser)),
});


export default connect(null, mdp)(Login);