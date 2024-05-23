import React, { Component } from 'react';
import { fetchPermit, closeWorkPermit } from '../redux/actions';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/esm/Card';
import { Link } from 'react-router-dom';
import veg from '../media/veg.jpg';
import nonveg from '../media/nonveg.jpg';

class CloseWp extends Component {

    constructor(props) {
        super(props);
        this.state = { user: JSON.parse(localStorage.getItem('user')) };
    }

    componentDidMount() {
        this.props.fetchPermit();
    }



    renderPermit() {
        return <div>
            {this.props.permit.filter(data => { return data.initiatorName === this.state.user.employeeName }).map(permit => {
                return <div className="permit-item" key={permit._id}>
                    <Card>
                        <div>
                            {permit.isActive ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                        <Card.Body>
                            <Card.Title><p><span className="permit-description-text">Initiator Name: </span>{permit.initiatorName}</p></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><p><span className="permot-discription-text">Work Permit Area: </span>{permit.area}</p></Card.Subtitle>
                            <Card.Text>
                                <p><span className="permit-description-text">Work Permit Description: </span>{permit.workPermitDescription}</p>
                            </Card.Text>
                            <Link
                                to={{ pathname: "/workPermitView", state: { permit: permit } }}
                            >View Permit</Link>
                            {permit.isActive ? <button onClick={() => this.props.closeWorkPermit(permit._id)}>Close Work Permit</button> : <p>Closed or not approved</p>}
                        </Card.Body>

                    </Card>
                </div>
            })}
        </div>


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
                <h3 style={{textAlign: "center"}}>Close workPermit</h3>
                <p style={{textAlign: "center"}}><strong>Note: </strong>  You can only close the workpermits initiated by your name</p>
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


export default connect(mapStateToProps, { fetchPermit, closeWorkPermit })(CloseWp)

