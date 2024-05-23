import React, {Component} from 'react';

class adminBoard extends Component{
    render(){
        return(
        <div className="adminBoard">
            <div className="adminBoardCard">
                <a href="/manageEmployee">Manage Employee</a>
            </div>
            <div className="adminBoardCard">
                <a href='/managePermit'>Manage Permit</a>
            </div>
            <div className="adminBoardCard">
                <a href='/'>Manage Extras</a>
            </div>
        </div>
        )}
}

export default adminBoard;