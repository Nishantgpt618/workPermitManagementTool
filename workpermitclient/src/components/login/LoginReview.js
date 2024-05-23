import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../redux/actions';


const LoginReview = ({ onCancel, history, formValues, fetchEmployee }) => {
    

    return(
        <div className="NewPermitForm">
            <h3>Please confirm your entries!</h3>
            <b>Token number:</b>
            <br />
            {formValues.tokenNumber}
            <br />
            <br />
            
            <div className="submitButton">
            <button
                className="yellow darken-3 flat-btn"
                onClick={ onCancel }
            >
            back
            </button>
            <button
                onClick={ () => fetchEmployee(formValues, history) }
                className="green btn-flat right">
                Log Me In
            </button>
            </div>
            
        </div>
    )
}

function mapStateToProps(state){
    return { formValues: state.form.LoginForm.values };
};


export default connect(mapStateToProps, actions)(withRouter(LoginReview));