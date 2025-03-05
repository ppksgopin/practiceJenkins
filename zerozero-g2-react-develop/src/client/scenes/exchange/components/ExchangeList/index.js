import React, {Component} from 'react';
import {fromJS} from "immutable";
import {reduce, isEmpty, filter, find, get} from 'lodash';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {Field, formValueSelector, reduxForm, SubmissionError, getFormSubmitErrors} from "redux-form/immutable";

import styled from 'styled-components';
import {profile} from "../../../../data/auth/action";
import {getAreaInfo} from "../../../../data/common/action";
import {bound} from '../../../../styles/commons';
import {borderRadius, box} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import BlueButton from '../../../common/components/BlueButton';
import ErrorMsg from '../../../common/components/ErrorMsg';

import PageTitle from '../../../common/components/PageTitle';
import RedButton from '../../../common/components/RedButton';
import {getUserTotalZcoins} from "../../../user/components/ZCoin/action";

import { getUserExchangeList, exchangeOrder, checkExchangeListStatus} from "./action";
import ConfirmModal from './ConfirmModal';
import ErrorModal from './ErrorModal';
import OutStockModal from './OutStockModal';
import Record from './Record';



const Buttons = styled.div`

  clear:both;
  text-align:center;
  direction: rtl;
  button{
    display:inline-block !important;
    margin:0 15px;
  }
  @media (max-width: ${theme.medias.phablet}) {
    width:95%;
    margin:0 auto;
    
    button{
      display:block !important;
      margin:0 auto 20px;
    }
  }
}
`
const PNR = styled.div`
  
  ${bound};
  width: 95%;
  margin-bottom:20px;
  .statement{

    padding:10px 40px;
  	background:${theme.colors.green};
  	${borderRadius('8px')};
  	${box};
  	
    
    

    font-size:14px;
    line-height:20px;
    color:#fff;
    margin-bottom:8px;
  }
  > div{
    text-align:left;
  }
`
const Container = styled.div`
  margin-bottom:70px;
`
const ZcoinBoard = styled.div`

  padding-bottom:30px;
  
  .current{
    display:inline-block;
    text-align:left;
    >div {
      font-size: 16px;
      color: ${theme.colors.gray};
      line-height: 1.4;
      margin-bottom:10px;

      span{
	      color: ${theme.colors.red};
	      &::before{
	        content:"";
	        width:16px;
	        height:16px;
	        margin-right:5px;
	        display:inline-block;
	        vertical-align:middle;
	        background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
	        background-size:16px 16px;
	      }
      }
  	}
  }

  
  
  .info{
    display:flex;
    justify-content: center;
    align-items:center;
  }


  @media (max-width: ${theme.medias.phablet}) {
    width:90%;
    margin:0 auto;

  }
`

const RecordContainer = styled.div`
  width: 100%;

  ${box};
  ${bound};

  >ul{

  }

  
  
  @media (max-width: ${theme.medias.phablet}) {
    padding:0;
    
  }

`

const Note = styled.div`
  width: 100%;
  padding:20px 40px;
	background:#fff;
	border:1px solid #ddd;
	${borderRadius('8px')};
	${box};
	overflow:hidden;
	

  ${box};
  ${bound};
  margin-bottom:20px;

  h3{
  	position:relative;
    font-size:24px;
    line-height:1.5x;
    color:${theme.colors.gray};
    margin-bottom:20px;
  }

  ul{
  	list-style-type:disc;
  	padding-left:1em;
  	${box};
	li{
		font-size:14px;
		color:#999;
		line-height:1.3;
		margin-bottom:8px;
	}
  }

`

class ExchangeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorModal: false,
            outStockModal: false,
            confirmModal: false,
            statusData: [],
            apiError: undefined,
            resultData: {
                outStock: [],
                offMarket:[]
            }
        }
        this._toggleErrorModal = this._toggleErrorModal.bind(this);
        this._toggleOutStockModal = this._toggleOutStockModal.bind(this);
        this._toggleConfirmModal = this._toggleConfirmModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkExchangeListStatus = this.checkExchangeListStatus.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addressCounty !== -1 && this.props.areas.size === 0) {
            this.props.getAreaInfo(nextProps.addressCounty);
        }
    }

    componentDidMount() {
        // console.log('did mount')
        //this.props.getUserExchangeList();
        this.props.getUserTotalZcoins();
        new Promise( async (resolve, reject) => {
            await resolve(this.props.profile())
        }).then((res) => {
            this.checkExchangeListStatus();
        })
        //this.props.profile();
    }

    checkExchangeListStatus() {
        const cb = (res, activeModal) => {
            this.setState(preState =>  {
                return {
                    ...preState,
                    outStockModal: activeModal,
                    resultData: res,
                }
            })
        }
        this.props.checkExchangeListStatus(cb);
    }

    _toggleErrorModal(e) {
        this.setState({
            errorModal: !this.state.errorModal,
        });
    }

    _toggleOutStockModal(e) {
        this.setState({
            outStockModal: !this.state.outStockModal,
        });
    }

    _toggleConfirmModal(cb) {
        //console.log('typeof: ', typeof cb );
        const { values } = this.props ;
        this.setState({
            confirmModal: !this.state.confirmModal,
        }, () => {
            if(cb && cb==='submit') {
                return this.exchangeOrder();
            }
        });
    }

    onSubmit(values) {

        const { exchangeList, history } = this.props ;
        let reqData = values.toJS();
        let err = {}
        if(!isEmpty(filter(exchangeList.toJS(), (item) => item.itemType === 2 && item.isSelected))) {

            if(reqData.receiverName === '') {
                err = { ...err, _error: 'receiverName error' , receiverName: '收件姓名未輸入'}
            }else if(!reqData.receiverName.match(/^[\u4E00-\u9FFF]{2,5}$/)){
                err = { ...err, _error: 'receiverName error' , receiverName: '請輸入2-5個中文字'}
            }

            if(reqData.receiverPhone === '') {
                err = { ...err, _error: 'receiverPhone error', receiverPhone: '聯絡電話未輸入'}
            }else if(!reqData.receiverPhone.match(/^[0-9]{8,10}$/)){
                err = { ...err, _error: 'receiverPhone error', receiverPhone: '請輸入8-10碼連續數字'}
            }

            if(reqData.receiverCounty === '-1') {
                err = { ...err, _error: 'receiverCounty error', receiverCounty: '請選擇縣市'}
            }

            if(reqData.receiverTownship === '-1'){
                err = { ...err, _error: 'receiverTownship error', receiverTownship: '請選擇區域'}
            }

            if(reqData.receiverAddress === '') {
                err = { ...err, _error: 'receiverAddress error', receiverAddress: '收件地址未輸入'}
            }
        }

        if(!reqData.agree){
            err = { ...err, _error: 'agree', agree: '須勾選「閱讀並同意」方可繼續'}
        }

        if(!isEmpty(err)) {
            throw new SubmissionError(err)
        }

       // console.log('values: ', JSON.stringify(reqData, null, 2));

        new Promise((resolve, reject) => {
            const cb = (res, activeModal) => {
                //console.log('res: ', res, 'activeModal: ', activeModal)
                this.setState(preState =>  {
                    return {
                        ...preState,
                        outStockModal: activeModal,
                        resultData: res,
                    }
                })
            }

            resolve(this.props.checkExchangeListStatus(cb, true))
        }).then((res) => {
            const {outStock, offMarket} = res
            //const item = find(res, (i) => i.onMarket === false)
            //console.log('item: ', item)
            if( isEmpty(outStock) && isEmpty(offMarket)) {
                this._toggleConfirmModal();
            }
        })

        //return this.props.exchangeOrder(reqData, () => { history.push('/exchange/finish')}) ;
    }

    exchangeOrder() {
        //console.log('exchange order:');
        const cb = (error) => {
            this.setState(preState => {
                return {
                    ...preState,
                    errorModal: true,
                    apiError: error
                }
            })
        }
        this.props.exchangeOrder(() => { this.props.history.push('/exchange/finish')}, cb);
    }

    render() {
        const {handleSubmit, initialValues, submitting, submitSucceeded, error, exchangeList, totalRecord, history, touched, submitErrors, errors } = this.props;
        //const { submitErrors } = this.props.ExchangeListForm.toJS()
        const {total} = totalRecord.toJS();
        const totalCoins = reduce(exchangeList.toJS(), (sum, item) => {
            const subTotal = item.isSelected ? item.coins * item.itemVal : 0 ;
            return sum + subTotal;
        },0);
        const disabled = totalCoins > total;
        const noSelected = find(exchangeList.toJS(), (item) => item.isSelected)
        const limit = find(exchangeList.toJS(), (item) => item.isSelected && item.exchangeLimit && item.exchangeLimitMax < item.itemVal)


        //console.log('state result data: ', this.state.resultData);
        return (
            <Container>
                <Helmet>
                    <title>兌換清單</title>
                </Helmet>

                <PageTitle title='兌換清單'/>
                <ZcoinBoard>
                    <div className="info">
                        <div className="current">
                            <div>您目前的Z幣：<span>{ total }{disabled ? "(餘額不足)" : ""}</span></div>
                            <div>本次兌換Z幣：<span>{ totalCoins }</span></div>
                        </div>
                    </div>
                </ZcoinBoard>
                <form id="exchangeForm" onSubmit={handleSubmit(this.onSubmit)}>
                <RecordContainer>
                    <Record items={exchangeList.toJS()} error={error} touched={touched} submitErrors={submitErrors} errors={errors}/>
                </RecordContainer>

                <Note>
                    <h3>注意事項</h3>
                    <ul>
                        <li>所有商品兌換成功，將不寄簡訊及mail，請至【我的兌換】，點選商品，按照流程完成兌換。</li>
                        <li>送出本頁後，兌換商品所需的Z幣點數將會扣除，恕不退還點數及取消兌換單。</li>
                        <li>兌換商品後建議盡快使用。若序號超過兌換期限，恕不補發或退還Z幣點數。</li>
                    </ul>
                </Note>

                <PNR>
                    <div className="statement">
                        <Field name="agree" type="checkbox" component="input"/> 我已閱讀並同意上述注意事項說明。
                    </div>

                    { <ErrorMsg msg={get(submitErrors.toJS(), 'agree')} classname=""/> }
                    { this.state.apiError && <ErrorMsg msg={this.state.apiError.message} classname=""/>}

                    {/*<ErrorMsg msg="須勾選「閱讀並同意」方可繼續" classname=""/>*/}
                </PNR>

                <Buttons>
                    {disabled ? <BlueButton disabled={disabled}>餘額不足</BlueButton>
                        : totalCoins >= 0 && noSelected ? limit ? "" : <BlueButton id="exBtn" type="submit" disabled={submitting}>確認</BlueButton>: ""}
                    <RedButton type="button" onClick={() => history.push('/exchange')}>返回</RedButton>
                </Buttons>

                </form>

                {this.state.outStockModal ?
                    <OutStockModal toggle={this._toggleOutStockModal} data={this.state.resultData}/>
                    : ""}

                {this.state.confirmModal ?
                    <ConfirmModal toggle={this._toggleConfirmModal} total={total} totalCoins={totalCoins} />
                    : ""}

                {this.state.errorModal ?
                    <ErrorModal toggle={this._toggleErrorModal} error={this.state.apiError}/>
                    : ""}

                {/*
                {this.state.outStockModal ?
                    <OutStockModal toggle={this._toggleOutStockModal}/>
                    : ""}
                {this.state.confirmModal ?
                    <ConfirmModal toggle={this._toggleConfirmModal}/>
                    : ""}*/}
            </Container>
        )
    }
}


ExchangeList = reduxForm({
    form: 'ExchangeListForm',
    enableReinitialize: true
})(ExchangeList)

function mapStateToProps(state) {

    const phoneNumber = state.data.auth.getIn(['PROFILE', 'mobile']);
    const userName = state.data.auth.getIn(['PROFILE', 'userName']);
    const addressCounty = state.data.auth.getIn(['PROFILE','addressCounty'])
    const addressTownship = state.data.auth.getIn(['PROFILE','addressTownship'])
    const address = state.data.auth.getIn(['PROFILE','address'])

    //console.log('addressCounty: ', addressCounty)
    return {
        initialValues: fromJS({
            receiverName: userName,
            receiverPhone: phoneNumber,
            receiverCounty: addressCounty || '-1',
            receiverTownship: addressTownship || '-1',
            receiverAddress: address || '',
            updateToUserProfile: true,
            agree: false
        }),
        exchangeList: state.exchange.exchangeList.get('ExchangeList'),
        totalRecord: state.user.zCoin.get('TotalRecord'),
        areas: state.data.common.get('AREA'),
        addressCounty: addressCounty || -1 ,
        submitErrors: getFormSubmitErrors('ExchangeListForm')(state)
    }
}

export default connect(mapStateToProps, {
    checkExchangeListStatus,
    getUserExchangeList,
    exchangeOrder,
    getUserTotalZcoins,
    profile,
    getAreaInfo,
})(ExchangeList);
