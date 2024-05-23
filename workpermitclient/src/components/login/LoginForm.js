import React from 'react';
import { Field } from 'redux-form';
import permitFields from '../permit/PermitFields';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import formFields from './formFields';



class NewLoginForm extends React.Component {

    state = { showPassword: "password" }

    renderButton() {
        if (this.state.showPassword === "text") {
            return <button type="button" onClick={() => this.setState({ showPassword: "password" })}>Hide password</button>
        }
        if (this.state.showPassword === "password") {
            return <button type="button" onClick={() => this.setState({ showPassword: "text" })}>Show password</button>
        }
    }

    

    render() {
        return (
            <div>
                <form className="NewPermitForm" onSubmit={this.props.onSubmit}>
                    <br />
                    <Field component={permitFields} label="Employee Token Number: " name="tokenNumber" type="text" />
                    <br />
                    <Field component={permitFields} label="Password: " name="password" type={this.state.showPassword} />
                    {this.renderButton()}
                    <br />
                    <div className="submitButton">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


function validate(values) {
    const errors = {};
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    })

    return errors;
}


export default reduxForm({
    validate,
    form: 'LoginForm',
    destroyOnUnmount: false
})(NewLoginForm);



