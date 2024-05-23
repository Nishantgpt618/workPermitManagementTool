import React from 'react';


class DropDownSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const { input, label } = this.props;
    return (
      <div style={{width: "400px",display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
        <label htmlFor={label}>{label}</label> 
        <select {...input} style={{width: "185px"}} >
          <option value="">Select</option>
          <option value="HOT">HOT</option>
          <option value="COLD">COLD</option>
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

export default DropDownSelect;