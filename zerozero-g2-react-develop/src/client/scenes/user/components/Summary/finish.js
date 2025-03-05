/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";

import {profile} from '../../../../data/auth/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {sectionTitle} from '../../../../styles/commons';
import {clearfix} from '../../../../styles/mixins';

import PageTitle from '../../../common/components/PageTitle';
import FinishTemplate from '../../../common/components/Finish';



const SectionTitle = styled.div `
  ${sectionTitle};
`



class Finish extends Component {
    componentWillMount() {
        this.props.profile();
    }

    render() {

        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="我的預約"/>

                <SectionTitle className="green">兌換完成</SectionTitle>

                <FinishTemplate brief="恭喜已預約完成 :)" />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { userProfile: state.data.auth.get('PROFILE')}
}

export default connect(mapStateToProps, { profile })(Finish);
