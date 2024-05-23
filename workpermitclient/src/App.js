import './App.css';
import './components/styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ActiveWp from './components/ActiveWp';
import CloseWp from './components/CloseWp';
import Home from './components/Home';
import NewPermit from './components/permit/NewPermit';
import PermitAdded from './components/permit/PermitAdded';
import ViewPermit from './components/permit/ViewPermit';
import Header from './components/Header';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Profile from './components/profile/profile';
import adminBoard from './components/renderAdmin/adminBoard';
import manageEmployee from './components/renderAdmin/manageEmployee/manageEmployee';
import manageEmployeeDetails from './components/renderAdmin/manageEmployee/manageEmployeeDetails';
import editChoice from './components/renderAdmin/manageEmployee/editChoice';
import managePermit from './components/renderAdmin/managePermit/managePermit';
import managePermitDetails from './components/renderAdmin/managePermit/managePermitDetails';
import manageRequests from './components/manageRequests';
import manageMfgRequests from './components/manageMfgRequests';
import manageSafetyManagerRequests from './components/manageSafetyManagerRequests';
import workPermitView from './components/workPermitView';
import initiatedWorkPermit from './components/profile/initiatedWorkPermit';
import wrongPassword from './components/wrongPassword';
import printPermit from './components/permit/printPermit';
import editPermitChoice from './components/renderAdmin/managePermit/editPermitChoice';
import notLoggedIn from './components/notLoggedIn';
import Loading from './components/Loading';
import addNewArea from './components/renderAdmin/addArea/addNewArea';
import changeOwnership from './components/renderAdmin/changeOwnership/changeOwnership';
import changeAreaManager from './components/renderAdmin/changeOwnership/changeAreaManager';



class App extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('user'))
    };
  }

  renderHome() {
    if (this.state.currentUser) {
      return (<div><Route exact path="/" component={Home} />
        <Route exact path="/close" component={CloseWp} />
        <Route exact path="/initiate" component={NewPermit} />
        <Route exact path="/permitadded" component={PermitAdded} />
        <Route exact path='/register' component={SignUp} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/adminBoard' component={adminBoard} />
        <Route exact path='/manageEmployee' component={manageEmployee} />
        <Route exact path='/manageEmployeeDetails' component={manageEmployeeDetails} />
        <Route exact path='/editEmployeeDetailsChoice' component={editChoice} />
        <Route exact path='/managePermit' component={managePermit} />
        <Route exaxt path='/managePermitDetails' component={managePermitDetails} />
        <Route exact path='/editPermitDetailsChoice' component={editPermitChoice} />
        <Route exact path='/manageRequests' component={manageRequests} />
        <Route exact path='/manageMfgRequests' component={manageMfgRequests} />
        <Route exact path='/manageSafetyManagerRequests' component={manageSafetyManagerRequests} />
        <Route exact path='/workPermitView' component={workPermitView} />
        <Route exact path='/initiatedWorkPermit' component={initiatedWorkPermit} />
        <Route exact path='/addArea' component={addNewArea} />
        <Route exact path='/changeOwnership' component={changeOwnership} />
        <Route exact path='/changeAreaManager' component={changeAreaManager} />
      </div>)
    }
    else {
      return <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/close" component={notLoggedIn} />
        <Route exact path="/initiate" component={notLoggedIn} />
        <Route exact path="/permitadded" component={notLoggedIn} />
        <Route exact path='/register' component={notLoggedIn} />
        <Route exact path='/profile' component={Loading} />
        <Route exact path='/adminBoard' component={notLoggedIn} />
        <Route exact path='/manageEmployee' component={notLoggedIn} />
        <Route exact path='/manageEmployeeDetails' component= {notLoggedIn} />
        <Route exact path='/editEmployeeDetailsChoice' component={notLoggedIn} />
        <Route exact path='/managePermit' component={notLoggedIn} />
        <Route exaxt path='/managePermitDetails' component={notLoggedIn} />
        <Route exact path='/editPermitDetailsChoice' component={notLoggedIn} />
        <Route exact path='/manageRequests' component={notLoggedIn} />
        <Route exact path='/manageMfgRequests' component={notLoggedIn} />
        <Route exact path='/manageSafetyManagerRequests' component={notLoggedIn} />
        <Route exact path='/workPermitView' component={notLoggedIn} />
        <Route exact path='/initiatedWorkPermit' component={notLoggedIn} />
        <Route exact path='/addArea' component={notLoggedIn} />
        <Route exact path='/changeOwnership' component={notLoggedIn} />
        <Route exact path='/changeAreaManager' component={notLoggedIn} />
      </div>

    }
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header user={currentUser} />
            {this.renderHome()}
            <Route exact path="/active" component={ActiveWp} />
            <Route exact path="/viewpermit" component={ViewPermit} />
            <Route exact path='/wrongpassword' component={wrongPassword} />
            <Route exact path='/printworkpermit' component={printPermit} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}



export default connect(null, actions)(App);
