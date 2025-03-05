import React, { Component } from 'react';
import { connect } from "react-redux";
import Redirect from "react-router/Redirect";
import { DashboardRoute } from "../../../../commons/routePaths";
import Loading from "../../../common/components/Loading_Component/Loading";

import ProfileEditConfirmModal from "../Login/ProfileEditConfirmModal";


export default (ChildComponent) => {

    class CheckMobile extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShowModal: false
            }
        }
        render() {
            const { IS_VERIFIED, IS_MOBILE_VERIFIED, IS_MERGE, profile, isLoading } = this.props;
            const { profileCompletion, accessToken } = profile.toJS();
            //console.log('render time: ', new Date().getTime(), 'profile:', profile.toJS(), 'IS_VERIFIED: ', IS_VERIFIED);

            if (profileCompletion === false) {
                return (
                    <div className="bg">
                        <Loading isLoading={isLoading} message='載入中...' />
                        {profileCompletion === false ?
                            <ProfileEditConfirmModal />
                            : <Redirect to={DashboardRoute()} />}
                    </div>
                )
            } else if (profile.accessToken) {
                return <Redirect to={DashboardRoute()} />
            } else {
                return <ChildComponent {...this.props} />
            }
        }
    }

    function mapStateToProps(state) {
        return {
            IS_VERIFIED: state.user.register.get('IS_VERIFIED'),
            IS_MOBILE_VERIFIED: state.user.register.get('IS_VERIFIED'),
            IS_MERGE: state.user.register.get('IS_VERIFIED'),
            profile: state.data.auth.get('PROFILE'),
            isLoading: state.data.common.get('IS_LOADING'),
        }
    }
    return connect(mapStateToProps, null)(CheckMobile)
};