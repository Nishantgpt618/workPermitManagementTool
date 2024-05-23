import React, { Component } from 'react';
import logo from '../media/logo.png';
import { fetchPermit } from '../redux/actions';
import { connect } from 'react-redux';


class Header extends Component {

    state = {
        viewNav: false
    }



    logout() {
        localStorage.removeItem('user');
        console.log('removed')

    }

    componentDidMount() {
        this.props.fetchPermit();

    }


    managerRequestCount() {
        const list = []
        var reqCount = 0;
        this.props.permits.forEach(i => {if(i.area === this.props.user.department){list.push(i.verifiedAreaManager)}  })
        list.forEach(i => { if (i === false) { reqCount += 1 } })
        return (
            <div>[{reqCount}]
            </div>
        )
    }

    safetyManagerRequestCount() {
        const listsm = [];
        var reqCount1 = 0;
        return (
            <div>
            {this.props.permits.forEach(i => {if(i.verifiedSafetyManager === false){listsm.push(i.verifiedSafetyManager)}  })}
            {listsm.forEach(i => { if (i === false) { reqCount1 += 1 } })}
            [{reqCount1}]
            </div>
        )
    }

    manufacturingheadRequestCount() {
        const list2 = []
        var reqCount2 = 0;
        this.props.permits.forEach(i => {if(i.verifiedMfgHead === false){list2.push(i.verifiedMfgHead)}  })
        list2.forEach(i => { if (i === false) { reqCount2 += 1 } })
        return (
            <div>[{reqCount2}]
            </div>
        )
    }


    renderAdmin() {
        if (this.props.user) {
            if (this.props.user.designation === 'ADMIN') {
                return <div className ="navContainer">
                    <a className="navOption" href='/adminBoard'>Admin Board</a>
                    <a className="navOption"  href='/register'>Add Employee</a>
                </div>
            }
            if (this.props.user.designation === 'Manager') {
                return <div className ="navContainer">
                    <a className="navOption" href="/manageRequests">Requests{this.managerRequestCount()}</a>
                </div>
            }
            if (this.props.user.designation === 'manufacturingHead') {
                return <div className ="navContainer">
                    <a className="navOption" href="/manageMfgRequests">Requests{this.manufacturingheadRequestCount()}</a>
                </div>
            }
            if (this.props.user.designation === 'SafetyManager') {
                return <div className ="navContainer">
                    <a className="navOption" href="/manageSafetyManagerRequests">Requests{this.safetyManagerRequestCount()}</a>
                </div>
            }
            else {
                return <div style ={{display: "none"}}></div>
            }
        }
    }

    renderUser() {
        if (this.props.user) {
            return <div className ="navContainer">
                <a className="navOption2" href='/'>Home</a>
                <a className="navOption2" href='/profile'>Profile</a>
                <a className="navOption2" href='/' onClick={() => this.logout()}>logout</a>
                <strong  style={{borderLeft: "2px solid black",width: "150px", height: "50px",paddingTop: "12.5px"}}>{this.props.user.employeeName}</strong>
                

            </div>

        }
        else return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '250px', justifyContent: 'flex-end' }}>
            <a href='/'>About</a>
        </div>




    }

    render() {
        return (
            <div className="header">

                <img className="headerLogo" src={logo} alt="error"></img>
                <div className="content" style={{ alignItems: 'center', width: '500px' }}>
                    {this.renderAdmin()}
                    {this.renderUser()}
                </div>
                <button className="navButton" type="button" onClick={() => { this.setState({ viewNav: !this.state.viewNav }) }}>
                    navSwitch
            </button>
                {this.state.viewNav ? <div className="rightContent">
                    {this.renderAdmin()}
                    {this.renderUser()}
                </div> : <div style={{display: "none"}}></div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        permits: state.viewPermit
    }
}



export default connect(mapStateToProps,{fetchPermit})(Header);
