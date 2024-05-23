import axios from 'axios';
import { SUBMIT_PERMIT, FETCH_PERMIT, SUBMIT_EMPLOYEE, FETCH_EMPLOYEE, EDIT_EMPLOYEE, EDIT_PERMIT, CURRENT_EMPLOYEE, GET_AREA} from './types';

export const mind = async () => {
    await axios.post('/api/mind')
    .then(console.log("updated by frontend side"))
    .then(window.location.reload(true));
}


export const submitPermit = (value, history) => async dispatch => {
    const req = await axios.post('/api/newworkpermit', value)
    .then(history.push('/'));
    dispatch({ type: SUBMIT_PERMIT, payload: req.data})
}

export const fetchPermit = () => async dispatch => {
    const res = await axios.get('/api/workpermit');
    dispatch({type: FETCH_PERMIT, payload: res.data})
}

export const submitEmployee = (value, history) => async dispatch => {
    console.log(value);
    const req = await axios.post('/api/newemployee', value)
    .then(history.push('/'));
    dispatch({type: SUBMIT_EMPLOYEE, payload: req.data})
}

export const fetchPermitToEdit = (value, history) => async dispatch => {
    const res = await axios.post('/api/editpermit', value)
    .then(history.push('/editPermitDetailsChoice'));
    dispatch({type: EDIT_PERMIT, payload: res.data[0]})
}

export const fetchEmployee = (value, history) => async dispatch => {

    await axios.post('/api/employee', value)
    .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        history.push('/profile')
        window.location.reload(true)}).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              if(error.response.status === 401) {
                  history.push('/wrongpassword')
              }
            }})
    
}


export const fetchAllEmployee = () => async dispatch => {
    const res = await axios.get('/api/allemployee');
    dispatch({type: FETCH_EMPLOYEE, payload: res.data})

}

export const fetchEmployeeToEdit = (value, history) => async dispatch => {
    const res = await axios.post('/api/editemployee', value)
    .then(history.push('/editEmployeeDetailsChoice'));
    dispatch({type: EDIT_EMPLOYEE, payload: res.data[0]})
}


export const deleteEmployee = (value, history) => async dispatch => {
    await axios.post('/api/deleteuser', value)
    .then(history.push('/manageEmployee'));
    console.log('Employee with Token Number: '+value.tokenNumber+' has been deleted from our records');

}

export const deletePermit = (value, history) => async dispatch => {
    await axios.post('/api/deletepermit', value)
    .then(history.push('/managePermit'));
    console.log('Permit has been deleted from our records');

}

export const updateEmployee = (before,after) => {
    axios.post('/api/updateuser',{before,after})
    .then(console.log("req successful"));
}

export const updatePermit = (before,after) => {
    axios.post('/api/updatepermit',{before,after})
    .then(console.log("req successful"));
}

export const approvePermit = (id) => async dispatch => {
    await axios.post('/api/approvepermit', {_id: id})
    .then(console.log("permit approved"))
    .then(window.location.reload(true));
}

export const approvePermitByMfg = (id) => async dispatch => {
    await axios.post('/api/approvebymfg', {_id: id})
    .then(console.log("Permit approved by Manufacturing Head"))
    .then(window.location.reload(true));
}

export const approvePermitBySafetyManager = (id) => async dispatch => {
    await axios.post('/api/approveBySafetyManager', {_id: id})
    .then(console.log("Permit approved by safety manager"))
    .then(window.location.reload(true));
}

export const closeWorkPermit = (id) => async dispatch => {
    await axios.post('/api/closeworkpermit', {_id: id})
    .then(console.log("work permit closed by front end"))
    .then(window.location.reload(true));
}

export const fetchEmployeeForPermit = () => async dispatch => {
    const data = JSON.parse(localStorage.getItem('user'));
    dispatch({type: CURRENT_EMPLOYEE, payload: data})
}


export const submitArea = (value) => async dispatch => {
    console.log(value);
    await axios.post('/api/addarea', value)
    .then(console.log("saved"));
}

export const getArea = () => async dispatch => {
    const res = await axios.get('/api/getarea');
    dispatch({type: GET_AREA, payload: res.data})
}

