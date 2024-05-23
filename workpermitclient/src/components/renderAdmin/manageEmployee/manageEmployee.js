import React, {Component} from 'react';

class manageEmployee extends Component{
    render(){
        return(
            <div className="adminBoard">
                <div className="adminBoardCard">
                    <a href='/manageEmployeeDetails'>Change Employee Details</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/changeOwnership'>See Ownership</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/addArea'>Add Area</a>
                </div>
            </div>
        )
    }
}

export default manageEmployee;