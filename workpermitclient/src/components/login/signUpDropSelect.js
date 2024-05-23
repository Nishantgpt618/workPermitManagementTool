import React from 'react';


class DropDesignationSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const { input, label } = this.props;
    return (
      <div style={{width: "400px",display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
        <label htmlFor={label}>{label}</label> 
        <select {...input} style={{width: "185px"}} >
          <option value="">Select</option>
          <option value="chiefPlant">Chief Plant</option>
          <option value="manufacturingHead">Manufacturing Head</option>
          <option value="Manager">Manager</option>
          <option value="SafetyManager">Safety Manager</option>
          <option value="assistantManager">Assistant Manager</option>
          <option value="Executive">Executive</option>
          <option value="Assosiate">Assosiate</option>
          <option value="permanentWorker">Permananet Worker</option>
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

export default DropDesignationSelect;