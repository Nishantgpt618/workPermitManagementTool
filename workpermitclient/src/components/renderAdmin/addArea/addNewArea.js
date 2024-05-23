import React, { Component } from 'react';
import { Field } from 'redux-form';
import permitFields from '../../permit/PermitFields';
import { reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import {submitArea} from '../../../redux/actions';
import _ from 'lodash';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';


class addNewArea extends Component {
    render() {
        return (
            <div>
                <h1>Add new Area Form</h1>
                <form onSubmit={(e) => {this.props.submitArea(this.props.formValues)}} >
                    <Field component={permitFields} label="Area: " name="area" type="text" />
                    <Field component={permitFields} label="Caption: " name="caption" type="text" />
                    <div className="submitButton">
                        <button type="submit">Add area</button>
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
    if(state.form.AddAreaForm){
        return ( {formValues: state.form.AddAreaForm.values} )
    }
    return {
        initialValues : {
            formValues: " "
        }
    }
};

export default connect(mapStateToProps, {submitArea})(reduxForm({
    validate,
    form: "AddAreaForm",
    enableReinitialize: true,
    destroyOnUnmount: true
})(withRouter(addNewArea)));
