import { combineReducers } from 'redux';
import { permitReducer } from './permitReducer';
import { ViewPermitReducer } from './viewPermitReducer';
import { reducer as reduxForm } from 'redux-form';
import { employeeReducer } from './employeeReducer';
import { loggedInEmployee } from './loggedInEmployee';
import { editEmployee } from './editEmployee';
import {currentEmployee} from './currentEmployee'
import { editPermit } from './editPermit';
import { getArea } from './getArea';

export default combineReducers({
    submitpermit: permitReducer,
    viewPermit: ViewPermitReducer,
    submitemployee: employeeReducer,
    fetchemployee: loggedInEmployee,
    editEmployee: editEmployee,
    form: reduxForm,
    fetchEmployeeForPermit: currentEmployee,
    editPermit: editPermit,
    getArea: getArea
})