import React from 'react';
import active from '../media/activeWorkPermit.png';
import initiate from '../media/initiateWorkPermit.png';
import close from '../media/closeWorkPermit.jpg';
import all from '../media/allWorkPermit.jpg';

function Home() {
    return (
        <div className="menu App">
            <div className="Row1">
                <div className="ActiveWp"><a href="/active"><img className="menuItem" src={active} alt="error" /></a><p style={{ fontSize: "small" }}>Active Work Permit's</p></div>
                <div className="InitiateWp"><a href="/initiate"><img className="menuItem" src={initiate} alt="error" /></a><p style={{ fontSize: "small" }}>Initiate Work Permit</p></div>
            </div>
            <div className="Row1">
                <div className="CloseWp"><a href="/close"><img className="menuItem" src={close} alt="error" /></a><p style={{ fontSize: "small" }}>Close Work Permit</p></div>
                <div className="AllWp"><a href="/viewpermit"><img className="menuItem" src={all} alt="error" /></a><p style={{ fontSize: "small" }}>Display All Work Permit's</p></div>
            </div>
            
        </div>
    )
}

export default Home
