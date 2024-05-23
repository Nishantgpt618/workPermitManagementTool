import React from 'react';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';
import LoginReview from './LoginReview';
import permit from '../../media/permit.jpg';
import profileIcon from '../../media/profileIcon.webp'


class Login extends React.Component {

    state = { showLogin: false };


    renderContent() {
        if (this.state.showLogin) {
            return <LoginReview
                onCancel={() => this.setState({ showLogin: false })} />
        }

        return <LoginForm
            onSubmit={() => this.setState({ showLogin: true })} />
    };

    render() {
        return (
            <div className="loginPage">
                <img className="permitImage" src={permit} alt="error"></img>
                <div className="loginForm">
                    <div className="loginHeader">
                        <p style={{marginLeft: "20px",marginTop: "5px",fontFamily: "sans-serif"}}><img style={{height: "30px"}} src={profileIcon} alt="error"></img> &nbsp; Login to your account</p>
                    </div>
                    {this.renderContent()}
                </div>
            </div>

        )
    }
};





export default reduxForm({
    form: 'LoginForm'
})(Login);
