import React, { Component } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { connect } from 'react-redux';
import { fetchPermit } from '../redux/actions';
import '../App.css';
import veg from '../media/veg.jpg';
import nonveg from '../media/nonveg.jpg'
import { Link } from 'react-router-dom';

class workPermitView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('user'))
        };
    }

    componentDidMount() {
        this.props.fetchPermit();

    }

    checkManager() {
        if (this.state.currentUser) {

            return this.props.permits.filter(data => { return data._id === this.props.location.state.permit._id }).map((permit, i) => <div className="workPermitView" key={i}>
                <div className="workPermitViewPictureBlock">
                    <div className="workPermitViewBeforeAfter">
                        <h5 style={{ marginLeft: "auto", marginRight: "auto" }}>Before</h5>
                    </div>
                    <div className="workPermitViewBeforeAfter">
                        <h5 style={{ margin: "auto" }}>After</h5>
                    </div>
                </div>
                <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                    <Card.Title><span className="permit-description-text">Initiator Name: </span>{permit.initiatorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><span className="permot-discription-text">Work Permit Area: </span>{permit.area}</Card.Subtitle>
                    <Card.Text>
                        <span className="permit-description-text">Work Permit Description: </span>{permit.workPermitDescription}
                    </Card.Text>
                    <div className="approvalQuery">
                        <div className="bar"><p style={{textAlign:"center"}}>Active</p>{permit.isActive ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                        <div className="bar"><p style={{textAlign:"center"}}>Verified by Area Manager</p>{permit.verifiedAreaManager ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                        <div className="bar"><p style={{textAlign:"center"}}>verified by Manufacturing Head</p>{permit.verifiedMfgHead ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                        <div className="bar"><p style={{textAlign:"center"}}>verified by Safety Manager</p>{permit.verifiedSafetyManager ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link
                        to={{ pathname: "/printworkpermit", state: { id: permit._id } }}
                    >Print Permit</Link>

                </div>

            </div>)

        }
        else return <div><p>Sorry you are not a manager</p></div>
    }


    render() {
        return (
            <div>
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

export default connect(mapStateToProps, { fetchPermit })(workPermitView);