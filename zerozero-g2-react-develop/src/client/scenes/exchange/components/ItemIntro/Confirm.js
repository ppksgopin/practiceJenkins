import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';

import styled,{css} from 'styled-components';

import {awsUrl} from '../../../../utils/awsFile';

import ExchangeConfirmModal from './ExchangeConfirmModal';
import LeaveConfirmModal from '../../../common/components/LeaveConfirmModal';
import PageTitle from '../../../common/components/PageTitle';
import Zcoin from '../../../common/components/Zcoin';
import LabelTextInput from '../../../common/components/LabelTextInput';
import BlueButton from '../../../common/components/BlueButton';
import RedButton from '../../../common/components/RedButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import theme from '../../../../styles/theme';
import {bound, appointmentForm, sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import * as actions from './action';
import { getUserZcoins } from '../../../dashboard/action';
import swal from 'sweetalert';


const Buttons = styled.div `
  ${buttons}

`
const SectionTitle = styled.div `
  ${sectionTitle};
`
const AppointmentForm = styled.form `
  ${appointmentForm};
`

const ItemInfo = styled.div `
.item{
    width:100%;
    max-width:400px;
    padding:0 0 50px;
    margin:0 auto;
    @media (max-width: ${theme.medias.phablet}) {
        padding:0;
        margin-bottom:0px;
    }

    > div{
        ${box};

        &.thumb{
            padding:0;
            img{
                width:100%;
                height:auto;
            }
            margin-bottom:50px;
        }
        &.info{
            padding-bottom:20px;
            h3{
                font-size:24px;
                color:${theme.colors.gray};
                line-height:1.5;
                margin:0px auto 10px;
            }
            p{
                font-size:16px;
                color:#333;
                line-height:1.5;
                margin-bottom:30px;
            }

            .price{
                font-size:26px;
                font-weight:500;
                text-align:left;
                color:${theme.colors.red};
                line-height:1.5;
                margin-bottom:10px;
                vertical-align:middle;

                &::before{
                    content:"";
                    display:inline-block;
                    width:20px;
                    height:20px;
                    
                    background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
                    background-size:15px 15px;
                }
            }

            .expire{
                font-size:14px;
                color:${theme.colors.gray};
                text-align:center;
                line-height:40px;
                border-top:1px solid #ddd;
                border-bottom:1px solid #ddd;
                &::before{
                    content:"\f017";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
            }
        }
    }
}
`

const Balance = styled.div `
    
    .caculate{
        margin-top:30px;
         > p{
            text-align:center;
            font-size:14px;
            color:#333;
            line-height:1.5;
            span{
                color:${theme.colors.green};
            }
            margin-bottom:5px;
        }
    }

`

class Confirm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            exchangeModal: false,
            leaveModal: false,
            isFormCompleted: false
        };
        this._toggleModel = this._toggleModel.bind(this);
        this._openModal2 = this._openModal2.bind(this);
        this._back = this._back.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    componentDidMount() {
        const item = this.props.item.toJS();
        this.props.setField({itemId:item.itemId});

        const profile = this.props.profile.toJS();
        if(profile.realName) {
            this.props.setField({name: profile.realName});
        }
        if(profile.phoneNumber) {
            this.props.setField({mobile: profile.phoneNumber});
        }
        if(profile.email) {
            this.props.setField({email: profile.email});
        }

        this.props.getUserZcoins();

    }

    _toggleModel(e) {
        this.setState({
            exchangeModal:!this.state.exchangeModal,
        });
    }
    _openModal2(e) {
        this.setState({
            leaveModal:!this.state.leaveModal,
        });
    }
    _back(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    // submitForm(e) {
    //     e.preventDefault();
    //     new Promise((resolve, reject) => {
    //         resolve(this.props.exchange())
    //     }).then(
    //         () => {
    //             console.log('get in finish');
    //             this.props.history.push('/exchange/finish');
    //         }
    //         ).catch((e) => {
    //             console.log('Error occurred when exchange:',e);
    //             this.setState({exchangeModal: false});
    //         });
    //
    // }

    submitForm(e) {
        e.preventDefault();
        this.props.exchange();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const error = this.props.error ? this.props.error.toJS() : undefined;
        if((error && error.field) && prevState.exchangeModal && this.state.exchangeModal) {
            this.setState({exchangeModal: false});
        }

        const exchangeForm = this.props.exchangeForm.toJS();
        if(exchangeForm.status === 'DONE') {
            this.props.history.push('/exchange/finish');
        } else if(exchangeForm.status === 'FAILED' && !prevProps.exchangeForm.get('status')) {
            this.setState({exchangeModal: false}, () => {
                swal({
                    text: '兌換失敗，請連絡客服人員',
                    icon: 'warning'
                }).then(() => {

                });
            });
        }
    }

    render() {

        const item = this.props.item.toJS();

        const error = this.props.error ? this.props.error.toJS() : undefined;

        const exchangeForm = this.props.exchangeForm.toJS();

        const { coins } = this.props;

        return (
            <div>
                <Helmet>
                    <title>兌換中心-兌換確認</title>
                </Helmet>

                <PageTitle title="兌換中心"/>
                <SectionTitle className="green">兌換確認</SectionTitle>
                <AppointmentForm>
                    <div className="block">
                        <div className="block_title">您欲兌換的商品如下</div>

                        <ItemInfo>
                            <div className="item">
                                <div className="thumb">
                                    <img src={item.imageURL || "https://unsplash.it/400/400/?random&v=1"}/>
                                </div>
                                <div className="info">
                                    <h3>{item.name}</h3>
                                    <p>{item.subtitle}</p>
                                    <div className="price">
                                        {item.coins}
                                    </div>
                                    <div className="expire">
                                        使用期限 : {item.expireDate}
                                    </div>
                                </div>
                            </div>
                        </ItemInfo>
                        <div className="dashed-split"/>
                        <Balance>
                            <Zcoin balance={coins}/>
                            <div className="caculate">
                                <p>目前剩餘的Z幣點數為<span>{coins}</span>點</p>
                                <p>兌換後將剩<span>{coins - item.coins}</span>點</p>
                                <p><ErrorMsg msg={coins < item.coins ? 'Z幣不足' : ''}/></p>
                            </div>
                        </Balance>
                    </div>

                    <div className="block">
                        {/*<div className="block_title">聯絡人資訊</div>

                        <LabelTextInput
                            name="contactName"
                            label={error && error.field === 'contactName'? error.msg : '請輸入姓名'}
                            classname={error && error.field === 'contactName'? 'error' : '' }
                            onChange={(value) => this.props.setField({name: value})}
                            defaultvalue={exchangeForm.name}
                        />

                        <LabelTextInput
                            name="mobile"
                            label="請輸入手機號碼"
                            error={error && error.field === 'mobile' ? error.msg : ''}
                            classname={error && error.field === 'mobile'? 'error' : '' }
                            onChange={(value) => this.props.setField({mobile: value})}
                            defaultvalue={exchangeForm.mobile}
                        />

                        <LabelTextInput
                            name="email"
                            label="請輸入Email"
                            error={error && error.field === 'email' ? error.msg : ''}
                            classname={error && error.field === 'email'? 'error' : '' }
                            onChange={(value) => this.props.setField({email: value})}
                            defaultvalue={exchangeForm.email}
                        />

                        <div className="dashed-split"/>*/}

                        <div className="wording" style={{"textAlign":"left"}}>
                            <h3>注意事項：</h3>
                            <p>所有商品兌換成功，將不寄簡訊及mail，請至【我的兌換】，點選商品，按照流程完成兌換。</p>
                            <p>送出本頁後，兌換商品所需的Z幣點數將會扣除，恕不退還點數及取消兌換單。</p>
                            <p>兌換商品後建議盡快使用。若序號超過兌換期限，恕不補發或退還Z幣點數。 </p>
                            <br />
                            <input type="checkbox" onChange={() => this.setState({isFormCompleted:!this.state.isFormCompleted})} /> <span style={{"color":"#ff8188"}}>我已閱讀並同意上述注意事項說明。</span>
                        </div>

                    </div>

                    <br/><br/>
                    {/*<ErrorMsg msg={error.message || ''} classname=""/>*/}
                    <Buttons className="bob">
                        <RedButton type='button' onClick={() => this._openModal2()}>返回</RedButton>
                        <BlueButton type='button' disabled={(!this.state.isFormCompleted) || (coins < item.coins)} onClick={() => this._toggleModel()}>送出</BlueButton>
                    </Buttons>

                </AppointmentForm>
                {this.state.exchangeModal?
                <ExchangeConfirmModal trigFunc = {this.submitForm} openModal={this._toggleModel}/>
                :""}
                {this.state.leaveModal?
                <LeaveConfirmModal trigFunc = {this._back} openModal={this._openModal2}/>
                :""}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.exchange.item.get("ITEM"),
        coins: state.dashboard.get('TOTAL_COINS') || 0,
        error: state.exchange.item.get('ERROR'),
        profile: state.data.auth.get('PROFILE'),
        exchangeForm: state.exchange.item.get('FORM'),
    }
}

export default connect(mapStateToProps, {...actions, getUserZcoins})(Confirm);
