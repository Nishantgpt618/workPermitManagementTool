import React from 'react';
import { Field } from 'redux-form';
import { Link} from 'react-router-dom';
import permitFields from '../permit/PermitFields';
import formFields from './formFields';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import DropDesignationSelect from './signUpDropSelect';
import DropAreaSelect from '../permit/permitShopFields';




class NewSignUpForm extends React.Component {

    state = { showPassword: "password" }


    renderButton() {
        if (this.state.showPassword === "text") {
            return <button type="button" onClick={() => this.setState({ showPassword: "password" })}>Hide password</button>
        }
        if (this.state.showPassword === "password") {
            return <button type="button" onClick={() => this.setState({ showPassword: "text" })}>Show password</button>
        }
    }

    render(){
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>New Employee Registeration Form</h1>
            <form className="NewPermitForm" onSubmit={this.props.onSubmit}>
                <br />
                <Field component={permitFields} label="Employee Name: " name="employeeName" type="text" />
                <br />
                <Field component={permitFields} label="Employee Token Number: " name="tokenNumber" type="text" />
                <br />
                <Field component={permitFields} label="Password: " name="password" type={this.state.showPassword} />
                {this.renderButton()}
                <br />
                <Field component={DropAreaSelect} label="Department:" name="department" type="text" />
                <br />
                <Field component={DropDesignationSelect} label="Designation: " name="designation" type="text" />
                <br/>
                <div className="submitButton">
                    <Link className="linkToButton" to="/">Cancel</Link>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}}





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
    form: 'NewSignUpForm',
    destroyOnUnmount: false
})(NewSignUpForm);