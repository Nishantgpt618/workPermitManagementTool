import React, { Component } from 'react';
import NewPermitForm from './NewPermitForm';
import PermitReview from './permitReview';
import { reduxForm } from 'redux-form';

class NewPermit extends Component {

    state = { showFormReview: false };


    renderContent() {
        if (this.state.showFormReview) {
            return <PermitReview
                onCancel={() => this.setState({ showFormReview: false })} />
        }

        return <NewPermitForm
            onSurveySubmit={() => this.setState({ showFormReview: true })} />
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
    form: 'NewPermitForm'
})(NewPermit);