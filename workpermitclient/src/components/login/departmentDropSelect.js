import React from 'react';


class DropDepartmentSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const { input, label } = this.props;
    return (
      <div style={{width: "400px",display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
        <label htmlFor={label}>{label}</label> 
        <select {...input} style={{width: "185px"}} >
          <option value="">Select</option>
          <option value="press">Press</option>
          <option value="weld">Weld</option>
          <option value="paint">Paint</option>
          <option value="toolroom">Tool Room</option>
          <option value="maintenance">Maintenance</option>
          <option value="store">Store</option>
          <option value="dispatch">Dispatch</option>
        </select>
      </div>
    );
  }
}

// function DropDownSelect(person) {
//   return (
//     <option key={person} value={person}>{person}</option>
//   );
// }

export default DropDepartmentSelect;