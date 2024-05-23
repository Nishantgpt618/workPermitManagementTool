import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignUpReview from './SignUpReview';
import { reduxForm } from 'redux-form';

class SignUp extends Component {

    state = { showFormSignUp: false };


    renderContent() {
        if (this.state.showFormSignUp) {
            return <SignUpReview
                onCancel={() => this.setState({ showFormSignUp: false })} />
        }

        return <SignUpForm
            onSubmit={() => this.setState({ showFormSignUp: true })} />
    };

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
};

export default reduxForm({
    form: 'NewSignUpForm'
})(SignUp);