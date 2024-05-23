import React, { Component } from 'react'
import Card from 'react-bootstrap/esm/Card';
import { connect } from 'react-redux';
import { fetchPermit } from '../../redux/actions';
import veg from '../../media/veg.jpg';
import nonveg from '../../media/nonveg.jpg';
import { Link } from 'react-router-dom';

class initiatedWorkPermit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('user'))
        };
    }

    componentDidMount() {
        this.props.fetchPermit();
    }

    renderPermit() {
        return (
            this.props.permit.filter(data => { return data.initiatorName === this.state.currentUser.employeeName }).map((permit, i) => {
                return <div className="permit-item" key={i}><Card>
                    <Card.Body>
                        <Card.Title><span className="permit-description-text">Initiator Name: </span>{permit.initiatorName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><span className="permot-discription-text">Work Permit Area: </span>{permit.area}</Card.Subtitle>
                        <Card.Text>
                            <span className="permit-description-text">Work Permit Description: </span>{permit.workPermitDescription}
                        </Card.Text>
                    </Card.Body>
                    <div className="submitButton" style={{ marginBottom: "20px", margin: "auto",display: "flex", flexDirection: "row",justifyContent: "space-between", alignItems: "baseline"}}>

                        <div >{permit.isActive ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                        <div>{permit.verifiedMfgHead ? <button type="submit" onClick={() => this.preventDefaultFunction()}>Approved</button> : <button type="submit" onClick={() => this.mergeFunctions(permit._id)}>Approve</button>}</div>
                        <div><Link
                            style={{ margin: "auto", marginBottom: "10px" }}
                            className="linkToButton"
                            to={{ pathname: "/workPermitView", state: { permit: permit } }}
                        >View Permit</Link>
                        </div>
                    </div>

                </Card></div>

            }))
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{textAlign: "center"}}>Initiated workPermits</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {this.renderPermit()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        permit: state.viewPermit
    }
}


export default connect(mapStateToProps, { fetchPermit })(initiatedWorkPermit);
