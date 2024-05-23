import React from 'react';
import { fetchPermit, approvePermitByMfg, mind } from '../redux/actions';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/esm/Card';

import {Link} from 'react-router-dom';

class ManageMfgRequests extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('user'))
        };
    }

    componentDidMount() {
        this.props.fetchPermit();

    }

    async mergeFunctions(id) {
        await this.props.approvePermitByMfg(id)
            .then(this.props.mind()
                .then(console.log("love you")));
    }

    async preventDefaultFunction() {
        await this.props.mind()
            .then(console.log("logic ran successfully"));
    }




    checkManager() {
        if (this.state.currentUser) {
            if (this.state.currentUser.designation === "manufacturingHead") {
                return this.props.permits.filter(data => { return data.verifiedMfgHead === false || data.isActive === false }).map((permit, i) => <div className="permit-item" key={i}><Card>
                    <Card.Body>
                        <Card.Title><span className="permit-description-text">Initiator Name: </span>{permit.initiatorName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><span className="permot-discription-text">Work Permit Area: </span>{permit.area}</Card.Subtitle>
                        <Card.Text>
                            <span className="permit-description-text">Work Permit Description: </span>{permit.workPermitDescription}
                        </Card.Text>
                        <Link
                            to={{ pathname: "/workPermitView", state: { permit: permit } }}
                        >View Permit</Link>
                    </Card.Body>
                    <div className="submitButton" style={{ marginBottom: "20px" }}>
                        {permit.verifiedMfgHead ? <button type="submit" onClick={() => this.preventDefaultFunction()}>Approved</button> : <button type="submit" onClick={() => this.mergeFunctions(permit._id)}>Approve</button>}
                    </div>

                </Card></div>)
            }
        }
        else return <div><p>Sorry you are not a Manufacturing Head</p></div>
    }










    render() {
        return (
            <div className="permit-list">
                {this.checkManager()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        permits: state.viewPermit
    }
}

export default connect(mapStateToProps, { fetchPermit, approvePermitByMfg, mind })(ManageMfgRequests);