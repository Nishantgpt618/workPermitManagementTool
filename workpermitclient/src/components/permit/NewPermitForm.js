import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import PermitFields from './PermitFields';
import DropDownSelect from './permitTypeFields';
import DropAreaSelect from './permitShopFields';
import DropPrioritySelect from './permitPriorityFields';
import { connect } from 'react-redux';
import {fetchEmployeeForPermit, getArea} from '../../redux/actions';

class NewPermitForm extends Component {

    constructor(props) {
        super(props);
        this.state = { user: JSON.parse(localStorage.getItem('user')) };
    }


    componentDidMount(){
        this.props.fetchEmployeeForPermit();
    }

    renderFields() {
        return _.map(formFields, ({ name, label, type }) => {
            return <Field key={name} component={PermitFields} label={label} name={name} type={type} />
        });
    }


    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>New Work Permit Form</h1>
                <br />
                <form className="NewPermitForm" onSubmit={this.props.onSurveySubmit}>
                <br />
                    <Field component={PermitFields} label="Initiator Name: " name="initiatorName" type="text" value={this.state.user.employeeName} />
                    <br/>
                    {this.renderFields()}
                    <Field component={DropAreaSelect} label="Shop floor Area involved:   " name="area" type="text" />
                    <br />
                    <Field component={DropDownSelect} label="Type of Work Permit:   " name="workPermitType" type="text" />
                    <br />
                    <Field component={DropPrioritySelect} label="Priority of Work Permit:   " name="priority" type="text" />
                    <br />
                    <div className="submitButton" style={{marginBottom: "20px"}}>
                    <Link className="linkToButton" to="/">Cancel</Link>
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

function mapStateToProps(state){
    var data = ''
    if(state.fetchEmployeeForPermit){
        data = state.fetchEmployeeForPermit.employeeName;
    }
        
    return {
        initialValues : {
            initiatorName: data
        }
    }
}

export default connect(mapStateToProps, {fetchEmployeeForPermit, getArea})(reduxForm({
    validate,
    form: 'NewPermitForm',
    enableReinitialize: true,
    destroyOnUnmount: false
})(NewPermitForm));