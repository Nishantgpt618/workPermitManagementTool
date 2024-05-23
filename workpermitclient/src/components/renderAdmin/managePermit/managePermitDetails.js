import React, { Component } from 'react';
import { fetchPermit } from '../../../redux/actions';
import { connect } from 'react-redux';
import NamesContainer from './NamesContainer';


class managePermiteDetails extends Component {

    componentDidMount() {
        this.props.fetchPermit();
    }



    state = {
        searchTerm: '',
        searchCategory: ''
    }

    dynamicSearchByInitiatorName = () => {
        var newArray = []
        if (this.props.permit) {
            this.props.permit.map(obj => newArray.push({name: obj.initiatorName,
                id: obj._id}));
        }
        return newArray.filter(nam => nam.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    dynamicSearchByArea = () => {
        var newArray1 = []
        if (this.props.permit) {
            this.props.permit.map(obj => newArray1.push({name: obj.area,
                id: obj._id}));
        }
        return newArray1.filter(name => name.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    dynamicSearchByDescription = () => {
        var newArray = []
        if (this.props.permit) {
            this.props.permit.map(obj => newArray.push({name: obj.workPermitDescription,
                id: obj._id}));
        }
        return newArray.filter(name => name.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    choice = () => {
        switch(this.state.searchCategory){
            case 'initiatorName':
                return this.dynamicSearchByInitiatorName()

            case 'area':
                return this.dynamicSearchByArea()

            case 'workPermitDescription':
                return this.dynamicSearchByDescription()

            default:
                return this.dynamicSearchByInitiatorName()
        }
    }


    editSeachTerm = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    editSeachCategory = (e) => {
        this.setState({ searchCategory: e.target.value })
    }



    render() {
        
        return (
            <div className="dress-list">
                <div>
                    <label>Select Category</label>
                    <select onChange={this.editSeachCategory} style={{ width: "185px" }} >
                        <option value="">Select</option>
                        <option value="initiatorName">Initiator name</option>
                        <option value="area">Area name</option>
                        <option value="workPermitDescription">Work permit description</option>
                    </select>
                </div>

                <div>

                    <input type='text' value={this.state.searchTerm} onChange={this.editSeachTerm} placeholder='type here' />
                    <br></br>
                    <p>there are the filtered results</p>
                    <NamesContainer history={this.props.history} style={{ margin: '20px' }} names={this.choice()} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { permit: state.viewPermit }
}

export default connect(mapStateToProps, { fetchPermit })(managePermiteDetails);