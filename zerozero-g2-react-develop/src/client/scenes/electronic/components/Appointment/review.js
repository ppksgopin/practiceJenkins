/**
 * Created by ryan on 2017/11/1.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from 'react-helmet';
import * as actions from '../../data/action' ;
import {　message　} from '../../../../data/common/action'


import Review from '../../../common/components/Review';


class ElecReview extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    componentDidMount() {
        // console.log("componentDidMount");
        const { appointmentId } = this.props.match.params;
         // console.log("appointment id :" ,appointmentId );
    }

    render() {
        // console.log('props :' , this.props) ;
        // console.log('params : ', this.props.match.params);
        const {saveEvaluaton, electronic, error } =this.props ;
        const { isSaveEvaluation } = electronic.toJS();
        const { appointmentId } = this.props.match.params;
        return (
            <Review
                saved={isSaveEvaluation}
                onSave={saveEvaluaton}
                appointmentId={appointmentId}
                error={error}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        electronic: state.electronic,
        error : state.data.common.get('MESSAGE')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,message
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ElecReview) ;
