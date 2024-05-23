import React from 'react';
import { getArea } from '../../redux/actions';
import { connect } from 'react-redux';

class DropAreaSelect extends React.Component { 
  

  componentDidMount(){
    this.props.getArea()
}
 
  renderList(){
    if(this.props.permits){
      return this.props.permits.map(lol => <option value={lol.area} key={lol._id}>{lol.caption}</option>)
    }
  }

  render() {
    const { input, label } = this.props;
    return (
      <div style={{width: "400px",display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
        <label htmlFor={label}>{label}</label>
        <select {...input} style={{width: "185px"}}>
        <option value="">Select</option>
        {this.renderList()}
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
function mapStateToProps(state) {
  return {
      permits: state.getArea
  }
}

export default connect(mapStateToProps,{getArea})(DropAreaSelect);