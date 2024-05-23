import React, {Component} from 'react';

class managePermit extends Component{
    render(){
        return(
            <div className="adminBoard">
                <div className="adminBoardCard">
                    <a href='/managePermitDetails'>Change Permit Details</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/'>Change Extras</a>
                </div>
            </div>
        )
    }
}

export default managePermit;