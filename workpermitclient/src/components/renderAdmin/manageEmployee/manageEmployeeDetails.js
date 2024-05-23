import React, { Component } from 'react';
import { fetchAllEmployee } from '../../../redux/actions';
import { connect } from 'react-redux';
import NamesContainer from './NamesContainer';


class manageEmployeeDetails extends Component {

    componentDidMount() {
        this.props.fetchAllEmployee();
    }



    state = {
        searchTerm: ''
    }

    dynamicSearch = () => {
        const newArray = []
        if(this.props.employee){
            this.props.employee.user.map(obj => newArray.push(obj.employeeName));
        }
        return newArray.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }


    editSeachTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    

    render() {
        return (
            <div className="dress-list">
            <div>
        
                <input type='text' value={this.state.searchTerm} onChange={this.editSeachTerm} placeholder='type here' />
                <br></br>
                <p>there are the names</p>
                <NamesContainer history={this.props.history} style = {{margin: '20px'}} names = {this.dynamicSearch()} />
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { employee: state.fetchemployee }
}

export default connect(mapStateToProps, { fetchAllEmployee })(manageEmployeeDetails);