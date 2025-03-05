import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }

    render() {
        return (
            <div className="bg">
              Appointment
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment) ;
