import React, { Component } from 'react';
import Name from './Name';
import {fetchPermitToEdit} from '../../../redux/actions';
import { connect } from 'react-redux';

class NamesContainer extends Component {

   

    render() {
        return (
            <div>
                {this.props.names.map((name, i) => <div key={i} style={{padding: '20px'}}>
                    <button onClick={() => this.props.fetchPermitToEdit({_id: name.id},this.props.history)}>
                        <Name name={name.name} />
                    </button>
                    <br></br>
                </div>)
    }
            </div>
        )
    }
}



export default connect(null,{fetchPermitToEdit})(NamesContainer);