import React, {Component} from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import {boxShadow, translate,transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

const Container = styled.div `
 padding: 80px 0 0;
  min-height: 95vh;
  ${box};
  @media (max-width: ${theme.medias.phablet}) {
      padding: 50px 0 0;
  }
`
const Head = styled.div `
  background:${theme.colors.green};
  text-align:center;
  padding:80px 0;
  h1{
  	font-size:36px;
  	color:#fff;
  	font-weight:500;
  	line-height:1.5;
  	margin-bottom:20px;
  }
  h3{
  	font-size:24px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  }
  @media (max-width: ${theme.medias.phablet}) {
  	padding:50px 0;
    h1{font-size:24px;}
    h3{font-size:18px;}
  }
`
const Note = styled.div `
  background:${theme.colors.red};
  text-align:center;
  padding:50px 20px;
  h3{
  	font-size:18px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  	margin-bottom:10px;
  }
  p{
  	font-size:18px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  }
`

const SectionHead = styled.div `
	padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:1px solid #ddd;
  text-align:center;

  img{
  	max-width:60%;
  	height:auto;
  }
  h1{
  	font-size:36px;
  	line-height:1.5;
  	color:#333;
  	font-weight:400;
  }
  p{
  	font-size:18px;
  	color:#333;
  	font-weight:300;
  	line-height:1.5;
  }
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  }
`

const Section = styled.div `
  padding:50px 0 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:0px solid #ddd;
  &.last{
  	border:none;
  	padding-bottom:100px;
  }
  h2{
  	font-size:18px;
  	color:${theme.colors.blue};
  	font-weight:400;
  	line-height:1.5;
  	margin-bottom:40px;

  	@media (max-width: ${theme.medias.phablet}) {
  		text-align:center;
  		&::before{
  			display:block;
  		}
  	}
  }
  h3{
  	font-size:18px;
  	color:${theme.colors.green};
  	font-weight:400;
  	line-height:1.5;
  	margin-bottom:20px;
  }
  p{
  	font-size:14px;
  	color:#333;
  	font-weight:300;
  	line-height:1.5;
    overflow:auto;
  }


  .item{
    width:100%;
    margin:0 auto 0px;
  	${box};
  	position:relative;

  	&.noicon{
  		padding-left:0;
  	}

  	.icon{
  		width:160px;
  		float:left;
  		margin-top:-30px;

  		img{
  			max-width:95%;
  			height:auto;
  		}
  	}

  	> ul{
      list-style: decimal outside none;
      overflow:auto;

      &.disc{
      	list-style: disc outside none;
      }

      li{
        font-size:14px;
          color:#333;
          font-weight:300;
          line-height:1.5;
          margin-left:20px;
          > ul{
      		list-style: decimal outside none;
      		overflow:auto;
  			}
      }
    }
    
    > ol{
      list-style: decimal outside none;
      overflow:auto;

      &.order {
      	list-style: decimal outside none;
      }

      li{
        font-size:14px;
          color:#333;
          font-weight:300;
          line-height:1.5;
          margin-left:20px;
          > ul{
      		list-style: decimal outside none;
      		overflow:auto;

		&.default-ul{
			list-style: disc
		  }
	}
      }
    }

  	&::after{
  		${clearfix};
  	}
  }
  ul.default-ul{
	list-style: disc
  }
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  	.item{
  		padding-left:75px;
      width:100%;

  		.icon{
  			position:absolute;
  			top:0;
  			left:0;
  			margin-top:0px;
  			width:60px;
  		}
  	}
  }
`


class Privacy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
                		<h1>隱私權與個人資料保護政策</h1>
                	</Head>
					<Section>
						<div className="item noicon">
							<p>
								zero  zero平台(以下簡稱本平台，含旗下各平台)在現在已（或將來可能）依法得經營之營業項目範圍內，於所涉業務執行之必要範圍內(仍須符合本平台與您間往來之業務類別)，而有必要直接或間接蒐集、處理、利用及/或國際傳輸您個人資料，依據個人資料保護法（以下簡稱個資法）第八條第一項規定，向您告知下列事項，請您詳閱：
							</p>
						</div>
					</Section>
            		<Section>
            			<h2>第一條 蒐集之特定業務目的</h2>
            			<div className="item noicon">
							<ol className="order">
								<li>資源回收服務業務：148網路購物及其他電子商務服務、182其他諮詢與顧問服務。</li>
								<li>紅利商品兌換業務：090消費者、客戶管理與服務、111票券業務。</li>
								<li>觀光工廠業務：115博物館、美術館、紀念館或其他公、私營造物業務、170觀光行政、觀光旅館業、旅館業、旅行業、觀光遊樂業及民宿經營管理業務。</li>
							</ol>
            			</div>
            		</Section>
            		<Section>
            			<h2>第二條 個人資料的類別</h2>
            			<div className="item noicon">
							<ol className="order">
								<li>
									個人資料之類別：<br/>
									個人識別資訊及社會概況(例如姓名、國籍、出生年月日、身分證字號、稅務居住者身分、出生國家及城市、通訊方式、影像、人像、語音、職業、休閒活動及興趣、旅行及其他遷徙細節、婚姻狀況、家庭成員等)、行動及網路媒體資訊(例如Facebook、LINE、Instagram、YouTube等平台資訊，包括用戶名稱、帳號、封面相片及大頭貼照、朋友名單、興趣、討論群組、按讚及留言分享紀錄、行動裝置識別碼、網際網路協定(IP)位址、網際網路瀏覽軌跡、Cookie、行動裝置所在地等)。
								</li>
								<li>
									個人資料來源：<br/>
									(1)本平台向客戶直接蒐集、(2)客戶自行公開或其他已合法公開。本平台向第三人蒐集資料時，可能將您的電子郵件地址(Email)、電話號碼、行動裝置識別碼、網際網路通訊協定(IP)位址、Cookie ID…等資料提供予第三人，做為資料串接識別之工具。
								</li>
							</ol>
            			</div>
            		</Section>
            		<Section>
            			<h2>第三條 個人資料利用之期間、地區、對象及方式</h2>
            			<div className="item noicon">
							<ol className="order">
								<li>期間：特定目的存續期間、依相關法令所定（例如商業會計法等)或因執行業務所必須之保存期間或依個別契約就資料之保存所定之保存年限。（以期限最長者為準）。</li>
								<li>地區：「個人資料利用之對象」其國內及國外所在地。</li>
								<li>對象：本平台之關係企業(大豐環保科技股份有限公司等)作為內部經營、管理、統計、行銷及主管機關依照法定程序要求提供、為公共安全之目的之情形。</li>
								<li>方式：符合個人資料保護相關法令以自動化機器或其他非自動化之利用方式。</li>
							</ol>
            			</div>
            		</Section>
            		<Section>
            			<h2>第四條 依據個資法第三條規定，個人資料得行使下列權利</h2>
            			<div className="item noicon">
            				<ol>
						<li>除有個資法第十條所規定之例外情形外，得向本平台查詢、請求閱覽或請求製給複製本，惟本平台依個資法第十四條規定得酌收必要成本費用。</li>
						<li>得向本平台請求補充或更正，惟依個資法施行細則第十九條規定，您應適當釋明其原因及事實。</li>
						<li>本平台如有違反個資法規定蒐集、處理或利用您之個人資料，依個資法第十一條第四項規定，您得向本平台請求停止蒐集。</li>
						<li>依個資法第十一條第二項規定，個人資料正確性有爭議者，得向本平台請求停止處理或利用您之個人資料。惟依該項但書規定，本平台因執行業務所必須並註明其爭議或經您書面同意者，不在此限。</li>
						<li>依個資法第十一條第三項規定，個人資料蒐集之特定目的消失或期限屆滿時，得向本平台請求刪除、停止處理或利用您之個人資料。惟依該項但書規定，本平台因執行業務所必須或經您書面同意者，不在此限。</li>
						<li>
							<span>您於本平台申請之會員帳號得自行註銷，並請依據本平台會員條款及其他適用之條款所規定的方式完成，刪除會員帳號之路徑及方式如下：</span>
							<ul className='default-ul'>
								<li>官方網頁：會員中心→編輯個人資料→刪除帳號。</li>
								<li>官方APP：底部選單→個人資料→刪除帳號。</li>
							</ul>
							<span>聲明：本公司將在驗證您的身份並與您確認會員帳號之權益後，為您註銷會員帳號。註銷會員帳號後，您將無法恢復此會員帳號、登入或查看先前的歷史紀錄，帳號內之Z幣、優惠券、兌換紀錄等資料均會一併刪除。在註銷會員帳號後，除根據相關法律規定需留存個人資料外，本公司將刪除您的個人資料或對其作去識別化處理。</span>
							<br />
							<span>請特別留意：註銷會員帳號之行為是不可逆的，一經註銷，本平台將不再蒐集您的個人資料，亦不再為您提供任何會員相關之服務，無論您往後是否會以相同之註冊資訊重新註冊會員帳號，亦同。同時，您原提供給本公司之個人資料亦無法再提供複製本給您，因此建議您註銷帳號前，請慎重考慮，以免權益受損。</span>
						</li>

						<li>您如欲行使上述個資法第三條規定之各項權利，有關如何行使之方式，得向本平台客服詢問。</li>
					</ol>
            			</div>
            		</Section>
            		<Section>
            			<h2>第五條 隱私權與個人資料保護政策之修訂</h2>
            			<div className="item noicon">
            				<p>您得自由選擇是否提供相關個人資料及類別，惟您所拒絕提供之個人資料及類別，如果是辦理業務審核或作業所需之資料，本平台可能無法進行必要之業務審核或作業而無法提供 您相關服務或無法提供較佳之服務因應法令規定、社會變遷及科技進步之變更，本平台將不定時修訂本聲明，恕不個別通知。請您隨時參閱本平台之隱私權保護聲明，以保障您的權益。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>免責聲明</h2>
            			<div className="item noicon">
            				<p>當您使用本平台時，即表示您同意遵守平台服務使用規範及隱私權與個人資料保護政策條款。在您使用本平台前，請認真閱讀使用條款及以下免責聲明。如不接受本聲明，請立即停止使用本平台，否則將視為全部接受本聲明。</p>
							<br/>
							<ul className="disc">
								<li>使用本平台若造成您或您與第三人產生糾紛或產生一切損失時時，本平台不負任何責任。</li>
								<li>本平台係以為環保目的而創設，惟相關環保法令、法律訊息仍需由您自行斟酌、參考，如您獲取錯誤訊息，而遭主管機關進行處罰時，本平台不負任何責任。</li>
								<li>本平台因技術故障導致之連線異常等不可抗力原因，造成您或第三人受到損害時，本平台不負任何責任。</li>
								<li>本平台擁有最終之解釋權及處分權。</li>
							</ul>
            			</div>
            		</Section>
					<Section className="last">
						<h2>本平台部分資料出處</h2>
						<div className="item noicon">
							<ul className="disc">
								<li>行政院環保署-環境資源資料開放平台-資源回收業(站、點)資料(2016年)</li>
								<li>經濟部工業局-政府資訊公開平台-登記工廠名錄(2017年)</li>
								<li>經濟部商業司-工商登記資料開放平台-統編查分公司資料</li>
							</ul>
						</div>
					</Section>
                </Container>
                <Footer/>
            </div>
		);
    }
}

export default Privacy;
