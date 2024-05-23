import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPermit } from '../../redux/actions';

class printPermit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('user'))
        };
    }

    componentDidMount() {
        this.props.fetchPermit();

    }


    render() {
        return (
            <div className="permitpage">
                {this.props.permit.filter(data => { return data._id === this.props.location.state.id }).map(permit => {
                    return <div>
                        <div style={{ border: "2px solid black" }}>
                            <div className="permitheader">
                                <p>Company Icon</p>
                                <h2>HOT WORK PERMIT</h2>
                                <p>MahindraCIE</p>
                            </div>
                            <div className="permitheader">
                                <p>Date: </p>
                                <p>&#40; &#40; tick &#41; wherever applicable & put &#40; cross &#41; where not applicable &#41;</p>
                                <p>PTW Serial No.___________________</p>
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <p>Area and Location where HOT WORK will be performed: {permit.area} shop</p>
                            <p>Flame / Spark producing tools used: </p>
                            <p>Period of work from : {permit.time.slice(11, 19)} &#40;hrs&#41; to ______&#40;hrs&#41;</p>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <div className="heading">
                                <h5>SAFETY GENERAL CHECKPOINTS</h5>
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <div className="heading">
                                <p>1&#41; INITIATOR</p>
                            </div>
                            <p>I cerify that above points have been checked and found satisfactory</p>
                            <p>Person involved</p>
                            <p>Initiator Name: {permit.initiatorName} </p>
                            <p>Time: {permit.time.slice(11, 19)} &#40;hrs&#41;</p>
                        </div>
                        <div>
                            <div className="heading">
                                <p>2&#41; PERMIT ISSUER &#40; AREA MANAGER/INCHARGE &#41;</p>
                            </div>
                            <p>I cerify that above points have been checked and found satisfactory</p>
                            <p>Area: {permit.area}</p>
                            <p>Issuer Name: </p>
                            <p>Remarks:</p>
                            <p>Time:</p>
                        </div>
                        <div>
                            <div className="heading">
                                <p>3 &#41; SAFETY DEPARTMENT</p>
                            </div>
                            <p>I have inspected the work site and confirm and except that all permit conditions are okay and it is safe to start work</p>
                            <p>Safety Officer Name: </p>
                            <p>Remarks:</p>
                            <p>Time:</p>
                        </div>
                        <div>
                            <div className="heading">
                                <p>4 &#41; PERMIT APPROVER</p>
                            </div>
                            <p>I certify that all the above safety checks are compleated and are found satidfactory</p>
                            <p>Issuer and approver have been compiled to it and is safe to start work</p>
                            <p>Name/ Designation: </p>
                            <p>Time: </p>
                        </div>
                        <div>
                            <div>
                                <p className="heading">5&#40;PERMIT HOLDER &#40;CONTRACTER/WORKING AGENCY&#41;</p>
                            </div>
                            <p>Supervisor name:</p>
                            <p>Contractor/Working Agency :</p>
                            <p>Sign/ Date: </p>
                        </div>
                        <div>
                            <div>
                                <p className="heading">6&#40;PERMIT EXTENTION</p>
                            </div>
                            <p>From time: _______&#40;hrs&#41; to ______&#40;hrs&#41;</p>
                            <p>Issuer Sign: </p>
                            <p>Approver sign: </p>
                        </div>
                        <div>
                            <div>
                                <p className="heading">7&#40;WORK COMPLEATED &#40;INITIATOR&#41;</p>
                            </div>
                            <p>Work compleated and all personnel and material have been removed and site is clear.</p>
                            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
                                <div>
                                    <strong>   INITIATOR</strong>
                                    <p>Name: </p>
                                    <p>Sign: </p>
                                </div>
                                <div>
                                    <strong>PERMIT HOLDER &#40;CONTRACTOR/WORKING AGENCY   </strong>
                                    <p> Name: </p>
                                    <p>Contractor:</p>
                                    <p>Sign: </p>
                                </div>
                            </div>
                        </div>

                    </div>})}
                
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        permit: state.viewPermit
    }
}


export default connect(mapStateToProps, { fetchPermit })(printPermit);
