import React, { Component } from 'react';
import { fetchPermit, getArea } from '../../redux/actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import veg from '../../media/veg.jpg';
import nonveg from '../../media/nonveg.jpg';


class ViewPermit extends Component {

    componentDidMount() {
        this.props.fetchPermit();
        this.props.getArea();

    }

    wpCount(list,area){
        var count = 0;
        list.forEach(i => {if (i === area) { count += 1 }})
        return count
    }


    areaWpCount(){
        const list = [];
        return(
            <div>
                {this.props.permit.forEach(data => {list.push(data.area)})}
                {
                    this.props.area.map(data => {return <div>
                        <h4>{data.caption}: {this.wpCount(list, data.area)}</h4>
                        <br/>
                    </div>})
                }

            </div>
        )
    }



    render() {
        return (
            <div>
                <br></br>
                <div style={{width: "85%",margin: "auto"}}>
                    <h1>Work Permit Count: </h1>
                    {this.areaWpCount()}
                </div>
                <div className="permit-list">
                    {this.props.permit.map(permit => {
                        return (
                            <div className="permit-item" key={permit._id}>
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
    return { permit: state.viewPermit,
    area: state.getArea }
}

export default connect(mapStateToProps, { getArea,fetchPermit })(ViewPermit);