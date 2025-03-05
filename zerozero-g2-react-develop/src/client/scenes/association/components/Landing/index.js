import React, { Component,useRef } from 'react';
import styled from 'styled-components';
import { box } from '../../../../styles/mixins';
import { awsUrl } from '../../../../utils/awsFile';
import { Helmet } from 'react-helmet';
import theme from '../../../../styles/theme';
import Slider from 'react-slick';

let clickCount = 0; // 全域變數追蹤點擊次數
let countFlag = 0; // 全域變數追蹤點擊次數
// 初始化 axios 實例
// 定義樣式
const settings = {
  slidesToShow: 3,
  dots: false,
  centerMode: false,
  infinite: false,
  speed: 500,
  lazyLoad: false,
  waitForAnimate: false,
 
  swipe: true,        // 啟用觸控滑動
  draggable: true,    // 啟用滑鼠拖拉
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       infinite: false,
  //       swipe: false,
  //       draggable: false
  //     }
  //   }
  // ]
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  fade: true,          // 添加淡入淡出效果
  draggable: false,    // 禁用拖拽
  swipe: false,        // 禁用滑動
  touchMove: false,    // 禁用觸控移動
  cssEase: 'linear'    // 使用線性過渡
};

const images = [
 "https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/7cdc121e81cdeed56ef6da1a8f76d6ed.svg",
  "https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/0455915c68b1f21600de05a3f28606fe.png",
  "https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/f2ceaa48f114490e3698a9c9a0b24bda.png"
];
const StyledSliderHTML = styled.div`
  html, body {
    background-color: #e74c3c;
    margin: 0;
    padding: 0;
  }

  
  /* 外部容器採用 flex 排版，確保左右對齊 */
  .wrapper {
    display: flex;
    align-items: flex-start;
    padding-top: 50px;
  }
  /* 左側 slider 容器：給定寬度並靠左定位 */
  .carousel-container {
    width: 65%;        // 增加寬度
    margin-left: 40px;
    margin-right: -5%; // 負值右邊距使內容溢出
    position: relative;
    z-index: 2;        // 確保在上層
  }
     .slick-list {
    overflow: hidden !important; // 改為 hidden
    &::-webkit-scrollbar {
      display: none; // 隱藏 scrollbar
    }
    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
  }
  /* 右側 svg 容器：給定寬度、靠右對齊，同時去除內部多餘空白 */
  .svg-container {
  margin: -15px;
    width: 100%;
    // margin-right: 40px;
    display: flex;
    align-items: flex-start; /* 捨棄容器內上邊距 */
    justify-content: flex-end; /* 讓 svg 靠右 */
    overflow: hidden; /* 去除無用的空白 */
  }
  /* svg 元素置頂並以左上角為縮放基準 */
  .svg-container svg {
    display: block;
    transform-origin: left top;
    margin: 0;
    padding: 0;
    vertical-align: top;
  }
  .carousel {
    width: 100%;
    margin-left: 200px;
  }
  .slick-slide {
    margin: 10px;
  }
  .slick-slide img {
    width: 100%;
    border: 2px solid #979797;
  }

  .slick-prev,
  .slick-next {
    top: -60px; // 將按鈕移到上方
    transform: none; // 移除預設的垂直置中
  }

  .slick-prev {
    left:30px;
    right: 50px;
    margin-top: 20px;
  }

  .slick-next {
    right: 1140px;
    top: -10px;
    margin-top: -30px;
  }

  .slick-prev {
  z-index: 1;
  width: 30px;
  height:28px;
  background: #c9c9c9 !important;  // 灰色填充背景
  border: none;  
  border-radius: 50%;  // 圆形
  
  &:before {
    color: white;  // 白色箭头
    font-size: 30px;
    opacity: 1;
    line-height: 1;
  }

  &:hover {
    background: #86d9d2 !important;  // hover时保持灰色背景
    border: none;
    
    &:before {
      color: white;  // hover时保持白色箭头
      opacity: 1;
    }
  }
}

.slick-next {
  z-index: 1;
  width: 30px;
  height:28px;
  background: #86d9d2 !important;  //
  border: none;  
  border-radius: 50%;  // 圆形
  
  &:before {
    color: white;  // 白色箭头
    font-size: 30px;
    opacity: 1;
    line-height: 1;
  }

  &:hover {
    background: #86d9d2 !important;  // 
    border: none;
    
    &:before {
      color: white;  // hover时保持白色箭头
      opacity: 1;
    }
  }
}
  // .slick-prev:before,
  // .slick-next:before {
  //   font-family: 'slick';
  //   font-size: 30px;
  //   line-height: 1;
  //   opacity: 0.75;
  //   color: #c9c9c9;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  // }
`;


const Head = styled.div`
	background:${theme.colors.blue4};
	padding:50px 5%;
	${box};
	position:relative;

	h2{
		font-size:40px;
		color:#fff;
	
		
		letter-spacing:0.1em;
		margin-bottom:30px;
		text-align:center;
	}
	
	h3{
		font-size:18px;
		color:#fff;
		line-height:1.2;
		text-align:center;
	}

	&::after{
		content:"";
		position:absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 30px 30px 0 30px;
		border-color: ${theme.colors.blue4} transparent transparent transparent;
		left:50%;
		margin-left:-30px;
		bottom:-30px;
	}
`;
const ImageSliderWrapper = styled.div`
  .wrapper {
   display: flex;
    align-items: center;
    justify-content: flex-start;  // 改為靠左對齊
    padding: 150px 0;
  }
  // 右側 SVG 容器
  .right-svg {
      margin-left: 1100px;
       margin-top: -600px;
    flex-shrink: 0;     // 防止 SVG 被壓縮
  }
  .carousel-container {
    width: 100%;
    max-width: 1200px;
    margin: 0;  // 移除 auto margin
   
    position: relative;
  }

  .slide-item {
    // 添加 SVG 样式
    svg {
      width: 100%;
      // height: 400px;
      object-fit: cover;
    }

    // 保持现有的图片样式
    img {
      // width: 100%;
      // height: 400px;
      object-fit: cover;
      cursor: pointer;
    }
  }
.slick-prev {
  z-index: 1;
  width: 30px;
  height:29px;
  background: #c9c9c9 !important;  // 灰色填充背景
  border: none;  
  border-radius: 50%;  // 圆形
  
  &:before {
    color: white;  // 白色箭头
    font-size: 30px;
    opacity: 1;
    line-height: 1;
  }

  &:hover {
    background: #86d9d2 !important;  // hover时保持灰色背景
    border: none;
    
    &:before {
      color: white;  // hover时保持白色箭头
      opacity: 1;
    }
  }
}

.slick-next {
  z-index: 1;
  width: 30px;
  height:29px;
  background: #86d9d2 !important;  //
  border: none;  
  border-radius: 50%;  // 圆形
  
  &:before {
    color: white;  // 白色箭头
    font-size: 30px;
    opacity: 1;
    line-height: 1;
  }

  &:hover {
    background: #86d9d2 !important;  // 
    border: none;
    
    &:before {
      color: white;  // hover时保持白色箭头
      opacity: 1;
    }
  }
}
  .slick-prev {
    left: 1090px;
        top: 450px;
  }

  .slick-next {
    left: 1140px;
        top: 450px;
  }

  // 禁用滑動效果
  .slick-list {
    overflow: hidden;
  }

  // 移除過渡動畫
  .slick-track {
    transition: none !important;
    transform: none !important;
  }
`;
// 定義 styled-components
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative; /* 文字和背景圖片的定位基準 */
    overflow: hidden; /* 隱藏放大圖片超出的部分 */
    height: 500px; /* 設定容器固定高度，與圖片匹配 */

    /* 背景圖片作為子元素 */
    .background {
    filter: brightness(0.8); /* 調低亮度，1 為正常，0.8 為稍暗 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${awsUrl("c24d6fc1509fbe7ea9d450572ab569e3.jpeg")}) no-repeat center center;
        background-size: cover; /* 圖片適配容器 */
        transition: transform 0.5s ease-in-out; /* 平滑縮放動畫 */
    }

    /* 滑鼠懸停時放大背景圖片 */
    &:hover .background {
        transform: scale(1.05); /* 懸停時放大 */
    }

   

    /* 文字容器 */
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* 水平與垂直居中 */
        z-index: 3; /* 確保文字在最上層 */
        text-align: center;
    }

    .main {
        font-size: 50px;
        line-height: 1.5;
        color: ${theme.colors.white}; /* 白色文字 */
        width: 1000px;
        margin-bottom: 20px;
        font-weight: 500;
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 24px;
        }
    }

    .secondary {
        font-size: 30px;
        line-height: 1.5;
        color: ${theme.colors.white};
        letter-spacing: 0.125em;
        font-weight: 400;
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 16px;
        }
    }
`;




const Imgleft = styled.img`   

  
    width: 300px; // 縮小圖片寬度
    height: auto; // 保持比例
    
    top: -300px; // 向上移動
    right:100px;
    @media (max-width: ${theme.medias.mobile}) { 
      display:none;
            
        }

`;



const WantToSolve = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
background: #fff;
padding: 50px 0;





.main {
  font-size: 36px;
  font-weight: 500;

  color: $ {
    theme.colors.black
  }

  ;
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
  padding: 50px;

  .item {
   span{
     display: block;
           margin-left: -191px;
   }
   h2 {
       @media (max-width: ${theme.medias.mobile}) {
      
       font-weight: normal;
       font-size: 18px; 
       }
        font-size:36px;
        color:  #252525;
       
        line-height: 1.2;
       font-weight: 500;
        margin-top: -270px;
        margin-left: 0;
        white-space: pre-line; /* 確保換行 */
      }
    span {
       @media (max-width: ${theme.medias.mobile}) {
      
       font-weight: normal;
       font-size: 18px;
       }
       font-weight: 500;
        font-size:36px;
        color:  #252525;
       
        line-height: 1.2;
        margin: 0;
        
        white-space: pre-line; /* 確保換行 */
      }
    .text {

    

       .header {
         
          flex-direction: column; /* 確保上下排列 */
          align-items: center; /* 水平置中 */
          justify-content: center; /* 垂直居中 */
          font-size: 24px; /* 標題大小 */
          font-weight: bold;
          line-height: 1.5; /* 增加行距 */
          margin-bottom: 10px;
          
        }
    }

    .img {
      grid-area: image
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    max-width: 100%;
    gap: 20px;

    &:nth-child(even){
    .img{
        order:1;

      }
      .text{
        order:2;
        }
    }

     &:nth-child(odd){
    .img{
        order:2;

      }
      .text{
        order:1;
        }
    }
    @media (max-width: ${theme.medias.mobile}) {
      flex-direction: column;
      
       &:nth-child(even){
        .img{
            order:2;

          }
        .text{
            order:1;
        }
    }
    }

   
    .img img {
      width: 350px;
      height: auto;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }

    .text,
    .img {
      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
      }

      .number {
        font-size: 56px;
        font-weight: bold;
        color: #00aeae;
        line-height: 1;
      }

        span{
        font-weight: 700;
        display: contents;
        @media (max-width: ${theme.medias.mobile}) {
        
        margin-left: 80px;
          text-align: left;
          max-width: 240px;
          line-height: 1.7;
        }
          font-size: 24px;
          color: #252525;
          line-height: 1.8;
          /* 增加行距 */
          margin: 0;
        
        max-width:700px;
        text-align: left;
        /* 限制寬度，減少每行字數 */
        word-break: break-word;
        /* 確保長單詞能換行 */
      }
      
      
      }

      p{

      @media (max-width: ${theme.medias.mobile}) {
      
       margin-left: 80px;
        text-align: left;
         max-width: 240px;
         line-height: 1.7;
       }
         
        font-size: 24px;
        font-weight: 400;
        color: #252525;
        line-height: 1.8;
        /* 增加行距 */
        margin: 0;
        
        max-width: 910px;
        text-align: left;
        /* 限制寬度，減少每行字數 */
        word-break: break-word;
        /* 確保長單詞能換行 */
      }
    }
  }

 
}

`;
const ProjectOverview = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: theme.colors.grayLight;
  padding: 70px 0;
  position: relative;

  .main {
    font-size: 36px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin-bottom: 80px;
  }

  .content {
    display: flex;
    justify-content: center;
    gap:65px;
    max-width: 1200px;
    margin: -10px auto 0 auto;

    @media (max-width: ${theme.medias.mobile}) {
      flex-direction: column;
    }
  }

  .item {
    max-width: 503px;
    margin: 10px auto;
    text-align: center;

    .image-container {
      position: relative;
      width: 408px;
      height: 520px;
      overflow: hidden;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        
      }

      .hover-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: #8bdc65; /* 綠色區塊 */
        transition: height 0.3s ease;
        z-index: 1;
        
      }

      &:hover img {
        transform: scale(1.1); /* 放大圖片 */
      }

      &:hover .hover-overlay {
        height: 60%; /* 綠色區塊顯示 */
      }
    }

    .label {
      font-size:30px;
      color: #666;
      font-weight: 500;
      margin-top: 8px;
      line-height: 1.5;
      letter-spacing: 0.05em;
    }
  }

  .circle-right {
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 215px;
    height: auto;
    z-index: 0;

    @media (max-width: ${theme.medias.mobile}) {
      display: none;
    }
  }
`;


const FormRow = styled.div`
  display: flex;
  align-items: center; /* 保持垂直居中 */
  margin-bottom: 15px;
@media (max-width: ${theme.medias.mobile}) {
         display: grid;
        

     }
  label {

  @media (max-width: ${theme.medias.mobile}) {
       font-size: 20px;
  }
    flex: 0 0 122px; /* 固定寬度，確保所有標籤對齊 */
    text-align: left; /* 左對齊 */
    font-size: 24px;
    
    color: #333;
    display: flex;
    align-items: center;

    /* 保持星號與文字一致，但不影響非必填項目 */
    span {
      color: red; /* 星號顏色 */
      margin-right: 5px;
    }
  }

  input,
  select,
  textarea {
  @media (max-width: ${theme.medias.mobile}) {
      margin:10px;
      width:300px;
      height:30px;
  }
    flex: 1;
    width: 100%; /* 填滿剩餘空間 */
    padding: 10px;
    font-size: 24px;
    border-radius: 5px;
    border: 1px solid #ddd;
    &:focus {
      outline: none;
      border-color: #87cefa;
    }
  }
`;



const FormRowWithExtension = styled(FormRow)`
  .input-group {

  @media (max-width: ${theme.medias.mobile}) {
         display: grid;
         gap:0;
        
     }
    display: flex;
    align-items: center;
  
  }

  .extension-label {

    @media (max-width: ${theme.medias.mobile}) {
      font-size:20px;
        padding:10px;
     }
    flex: 0 0 auto; /* 固定分機標籤寬度 */
    font-size: 24px;
    color: #333;
    text-align: left;
    
    white-space: nowrap;
  }

  .extension-input {
    flex: 2; /* 分機輸入框寬度比例 */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;

    &:focus {
      outline: none;
      border-color: #87cefa;
    }
  }

  input {
    flex: 3; /* 聯絡電話輸入框寬度比例 */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;

    &:focus {
      outline: none;
      border-color: #87cefa;
    }
  }
`;

const More = styled.div`
  width: 100%;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: 100px;
  padding-top:20px;
  text-align: center;
  background: #f8f8f8;
  
  // font-weight: bold;
 background-image: url(${awsUrl("website/ne-products/contactmore.png")});
background-repeat: no-repeat;
background-position: calc(50% + 370px) center;
background-size: contain;
img{
  display:none;
}
@media (max-width: 768px) {
    
      img{
        display:block;
        width:200px;
        padding-left: 100px; /* 增加左邊距，圖片看起來向右 */

      }
      background-image:inherit; //初始化

}
  .main {
  
    font-size: 36px;
    line-height: 1.5;
    color: ${theme.colors.black};
    letter-spacing: 0.125em;
    margin-bottom: 30px; /* 調整文字和表單的間距 */
    @media (max-width: ${theme.medias.phablet}) {
      font-size: 24px;
    }

   
  }

  .text {
    color: #333;
    font-size: 24px;
    line-height: 1.8;
    margin: 0 8px;
    padding: 50px 0 60px; /* 調整底部 padding，使 More 區塊更靠近表單 */
    vertical-align: middle; /* 確保文字與 phone 對齊 */
  }

  .phone {
    color: #00AEAE; /* 原本的 teal 顏色 */
    font-size: 24px; /* 加大字體，凸顯電話號碼 */
    font-weight: bold;
    // margin: 0 8px;
    display: inline-block; /* 確保不影響其他文字的排版 */
  }


`;
const FormContainer = styled.div`
 width: 1100px;
    height: 520px;
//   margin: 0px auto; /* 調整表單與上方文字的距離 */
  margin: 10px auto; /* 將 margin-top 設為負值，向上移動表單 */
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #dcdcdc; /* 添加淺灰色外框 */
`;




const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0;
`;

const SubmitButton = styled.button`
  width: 200px; /* 設置按鈕的固定寬度 */
  padding: 8px; /* 減少內邊距讓按鈕變小 */
  margin: 15px auto 0; /* 調整外邊距讓按鈕置中 */
  display: block; /* 設置為塊級元素，方便水平置中 */
  border: none;
  border-radius: 5px;
  background-color: #00AEAE; /* 原本的背景色 */
  color: #fff;
  font-size: 14px; /* 調整字體大小讓按鈕更小 */
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease; /* 添加平滑過渡效果 */
  @media (max-width: 768px) {
      margin-left: 20px; /* 向左移動 */
      width:300px;
      height:50px;
       font-size: 20px; 
  }
  &:hover {
    opacity: 0.8; /* 滑鼠懸停時降低透明度 */
  }
`;



class AssociationLanding extends Component {
  constructor(props) {
    super(props);
    
   
    this.state = {
      isSlickReady: false,
      isHidden: false, // 初始化 isHidden
      hash:  "", // 初始化 hash
      serviceItem: '',
      township: '',
      filteredTownships: [], // 初始化 filteredTownships
      counties: [],
      townships: [],
      name: '',
      phone: '',
      description: '',
      errors: {},
      currentSlide: 0,
      activeIndex: null,
      faqList: [
        {
          question: '1.如何折抵碳權？',
          answer: (
            <span>
              我們會依據商品兌換Z幣累積數量換算予企業夥伴，當企業夥伴從事碳中和活動時，我司會上<a href="https://verra.org/" target="_blank" rel="noopener noreferrer">verra</a>進行登錄並產出文件回饋予企業夥伴，企業夥伴在一年之內需提出需求並折抵完畢。(若一年內未提出，視同放棄)同時，我們會給予企業夥伴此活動減碳效益回饋報告書，感謝貴司在此活動上的貢獻。
            </span>
          ),
        },
        {
          question: '2.如果商品於效期內，未兌換完畢，商品會到哪裡去？',
          answer: '由大豐環保(擁有甲級清除許可)協助進行清運，每年處理上百筆各式報廢服務、證銷毀過程紀錄，可供企業後續備查，無須擔心過期品銷毀問題！',
        },
        {
          question: '3.CIX是甚麼?',
          answer: (
            <span>
              2021年新加坡成立全球碳權交易平台─氣候影響力交易所<a href="https://www.climateimpactx.com/" target="_blank" rel="noopener noreferrer">Climate Impact X</a>（簡稱CIX）是由國家投資公司淡馬錫、新加坡交易所、星展集團和渣打銀行，合資成立。
              CIX主要希望能夠共同建立全球碳權交易所和項目市場，來幫助機構與企業推進應對氣候變化的減碳工作。
              目前CIX有3種交易機制分別是：計畫市場（project marketplace）、拍賣（auction）以及交易所（exchange）。
              CIX使得企業可以透過交易所直接購買自然碳匯的碳權，讓企業參與自願性碳市場試行拍賣成功後，並在2022年開始定期舉辦拍賣會。
            </span>
          ),
        },
      ],
    };
    this.sliderRef = React.createRef();
    
  }
  handleResize = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(0);
      this.sliderRef.current.refresh();
    }
  }

  handleLoaded = () => {
    if (this.sliderRef.current) {
      $(this.sliderRef.current).slick('setPosition');
    }
  }
  initSlick = () => {
    if (this.sliderRef.current) {
      $(this.sliderRef.current).slick({
        ...settings,
        onInit: () => this.setState({ isSlickReady: true })
      });
    }
  }

  componentDidMount() {
    // 等待 DOM 完全載入
    window.addEventListener('resize', this.handleResize);
    setTimeout(() => {
      if (this.sliderRef.current) {
        this.setState({ isSlickReady: true });
      }
    }, 500);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleHashChange = () => {
    // 更新状态以触发重新渲染
    this.setState({ hash: window.location.hash });
  };



  handleClick = (hash, action) => {

    if (action === "updateHash") {
      history.replaceState(null, null, hash); // 更新 URL
      this.setState({ hash }); // 更新狀態
    } else if (action === "hideElement") {
      this.setState({ isHidden: true }); // 隱藏元素
    }

    if (hash === "#circle") {
      clickCount++;
      console.log(clickCount);
    };
  }

  handleClick = (hash) => {
    // 更新哈希值并同步状态
    // 更新 URL 並手動觸發狀態變更
    history.replaceState(null, null, hash); // 修改 URL 而不跳轉頁面
    this.setState({ hash }); // 強制更新 React 狀態

    if (hash === "#circle") {
      clickCount++;
      console.log(clickCount);
    }
    if (hash === "#square" && clickCount > 0) {
      countFlag = 1;
      clickCount = 0;
      console.log(clickCount);
    };

    if (hash === "#square" && clickCount === 0) {
      countFlag = 0;
      clickCount = 0;
      console.log(clickCount);
    };
    ;
  };


  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, serviceItem, township, description, name, phone, email } = this.state;
    let errors = {};

    // 基本表單驗證
    if (!companyName) errors.companyName = "請輸入公司名稱";
    if (!serviceItem) errors.serviceItem = "請選擇縣市";
    if (!township) errors.township = "請選擇鄉鎮";
    if (!description.trim()) errors.description = "請描述您的需求或其他相關資訊";
    if (!name.trim()) errors.name = "請輸入您的大名";
    if (!phone.trim()) errors.phone = "請輸入您的電話";
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "電子信箱格式不正確";
    }
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    // 準備提交的數據
    const submittedData = {
      companyName,
      serviceItem,
      township,
      description,
      name,
      phone,
      email: email.trim() || null, // 如果未填寫電子信箱，則設為 null
    };

    // 在這裡處理提交，例如發送到 API
    console.log("提交的數據：", submittedData);

    // 清除表單或顯示成功訊息
    this.setState({
      serviceItem: '',
      township: '',
      filteredTownships: [],
      description: '',
      name: '',
      phone: '',
      companyName: '',
      email: '',
      errors: {},
    });

    // 您可以在這裡添加顯示成功訊息的邏輯
  };

  render() {
    const { isHidden } = this.state;
    const { email, name, companyName, phone, description, errors } = this.state;
    const { hash } = this.state;
    const showSquare = hash === "#square" || hash === "";
    return (
      <div>
        <Helmet>
          <title>協會</title>
        </Helmet>
        <Container>
          <div className="background"></div>
          <div className="content" style={{ paddingBottom: '130px', paddingTop: '130px' }}>

            <div className="main">全民回收 共創永續台灣</div>
            <div className="secondary">台灣好回收好生活協會</div>
          </div>
        </Container>

        <WantToSolve>
          {/* <div className="main">我們想要解決...</div> */}
          <br></br>
          <div className="content">
            {/* 第1項 */}
            <div className="item">
              <h2>
                台灣好回收好生活協會
                <span style={{ textAlign: 'left' }}>創立宗旨</span>
              </h2>


              <div className="img">
                <p style={{marginLeft:"50px"}}>
                  社團法人台灣好回收好生活協會為依法設立的非營利公益性社會團體，秉持促進台灣社會回收文化的使命，<span style={{fontWeight:"700"}}>以推動民眾積極落實回收分類、協助企業實現廢品的循環利用、援助拾荒者為核心宗旨。</span></p>
                <br></br>
                <p style={{marginLeft:"50px"}}>
                  根據2023年的數據，台灣未進入回收體系的垃圾量已超過482萬公噸，
                  創下16年來的新高，這也顯示出推動垃圾減量的迫切需求。
                </p>
                <br></br>
                <p style={{marginLeft:"50px"}}>
                  透過提升回收效率擴展循環經濟的範疇，我們旨在減少一般垃圾的總量，減輕對環境的負擔，並攜手各界推動綠色轉型。協會將透過教育推廣、資源再利用、拾荒者援助等方式，全力協助台灣邁向永續未來。</p>
              </div>
            </div>
          </div>

        </WantToSolve>



        <Head>
          <h2>協會目標</h2>

        </Head>


        <div style={{ backgroundColor: 'white' }}>

          <svg
            xmlns="http://www.w3.org/2000/svg"

            style={{
              marginTop: "50px", marginBottom: "50px", marginLeft: "1rem"
            }}
            viewBox="-450 0 2467.5 789.5"
            width="100%"
            height="100%"
          >
            <defs>
              <clipPath id="clip-path">
                <path
                  id="Rectangle_4815"
                  fill="none"
                  stroke="#2abcaf"
                  strokeWidth="4"
                  d="M0 0h125.419v149.336H0z"
                  data-name="Rectangle 4815"
                ></path>
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  id="Rectangle_4816"
                  fill="none"
                  stroke="#2abcaf"
                  strokeWidth="4"
                  d="M0 0h158v158H0z"
                  data-name="Rectangle 4816"
                ></path>
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  id="Rectangle_4817"
                  fill="none"
                  stroke="#2abcaf"
                  strokeWidth="4"
                  d="M0 0h143.586v162.229H0z"
                  data-name="Rectangle 4817"
                ></path>
              </clipPath>
            </defs>
            <g
              id="Group_10018"
              data-name="Group 10018"
              transform="translate(-288.5 -1933)"
            >
              <path
                id="Line_509"
                fill="none"
                stroke="#8bdc65"
                strokeWidth="6"
                d="M-120 0h1764"
                data-name="Line 509"
                transform="translate(288.5 1936)"
              ></path>
              <path
                id="Line_510"
                fill="none"
                stroke="#8d8d8d"
                strokeWidth="1"
                d="M-120 0h1764"
                data-name="Line 510"
                transform="translate(288.5 2197.667)"
              ></path>
              <path
                id="Line_511"
                fill="none"
                stroke="#8d8d8d"
                strokeWidth="1"
                d="M-120 0h1764"
                data-name="Line 511"
                transform="translate(288.5 2459.333)"
              ></path>
              <text
                id="ä_ç_æ_å_ç__2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontSize="32"
                fontWeight="700"
                transform="translate(507 2009)"
              >
                <tspan x="0" y="0">
                  促進全台回收率有效提升
                </tspan>
                <tspan y="0" fontFamily="SegoeUI-Bold, Segoe UI">

                </tspan>
              </text>
              <text
                id="ä_ç_æ_å_ç__2-2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontSize="32"
                fontWeight="700"
                transform="translate(507 2271)"
              >
                <tspan x="0" y="0">
                  協助拾荒者滿足基本生活水平
                </tspan>
                <tspan y="0" fontFamily="SegoeUI-Bold, Segoe UI">

                </tspan>
              </text>
              <text
                id="ä_ç_æ_å_ç__2-3"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontSize="32"
                fontWeight="700"
                transform="translate(507 2533)"
              >
                <tspan x="0" y="0">
                  實現零廢棄循環，永續地球
                </tspan>
                <tspan y="0" fontFamily="SegoeUI-Bold, Segoe UI">

                </tspan>
              </text>
              <text
                id="透過與政府機關_企業及社會各界的合作_致力於推動回收知識的普及與教育_提升民眾對回收分類的認識和參與度_提供清晰的回收指導_推廣回收資源化的最佳實踐_進一步提升全台的回收率_減少進入垃圾掩埋場的廢棄物_"
                fill="#252525"
                data-name="透過與政府機關、企業及社會各界的合作，致力於推動回收知識的普及與教育，提升民眾對回收分類的認識和參與度。提供清晰的回收指導，推廣回收資源化的最佳實踐，進一步提升全台的回收率，減少進入垃圾焚化爐或掩埋場的廢棄物。"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                fontSize="30"
                transform="translate(507 2039)"
                fontWeight={400}
              >
                <tspan x="0" y="26">
                  透過與政府機關、企業及社會各界的合作，致力於推動回收知識的普及與教育，提升民眾對回收分
                </tspan>
                <tspan x="0" y="66">
                  類的認識和參與度。提供清晰的回收指導，推廣回收資源化的最佳實踐，進一步提升全台的回收
                </tspan>
                <tspan x="0" y="106">
                  率，減少進入垃圾焚化爐或掩埋場的廢棄物。
                </tspan>
                <tspan y="106" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="協會關注拾荒者的生活需求_將為拾荒者群體提供必要的資源支持和服務_讓他們的努力在回收循環中發揮更大作用_同時_我們將協助他們改善生活條件_透過社會資源的整合_讓拾荒者在貢獻於社會資源循環的同時_也能獲得基本的生活保障_"
                fill="#252525"
                data-name="協會關注拾荒者的生活需求，將為拾荒者群體提供必要的資源支持和服務，讓他們的努力在回收循環中發揮更大作用。同時，並協助他們改善生活條件，透過社會資源的整合，讓拾荒者在貢獻於社會資源循環的同時，能獲得基本的生活保障。"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                fontSize="30"
                transform="translate(507 2301)"
                fontWeight={400}
              >
                <tspan x="0" y="26">
                  協會關注拾荒者的生活需求，將為拾荒者群體提供必要的資源支持和服務，讓他們的努力在回收
                </tspan>
                <tspan x="0" y="66">
                  循環中發揮更大作用。並協助他們改善生活條件，透過社會資源的整合，讓拾荒者在貢
                </tspan>
                <tspan x="0" y="106">
                  獻於社會資源循環的同時，也能獲得基本的生活保障。
                </tspan>
                <tspan y="106" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="我們的最終目標是建構零廢棄的循環經濟體系_將資源回收再利用最大化_並減少不必要的浪費_推動一個不斷循環的生態體系_並減輕地球環境的負擔_讓未來世代享有更永續的生活環境_"
                fill="#252525"
                data-name="我們的最終目標是建構零廢棄的循環經濟體系，將資源回收再利用最大化，並減少不必要的浪費。推動一個不斷循環的生態體系，並減輕地球環境的負擔，讓未來世代享有更永續的生活環境。"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                fontSize="30"
                transform="translate(507 2563)"
                fontWeight={400}
              >
                <tspan x="0" y="26">
                  我們的最終目標是建構零廢棄的循環經濟體系，將資源回收再利用最大化，並減少不必要的浪費。推
                </tspan>
                <tspan x="0" y="66">
                  動一個不斷循環的生態體系，並減輕地球環境的負擔，讓未來世代享有更永續的生活環境。
                </tspan>
              </text>
              <path
                id="Line_512"
                fill="none"
                stroke="#8bdc65"
                strokeWidth="6"
                d="M-120 0h1764"
                data-name="Line 512"
                transform="translate(288.5 2721)"
              ></path>
              <g id="Group_10001" data-name="Group 10001">
                <g
                  id="Group_9997"
                  data-name="Group 9997"
                  transform="translate(-290.709 -275.003)"
                >
                  <g
                    id="Group_9996"
                    data-name="Group 9996"
                    transform="translate(554 2267)"
                  >
                    <g
                      id="Group_9995"
                      fill="none"
                      stroke="#2abcaf"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      clipPath="url(#clip-path)"
                      data-name="Group 9995"
                    >
                      <path
                        id="Path_37666"
                        d="m101.668 32.25-4.25-8.925A5.84 5.84 0 0 0 92.151 20H64.517a5.84 5.84 0 0 0-5.267 3.325L55 32.25H28.75A8.75 8.75 0 0 0 20 41v8.75h116.669V41a8.75 8.75 0 0 0-8.75-8.75Z"
                        data-name="Path 37666"
                        transform="translate(-15.625 -15.625)"
                      ></path>
                      <path
                        id="Path_37667"
                        d="M20 156v8.75a8.75 8.75 0 0 0 8.75 8.75l4.808 76.926a17.5 17.5 0 0 0 17.466 16.409h54.62a17.5 17.5 0 0 0 17.466-16.409l4.808-76.926a8.75 8.75 0 0 0 8.75-8.75V156Z"
                        data-name="Path 37667"
                        transform="translate(-15.625 -121.874)"
                      ></path>
                      <path
                        id="Path_37668"
                        d="m357.677 378.207 10.717 6.187 6.187-10.717"
                        data-name="Path 37668"
                        transform="translate(-279.434 -291.934)"
                      ></path>
                      <path
                        id="Path_37669"
                        d="M213.078 439.358a26.183 26.183 0 0 1-46.411-16.692"
                        data-name="Path 37669"
                        transform="translate(-130.208 -330.206)"
                      ></path>
                      <path
                        id="Path_37670"
                        d="M194.508 312.227a26.183 26.183 0 0 1 46.411 16.692"
                        data-name="Path 37670"
                        transform="translate(-151.959 -236.458)"
                      ></path>
                      <path
                        id="Path_37671"
                        d="m155.287 428.854-10.717-6.187-6.187 10.717"
                        data-name="Path 37671"
                        transform="translate(-108.111 -330.207)"
                      ></path>
                    </g>
                  </g>
                </g>
                <g
                  id="Icon_feather-arrow-right"
                  fill="none"
                  stroke="#2abcaf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  data-name="Icon feather-arrow-right"
                  transform="rotate(-90 1309.847 811.335)"
                >
                  <path
                    id="Path_37662"
                    d="M7.5 18h39.158"
                    data-name="Path 37662"
                    transform="translate(-8.569 -104.489)"
                  ></path>
                  <path
                    id="Path_37663"
                    d="m18 7.5 14.989 14.989L18 37.478"
                    data-name="Path 37663"
                    transform="translate(7.34,-108)"
                  ></path>
                </g>
              </g>
              <g id="Group_9998" data-name="Group 9998" transform="translate(247 2246)">
                <g
                  id="Group_9998-2"
                  fill="none"
                  stroke="#2abcaf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  clipPath="url(#clip-path-2)"
                  data-name="Group 9998"
                >
                  <path
                    id="Path_37672"
                    d="M198.852 94.372s-42.907-25.744-42.907-54.348A20.03 20.03 0 0 1 175.969 20c14.21 0 22.884 14.3 22.884 14.3S207.526 20 221.736 20a20.03 20.03 0 0 1 20.024 20.024c0 28.604-42.908 54.348-42.908 54.348"
                    data-name="Path 37672"
                    transform="translate(-119.852 -15.372)"
                  ></path>
                  <path
                    id="Path_37673"
                    d="M176.691 434.164 151.9 447.385l-24.79-13.221v26.443l49.581 26.443 49.581-26.443v-26.443l-24.791 13.221Z"
                    data-name="Path 37673"
                    transform="translate(-97.691 -333.678)"
                  ></path>
                  <path
                    id="Path_37674"
                    d="M44.79 319.911 20 333.132l49.581 26.444 24.79-13.222Z"
                    data-name="Path 37674"
                    transform="translate(-15.371 -245.869)"
                  ></path>
                  <path
                    id="Path_37675"
                    d="m415.7 333.133-24.79-13.221-49.581 26.443 24.79 13.221Z"
                    data-name="Path 37675"
                    transform="translate(-262.333 -245.87)"
                  ></path>
                  <path
                    id="Line_514"
                    d="M0 52.886V0"
                    data-name="Line 514"
                    transform="translate(79 100.485)"
                  ></path>
                  <path
                    id="Path_37676"
                    d="m458.68 179.648 36.078 19.242-24.79 13.221-25.775-13.746c5.541-5.465 10.87-11.836 14.487-18.717"
                    data-name="Path 37676"
                    transform="translate(-341.386 -138.069)"
                  ></path>
                  <path
                    id="Path_37677"
                    d="M56.078 179.648c3.617 6.88 8.947 13.252 14.487 18.717L44.79 212.112 20 198.89Z"
                    data-name="Path 37677"
                    transform="translate(-15.371 -138.069)"
                  ></path>
                  <path
                    id="Path_37678"
                    d="m200.5 260.519 25.775 13.746-49.581 26.443-49.584-26.443 25.775-13.746a143.2 143.2 0 0 0 23.806 18.7 143.2 143.2 0 0 0 23.809-18.7"
                    data-name="Path 37678"
                    transform="translate(-97.691 -200.223)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_9999"
                data-name="Group 9999"
                transform="translate(-245.792 274.885)"
              >
                <g
                  id="Group_10000"
                  data-name="Group 10000"
                  transform="translate(500 2235)"
                >
                  <g
                    id="Group_9999-2"
                    fill="none"
                    stroke="#2abcaf"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    clipPath="url(#clip-path-3)"
                    data-name="Group 9999"
                  >
                    <path
                      id="Path_37679"
                      d="M57.354 185.849A67.5 67.5 0 0 1 85.49 57"
                      data-name="Path 37679"
                      transform="translate(-13.697 -43.371)"
                    ></path>
                    <path
                      id="Path_37680"
                      d="M328.474 82.625a67.5 67.5 0 0 1-28.136 128.854"
                      data-name="Path 37680"
                      transform="translate(-228.545 -62.874)"
                    ></path>
                    <path
                      id="Path_37681"
                      d="m300.338 18 9.321 9.321-9.321 9.322"
                      data-name="Path 37681"
                      transform="translate(-233.207 -13.698)"
                    ></path>
                    <path
                      id="Path_37682"
                      d="M270.664 601.319 261.343 592l9.321-9.322"
                      data-name="Path 37682"
                      transform="translate(-194.21 -443.393)"
                    ></path>
                    <circle
                      id="Ellipse_1833"
                      cx="43.817"
                      cy="43.817"
                      r="43.817"
                      data-name="Ellipse 1833"
                      transform="translate(27.976 37.298)"
                    ></circle>
                    <path
                      id="Path_37683"
                      d="M143.348 375.922c4.026-1.171 9.023-2.618 13.705-3.968a10.973 10.973 0 0 1 14.007 11.089l-1.043 21"
                      data-name="Path 37683"
                      transform="translate(-113.415 -281.82)"
                    ></path>
                    <path
                      id="Path_37684"
                      d="M170.6 192.724c1.024 5.271 2.84 10.977 6.061 15.3 7.975 10.706-5.669 19.313-14.905 11.964a34.7 34.7 0 0 0-11.308-6.167h0"
                      data-name="Path 37684"
                      transform="translate(-118.622 -150.701)"
                    ></path>
                    <path
                      id="Path_37685"
                      d="m362.082 311.2-11.775-11.815a13.134 13.134 0 0 1 .283-18.814l.7-9.132a11.78 11.78 0 0 1 6.546-9.676l13.943-6.858"
                      data-name="Path 37685"
                      transform="translate(-262.383 -196.301)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg></div>




        <ProjectOverview>
          <img src={awsUrl("website/ne-products/Subtraction11.png")} alt="右下裝飾圖" className="circle-right" />
          <div className="main">服務專案</div>
          <div className="content">
            <div className="item">
              <a href='https://www.zerozero.com.tw/NEproducts' target='_blank' style={{ colors: 'black' }}>
                <div className="image-container" >
                  <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/ae23a91799b3586c45ce7104e1711187.jpeg" alt="圖片描述" />
                  <div className="hover-overlay"  >
                    <div style={{
                     textAlign: 'left',
                     marginBottom: '0',
                     marginTop: '50px',
                     marginRight: '50px',
                     marginLeft: '30px',
                     lineHeight: '1.6',
                     width: '350px',
                     fontSize: '24px',
                     color: 'black'
                    }}> 與企業合作，提供即期品作為民眾回收誘因。減少剩品浪費，促進資源循環，實現資源共享，傳遞社會溫暖，推動永續環境發展。</div>

                    <div style={{
                      textAlign: 'right',
                      fontSize: '24px',
                      marginRight: '20px',
                      color: 'black',
                      fontFamily:'Arial'

                    }}>More⭢</div>
                  </div>

                </div></a>

              <div className="label">即期品募集專案</div>
            </div>
            <div className="item">
              <a href='https://www-dev.zerozero.com.tw/scavenger' target='_blank' style={{ colors: 'black' }}>
                <div className="image-container">
                  <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/e5700d5425d4f06714d5988149ea9d09.jpeg" alt="圖片描述" />
                  <div className="hover-overlay"  >
                    <div style={{
                     textAlign: 'left',
                     marginBottom: '0',
                     marginTop: '50px',
                     marginRight: '50px',
                     marginLeft: '30px',
                     lineHeight: '1.6',
                     width: '350px',
                     fontSize: '24px',
                     color: 'black'
                    }}> 媒合企業資源，協助拾荒者獲得生活保障與必要支持。提升回收工作價值，改善生活條件，實現社會共融與資源永續目標。</div>

                    <div style={{
                      textAlign: 'right',
                      fontSize: '24px',
                      marginRight: '20px',
                      color: 'black',
                      fontFamily:'Arial'

                    }}>More⭢</div>
                  </div>
                </div>
              </a>

              <div className="label">拾荒者援助專案</div>

            </div>
            <div className="item">
              <a href='https://www-dev.zerozero.com.tw/NEproducts' target='_blank' style={{ colors: 'black' }}>
                <div className="image-container">
                  <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/bd899c439d102fd793ac47c7bfc2dc91.jpeg" alt="圖片描述" />
                  <div className="hover-overlay"  >
                    <div style={{
                      textAlign: 'left',
                      marginBottom: '0',
                      marginTop: '50px',
                      marginRight: '50px',
                      marginLeft: '30px',
                      lineHeight: '1.6',
                      width: '350px',
                      fontSize: '24px',
                      color: 'black'
                    }}> 透過環境教育推廣回收知識，培養全民環保意識，促進資源循環行動，落實知行合一，推動永續發展，守護未來世代的生活環境。</div>

                    <div style={{
                       textAlign: 'right',
                       fontSize: '24px',
                       marginRight: '20px',
                       color: 'black',
                       fontFamily:'Arial'

                    }}>More⭢</div>
                  </div>
                </div>
              </a>
              <div className="label">環境教育活動規劃</div>
            </div>
          </div>
        </ProjectOverview>


        {/* <ProjectResult
    xmlns="http://www.w3.org/2000/svg"
    width="437.75"
    height="178.296"
    viewBox="0 0 437.75 178.296"
  >
    <g
      id="Group_10018"
      data-name="Group 10018"
      transform="translate(-288 -4041.145)"
    >
      <text
        id="ä_ç_æ_å_ç__2"
        fill="#252525"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="24"
        transform="translate(360 4116.645)"
      >
        <tspan x="-72" y="0">
          專案成果
        </tspan>
      </text>
      <text
        id="ä_ç_æ_å_ç__2-2"
        fill="rgba(35,211,196,0.15)"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="ArialMT, Arial"
        fontSize="26px"
        transform="translate(291.75 4095.145)"
      >
        <tspan x="0" y="0">
          ACHIEVEMENT
        </tspan>
      </text>
      <g
        id="Group_10010"
        data-name="Group 10010"
        transform="translate(-635 -233.347)"
      >
        <g
          id="Icon_ionic-ios-arrow-dropright"
          fill="#2abcaf"
          data-name="Icon ionic-ios-arrow-dropright"
          transform="translate(967.375 4417.413)"
        >
          <path
            id="Path_37664"
            d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
            data-name="Path 37664"
            transform="translate(1.531)"
          ></path>
          <path
            id="Path_37665"
            d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
            data-name="Path 37665"
          ></path>
        </g>
        <g
          id="Icon_ionic-ios-arrow-dropright-2"
          data-name="Icon ionic-ios-arrow-dropright"
          transform="translate(923 4420.788)"
        >
          <g
            id="Icon_ionic-ios-arrow-dropright-3"
            fill="#bfbfbf"
            data-name="Icon ionic-ios-arrow-dropright"
            transform="rotate(180 17.688 17.688)"
          >
            <path
              id="Path_37664-2"
              d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
              data-name="Path 37664"
              transform="translate(1.531)"
            ></path>
            <path
              id="Path_37665-2"
              d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
              data-name="Path 37665"
            ></path>
          </g>
        </g>
      </g>
    </g>

  </ProjectResult> */}
        <div style={{ backgroundColor: 'white', padding: '170px 0', textAlign: 'left' }}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="84.5"
    viewBox="0 0 437.75 84.5"
  >
    <g
      id="Group_10015"
      data-name="Group 10015"
      transform="translate(-288 -4041.145)"
    >
      <g id="Group_10014" data-name="Group 10014">
        <text
          id="ä_ç_æ_å_ç__2"
          fill="#252525"
          data-name="ä¸ç§æå¾ªç°_2"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="36"
          transform="translate(360 4116.645)"
          fontWeight={500}
        >
          <tspan x="-530" y="0">
            專案成果
          </tspan>
        </text>
      </g>
      <text
        id="ä_ç_æ_å_ç__2-2"
        fill="rgba(35,211,196,0.15)"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="ArialMT, Arial"
        fontSize="60"
        transform="translate(291.75 4095.145)"
      >
        <tspan x="-470" y="0">
          ACHIEVEMENT
        </tspan>
      </text>
    </g>
  </svg>
  <StyledSliderHTML>
          <div className="wrapper">
          <div className="carousel-container">

           <Slider 
              ref={this.sliderRef}
              {...settings}
              className={`carousel ${this.state.isSlickReady ? 'ready' : ''}`}
            >
          <div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90%"
    height="100%"
    viewBox="0 0 319 426.249"
  >
    <g
      id="Group_10018"
      data-name="Group 10018"
      transform="translate(-288 -4274.159)"
    >
      <g id="Group_10013" data-name="Group 10013">
        <g
          id="Rectangle_4821"
          fill="#fff"
          stroke="#e6e6e6"
          strokeWidth="1"
          data-name="Rectangle 4821"
          transform="translate(288 4274.159)"
        >
          <rect width="319" height="426.249" stroke="none" rx="10"></rect>
          <rect
            width="318"
            height="425.249"
            x="0.5"
            y="0.5"
            fill="none"
            rx="9.5"
          ></rect>
        </g>
        <text
          id="即期物資募集_"
          fill="#252525"
          data-name="即期物資募集​"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="30"
          fontweight={400}
          transform="translate(448 4639.943)"
        >
          <tspan x="-90" y="0">
            即期物資募集
          </tspan>
          <tspan y="0" fontFamily="SegoeUI, Segoe UI">
            ​
          </tspan>
        </text>
        <g
          id="Group_10011"
          fill="#2abcaf"
          data-name="Group 10011"
          transform="translate(0 -22.136)"
        >
          <text
            id="_1000"
            data-name="1000"
            fontFamily="ArialMT, Arial"
            fontSize="66"
            transform="translate(476 4402.443)"
          >
            <tspan x="-146.824" y="0">
              1000
            </tspan>
          </text>
          <text
            id="公斤"
            fontFamily="YuGothicUI-Regular, Yu Gothic UI"
            fontSize="30"
            transform="translate(491.947 4400.443)"
          >
            <tspan x="0" y="0">
              公斤
            </tspan>
          </text>
        </g>
        <g
          id="Group_10012"
          fill="none"
          stroke="#2abcaf"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          data-name="Group 10012"
          transform="translate(373 4464.805)"
        >
          <path
            id="Path_37687"
            d="M170.06 261.33v39.415H49.893v-38.787"
            data-name="Path 37687"
            transform="translate(-35.348 -185.148)"
          ></path>
          <path
            id="Path_37688"
            d="M68.66 203.506H15V202l12.662-22.285h57.447Z"
            data-name="Path 37688"
            transform="translate(-10.627 -127.325)"
          ></path>
          <path
            id="Path_37689"
            d="m255.5 179.714 16.741 23.792H325.9V202l-12.662-22.285Z"
            data-name="Path 37689"
            transform="translate(-181.018 -127.325)"
          ></path>
          <path
            id="Line_515"
            d="M0 0v63.208"
            data-name="Line 515"
            transform="translate(74.482 52.389)"
          ></path>
          <path
            id="Path_37690"
            d="m140.788 49.169-5.9-5.9V24.751H118.9v18.518l-5.9 5.9a27.48 27.48 0 0 0-8.051 19.431v1.324h43.888V68.6a27.48 27.48 0 0 0-8.049-19.431"
            data-name="Path 37690"
            transform="translate(-74.355 -17.536)"
          ></path>
          <path
            id="Path_37691"
            d="M248.152 51.764 266.008 32.6a55.43 55.43 0 0 1 38.6-17.6l4.772 4.448a55.43 55.43 0 0 1-14.845 39.741l-3.567 3.828"
            data-name="Path 37691"
            transform="translate(-175.812 -10.627)"
          ></path>
          <path
            id="Line_516"
            d="M10.41 9.623 0 0"
            data-name="Line 516"
            transform="translate(117.534 25.543)"
          ></path>
          <path
            id="Line_517"
            d="M12.156 11.25 0 0"
            data-name="Line 517"
            transform="translate(105.875 38.053)"
          ></path>
        </g>
      </g>
    </g>
  </svg>

          </div>
          <div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90%"
    height="100%"
    viewBox="0 0 319 426.249"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Rectangle_4786"
          fill="none"
          stroke="#2abcaf"
          d="M0 0h124v124H0z"
          data-name="Rectangle 4786"
        ></path>
      </clipPath>
      <clipPath id="clip-path">
        <path
          id="Rectangle_4786"
          fill="none"
          stroke="#2abcaf"
          strokeWidth="4"
          d="M0 0h124v124H0z"
          data-name="Rectangle 4786"
        ></path>
      </clipPath>
      <g
        id="Group_10019"
        data-name="Group 10019"
        transform="translate(-627 -4274.159)"
      >
        <g id="Group_10014" data-name="Group 10014" transform="translate(339)">
          <g
            id="Rectangle_4821"
            fill="#fff"
            stroke="#e6e6e6"
            data-name="Rectangle 4821"
            transform="translate(288 4274.159)"
          >
            <rect width="319" height="426.249" stroke="none" rx="10"></rect>
            <rect
              width="318"
              height="425.249"
              x="0.5"
              y="0.5"
              fill="none"
              rx="9.5"
            ></rect>
          </g>
          <text
            id="拾荒者_援助_人數"
            fill="#252525"
            data-name="拾荒者​援助​人數"
            transform="translate(448 4639.943)"
          >
            <tspan x="-105" y="0">
              拾荒者
            </tspan>
            <tspan y="0">​</tspan>
            <tspan y="0">援助</tspan>
            <tspan y="0">​</tspan>
            <tspan y="0">人數</tspan>
          </text>
          <g
            id="Group_10011"
            fill="#2abcaf"
            data-name="Group 10011"
            transform="translate(0 -22.136)"
          >
            <text id="_99" data-name="99" transform="translate(476 4402.443)">
              <tspan x="-73.412" y="0">
                99
              </tspan>
            </text>
            <text id="人" transform="translate(491.947 4400.443)">
              <tspan x="0" y="0">
                人
              </tspan>
            </text>
          </g>
          <g
            id="Group_10006"
            data-name="Group 10006"
            transform="translate(-421 -295.099)"
          >
            <g
              id="Group_9972"
              data-name="Group 9972"
              transform="translate(806.5 4751.5)"
            >
              <g
                id="Group_9971"
                fill="none"
                stroke="#2abcaf"
                data-name="Group 9971"
              >
                <path
                  id="Path_37655"
                  d="M78.367 243.8v26.052H49.3v-14.53L37.782 243.8A60.12 60.12 0 0 1 20 201.455v-18.789A14.53 14.53 0 0 1 34.531 197.2c0 15.882 6.551 23.849 17.782 35.08l4.257 4.257"
                  data-name="Path 37655"
                  transform="translate(-16.848 -149.967)"
                ></path>
                <path
                  id="Path_37656"
                  d="M137.133 355.8a19.07 19.07 0 0 1 25.75 3.174c10.983 13 11.341 17.537 11.341 17.537s.358-4.534 11.341-17.537a19.07 19.07 0 0 1 25.75-3.174"
                  data-name="Path 37656"
                  transform="translate(-112.705 -288.696)"
                ></path>
                <path
                  id="Path_37657"
                  d="m367.4 232.261-4.274 4.274 4.257-4.257c11.231-11.231 17.782-19.2 17.782-35.08a14.53 14.53 0 0 1 14.535-14.531v18.788a60.12 60.12 0 0 1-17.781 42.345L370.4 255.323v14.531h-29.066"
                  data-name="Path 37657"
                  transform="translate(-279.814 -149.968)"
                ></path>
                <path
                  id="Path_37658"
                  d="M184.419 37.284c0-9.692 7.117-17.284 16.206-17.284a15.18 15.18 0 0 1 12.431 6.627A15.65 15.65 0 0 1 225.774 20c9.089 0 16.209 7.592 16.209 17.284 0 11.925-10.49 18.668-29.062 34.749-19.207-16.541-28.502-22.97-28.502-34.749Z"
                  data-name="Path 37658"
                  transform="translate(-151.402 -16.848)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </defs>
    <g
      id="Group_10019"
      data-name="Group 10019"
      transform="translate(-627 -4274.159)"
    >
      <g id="Group_10014" data-name="Group 10014" transform="translate(339)">
        <g
          id="Rectangle_4821"
          fill="#fff"
          stroke="#e6e6e6"
          strokeWidth="1"
          data-name="Rectangle 4821"
          transform="translate(288 4274.159)"
        >
          <rect width="319" height="426.249" stroke="none" rx="10"></rect>
          <rect
            width="318"
            height="425.249"
            x="0.5"
            y="0.5"
            fill="none"
            rx="9.5"
          ></rect>
        </g>
        <text
          id="拾荒者_援助_人數"
          fill="#252525"
          data-name="拾荒者​援助​人數"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="30"
          transform="translate(448 4639.943)"
        >
          <tspan x="-105" y="0">
            拾荒者
          </tspan>
          <tspan y="0" fontFamily="SegoeUI, Segoe UI">
            ​
          </tspan>
          <tspan y="0">援助</tspan>
          <tspan y="0" fontFamily="SegoeUI, Segoe UI">
            ​
          </tspan>
          <tspan y="0">人數</tspan>
        </text>
        <g
          id="Group_10011"
          fill="#2abcaf"
          data-name="Group 10011"
          transform="translate(0 -22.136)"
        >
          <text
            id="_99"
            data-name="99"
            fontFamily="ArialMT, Arial"
            fontSize="66"
            transform="translate(476 4402.443)"
          >
            <tspan x="-73.412" y="0">
              99
            </tspan>
          </text>
          <text
            id="人"
            fontFamily="YuGothicUI-Regular, Yu Gothic UI"
            fontSize="30"
            transform="translate(491.947 4400.443)"
          >
            <tspan x="0" y="0">
              人
            </tspan>
          </text>
        </g>
        <g
          id="Group_10006"
          data-name="Group 10006"
          transform="translate(-421 -295.099)"
        >
          <g
            id="Group_9972"
            data-name="Group 9972"
            transform="translate(806.5 4751.5)"
          >
            <g
              id="Group_9971"
              fill="none"
              stroke="#2abcaf"
              strokeMiterlimit="13.333"
              strokeWidth="4"
              clipPath="url(#clip-path)"
              data-name="Group 9971"
            >
              <path
                id="Path_37655"
                d="M78.367 243.8v26.052H49.3v-14.53L37.782 243.8A60.12 60.12 0 0 1 20 201.455v-18.789A14.53 14.53 0 0 1 34.531 197.2c0 15.882 6.551 23.849 17.782 35.08l4.257 4.257"
                data-name="Path 37655"
                transform="translate(-16.848 -149.967)"
              ></path>
              <path
                id="Path_37656"
                d="M137.133 355.8a19.07 19.07 0 0 1 25.75 3.174c10.983 13 11.341 17.537 11.341 17.537s.358-4.534 11.341-17.537a19.07 19.07 0 0 1 25.75-3.174"
                data-name="Path 37656"
                transform="translate(-112.705 -288.696)"
              ></path>
              <path
                id="Path_37657"
                d="m367.4 232.261-4.274 4.274 4.257-4.257c11.231-11.231 17.782-19.2 17.782-35.08a14.53 14.53 0 0 1 14.535-14.531v18.788a60.12 60.12 0 0 1-17.781 42.345L370.4 255.323v14.531h-29.066"
                data-name="Path 37657"
                transform="translate(-279.814 -149.968)"
              ></path>
              <path
                id="Path_37658"
                d="M184.419 37.284c0-9.692 7.117-17.284 16.206-17.284a15.18 15.18 0 0 1 12.431 6.627A15.65 15.65 0 0 1 225.774 20c9.089 0 16.209 7.592 16.209 17.284 0 11.925-10.49 18.668-29.062 34.749-19.207-16.541-28.502-22.97-28.502-34.749Z"
                data-name="Path 37658"
                transform="translate(-151.402 -16.848)"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
          </div>
          <div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90%"
    height="100%"
    viewBox="0 0 319 426.249"
  >
    <g
      id="Group_10020"
      data-name="Group 10020"
      transform="translate(-966 -4274.159)"
    >
      <text
        id="公斤"
        fill="#252525"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="30"
        transform="translate(1190.123 4400.443)"
      >
        <tspan x="0" y="0">
          公斤
        </tspan>
      </text>
      <g
        id="Rectangle_4821"
        fill="#fff"
        stroke="#e6e6e6"
        strokeWidth="1"
        data-name="Rectangle 4821"
        transform="translate(966 4274.159)"
      >
        <rect width="319" height="426.249" stroke="none" rx="10"></rect>
        <rect
          width="318"
          height="425.249"
          x="0.5"
          y="0.5"
          fill="none"
          rx="9.5"
        ></rect>
      </g>
      <text
        id="環教活動_舉辦_場次"
        fill="#252525"
        data-name="環教活動​舉辦​場次"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="30"
        transform="translate(1126 4639.943)"
      >
        <tspan x="-120" y="0">
          環教活動
        </tspan>
        <tspan y="0" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
        <tspan y="0">舉辦</tspan>
        <tspan y="0" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
        <tspan y="0">場次</tspan>
      </text>
      <g
        id="Group_10011"
        fill="#2abcaf"
        data-name="Group 10011"
        transform="translate(678 -22.136)"
      >
        <text
          id="_99"
          data-name="99"
          fontFamily="ArialMT, Arial"
          fontSize="66"
          transform="translate(476 4402.443)"
        >
          <tspan x="-73.412" y="0">
            99
          </tspan>
        </text>
        <text
          id="場"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="30"
          transform="translate(491.947 4400.443)"
        >
          <tspan x="0" y="0">
            場
          </tspan>
        </text>
      </g>
      <g
        id="Group_3"
        fill="none"
        stroke="#2abcaf"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        transform="translate(11.74 -1623.627)"
      >
        <path
          id="Vector_33"
          strokeMiterlimit="22.926"
          d="M1106.745 6088.12v23.48l-11.71-3.348-11.694 3.348v-23.48"
          transform="translate(18.237 3.439)"
        ></path>
        <path
          id="Vector_34"
          strokeMiterlimit="22.926"
          d="m1083.05 6088.7-8.489 25.578-10.06-6.9-12.171-.492 7.743-23.119"
          transform="translate(.041 .88)"
        ></path>
        <path
          id="Vector_35"
          strokeMiterlimit="22.926"
          d="m1109.75 6088.7 8.569 25.578 10.06-6.9 12.17-.492-7.759-23.135"
          transform="translate(33.733 .874)"
        ></path>
        <path
          id="Vector_36"
          strokeMiterlimit="22.926"
          d="M1052.26 6082.26a197.7 197.7 0 0 0 122.038 0"
        ></path>
        <path
          id="Vector_37"
          strokeMiterlimit="22.926"
          d="M1122.457 6132.015c3.935-1.571 6.109-5.427 6.109-9.918a10.67 10.67 0 0 0-10.663-10.646c-5.125 0-9.187 2.935-10.2 7.743"
          transform="translate(32.53 17.127)"
        ></path>
        <path
          id="Vector_38"
          strokeMiterlimit="22.926"
          d="M1112.675 6148.281a15.741 15.741 0 1 0-15.725-15.74 15.74 15.74 0 0 0 15.725 15.74"
          transform="translate(26.222 20.267)"
        ></path>
        <path
          id="Vector_39"
          strokeMiterlimit="22.926"
          d="M1123.283 6119.751a18.31 18.31 0 0 1-16.661 10.377 17.95 17.95 0 0 1-9.282-2.412"
          transform="translate(26.451 21.997)"
        ></path>
        <path
          id="Vector_40"
          strokeMiterlimit="22.926"
          d="m1095.737 6125.92.079 1.316a15.828 15.828 0 0 1-31.656 0v-1.316"
          transform="translate(6.982 25.618)"
        ></path>
        <path
          id="Vector_41"
          strokeMiterlimit="22.926"
          d="M1132.7 6172.117v-15.6a19.9 19.9 0 0 0-19.9-19.9 20.56 20.56 0 0 0-16.074 8.093"
          transform="translate(26.093 31.896)"
        ></path>
        <path
          id="Vector_42"
          strokeMiterlimit="22.926"
          d="M1098.188 6145.5a21 21 0 0 0-16.661-8.791 19.984 19.984 0 0 0-19.977 19.977v15.393"
          transform="translate(5.451 31.949)"
        ></path>
        <path
          id="Vector_43"
          strokeMiterlimit="22.926"
          d="M1094.307 6156.34a9.735 9.735 0 1 0-9.727-9.728 9.73 9.73 0 0 0 9.727 9.728"
          transform="translate(18.964 32.043)"
        ></path>
        <path
          id="Vector_44"
          strokeMiterlimit="10"
          d="M1082.21 6162.634a13.5 13.5 0 1 1 26.991 0"
          transform="translate(17.574 39.237)"
        ></path>
        <path
          id="Vector_45"
          strokeMiterlimit="10"
          d="M1064.16 6131.542a15.19 15.19 0 0 1 15.185-15.2h16.391v15.2s-15.185-7.252-31.576 0"
          transform="translate(6.982 19.996)"
        ></path>
      </g>
    </g>
  </svg>
          </div>

          <div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
   width="90%"
    height="100%"
    viewBox="0 0 319 426.249"
  >
    <g
      id="Group_10016"
      data-name="Group 10016"
      transform="translate(-288 -4274.159)"
    >
      <g
        id="Rectangle_4821"
        fill="#fff"
        stroke="#e6e6e6"
        strokeWidth="1"
        data-name="Rectangle 4821"
        transform="translate(288 4274.159)"
      >
        <rect width="319" height="426.249" stroke="none" rx="10"></rect>
        <rect
          width="318"
          height="425.249"
          x="0.5"
          y="0.5"
          fill="none"
          rx="9.5"
        ></rect>
      </g>
      <text
        id="促進回收量"
        fill="#252525"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="30"
        transform="translate(448 4639.943)"
      >
        <tspan x="-75" y="0">
          促進回收量
        </tspan>
      </text>
      <g
        id="Group_10011"
        fill="#2abcaf"
        data-name="Group 10011"
        transform="translate(0 -22.136)"
      >
        <text
          id="_1000"
          data-name="1000"
          fontFamily="ArialMT, Arial"
          fontSize="66"
          transform="translate(476 4402.443)"
        >
          <tspan x="-146.824" y="0">
            1000
          </tspan>
        </text>
        <text
          id="公斤"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="30"
          transform="translate(491.947 4400.443)"
        >
          <tspan x="0" y="0">
            公斤
          </tspan>
        </text>
      </g>
      <g
        id="recyclable_1_"
        fill="none"
        stroke="#2abcaf"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        data-name="recyclable (1)"
        transform="translate(369 4430.007)"
      >
        <path
          id="Path_37646"
          d="m94.663 85.545 27.456-42.709a14.867 14.867 0 0 1 25.024 0l1.975 3.072"
          data-name="Path 37646"
          transform="translate(-56.167)"
        ></path>
        <path
          id="Path_37647"
          d="m361.909 156 29.876 46.473a14.866 14.866 0 0 1-12.512 22.89h-14.864"
          data-name="Path 37647"
          transform="translate(-257.209 -90.273)"
        ></path>
        <path
          id="Path_37648"
          d="M87.382 345.727H34.864a14.866 14.866 0 0 1-12.512-22.89L26.747 316"
          data-name="Path 37648"
          transform="translate(0 -210.637)"
        ></path>
        <path
          id="Path_37649"
          d="m252 415.818 9.909-9.909L252 396"
          data-name="Path 37649"
          transform="translate(-174.527 -270.819)"
        ></path>
        <path
          id="Path_37650"
          d="m348.939 169.64 3.213-13.64 13.64 3.213"
          data-name="Path 37650"
          transform="translate(-247.452 -90.273)"
        ></path>
        <path
          id="Path_37651"
          d="M99.927 191.507 86.194 194.3l-2.789-13.733"
          data-name="Path 37651"
          transform="translate(-47.698 -108.751)"
        ></path>
      </g>
    </g>
  </svg>
          </div>


          <div>
          <svg
    xmlns="http://www.w3.org/2000/svg"
   width="90%"
    height="100%"
    viewBox="0 0 319 426.249"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="path2130"
          fill="none"
          d="M0-682.665h134.771v134.771H0Z"
          transform="translate(0 682.665)"
        ></path>
      </clipPath>
    </defs>
    <g
      id="Group_10017"
      data-name="Group 10017"
      transform="translate(-288 -4274.159)"
    >
      <g
        id="Rectangle_4821"
        fill="#fff"
        stroke="#e6e6e6"
        strokeWidth="1"
        data-name="Rectangle 4821"
        transform="translate(288 4274.159)"
      >
        <rect width="319" height="426.249" stroke="none" rx="10"></rect>
        <rect
          width="318"
          height="425.249"
          x="0.5"
          y="0.5"
          fill="none"
          rx="9.5"
        ></rect>
      </g>
      <text
        id="協助減少碳排量"
        fill="#252525"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="30"
        transform="translate(448 4639.943)"
      >
        <tspan x="-105" y="0">
          協助減少碳排量
        </tspan>
      </text>
      <g
        id="Group_10011"
        fill="#2abcaf"
        data-name="Group 10011"
        transform="translate(0 -22.136)"
      >
        <text
          id="_1000"
          data-name="1000"
          fontFamily="ArialMT, Arial"
          fontSize="66"
          transform="translate(476 4402.443)"
        >
          <tspan x="-146.824" y="0">
            1000
          </tspan>
        </text>
        <text
          id="公斤"
          fontFamily="YuGothicUI-Regular, Yu Gothic UI"
          fontSize="30"
          transform="translate(491.947 4400.443)"
        >
          <tspan x="0" y="0">
            公斤
          </tspan>
        </text>
      </g>
      <g id="g2124" transform="translate(380 5140.069)">
        <g id="g2126" transform="translate(0 -682.665)">
          <g id="g2128" clipPath="url(#clip-path)">
            <g id="g2134" transform="translate(3.948 3.948)">
              <path
                id="path2136"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M-395.939-126.273h-.141a17 17 0 0 0 .141-2.108 18.426 18.426 0 0 0-18.426-18.419 18.35 18.35 0 0 0-11.668 4.168 28.93 28.93 0 0 0-25.183-14.7 28.955 28.955 0 0 0-28.955 28.955 28.8 28.8 0 0 0 3.716 14.166 23.69 23.69 0 0 0-16.878 22.685 23.69 23.69 0 0 0 23.69 23.69 23.6 23.6 0 0 0 17.11-7.333 23.6 23.6 0 0 0 17.11 7.333 23.62 23.62 0 0 0 18.2-8.555 29.4 29.4 0 0 0 21.282 9.081 29.48 29.48 0 0 0 29.481-29.481 29.48 29.48 0 0 0-29.479-29.482"
                transform="translate(493.332 157.333)"
              ></path>
            </g>
            <g id="g2138" transform="translate(97.204 56.593)">
              <path
                id="path2140"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M-40.36-74.738s-8.793.111-9.209-.028.668-.872 6.432-9.109a11.6 11.6 0 0 0 1.922-3.925l.089-.7a4.624 4.624 0 0 0-4.624-4.624 4.626 4.626 0 0 0-4.537 3.728"
                transform="translate(50.288 93.122)"
              ></path>
            </g>
            <g id="g2142" transform="translate(63.7 35.535)">
              <path
                id="path2144"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M-107.011-53.505a13.16 13.16 0 0 1-13.161 13.161 13.16 13.16 0 0 1-13.161-13.161 13.16 13.16 0 0 1 13.161-13.161 13.16 13.16 0 0 1 13.161 13.161"
                transform="translate(133.333 66.667)"
              ></path>
            </g>
            <g id="g2146" transform="translate(33.956 35.535)">
              <path
                id="path2148"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M-83.421-9.138a13.1 13.1 0 0 0-7.358-2.248 13.16 13.16 0 0 0-13.162 13.162A13.16 13.16 0 0 0-90.78 14.937a10.58 10.58 0 0 0 7.223-2.613 10.5 10.5 0 0 0 1.068-1.1"
                transform="translate(103.941 11.385)"
              ></path>
            </g>
            <g id="g2150" transform="translate(67.385 109.764)">
              <path
                id="path2152"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M0-85.609v-21.058"
                transform="translate(0 106.666)"
              ></path>
            </g>
            <g id="g2154" transform="translate(59.489 122.925)">
              <path
                id="path2156"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="m0 0 7.9 7.9L15.8 0"
              ></path>
            </g>
            <g id="g2158" transform="translate(104.237 109.764)">
              <path
                id="path2160"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M0-85.609v-21.058"
                transform="translate(0 106.666)"
              ></path>
            </g>
            <g id="g2162" transform="translate(96.34 122.925)">
              <path
                id="path2164"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="m0 0 7.9 7.9L15.8 0"
              ></path>
            </g>
            <g id="g2166" transform="translate(30.534 109.764)">
              <path
                id="path2168"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M0-85.609v-21.058"
                transform="translate(0 106.666)"
              ></path>
            </g>
            <g id="g2170" transform="translate(22.637 122.925)">
              <path
                id="path2172"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="m-64.206 0-7.9 7.9L-80 0"
                transform="translate(80)"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
          </div>

          </Slider>
          </div>
         
          <div className="svg-container">
          <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="-10 0 864 640"
  >
    <defs>
      <pattern
        id="pattern"
        width="1"
        height="1"
        viewBox="337.765 124.233 620.777 459.835"
      >
        <image
          xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/1bd70afd97ce2e08303b4086a5de46db.png"
          width="1137.924"
          height="640"
          preserveAspectRatio="xMidYMid slice"
        ></image>
      </pattern>
    </defs>
    <path
      id="planet-earth-boy-s-hands-saves-protects-world-blurred-green-nature-background"
      fill="url(#pattern)"
      d="M320 0h544v640H320A320 320 0 0 1 0 320 320 320 0 0 1 320 0"
    ></path>
  </svg>
          </div>
         
          </div>


        </StyledSliderHTML >
  
        <ImageSliderWrapper>
  <div className="wrapper">
    <div className="carousel-container">
      <Slider 
        ref={this.sliderRef} 
        {...settings2}
      >
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <img 
              src={image} 
              alt={`slide-${index}`}
              onClick={() => {
                if (this.sliderRef.current) {
                  this.sliderRef.current.slickNext();
                }
              }}
            />
          </div>
        ))}
      </Slider>
      {/* 添加右侧 SVG */}
      <div className="right-svg">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width="533"
    height="371.639"
    viewBox="0 0 533 371.639"
  >
    <g
      id="Group_10019"
      data-name="Group 10019"
      transform="translate(-1051.25 -4961.148)"
    >
      <text
        id="攜手彰化市公所_舉辦愛心公益活動_發送民生物資裡包給予弱勢族群_"
        fill="#252525"
        data-name="攜手彰化市公所，舉辦愛心公益活動，​ 發送民生物資裡包給予弱勢族群。​"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="24"
        fontweight="400"
        transform="translate(1052.25 5229.788)"
      >
        <tspan x="0" y="26">
          攜手彰化市公所，舉辦愛心公益活動，
        </tspan>
        <tspan y="26" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
        <tspan x="0" y="66">
          發送民生物資裡包給予弱勢族群。
        </tspan>
        <tspan y="66" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
      </text>
      <text
        id="å_é_æ_å__23"
        fill="#252525"
        data-name="åé¡æå_23"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="30"
        transform="translate(1052.25 5156.788)"
        fontWeight={500}
      >
        <tspan x="0" y="32">
          愛心送暖
        </tspan>
        <tspan y="32" fontFamily="SegoeUI, Segoe UI"></tspan>
        <tspan y="32">幸福滿滿公益活動</tspan>
        <tspan y="32" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
      </text>
      <text
        id="ä_ç_æ_å_ç__2"
        fill="#252525"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="36"
        transform="translate(1124.25 5036.648)"
        fontWeight={500}
      >
        <tspan x="-72" y="0">
          合作案例
        </tspan>
      </text>
      <text
        id="ä_ç_æ_å_ç__2-2"
        fill="rgba(35,211,196,0.15)"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="ArialMT, Arial"
        fontSize="60"
        transform="translate(1052.25 5015.148)"
      >
        <tspan x="0" y="0">
          ACTION
        </tspan>
      </text>
    </g>
  </svg>
      </div>
    </div>
  </div>
<div style={{textAlign: 'center', marginTop: '210px'}}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="902.658"
    height="361"
    viewBox="0 0 902.658 361"
  >
    <defs>
      <filter
        id="Rectangle_4783"
        width="443.316"
        height="266"
        x="0"
        y="95"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3"></feOffset>
        <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
        <feFlood floodOpacity="0.161"></feFlood>
        <feComposite in2="blur" operator="in"></feComposite>
        <feComposite in="SourceGraphic"></feComposite>
      </filter>
      <filter
        id="Rectangle_4813"
        width="443.316"
        height="266"
        x="459.342"
        y="95"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3"></feOffset>
        <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
        <feFlood floodOpacity="0.161"></feFlood>
        <feComposite in2="blur-2" operator="in"></feComposite>
        <feComposite in="SourceGraphic"></feComposite>
      </filter>
      <pattern
        id="pattern_1"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 225 225"
      >
        <image
          xlinkHref="data:image/png;base64,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"
          width="225"
          height="225"
        ></image>
      </pattern>
    </defs>
    <g
      id="Group_10020"
      data-name="Group 10020"
      transform="translate(-509 -5807.648)"
    >
      <text
        id="ä_ç_æ_å_ç__2"
        fill="#252525"
        data-name="ä¸ç§æå¾ªç°_2"
        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
        fontSize="36"
        transform="translate(960 5846.648)"
        fontWeight={500}
      >
        <tspan x="-72" y="0">
          合作夥伴
        </tspan>
        <tspan y="0" fontFamily="SegoeUI, Segoe UI">
          ​
        </tspan>
      </text>
      <g
        id="Group_10008"
        data-name="Group 10008"
        transform="translate(230 -52)"
      >
        <g filter="url(#Rectangle_4783)" transform="translate(279 5859.65)">
          <rect
            id="Rectangle_4783-2"
            width="425.316"
            height="248"
            fill="#fff"
            data-name="Rectangle 4783"
            rx="10"
            transform="translate(9 101)"
          ></rect>
        </g>
        <g filter="url(#Rectangle_4813)" transform="translate(279 5859.65)">
          <rect
            id="Rectangle_4813-2"
            width="425.316"
            height="248"
            fill="#fff"
            data-name="Rectangle 4813"
            rx="10"
            transform="translate(468.34 101)"
          ></rect>
        </g>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb8AAAB5CAYAAACp1S9vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMTItMTZUMTc6MDk6NTMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEyLTE2VDE3OjExOjQ5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEyLTE2VDE3OjExOjQ5KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YWNkMzBlMi05NzgwLTRjYzktYjk1My05YTkzMWQzNDc5YWMiIHhtcE1NOkRvY3VtZW50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"
          id="橫式"
          width="370.3"
          height="100.238"
          transform="translate(315.409 6031.621)"
        ></image>
        <path
          id="_8fd86b408e2f482d86aa347c824d2bb6"
          fill="url(#pattern_1)"
          d="M0 0h300.429v209.547H0z"
          data-name="8fd86b408e2f482d86aa347c824d2bb6"
          transform="translate(809.786 5979.875)"
        ></path>
      </g>
    </g>
  </svg>
</div>
  
</ImageSliderWrapper>
        </div>
       

 
          {/* <svg

            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="60%"
            viewBox="0 0 1920 2127.503"
          >
            <defs>
              <clipPath id="clpath">
                <path fill="none" d="M-15-10h1032v450.249H-15z"></path>
              </clipPath>
              <clipPath id="clpath-2">
                <path
                  id="Rectangle_4786"
                  fill="none"
                  stroke="#2abcaf"
                  strokeWidth="4"
                  d="M0 0h124v124H0z"
                  data-name="Rectangle 4786"
                ></path>
              </clipPath>
              <clipPath id="clpath-3">
                <path
                  id="path2130"
                  fill="none"
                  d="M0-682.665h134.771v134.771H0Z"
                  transform="translate(0 682.665)"
                ></path>
              </clipPath>
              <pattern
                id="pattern"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 225 225"
              >
                <image
                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/2d482b96289f7c30e34cc88ee8eb7d11.png"
                  width="225"
                  height="225"
                ></image>
              </pattern>
              <pattern
                id="pattern-2"
                width="1"
                height="1"
                viewBox="0 77.965 906.403 604.268"

              >
                <image

                  xlinkHref={
                    showSquare
                      ?
                      'https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/9460bcef6f256a695005ebb0d9113985.png'
                      // 第一張圖片
                      :  // 第二張圖片
                      'https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/0b4f18a64679135bf998fccb7d1f5e18.png'
                  }
                  width="960"
                  height="720"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>

              <pattern
                id="pattern-3"
                width="1"
                height="1"
                viewBox="337.765 124.233 620.777 459.835"
              >
                <image
                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/1bd70afd97ce2e08303b4086a5de46db.png"
                  width="1137.924"
                  height="640"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
              <filter
                id="Rectangle_4783"
                width="443.316"
                height="266"
                x="509"
                y="1861.503"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3"></feOffset>
                <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                <feFlood floodOpacity="0.161"></feFlood>
                <feComposite in2="blur" operator="in"></feComposite>
                <feComposite in="SourceGraphic"></feComposite>
              </filter>
              <filter
                id="Rectangle_4813"
                width="443.316"
                height="266"
                x="968.342"
                y="1861.503"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3"></feOffset>
                <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
                <feFlood floodOpacity="0.161"></feFlood>
                <feComposite in2="blur-2" operator="in"></feComposite>
                <feComposite in="SourceGraphic"></feComposite>
              </filter>
            </defs>
            <g
              id="Group_10021"
              data-name="Group 10021"
              transform="translate(0 -4041.145)"
            >
              <g id="Group_10020" data-name="Group 10020">
                <text
                  id="ä_ç_æ_å_ç__2"
                  fill="#252525"
                  data-name="ä¸ç§æå¾ªç°_2"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="36"
                  fontWeight={500}
                  transform="translate(960 5846.648)"
                >
                  <tspan x="-72" y="0">
                    合作夥伴
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <g
                  id="Group_10008"
                  data-name="Group 10008"
                  transform="translate(230 -52)"
                >
                  <g filter="url(#Rectangle_4783)" transform="translate(-230 4093.15)">
                    <rect
                      id="Rectangle_4783-2"
                      width="425.316"
                      height="248"
                      fill="#fff"
                      data-name="Rectangle 4783"
                      rx="10"
                      transform="translate(518 1867.5)"
                    ></rect>
                  </g>
                  <g filter="url(#Rectangle_4813)" transform="translate(-230 4093.15)">
                    <rect
                      id="Rectangle_4813-2"
                      width="425.316"
                      height="248"
                      fill="#fff"
                      data-name="Rectangle 4813"
                      rx="10"
                      transform="translate(977.34 1867.5)"
                    ></rect>
                  </g>
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/5ad626ae272ce361639463527b6342dc.png"
                    id="橫式"
                    width="370.3"
                    height="100.238"
                    transform="translate(315.409 6031.621)"
                  ></image>
                  <path
                    id="_8fd86b408e2f482d86aa347c824d2bb6"
                    fill="url(#pattern)"
                    d="M0 0h300.429v209.547H0z"
                    data-name="8fd86b408e2f482d86aa347c824d2bb6"
                    transform="translate(809.786 5979.875)"
                  ></path>
                </g>
              </g>
              <g id="Group_10019" data-name="Group 10019">
                <g
                  id="Component_400_1"
                  data-name="Component 400 – 1"
                  transform="translate(0 4961.148)"
                >
                  <text
                    id="攜手彰化市公所_舉辦愛心公益活動_發送民生物資裡包給予弱勢族群_"
                    fill="#252525"
                    data-name="攜手彰化市公所，舉辦愛心公益活動， 發送民生物資裡包給予弱勢族群。"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="24"
                    fontWeight={400}
                    transform="translate(1052.25 268.639)"
                  >
                    <tspan x="0" y="26">
                      攜手彰化市公所，舉辦愛心公益活動，
                    </tspan>
                    <tspan y="26" fontFamily="SegoeUI, Segoe UI">

                    </tspan>
                    <tspan x="0" y="66">
                      發送民生物資裡包給予弱勢族群。
                    </tspan>
                    <tspan y="66" fontFamily="SegoeUI, Segoe UI">

                    </tspan>
                  </text>
                  <text
                    id="å_é_æ_å__23"
                    fill="#252525"
                    data-name="åé¡æå_23"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="30"
                    transform="translate(1052.25 195.639)"
                    fontWeight={500}
                  >
                    <tspan x="0" y="32">
                      愛心送暖
                    </tspan>
                    <tspan y="32" fontFamily="SegoeUI, Segoe UI"></tspan>
                    <tspan y="32">幸福滿滿公益活動</tspan>
                    <tspan y="32" fontFamily="SegoeUI, Segoe UI">

                    </tspan>
                  </text>
                  <text
                    id="ä_ç_æ_å_ç__2-2"
                    fill="#252525"
                    data-name="ä¸ç§æå¾ªç°_2"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="36"
                    transform="translate(1124.25 75.5)"
                    fontWeight={500}
                  >
                    <tspan x="-72" y="0">
                      合作案例
                    </tspan>
                  </text>
                  <text
                    id="ä_ç_æ_å_ç__2-3"
                    fill="rgba(35,211,196,0.15)"
                    data-name="ä¸ç§æå¾ªç°_2"
                    fontFamily="ArialMT, Arial"
                    fontSize="60"
                    transform="translate(1052.25 54)"
                  >
                    <tspan x="0" y="0">
                      ACTION
                    </tspan>
                  </text>
                  <g
                    id="Icon_ionic-ios-arrow-dropright"
                    fill="#2abcaf"
                    data-name="Icon ionic-ios-arrow-dropright"
                    transform="translate(1100.375 400.264)"
                    onClick={() => this.handleClick("#circle")}
                  >
                    <path
                      id="Path_37664"
                      d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
                      data-name="Path 37664"
                      transform="translate(1.531)"
                      onClick={() => this.handleClick("#circle")}
                    ></path>
                    <path
                      id="Path_37665"
                      d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
                      data-name="Path 37665"
                      onClick={() => this.handleClick("#circle")}
                    ></path>
                  </g>
                  <path
                    id="DSC05946"
                    fill="url(#pattern-2)"
                    d="M0 0h640a320 320 0 0 1 320 320 320 320 0 0 1-320 320H0z"


                  ></path>
                  <g
                    id="Icon_ionic-ios-arrow-dropright-2"
                    data-name="Icon ionic-ios-arrow-dropright"
                    transform="translate(1056 403.639)"
                    onClick={() => this.handleClick("#square")}

                  >
                    <g
                      id="Icon_ionic-ios-arrow-dropright-3"
                      fill="#bfbfbf"
                      data-name="Icon ionic-ios-arrow-dropright"
                      transform="rotate(180 17.688 17.688)"
                      onClick={() => this.handleClick("#square")}

                    >
                      <path
                        id="Path_37664-2"
                        d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
                        data-name="Path 37664"
                        transform="translate(1.531)"
                        onClick={() => this.handleClick("#square")}
                      ></path>
                      <path
                        id="Path_37665-2"
                        d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
                        data-name="Path 37665"
                        onClick={() => this.handleClick("#square")}
                      ></path>
                    </g>
                  </g>
                </g>
                <path
                  id="planet-earth-boy-s-hands-saves-protects-world-blurred-green-nature-background"
                  fill="url(#pattern-3)"
                  d="M320 0h544v640H320A320 320 0 0 1 0 320 320 320 0 0 1 320 0"
                  transform="translate(1056 4169.283)"
                ></path>
                <g id="Group_10018" data-name="Group 10018">
                  <text
                    id="ä_ç_æ_å_ç__2-4"
                    fill="#252525"
                    data-name="ä¸ç§æå¾ªç°_2"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="36"
                    fontWeight={500}
                    transform="translate(360 4116.645)"
                  >
                    <tspan x="-72" y="0">
                      專案成果
                    </tspan>
                  </text>
                  <text
                    id="ä_ç_æ_å_ç__2-5"
                    fill="rgba(35,211,196,0.15)"
                    data-name="ä¸ç§æå¾ªç°_2"
                    fontFamily="ArialMT, Arial"
                    fontSize="60"
                    transform="translate(291.75 4095.145)"
                  >
                    <tspan x="0" y="0">
                      ACHIEVEMENT
                    </tspan>
                  </text>
                  <g
                    id="Group_10010"
                    data-name="Group 10010"
                    transform="translate(-635 -233.347)"
                  >
                    <g
                      id="Icon_ionic-ios-arrow-dropright-4"
                      fill="#2abcaf"
                      data-name="Icon ionic-ios-arrow-dropright"
                      transform="translate(967.375 4417.413)"

                    >
                      <path
                        id="Path_37664-3"
                        d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
                        data-name="Path 37664"
                        transform="translate(1.531)"
                      ></path>
                      <path
                        id="Path_37665-3"
                        d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
                        data-name="Path 37665"
                      ></path>
                    </g>
                    <g
                      id="Icon_ionic-ios-arrow-dropright-5"
                      data-name="Icon ionic-ios-arrow-dropright"
                      transform="translate(923 4420.788)"
                    >
                      <g
                        id="Icon_ionic-ios-arrow-dropright-6"
                        fill="#bfbfbf"
                        data-name="Icon ionic-ios-arrow-dropright"
                        transform="rotate(180 17.688 17.688)"
                      >
                        <path
                          id="Path_37664-4"
                          d="M14.815 10.446a1.226 1.226 0 0 1 1.92 0l6.708 7.884a1.79 1.79 0 0 1 .042 2.191l-6.609 7.768a1.222 1.222 0 0 1-1.92.008 1.79 1.79 0 0 1 0-2.249l5.618-6.681-5.759-6.681a1.766 1.766 0 0 1 0-2.24"
                          data-name="Path 37664"
                          transform="translate(1.531)"
                        ></path>
                        <path
                          id="Path_37665-4"
                          d="M3.375 19.375a16 16 0 1 0 16-16 16 16 0 0 0-16 16m2.462 0a13.533 13.533 0 0 1 23.107-9.569A13.533 13.533 0 1 1 9.806 28.944a13.42 13.42 0 0 1-3.969-9.569"
                          data-name="Path 37665"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  id="Scroll_Group_1"
                  clipPath="url(#clpath)"
                  data-name="Scroll Group 1"
                  style={{ isolation: "isolate" }}
                  transform="translate(288 4274.159)"
                >
                  <g
                    id="Group_10013"
                    data-name="Group 10013"
                    transform="translate(-288 -4274.159)"
                  >
                    <g
                      id="Rectangle_4821"
                      fill="#fff"
                      stroke="#e6e6e6"
                      strokeWidth="1"
                      data-name="Rectangle 4821"
                      transform="translate(288 4274.159)"
                    >
                      <rect width="319" height="426.249" stroke="none" rx="10"></rect>
                      <rect
                        width="318"
                        height="425.249"
                        x="0.5"
                        y="0.5"
                        fill="none"
                        rx="9.5"
                      ></rect>
                    </g>
                    <text
                      id="即期物資募集_"
                      fill="#252525"
                      data-name="即期物資募集"
                      fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      fontSize="30"
                      transform="translate(448 4639.943)"
                      fontWeight={400}
                    >
                      <tspan x="-90" y="0">
                        即期物資募集
                      </tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                    </text>
                    <g
                      id="Group_10011"
                      fill="#2abcaf"
                      data-name="Group 10011"
                      transform="translate(0 -22.136)"
                    >
                      <text
                        id="_1000"
                        data-name="1000"
                        fontFamily="ArialMT, Arial"
                        fontSize="66"
                        transform="translate(476 4402.443)"
                      >
                        <tspan x="-146.824" y="0">
                          1000
                        </tspan>
                      </text>
                      <text
                        id="公斤"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                        fontSize="30"
                        transform="translate(491.947 4400.443)"
                      >
                        <tspan x="0" y="0">
                          公斤
                        </tspan>
                      </text>
                    </g>
                    <g
                      id="Group_10012"
                      fill="none"
                      stroke="#2abcaf"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      data-name="Group 10012"
                      transform="translate(373 4464.805)"
                    >
                      <path
                        id="Path_37687"
                        d="M170.06 261.33v39.415H49.893v-38.787"
                        data-name="Path 37687"
                        transform="translate(-35.348 -185.148)"
                      ></path>
                      <path
                        id="Path_37688"
                        d="M68.66 203.506H15V202l12.662-22.285h57.447Z"
                        data-name="Path 37688"
                        transform="translate(-10.627 -127.325)"
                      ></path>
                      <path
                        id="Path_37689"
                        d="m255.5 179.714 16.741 23.792H325.9V202l-12.662-22.285Z"
                        data-name="Path 37689"
                        transform="translate(-181.018 -127.325)"
                      ></path>
                      <path
                        id="Line_515"
                        d="M0 0v63.208"
                        data-name="Line 515"
                        transform="translate(74.482 52.389)"
                      ></path>
                      <path
                        id="Path_37690"
                        d="m140.788 49.169-5.9-5.9V24.751H118.9v18.518l-5.9 5.9a27.48 27.48 0 0 0-8.051 19.431v1.324h43.888V68.6a27.48 27.48 0 0 0-8.049-19.431"
                        data-name="Path 37690"
                        transform="translate(-74.355 -17.536)"
                      ></path>
                      <path
                        id="Path_37691"
                        d="M248.152 51.764 266.008 32.6a55.43 55.43 0 0 1 38.6-17.6l4.772 4.448a55.43 55.43 0 0 1-14.845 39.741l-3.567 3.828"
                        data-name="Path 37691"
                        transform="translate(-175.812 -10.627)"
                      ></path>
                      <path
                        id="Line_516"
                        d="M10.41 9.623 0 0"
                        data-name="Line 516"
                        transform="translate(117.534 25.543)"
                      ></path>
                      <path
                        id="Line_517"
                        d="M12.156 11.25 0 0"
                        data-name="Line 517"
                        transform="translate(105.875 38.053)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_10014"
                    data-name="Group 10014"
                    transform="translate(51 -4274.159)"
                  >
                    <g
                      id="Rectangle_4821-2"
                      fill="#fff"
                      stroke="#e6e6e6"
                      strokeWidth="1"
                      data-name="Rectangle 4821"
                      transform="translate(288 4274.159)"
                    >
                      <rect width="319" height="426.249" stroke="none" rx="10"></rect>
                      <rect
                        width="318"
                        height="425.249"
                        x="0.5"
                        y="0.5"
                        fill="none"
                        rx="9.5"
                      ></rect>
                    </g>
                    <text
                      id="拾荒者_援助_人數"
                      fill="#252525"
                      data-name="拾荒者援助人數"
                      fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      fontSize="30"
                      transform="translate(448 4639.943)"
                      fontWeight={400}
                    >
                      <tspan x="-105" y="0">
                        拾荒者
                      </tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                      <tspan y="0">援助</tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                      <tspan y="0">人數</tspan>
                    </text>
                    <g
                      id="Group_10011-2"
                      fill="#2abcaf"
                      data-name="Group 10011"
                      transform="translate(0 -22.136)"
                    >
                      <text
                        id="_99"
                        data-name="99"
                        fontFamily="ArialMT, Arial"
                        fontSize="66"
                        transform="translate(476 4402.443)"
                      >
                        <tspan x="-73.412" y="0">
                          99
                        </tspan>
                      </text>
                      <text
                        id="人"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                        fontSize="30"
                        transform="translate(491.947 4400.443)"
                      >
                        <tspan x="0" y="0">
                          人
                        </tspan>
                      </text>
                    </g>
                    <g
                      id="Group_10006"
                      data-name="Group 10006"
                      transform="translate(-421 -295.099)"
                    >
                      <g
                        id="Group_9972"
                        data-name="Group 9972"
                        transform="translate(806.5 4751.5)"
                      >
                        <g
                          id="Group_9971"
                          fill="none"
                          stroke="#2abcaf"
                          strokeMiterlimit="13.333"
                          strokeWidth="4"
                          clipPath="url(#clpath-2)"
                          data-name="Group 9971"
                        >
                          <path
                            id="Path_37655"
                            d="M78.367 243.8v26.052H49.3v-14.53L37.782 243.8A60.12 60.12 0 0 1 20 201.455v-18.789A14.53 14.53 0 0 1 34.531 197.2c0 15.882 6.551 23.849 17.782 35.08l4.257 4.257"
                            data-name="Path 37655"
                            transform="translate(-16.848 -149.967)"
                          ></path>
                          <path
                            id="Path_37656"
                            d="M137.133 355.8a19.07 19.07 0 0 1 25.75 3.174c10.983 13 11.341 17.537 11.341 17.537s.358-4.534 11.341-17.537a19.07 19.07 0 0 1 25.75-3.174"
                            data-name="Path 37656"
                            transform="translate(-112.705 -288.696)"
                          ></path>
                          <path
                            id="Path_37657"
                            d="m367.4 232.261-4.274 4.274 4.257-4.257c11.231-11.231 17.782-19.2 17.782-35.08a14.53 14.53 0 0 1 14.535-14.531v18.788a60.12 60.12 0 0 1-17.781 42.345L370.4 255.323v14.531h-29.066"
                            data-name="Path 37657"
                            transform="translate(-279.814 -149.968)"
                          ></path>
                          <path
                            id="Path_37658"
                            d="M184.419 37.284c0-9.692 7.117-17.284 16.206-17.284a15.18 15.18 0 0 1 12.431 6.627A15.65 15.65 0 0 1 225.774 20c9.089 0 16.209 7.592 16.209 17.284 0 11.925-10.49 18.668-29.062 34.749-19.207-16.541-28.502-22.97-28.502-34.749Z"
                            data-name="Path 37658"
                            transform="translate(-151.402 -16.848)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g
                    id="Group_10015"
                    data-name="Group 10015"
                    transform="translate(390 -4274.159)"
                  >
                    <g
                      id="Rectangle_4821-3"
                      fill="#fff"
                      stroke="#e6e6e6"
                      strokeWidth="1"
                      data-name="Rectangle 4821"
                      transform="translate(288 4274.159)"
                    >
                      <rect width="319" height="426.249" stroke="none" rx="10"></rect>
                      <rect
                        width="318"
                        height="425.249"
                        x="0.5"
                        y="0.5"
                        fill="none"
                        rx="9.5"
                      ></rect>
                    </g>
                    <text
                      id="環教活動_舉辦_場次"
                      fill="#252525"
                      data-name="環教活動舉辦場次"
                      fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      fontSize="30"
                      transform="translate(448 4639.943)"
                      fontWeight={400}
                    >
                      <tspan x="-120" y="0">
                        環教活動
                      </tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                      <tspan y="0">舉辦</tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                      <tspan y="0">場次</tspan>
                    </text>
                    <g
                      id="Group_10011-3"
                      fill="#2abcaf"
                      data-name="Group 10011"
                      transform="translate(0 -22.136)"
                    >
                      <text
                        id="_99-2"
                        data-name="99"
                        fontFamily="ArialMT, Arial"
                        fontSize="66"
                        transform="translate(476 4402.443)"
                      >
                        <tspan x="-73.412" y="0">
                          99
                        </tspan>
                      </text>
                      <text
                        id="場"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                        fontSize="30"
                        transform="translate(491.947 4400.443)"
                      >
                        <tspan x="0" y="0">
                          場
                        </tspan>
                      </text>
                    </g>
                    <g
                      id="Group_3"
                      fill="none"
                      stroke="#2abcaf"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      transform="translate(-666.26 -1623.627)"
                    >
                      <path
                        id="Vector_33"
                        strokeMiterlimit="22.926"
                        d="M1106.745 6088.12v23.48l-11.71-3.348-11.694 3.348v-23.48"
                        transform="translate(18.237 3.439)"
                      ></path>
                      <path
                        id="Vector_34"
                        strokeMiterlimit="22.926"
                        d="m1083.05 6088.7-8.489 25.578-10.06-6.9-12.171-.492 7.743-23.119"
                        transform="translate(.041 .88)"
                      ></path>
                      <path
                        id="Vector_35"
                        strokeMiterlimit="22.926"
                        d="m1109.75 6088.7 8.569 25.578 10.06-6.9 12.17-.492-7.759-23.135"
                        transform="translate(33.733 .874)"
                      ></path>
                      <path
                        id="Vector_36"
                        strokeMiterlimit="22.926"
                        d="M1052.26 6082.26a197.7 197.7 0 0 0 122.038 0"
                      ></path>
                      <path
                        id="Vector_37"
                        strokeMiterlimit="22.926"
                        d="M1122.457 6132.015c3.935-1.571 6.109-5.427 6.109-9.918a10.67 10.67 0 0 0-10.663-10.646c-5.125 0-9.187 2.935-10.2 7.743"
                        transform="translate(32.53 17.127)"
                      ></path>
                      <path
                        id="Vector_38"
                        strokeMiterlimit="22.926"
                        d="M1112.675 6148.281a15.741 15.741 0 1 0-15.725-15.74 15.74 15.74 0 0 0 15.725 15.74"
                        transform="translate(26.222 20.267)"
                      ></path>
                      <path
                        id="Vector_39"
                        strokeMiterlimit="22.926"
                        d="M1123.283 6119.751a18.31 18.31 0 0 1-16.661 10.377 17.95 17.95 0 0 1-9.282-2.412"
                        transform="translate(26.451 21.997)"
                      ></path>
                      <path
                        id="Vector_40"
                        strokeMiterlimit="22.926"
                        d="m1095.737 6125.92.079 1.316a15.828 15.828 0 0 1-31.656 0v-1.316"
                        transform="translate(6.982 25.618)"
                      ></path>
                      <path
                        id="Vector_41"
                        strokeMiterlimit="22.926"
                        d="M1132.7 6172.117v-15.6a19.9 19.9 0 0 0-19.9-19.9 20.56 20.56 0 0 0-16.074 8.093"
                        transform="translate(26.093 31.896)"
                      ></path>
                      <path
                        id="Vector_42"
                        strokeMiterlimit="22.926"
                        d="M1098.188 6145.5a21 21 0 0 0-16.661-8.791 19.984 19.984 0 0 0-19.977 19.977v15.393"
                        transform="translate(5.451 31.949)"
                      ></path>
                      <path
                        id="Vector_43"
                        strokeMiterlimit="22.926"
                        d="M1094.307 6156.34a9.735 9.735 0 1 0-9.727-9.728 9.73 9.73 0 0 0 9.727 9.728"
                        transform="translate(18.964 32.043)"
                      ></path>
                      <path
                        id="Vector_44"
                        strokeMiterlimit="10"
                        d="M1082.21 6162.634a13.5 13.5 0 1 1 26.991 0"
                        transform="translate(17.574 39.237)"
                      ></path>
                      <path
                        id="Vector_45"
                        strokeMiterlimit="10"
                        d="M1064.16 6131.542a15.19 15.19 0 0 1 15.185-15.2h16.391v15.2s-15.185-7.252-31.576 0"
                        transform="translate(6.982 19.996)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_10016"
                    data-name="Group 10016"
                    transform="translate(729 -4274.159)"
                  >
                    <g
                      id="Rectangle_4821-4"
                      fill="#fff"
                      stroke="#e6e6e6"
                      strokeWidth="1"
                      data-name="Rectangle 4821"
                      transform="translate(288 4274.159)"
                    >
                      <rect width="319" height="426.249" stroke="none" rx="10"></rect>
                      <rect
                        width="318"
                        height="425.249"
                        x="0.5"
                        y="0.5"
                        fill="none"
                        rx="9.5"
                      ></rect>
                    </g>
                    <text
                      id="促進回收量"
                      fill="#252525"
                      fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      fontSize="30"
                      transform="translate(448 4639.943)"
                    >
                      <tspan x="-75" y="0">
                        促進回收量
                      </tspan>
                    </text>
                    <g
                      id="Group_10011-4"
                      fill="#2abcaf"
                      data-name="Group 10011"
                      transform="translate(0 -22.136)"
                    >
                      <text
                        id="_1000-2"
                        data-name="1000"
                        fontFamily="ArialMT, Arial"
                        fontSize="66"
                        transform="translate(476 4402.443)"
                      >
                        <tspan x="-146.824" y="0">
                          1000
                        </tspan>
                      </text>
                      <text
                        id="公斤-2"
                        data-name="公斤"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                        fontSize="30"
                        transform="translate(491.947 4400.443)"
                      >
                        <tspan x="0" y="0">
                          公斤
                        </tspan>
                      </text>
                    </g>
                    <g
                      id="recyclable_1_"
                      fill="none"
                      stroke="#2abcaf"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                      data-name="recyclable (1)"
                      transform="translate(369 4430.007)"
                    >
                      <path
                        id="Path_37646"
                        d="m94.663 85.545 27.456-42.709a14.867 14.867 0 0 1 25.024 0l1.975 3.072"
                        data-name="Path 37646"
                        transform="translate(-56.167)"
                      ></path>
                      <path
                        id="Path_37647"
                        d="m361.909 156 29.876 46.473a14.866 14.866 0 0 1-12.512 22.89h-14.864"
                        data-name="Path 37647"
                        transform="translate(-257.209 -90.273)"
                      ></path>
                      <path
                        id="Path_37648"
                        d="M87.382 345.727H34.864a14.866 14.866 0 0 1-12.512-22.89L26.747 316"
                        data-name="Path 37648"
                        transform="translate(0 -210.637)"
                      ></path>
                      <path
                        id="Path_37649"
                        d="m252 415.818 9.909-9.909L252 396"
                        data-name="Path 37649"
                        transform="translate(-174.527 -270.819)"
                      ></path>
                      <path
                        id="Path_37650"
                        d="m348.939 169.64 3.213-13.64 13.64 3.213"
                        data-name="Path 37650"
                        transform="translate(-247.452 -90.273)"
                      ></path>
                      <path
                        id="Path_37651"
                        d="M99.927 191.507 86.194 194.3l-2.789-13.733"
                        data-name="Path 37651"
                        transform="translate(-47.698 -108.751)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_10017"
                    data-name="Group 10017"
                    transform="translate(1068 -4274.159)"
                  >
                    <g
                      id="Rectangle_4821-5"
                      fill="#fff"
                      stroke="#e6e6e6"
                      strokeWidth="1"
                      data-name="Rectangle 4821"
                      transform="translate(288 4274.159)"
                    >
                      <rect width="319" height="426.249" stroke="none" rx="10"></rect>
                      <rect
                        width="318"
                        height="425.249"
                        x="0.5"
                        y="0.5"
                        fill="none"
                        rx="9.5"
                      ></rect>
                    </g>
                    <text
                      id="協助減少碳排量"
                      fill="#252525"
                      fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      fontSize="30"
                      transform="translate(448 4639.943)"
                    >
                      <tspan x="-105" y="0">
                        協助減少碳排量
                      </tspan>
                    </text>
                    <g
                      id="Group_10011-5"
                      fill="#2abcaf"
                      data-name="Group 10011"
                      transform="translate(0 -22.136)"
                    >
                      <text
                        id="_1000-3"
                        data-name="1000"
                        fontFamily="ArialMT, Arial"
                        fontSize="66"
                        transform="translate(476 4402.443)"
                      >
                        <tspan x="-146.824" y="0">
                          1000
                        </tspan>
                      </text>
                      <text
                        id="公斤-3"
                        data-name="公斤"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                        fontSize="30"
                        transform="translate(491.947 4400.443)"
                      >
                        <tspan x="0" y="0">
                          公斤
                        </tspan>
                      </text>
                    </g>
                    <g id="g2124" transform="translate(380 5140.069)">
                      <g id="g2126" transform="translate(0 -682.665)">
                        <g id="g2128" clipPath="url(#clpath-3)">
                          <g id="g2134" transform="translate(3.948 3.948)">
                            <path
                              id="path2136"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M-395.939-126.273h-.141a17 17 0 0 0 .141-2.108 18.426 18.426 0 0 0-18.426-18.419 18.35 18.35 0 0 0-11.668 4.168 28.93 28.93 0 0 0-25.183-14.7 28.955 28.955 0 0 0-28.955 28.955 28.8 28.8 0 0 0 3.716 14.166 23.69 23.69 0 0 0-16.878 22.685 23.69 23.69 0 0 0 23.69 23.69 23.6 23.6 0 0 0 17.11-7.333 23.6 23.6 0 0 0 17.11 7.333 23.62 23.62 0 0 0 18.2-8.555 29.4 29.4 0 0 0 21.282 9.081 29.48 29.48 0 0 0 29.481-29.481 29.48 29.48 0 0 0-29.479-29.482"
                              transform="translate(493.332 157.333)"
                            ></path>
                          </g>
                          <g id="g2138" transform="translate(97.204 56.593)">
                            <path
                              id="path2140"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M-40.36-74.738s-8.793.111-9.209-.028.668-.872 6.432-9.109a11.6 11.6 0 0 0 1.922-3.925l.089-.7a4.624 4.624 0 0 0-4.624-4.624 4.626 4.626 0 0 0-4.537 3.728"
                              transform="translate(50.288 93.122)"
                            ></path>
                          </g>
                          <g id="g2142" transform="translate(63.7 35.535)">
                            <path
                              id="path2144"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M-107.011-53.505a13.16 13.16 0 0 1-13.161 13.161 13.16 13.16 0 0 1-13.161-13.161 13.16 13.16 0 0 1 13.161-13.161 13.16 13.16 0 0 1 13.161 13.161"
                              transform="translate(133.333 66.667)"
                            ></path>
                          </g>
                          <g id="g2146" transform="translate(33.956 35.535)">
                            <path
                              id="path2148"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M-83.421-9.138a13.1 13.1 0 0 0-7.358-2.248 13.16 13.16 0 0 0-13.162 13.162A13.16 13.16 0 0 0-90.78 14.937a10.58 10.58 0 0 0 7.223-2.613 10.5 10.5 0 0 0 1.068-1.1"
                              transform="translate(103.941 11.385)"
                            ></path>
                          </g>
                          <g id="g2150" transform="translate(67.385 109.764)">
                            <path
                              id="path2152"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M0-85.609v-21.058"
                              transform="translate(0 106.666)"
                            ></path>
                          </g>
                          <g id="g2154" transform="translate(59.489 122.925)">
                            <path
                              id="path2156"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="m0 0 7.9 7.9L15.8 0"
                            ></path>
                          </g>
                          <g id="g2158" transform="translate(104.237 109.764)">
                            <path
                              id="path2160"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M0-85.609v-21.058"
                              transform="translate(0 106.666)"
                            ></path>
                          </g>
                          <g id="g2162" transform="translate(96.34 122.925)">
                            <path
                              id="path2164"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="m0 0 7.9 7.9L15.8 0"
                            ></path>
                          </g>
                          <g id="g2166" transform="translate(30.534 109.764)">
                            <path
                              id="path2168"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="M0-85.609v-21.058"
                              transform="translate(0 106.666)"
                            ></path>
                          </g>
                          <g id="g2170" transform="translate(22.637 122.925)">
                            <path
                              id="path2172"
                              fill="none"
                              stroke="#2abcaf"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="4"
                              d="m-64.206 0-7.9 7.9L-80 0"
                              transform="translate(80)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg> */}
       



        <More>
          {/* <br></br>
          <br></br>
          <br></br> */}
          {/* <img 
  src={contactmore} 
  
/> */}
          <div className="main">歡迎與我們聯繫</div>
          <img src={awsUrl("website/ne-products/contactmore.png")} />
          <span className="text">歡迎來電洽詢</span>
          <span className="phone">0800-009-717 #5</span>
          <p style={{fontSize:"24px"}}>或填寫下方聯絡表單，我們將盡快與您聯繫，謝謝!</p>
          <br></br>


        </More>


        <FormContainer>


          <form onSubmit={this.handleSubmit}>
            {/* 公司名稱 */}
            <FormRow >
              <label>
                <span>*</span>公司名稱
              </label>
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleChange}
                placeholder="請輸入公司名稱"
              />
              {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
            </FormRow>

            {/* 聯絡人 */}
            <FormRow>
              <label>
                <span>*</span>聯絡人
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="請輸入您的姓名"
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormRow>
            {/* 聯絡電話(含分機) */}
            <FormRowWithExtension>

              <div className="input-group">

                <label>
                  <span>*</span>聯絡電話
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="請輸入市話或手機號碼"
                />
                <span className="extension-label">分機</span>
                <input
                  type="text"
                  name="extension"
                  className="extension-input"
                  value={this.state.extension || ''}
                  onChange={this.handleChange}
                  placeholder="市話分機號碼"
                />
              </div>
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </FormRowWithExtension>

            {/* Email 欄位 */}
            <FormRow>

              <label>
                <span>&nbsp;</span>電子信箱
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="請輸入電子信箱（非必填）"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormRow>


            {/* 縣市 */}
            {/* <FormRow>
      <label>
        <span>*</span>縣市
      </label>
      <select
        name="serviceItem"
        value={serviceItem}
        onChange={this.handleChange}
      >
        <option value="">請選擇縣市</option>
        {counties.map((county) => (
          <option key={county.id} value={county.id}>
            {county.name}
          </option>
        ))}
      </select>
      {errors.serviceItem && <ErrorText>{errors.serviceItem}</ErrorText>}
    </FormRow> */}

            {/* 鄉鎮 */}
            {/* <FormRow>
      <label>
        <span>*</span>鄉鎮
      </label>
      <select
        name="township"
        value={township}
        onChange={this.handleChange}
        disabled={!serviceItem}
      >
        <option value="">選擇鄉鎮</option>
        {filteredTownships.map((town) => (
          <option key={town.id} value={town.name}>
            {town.name}
          </option>
        ))}
      </select>
      {errors.township && <ErrorText>{errors.township}</ErrorText>}
    </FormRow> */}

            {/* 聯繫內容 */}
            <FormRow>
              <label>
                <span>*</span>聯繫內容
              </label>
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
                placeholder="請輸入您欲與我們聯繫的內容"
                style={{ height: '150px' }}
              />
              {errors.description && <ErrorText>{errors.description}</ErrorText>}
            </FormRow>

            {/* 提交按鈕 */}
            <div style={{ textAlign: 'center', marginTop: '24px' ,color:"#24d1c2"}}>
              <SubmitButton type="submit" style={{backgroundColor:"#24d1c2"}}>送出</SubmitButton>
            </div>
          </form>


        </FormContainer>


        {/* <CircleDecorationRightBottom src={Ellipse1825} alt="綠色圓圈裝飾" /> */}
        <Imgleft src={awsUrl("website/ne-products/Subtraction11.png")} alt="綠色圓圈裝飾" />
        {/* 等等搬到上面 */}


        <img
          src={awsUrl("website/ne-products/Ellipse1828.png")}
          alt="右下裝飾圖"
          style={{
            width: '100px', // 縮小圖片寬度
            height: 'auto', // 保持比例
            position: 'relative', // 或 absolute, fixed
            top: '-300px', // 向上移動
            right: '-1500px'
          }}
        />
      </div>
    );
  }
}

export default AssociationLanding;

