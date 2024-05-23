import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from '../permit/PermitFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../redux/actions';


const PermitReview = ({ onCancel, formValues, submitEmployee, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key = {name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return(
        <div>
            <h5>Please confirm your entries!</h5>
            {reviewFields}
            <button
                className="yellow darken-3 flat-btn"
                onClick={ onCancel }
            >
            back
            </button>
            <button
                onClick={ () => submitEmployee(formValues, history) }
                className="green btn-flat right">
                Save Permit
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return { formValues: state.form.NewSignUpForm.values };
};


export default connect(mapStateToProps, actions)(withRouter(PermitReview));