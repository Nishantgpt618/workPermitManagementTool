import React, { Component } from 'react';
import {getArea , fetchAllEmployee} from '../../../redux/actions';
import {connect} from 'react-redux';


class changeAreaManager extends Component {
    constructor(props){
        super(props);
        this.state = {area: null,
        showForm: false}
    }

    componentDidMount(){
        this.props.getArea();
        this.props.fetchAllEmployee();
    }

    renderAreaList(){
        if(this.props.area){
            return this.props.area.map(data => <option value={data.area}>{data.caption}</option>)
        }
    }

    handleChange = (event) =>{
        this.setState({
            area: event.target.value
        })
    }

    renderForm(){
        if(this.props.employee){
           return this.props.employee.filter( data => {return data.department === this.state.area && data.designation === "Manager"})
            .map(data => {return <div>{data.employeeName}</div>})
        }
    }

    render() {
        return (
            <div className="adminBoard">
            <form onSubmit={(e) => {e.preventDefault(); this.setState({showForm : true})}}>
                <select name="area" onChange={this.handleChange}>
                    <option value=''>select area</option>
                    {this.renderAreaList()}
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            {this.state.showForm ? this.renderForm() : <div>hello</div>}
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        area: state.getArea,
        employee: state.fetchemployee.user
    }
}

export default connect(mapStateToProps, {getArea,fetchAllEmployee})(changeAreaManager)
