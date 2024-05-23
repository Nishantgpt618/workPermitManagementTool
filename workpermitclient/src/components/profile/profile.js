import React from 'react';
import {fetchPermit} from '../../redux/actions';
import { connect } from 'react-redux';


class Profile extends React.Component {


    constructor(props) {
        super(props);
        this.state = { user: JSON.parse(localStorage.getItem('user')) };
    }

    componentDidMount() {
        this.props.fetchPermit();
    }

    initiatedWorkPermitCount(){
        var count = 0;
        const list = [];
        return (
            <div>
                {this.props.permit.filter(data => {return data.initiatorName === this.state.user.employeeName}).forEach(i => list.push(i))}
                {list.forEach(i => {count += 1})}
                {count}
            </div>
        )
    }

    render() {
        return (
            <div className="profileContainer">
                <p>Employee Name: <strong>{this.state.user.employeeName}</strong></p>
                <p>Employee Token Number: <strong>{this.state.user.tokenNumber}</strong> </p>
                <p>Number of Work Permit Initiated: {this.initiatedWorkPermitCount()} 
                <br/>
                <a href="/initiatedWorkPermit">View initiated workpermit's</a></p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        permit: state.viewPermit
    }
}

export default connect(mapStateToProps, {fetchPermit})(Profile)