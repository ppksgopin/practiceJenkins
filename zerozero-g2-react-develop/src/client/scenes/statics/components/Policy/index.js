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
      list-style: disc outside none;
      overflow:auto;

      li{
        font-size:14px;
          color:#333;
          font-weight:300;
          line-height:1.5;
          margin-left:20px;
          > ul{
        		list-style: decimal outside none;      		
        		//overflow:auto;
            li{
              margin-left:32px;
            }
    			}

      }
    }

  	&::after{
  		${clearfix};
  	}
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


class Policy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
			<Head>
				<h1>會員規章</h1>
			</Head>
			<Section>
				<h2>第一條 適用範圍</h2>
				<div className="item noicon">
					<ul>
						<li>zero zero平台致力於環保、資源全循環之事業，提供使用者（以下簡稱「甲方」）使用大豐環保科技股份有限公司（以下簡稱「乙方」）所開發、經營的zero zero平台及所提供的各服務模組服務（以下簡稱「本平台」），並制定本平台服務使用契約（以下簡稱「本規範」），共同遵守。</li>
						<li>甲方於加入本平台會員之同時，亦享有乙方回收站門市會員之資格。甲方可至乙方回收站門市時向相關人員申請領用會員卡。(會員卡為首次免費領取，遺失補發則酌收工本費新台幣10元)。</li>
						<li>甲方於乙方回收站門市加入會員之同時，亦享有乙方平台會員之資格，以註冊手機號碼登入平台，使用平台提供之服務項目。</li>
						<li>關於乙方在本平台對於甲方所另行設定之各項規則、指導方針，以及乙方在任何時候所發行各種決策或通知等，均與本規範視為一體。</li>
						<li>甲方同意乙方得以其所決定之方式，隨時將與本平台有關之情報使用APP推播通知、公告、電子報等其他方式來知會甲方。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第二條 本規範的變更</h2>
				<div className="item noicon">
					<ul>
						<li>乙方有隨時修改本規範之權利。如因此造成甲方直接或間接產生費用或損害時，乙方不負任何的責任。</li>
						<li>乙方在進行修正後，會於官方網站或本平台進行公告，不先行通知甲方，如甲方無法認同修正內容則請勿再使用本平台。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第三條 會員帳號註冊及管理</h2>
				<div className="item noicon">
					<ul>
						<li>甲方在使用本平台之前，皆需要先確認並且同意以下內容。如甲方經註冊帳號成為會員後，即視為已經同意本規範各項條款。<br />
							會員帳號註冊方式如下：
							<ul>
								<li>以手機號碼進行註冊及登入。</li>
								<li>為維護會員帳號資料之正確性及有效性，甲方如資料變更時，可即時於平台自行更新，或至回收站門市洽詢服務人員，以確保享有相關權益。</li>
								<li>甲方應自行妥善保管其帳號及密碼。對於使用特定帳號登入本平台系統後之所有行為，推定為該帳號持有人自己之行為。甲方如果發現或懷疑其會員帳號或密碼被第三人冒用或不當使用，甲方應立即通知乙方。</li>
								<li>每一會員只能擁有一個會員帳號，如違反本服務規定、程序或者提供任何不實資料，將導致會員喪失會員資格，且其累積之Z幣及相關優惠權益亦失其效力。</li>
								<li>如遇使用上之問題，均可來信詢問本平台之客服信箱: service@zerozero.com.tw。</li>
							</ul>
						</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第四條 點數政策及付費服務</h2>
				<div className="item noicon">
					<ul>
						<li>甲方於乙方平台預約服務或是於乙方回收站門市進行回收，皆可享有共同累積之Z幣回饋，請隨時留意本平台相關活動訊息。</li>
						<li>甲方於本平台或回收站門市進行活動所累積之Z幣，均可於本平台會員帳戶查詢。</li>
						<li>甲方可使用Z幣於本平台或乙方回收站門市進行商品兌換，可兌換之商品及票券將不定期更新，請依平台及回收站門市公告為主。</li>
						<li>Z幣不得折換現金，亦無法折抵zero zero其他服務所產生之費用。</li>
						<li>Z幣有效期限規定如下，當年度1/1到12/31所累積的Z幣將於次年度12/31 24:00後自動失效，失效的Z幣恕不提供展延服務。</li>
						<li>Z幣僅限於單一會員門號使用，無法轉移、贈與或合併。</li>
						<li>乙方平台提供之商品一經兌換概不接受退換貨或是退還Z幣。如遇商品有嚴重瑕疵，乙方將協助向商品提供廠商提出反應。</li>
						<li>若有Z幣點數計算之爭議者，所有爭議解釋之依據概依本公司留存之資料為準。 </li>
						<li>乙方保留Z幣政策最終解釋、修訂及決定之權利 ; 若有未盡事項或其他相關資訊，將於本公司官網、回收站門市另行公告，並以最新公告內容為主。</li>
						<li>本平台如有付費服務時，相關說明費率和支付方式的規定（付費服務規範），將會另外刊載在各別平台內。如同意付費服務規範後，即成能夠使用付費服務的對象。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第五條 本平台使用限制</h2>
				<div className="item noicon">
					<ul>
						<li>甲方有下列任一情形時，乙方有權認定並限制甲方使用本平台的權利：
							<ul>
								<li>違反本規範（含第三人檢舉）、政府法令，或有違反之可能性時。</li>
								<li>甲方將密碼洩漏給第三人，第三人不正當使用本平台，或第三人不正當使用乙方的其他服務。</li>
								<li>甲方的行為經乙方判斷後，對於乙方之營運（包含本平台）有造成損害之疑慮時。</li>
								<li>持有複數帳號的使用者，如有任一帳號違反了前項規定，而受到使用限制的情況時，乙方有權對該當甲方所持有的所有帳號進行使用權利限制。</li>
								<li>意圖冒名使用乙方或第三人為目的的帳號申請、或有此疑慮的情況時</li>
							</ul>
						</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第六條 本平台停權之處置</h2>
				<div className="item noicon">
					<ul>
						<li>甲方如受前條之平台使用限制後，乙方將給予限期改善之機會，如期限屆滿仍未改善時，乙方將終止甲方使用本平台，並刪除甲方帳號。</li>
						<li>經乙方判斷違反前條所禁止事由為惡意或重大過失所造成之損害時，則乙方將不進行通知而刪除甲方帳號。</li>
						<li>經依本條及前條之規定，禁止、刪除甲方之使用及帳號時，如致生損害，乙方不負任何責任</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第七條 權利歸屬</h2>
				<div className="item noicon">
					<ul>
						<li>甲方對於使用本平台及其相關之一切行為，由甲方自行承擔一切責任，所致生的損害賠償（包含訴訟等所有費用）亦由甲方負擔，如造成第三人損害時，亦同。乙方對於甲方行為所產生的任何問題不負任何的責任。</li>
						<li>甲方需自行負責帳號保密管理的責任，不論是經過甲方許可或遭受第三人私自使用本平台時，皆視為甲方本人之行為，需自行負責所致生之責任。</li>
						<li>甲方如果發現其他使用者有違反本規範的行為時，需儘速和乙方回報。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第八條 本平台的系統維護、中斷及終止服務</h2>
				<div className="item noicon">
					<ul>
						<li>系統因進行例行性維護、搬遷、更換、升級、或維修，致本平台暫停或中斷時，於暫停或中斷前，將以第一條所定之方式進行通知。<br />
							如下列事由造成本平台部分或全部執行有所困難時，乙方得在不事先知會甲方的情況下，臨時終止本平台的部分或全部服務
							<ul>
								<li>地震、海嘯、洪水、火山噴發等天災及戰爭、動亂、暴動等不可抗力因素。</li>
								<li>火災、停電等。</li>
								<li>本平台系統的定期或臨時維修。</li>
								<li>收到法令、行政機關等的指示、命令時。</li>
								<li>有其他運用上或技術上理由時。</li>
							</ul>
						</li>
						<li>乙方得於終止預定日前20日，於乙方網站上或APP推撥公告通知後，終止部分或全部的服務。</li>
						<li>前二項乙方於中斷或終止本平台的部分或全部內容時，對於造成甲方或第三人直接或間接所產生的費用或損害，乙方不負任何責任。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第九條 智慧財產權</h2>
				<div className="item noicon">
					<ul>
						<li>本平台所包含的所有資訊、程式及軟體、商標、關鍵技術、營業秘密，以及其他技術方面之專利(包含但不限於專利權、商標權、著作權等)，使用權、管理權等其他所有權利，皆歸屬於乙方或擁有該當權利的第三人所有。</li>
						<li>甲方使用上有上傳任何資訊時，即同意乙方有無償、無條件複製、發佈、改變或刪除該所傳資訊之權利。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第十條 禁止事項</h2>
				<div className="item noicon">
					<ul>
						<li>本平台嚴格禁止下列（包括但不限於）事項發生：
							<ul>
								<li>禁止以不實資料或冒用他人資料進行註冊、使用本平台之行為。</li>
								<li>禁止以不正當之手段、競爭擾亂平台交易秩序。</li>
								<li>侵害乙方或第三人的智慧財產權、其他法律上權利之行為，抑或有侵害之疑慮的行為。</li>
								<li>違反個人資料保護法之行為：侵犯第三人隱私權或肖像權的行為，抑或有侵害之疑慮的行為。</li>
								<li>本規範另有規定除外，利用本平台所得到的檔案或資訊（包含其複製檔），有償或無償的讓渡、借貸、繼承給第三人的行為。</li>
								<li>妨礙本平台營運或其他使用者使用本平台，抑或乙方認定有妨礙之疑慮的行為（包含提供、傳送電腦病毒等有害程式）。</li>
								<li>對於乙方或第三人有謾罵、誹謗等，毀損名譽或信用的行為，以及侵害第三人通信秘密自由的行為。</li>
								<li>刊登、公開、提供、寄送任何猥褻物品之行為，抑或有侵害之疑慮的行為。</li>
								<li>刊登、公開、提供、寄送侵害乙方或第三人的權利或利益等虛偽不實或詐欺性質之行為。</li>
								<li>觸犯前述項目，有侵害、毀損乙方或第三人的權利或利益的事實或有其疑慮的行為，有違反法律、規則、命令等法律規定的事實或有其疑慮的行為，違反本規範禁止事項內的類似行為。</li>
							</ul>
						</li>
						<li>甲方於本平台進行媒合時，為防止產生違法之情事，請務必詳閱「禁止刊登物品列表」，以保障自身權益。</li>
						<li>甲方嚴禁以違反法令之方式或贓物進行回收，如遭查獲，乙方將終止會員權益，並將相關資料、物品交付檢警單位辦理。如因此使乙方受有損害，則將依法進行追訴，悉請甲方留意。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第十一條 違反責任及損害賠償責任</h2>
				<div className="item noicon">
					<ul>
						<li>若違反前條任一禁止事項時，乙方為了公平的維持本平台正常運作，將會對甲方採取必要之措施，情節重大者將交由司法途徑解決。</li>
						<li>本平台為因應政府部門調查，將會提供甲方於本平台上所提供之資料及相關交易紀錄。</li>
						<li>因甲方違反本規範所定事項造成乙方或第三人有利益上損失時，甲方應對乙方或該當第三人所提出的損害賠償請求，負擔賠償責任。惟乙方並不會介入甲方與第三人所衍生之紛爭。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第十二條 免責聲明</h2>
				<div className="item noicon">
					<ul>
						<li>使用本平台若造成甲方或甲方與第三人產生糾紛或產生一切損失時時，乙方不負任何責任。</li>
						<li>本平台係以為環保目的而創設，惟相關環保法令、法律訊息仍需由甲方自行斟酌、參考，如甲方獲取錯誤訊息，而遭主管機關進行處罰時，乙方不負任何責任。</li>
						<li>本平台因技術故障導致之連線異常等不可抗力原因，造成甲方或第三人受到損害時，乙方不負任何責任。</li>
						<li>本平台如有提供異業行銷之資訊於平台內時，相關行銷資訊應由甲方自行評估、選擇，乙方無須負擔其與甲方或第三人所受之損害。</li>
						<li>本平台擁有最終之解釋權及處分權。相關內容詳如「免責聲明」，該聲明為本規範之一部分。</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>第十三條 隱私權與個人資料保護政策</h2>
				<div className="item noicon">
					<ul>
						<li>乙方相當注重所有會員之個人資料保護，相關內容詳如「隱私權與個人資料保護政策」，該政策為本規範之一部分。</li>
					</ul>
				</div>
			</Section>
			<Section className="last">
				<h2>第十四條 準據法與管轄法院</h2>
				<div className="item noicon">
					<ul>
						<li>本規範以中華民國法律為準據法。</li>
						<li>若本規範涉及的一切爭訟，雙方合意以臺灣臺中地方法院為第一審管轄法院。</li>
					</ul>
				</div>
			</Section>
		</Container>
                <Footer/>


            </div>);
    }
}

export default Policy;
