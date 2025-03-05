import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { resetSweetAlert, confirmClicked, cancelClicked } from '../../../data/common/action';


class Alert extends Component {

    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.alert = this.alert.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const sweetAlert = nextProps.sweetAlert.toJS();
        if(sweetAlert && sweetAlert.type && sweetAlert.type === 'alert') {
            this.alert({text:sweetAlert.message, icon: sweetAlert.icon});
        } else if(sweetAlert && sweetAlert.type && sweetAlert.type === 'confirm') {
            this.confirm({text: sweetAlert.message, confirmTitle: sweetAlert.confirmTitle, cancelTitle: sweetAlert.cancelTitle});
        }
    }

    confirm({text = '', confirmTitle = '確定', cancelTitle = '取消'}) {
        swal({
            text,
            buttons:{
                confirm: {
                    text: confirmTitle,
                    value: 'confirm',
                },
                cancel: {
                    text: cancelTitle,
                    value: 'cancel',
                    visible: true
                }
            }
        })
            .then(value => {
                switch(value) {
                    case 'cancel':
                        this.props.cancelClicked();
                        break;
                    case 'confirm':
                        this.props.confirmClicked();
                        break;
                }
            })
    }

    alert({text='', icon='success'}) {
        swal({
            text: text,
            icon: icon,
            className: icon
        })
            .then(() => {
                this.props.resetSweetAlert();
            });
    }

    render() {
        return <div></div>;
    }
}

function mapStateToProps(state) {
    return {
        sweetAlert: state.data.common.get('SWEET_ALERT')
    }
}

export default connect(mapStateToProps, {resetSweetAlert, confirmClicked, cancelClicked})(Alert);
