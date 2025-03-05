import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {Helmet} from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import {connect} from "react-redux";
import styled from 'styled-components';
import swal from 'sweetalert';
import {buttons, sectionTitle} from '../../../../styles/commons';
import {borderRadius, box, clearfix} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';

import {awsUrl} from '../../../../utils/awsFile';
import BlueButton from '../../../common/components/BlueButton';
import CoverImage from '../../../common/components/CoverImage';
import ErrorMsg from '../../../common/components/ErrorMsg';
import GreenButton from '../../../common/components/GreenButton';
import PageTitle from '../../../common/components/PageTitle';
import RedButton from '../../../common/components/RedButton';
import AffordableItemList from '../common/AffordableItemList';
import {addItem} from "../ExchangeList/action";
import {decItem, getItem, incItem, setItemFieldValue} from './action';
import {getUserTotalZcoins} from "../../../user/components/ZCoin/action";

const Buttons = styled.div`
    ${buttons};

    button:nth-child(2){
        display:none !important;
        @media (max-width: ${theme.medias.phablet}) {
            display:block !important;
        }
    }
`
const ButtonsInfo = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;

    > button {
        margin:0 2.5px;
        flex: 1 1 350px;
        @media (max-width: ${theme.medias.phablet}) {
            margin:0px;
        }
    } 

    @media (max-width: ${theme.medias.phablet}) {
        display:none;
    }
`

const PageTitleHideOnMobile = styled.div`
        @media (max-width: ${theme.medias.phablet}) {
            display:none;
        }
`

const SectionTitle = styled.div`
  ${sectionTitle};
`

const ItemInfoArea = styled.div`
  width:100%;
  max-width: ${theme.medias.maxW};
  margin:50px auto;
  position:relative;
  @media (max-width: ${theme.medias.phablet}) {
    margin-top:0;
  }
  
  
  
  .quantity{
    font-size:14px;
    line-height:40px;
    height:40px;
    border:1px solid #ccc;
    position:relative;
    padding-left:90px;
    text-align:center;
    color:${theme.colors.gray};
    ${borderRadius("4px")};
    ${box};
    margin:20px auto 60px;

    &::before{
        content:"數量";
        width:89px;
        position:absolute;
        left:0;
        top:0;
        border-right:1px solid #ccc;
    }
    span.amount{
        display:block;
        
    }
    span.error{
        color:${theme.colors.red};
        position:relative;     
        line-height:30px;  
        white-space:nowrap;
    }
    span.minus,span.add{
        position:absolute;
        top:0;
        right:0;
        width:40px;
        height:40px;
        cursor:pointer;
        z-index:2;
        &::before{
            content:"\f067";
            font-family:"FontAwesome";
        }
    }
    span.minus{
        right:auto;
        left:90px;
        &::before{
            content:"\f068";
        }
    }
    span.add2cart{
        display:none;
        position:absolute;
        width:90px;
        height:40px;
        top:0;
        right:-110px;
        button{
            line-height:40px !important;
            height:40px;
            background-image:url(${awsUrl("icon_cart.png")});
            background-position:center center;
            background-size:50px 50px;
            background-repeat:no-repeat;
            &:hover {
                  background-color: ${theme.colors.green};
              }
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        width:calc(100% - 110px);
        margin:20px 0 40px;
        padding-left:60px;
        &::before{
            width:59px;
        }
        span.minus{
            left:60px;
        }
        span.add2cart{
            display:block;
        }
    }

  }

  .item{
    width:100%;
    background:#fff;
    ${borderRadius("8px")};
    padding:50px 0;
    margin-bottom:20px;
    @media (max-width: ${theme.medias.phablet}) {
        padding:0;
        margin-bottom:0px;
    }

    > div{
        padding:0 50px;
        ${box};
        width:50%;
        float:left;

        &.thumb{
            margin-bottom:10px;
            height:0;
            position:relative;
            width:50%;
            padding-top:40%;
            > div{
                position:absolute;
                z-index:1;
                width:80%;
                height:100%;
                top:0;
                left:10%;
                overflow:hidden;
            }
        }
        &.info{
            padding-bottom:20px;
            border-left:1px solid #ddd;
            min-height:400px;
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
                margin-bottom:10px;
            }

            .instock{
                font-size:13px;
                color:${theme.colors.gray};
                text-align:center;
                line-height:26px;
                display:inline-block;
                border:1px solid ${theme.colors.gray};
                padding:0 10px;
                margin:0px auto 10px;
                ${borderRadius("13px")};

                span{
                    color:${theme.colors.red};
                }
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
                margin-bottom:20px;
                &::before{
                    content:"\f017";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
            }
        }

        @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            &.thumb{
                width:100%;
                padding:0;
                padding-top:100%;
                > div{
                    width:100%;
                    height:100%;
                    left:0;
                }
            }
            &.info{
                border:none;
                padding:20px;
                min-height:0;
            }
            
        }
    }

    &::after{
        ${clearfix};
    }
  }

  .instruction{
    background:#fff;
    ${borderRadius("8px")};
    padding:10px 50px 20px;
    ${box};
    margin-bottom:20px;

    .blockTitle{
        font-size:16px;
        text-indent:10px;
        color:${theme.colors.gray};
        line-height:50px;
        border-bottom:1px solid ${theme.colors.gray};
        margin-bottom:20px;
        @media (max-width: ${theme.medias.phablet}) {
            text-align:center;
        }
      }
    .blockContent{
        font-size:14px;
        color:#333;
        line-height:1.5;
        a{
            word-break: break-all;
        }
        @media (max-width: ${theme.medias.phablet}) {
            padding:15px;
        }
    }
    @media (max-width: ${theme.medias.phablet}) {
        padding:10px 20px 20px;
        margin-bottom:0;
        ${borderRadius("0")};

        >div{
            border:1px solid ${theme.colors.gray};
            ${borderRadius("8px")};
        }
    }
  }
`

class ItemIntro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };

        this.exchange = this.exchange.bind(this);
        this.checkIfLogin = this.checkIfLogin.bind(this);
        this.checkBalance = this.checkBalance.bind(this);
        this.renderExchangeButton = this.renderExchangeButton.bind(this);
        this.incItemValue = this.incItemValue.bind(this);
    }

    componentDidMount() {
        const itemId = this.props.match.params['itemId'];
        this.props.getItem(itemId);
        if(this.props.logIn){
            this.props.getUserTotalZcoins()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.getItem(nextProps.match.params['itemId']);
        }

        if (nextProps.item && nextProps.item.get('enabled') && nextProps.item.get('enabled') === false) {
            const item = nextProps.item.toJS();
            swal({
                text: '商品:' + item.name + "已下架",
                icon: 'warning'
            })
                .then(() => {
                    this.props.history.goBack();
                });
        }
    }

    /**
     * @deprecated
     **/
    exchange() {
        const {history, location} = this.props;

        const checkIfLogin = this.checkIfLogin;
        //const checkBalance = this.checkBalance;

        new Promise((resolve) => {
            resolve(checkIfLogin());
        }).then((logon) => {
            if (logon) {
                // new Promise((resolve, reject) => {
                //     resolve(checkBalance());
                // })
                //     .then((v) => {
                //         if(v) {
                //             history.push('/exchange/confirm');
                //         } else {
                //             this.setState({error: 'Z幣不足'});
                //         }
                //     });
                history.push('/exchange/confirm');
            } else {
                localStorage.setItem('forcePath', location.pathname);
                history.push('/user/login');
            }
        });
    }

    /**
     * @deprecated
     * */
    checkBalance() {
        const {getUserZcoins} = this.props;
        const item = this.props.item.toJS();
        return new Promise((resolve, reject) => {
            resolve(getUserZcoins());
        }).then((data) => {
            const result = data.total >= item.coins;
            return result;
        });
    }

    checkIfLogin() {
        const {logIn, profile} = this.props;
        return logIn
    }

    renderExchangeButton() {
        const item = this.props.item.toJS();

        let disabled = false;
        let text = '立即兌換';
        if ((!item) || item.quantity < 1) {
            disabled = true;
            text = '庫存不足';
        }
        //console.log('login status: ', this.checkIfLogin())
        if(this.checkIfLogin() && !this.fulfillCoins()){
            disabled = true;
            text = '餘額不足';
        }
        if(item.exchangeLimit && item.exchangeLimitMax === 0) {
            disabled = true;
            text = '已超過可兌換次數';
        }

        if (disabled) {
            return (
                <BlueButton disabled={disabled}>
                    {text}
                </BlueButton>
            )
        } else {
            return (
                <ButtonsInfo>
                    <GreenButton disabled={disabled} onClick={() => this.addExchangeList('add')}>
                        加入兌換清單
                    </GreenButton>
                    <BlueButton disabled={disabled} onClick={() => this.addExchangeList('imm')}>
                        {text}
                    </BlueButton>
                </ButtonsInfo>
            )
        }
    }

    incItemValue() {
        const item = this.props.item.toJS();
        if (item.exchangeLimit) {
            if (item.exchangeLimitMax < (item.itemVal + 1)) {
                this.setState(preState => {
                        return {...preState, error: `最多兌換${item.exchangeLimitMax}組`}
                    }, this.props.setItemFieldValue({key: 'itemVal', value: item.exchangeLimitMax})
                )
            } else {
                this.checkQuantity(item)
            }
        } else {
            this.checkQuantity(item);
        }
    }

    checkQuantity(item) {
        if (item.quantity < (item.itemVal + 1)) {
            this.setState(preState => {
                    return {...preState, error: `很抱歉，該商品剩餘${item.quantity}組`}
                }
                , this.props.setItemFieldValue({key: 'itemVal', value: item.quantity})
            )
        } else {
            this.setState(preState => {
                return {...preState, error: ''}
            }, this.props.incItem())
        }
    }

    decItemValue() {
        this.setState(preState => {
            return {
                ...preState,
                error:''
            }
        }, () => {
            this.props.decItem();
        });
    }

    /**
     * @param exchangeType
     * imm: 立即兌換，加入兌換清單，並跳轉至清單頁
     * add: 加入兌換清單
     **/
    addExchangeList(exchangeType) {
        this.addItemToExchangeList(exchangeType)
        /*if (this.fulfillCoins()) {
            let addSuccess = false;
            if (exchangeType === 'imm') {
                this.setState(preState => {
                        return {...preState, error: ''}
                    }
                    , () => {
                        this.addItemToExchangeList().then(r => {
                            this.props.history.push('/exchange/list')
                        });
                    });
            } else {
                this.addItemToExchangeList();
            }
        }*/
    }

    fulfillCoins() {
        //return true
        const { total } = this.props.totalRecord.toJS();
        //console.log('total: ', total)
        const item = this.props.item.toJS();
        const subTotal = (item.itemVal * item.coins);
        let isFulfill = false;
        if(subTotal > total) {
            isFulfill = false
        }else {
            isFulfill = true
        }

        return isFulfill;

    }

    //20210627 修改登入、未登入加入商品邏輯
    addItemToExchangeList(exchangeType) {
        //加入兌換清單, 更新localstorage, 及list total number
        const item = this.props.item.toJS();
        return new Promise((resolve, reject) => {
            resolve(this.props.addItem(item))
        }).then(res => {
            if(res === 'redirect'){
                if(exchangeType === 'add') {
                    localStorage.setItem('forcePath', location.pathname);
                }
                this.props.history.push('/exchange/list')
            }else{
                if(exchangeType === 'add'){
                    toast(`『${item.name}』商品已加入兌換清單`)
                }else{
                    this.props.history.push('/exchange/list')
                }
            }

        })
    }

    render() {

        const item = this.props.item.toJS();

        const {totalRecord} = this.props;

        if (!item.enabled) {
            return null;
        } else {
            return (
                <div>
                    <Helmet>
                        <title>兌換商品介紹</title>
                    </Helmet>

                    <PageTitleHideOnMobile>
                        <PageTitle title="商品介紹"/>
                    </PageTitleHideOnMobile>

                    <ItemInfoArea>
                        <div className="item">
                            <div className="thumb">
                                <div>
                                    <CoverImage src={item.imageURL || "https://unsplash.it/400/400/?random&v=1"}/>
                                </div>
                            </div>
                            <div className="info">
                                <div className="instock">
                                    剩下<span>{item.quantity || 0}</span>組
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.subtitle}</p>
                                <div className="price">
                                    {item.coins}
                                </div>
                                <div className="expire">
                                    使用期限 : {item.quantity <= 0 ? '無' : item.expireDate}
                                </div>

                                {
                                    item.quantity > 0 ?
                                    <div className="quantity">
                                        <span className="minus" onClick={() => this.decItemValue(item.itemId)}/>
                                        <span className="amount">{item.itemVal}</span>
                                        <span className="add" onClick={() => this.incItemValue(item.itemId)}/>
                                        <span className="add2cart"><GreenButton onClick={() => this.addExchangeList('add')}/></span>
                                        {this.state.error ? <span className="error">{this.state.error}</span> : ""}

                                    </div>
                                    : ""
                                }

                                { this.renderExchangeButton() }
                            </div>

                        </div>
                        { item.itemMode === 2 ?
                            <div className="instruction">
                                <div>
                                    <div className="blockTitle">活動說明</div>
                                    <div className="blockContent">
                                        {ReactHtmlParser(item.eventInfo)}
                                    </div>
                                </div>
                            </div>
                            : undefined}

                        <div className="instruction">
                            <div>
                                <div className="blockTitle">商品券使用說明</div>
                                <div className="blockContent">
                                    {ReactHtmlParser(item.description)}
                                </div>
                            </div>
                        </div>

                        <br/><br/>

                        <Buttons>
                            <RedButton onClick={e => this.props.history.goBack()}>返回兌換中心</RedButton>
                        </Buttons>

                        <ErrorMsg msg={this.state.error}/>

                        <ToastContainer
                            position="top-center"
                            type="default"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover
                        />

                    </ItemInfoArea>
                    <AffordableItemList/>

                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        totalRecord: state.user.zCoin.get('TotalRecord'),
        item: state.exchange.item.get("ITEM"),
        logIn: state.data.auth.get('IS_LOGINED') || false
    }
}

export default connect(mapStateToProps, {
    getItem,
    incItem,
    decItem,
    setItemFieldValue,
    addItem,
    getUserTotalZcoins
})(ItemIntro);
