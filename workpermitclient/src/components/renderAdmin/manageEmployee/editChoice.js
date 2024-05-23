import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Field, reduxForm } from 'redux-form';
import PermitFields from '../../permit/PermitFields';



class editChoice extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showEditForm: false
        }
    }

    updateUser() {
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
            <button onClick={actions.deleteEmployee({tokenNumber: this.props.employee.tokenNumber},this.props.history)}>Delete User</button>
            <form className="NewPermitForm" onSubmit={(e) => {e.preventDefault(); actions.updateEmployee( this.props.employee.employeeName, this.props.updateForm.values)}}>
            <p>Employee Name:</p><Field type='text' component={PermitFields} label={this.props.employee.employeeName} name="employeeName"   />
            <br />
            <p>Employee Token Number:</p><Field type='text' component={PermitFields} label={this.props.employee.tokenNumber} name="tokenNumber"  />
            <br />
            <p>Employee Designation:</p><Field type='text' component={PermitFields} label={this.props.employee.designation} name="designation"  />
            <br />
            <p>Employee Department:</p><Field type='text' component={PermitFields} label={this.props.employee.department} name="department"  />
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
            <button onClick={() => this.setState({showEditForm: true})}>Edit User</button>
            {this.editUser()}
        </div>
    )}
}



function mapStateToProps(state){
    return {
        employee: state.editEmployee,
        updateForm: state.form.updateEmployeeDetailsForm
}}

export default reduxForm({
    form: 'updateEmployeeDetailsForm',
    destroyOnUnmount: false
  })(connect(mapStateToProps,actions)(editChoice));
