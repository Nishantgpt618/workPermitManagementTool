
import React, { Component } from 'react';
import { fetchPermit } from '../redux/actions';
import { connect } from 'react-redux';
import veg from '../media/veg.jpg';
import nonveg from '../media/nonveg.jpg';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

class ViewPermit extends Component {

    componentDidMount() {
        this.props.fetchPermit();
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
                <h3 style={{textAlign: "center"}}>Active workPermits</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div >

                    {this.props.permit.filter(data => {return data.isActive === true}).map(permit => {
                        return (
                            <div key={permit._id} className="permit-item">
                                
                                <Card bg='light'>
                                    <div >{permit.isActive ? <img src={veg} style={{ width: "20px" }} alt="" /> : <img src={nonveg} style={{ width: "20px" }} alt="" />}</div>
                                    <Card.Body>
                                        <Card.Title><p><span className="permot-discription-text">Work Permit Area: </span>{permit.area}</p></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"><p><span className="dress-description-text">Initiator Name: </span>{permit.initiatorName}</p></Card.Subtitle>
                                        <Card.Text>
                                            <p><span className="dress-description-text">Work Permit Description: </span>{permit.workPermitDescription}</p>
                                        </Card.Text>
                                        <Link 
                                        to={{pathname:"/workPermitView", state: {permit: permit }}}
                                        >View Permit</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { permit: state.viewPermit }
}

export default connect(mapStateToProps, { fetchPermit })(ViewPermit);