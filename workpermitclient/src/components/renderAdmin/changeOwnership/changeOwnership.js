import React, { Component } from 'react'

export default class changeOwnership extends Component {
    render() {
        return (
            <div className="adminBoard">
                <div className="adminBoardCard">
                    <a href='/manageEmployeeDetails'>Change ADMIN</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/changeAreaManager'>See Area Manager</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/addArea'>Change Manufacturing Head</a>
                </div>
                <div className="adminBoardCard">
                    <a href='/addArea'>Change Safety Manager</a>
                </div>
            </div>
        )
    }
}
