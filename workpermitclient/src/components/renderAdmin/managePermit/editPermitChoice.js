import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Field, reduxForm } from 'redux-form';
import PermitFields from '../../permit/PermitFields';



class editPermitChoice extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showEditForm: false
        }
    }

    updatePermit() {
        if(this.props.updateForm){
            actions.updateEmployee(this.props.updateForm.values,this.props.history)
            console.log(this.props.updateForm.values);
        }
        else {
            console.log("error in form")
        }
    }



    editUser(){
        if(this.state.showEditForm){
            return <div>
            <button onClick={() => this.setState({showEditForm: false})}>Cancel Edit</button>
            <button onClick={actions.deletePermit({_id: this.props.permit._id},this.props.history)}>Delete Permit</button>
            <form className="NewPermitForm" onSubmit={(e) => {e.preventDefault(); actions.updatePermit( this.props.permit._id, this.props.updateForm.values)}}>
            <p>Permit description:</p><Field type='text' component={PermitFields} label={this.props.permit.workPermitDescription} name="workPermitDescription"   />
            <br />
            <p>Manpower Involved:</p><Field type='text' component={PermitFields} label={this.props.permit.manPowerInvolved} name="manPowerInvolved"  />
            <br />
            <br />
            <button type='submit'>Update Details</button>
            </form>
            </div>
        }
        else {
            <div>false</div>
        }
        
    }

    render(){
    return (
        <div>
            <button onClick={() => this.setState({showEditForm: true})}>Edit Permit</button>
            {this.editUser()}
        </div>
    )}
}



function mapStateToProps(state){
    return {
        permit: state.editPermit,
        updateForm: state.form.updatePermitDetailsForm
}}

export default reduxForm({
    form: 'updatePermitDetailsForm',
    destroyOnUnmount: false
  })(connect(mapStateToProps,actions)(editPermitChoice));
