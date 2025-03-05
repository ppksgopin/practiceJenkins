
import React, { Component } from 'react';
import styled from 'styled-components';
import { box } from '../../../../styles/mixins';
import Slider from 'react-slick';
// import axios from 'axios'; 
import { awsUrl } from '../../../../utils/awsFile';
import { Helmet } from 'react-helmet';
import theme from '../../../../styles/theme';

// import $ from "jquery";
if (typeof window !== "undefined" && typeof $ !== "undefined") {
$(document).ready(() => {
  // 初始狀態：隱藏 outer 和 outer1 的內容，按鈕顯示加號
  $("#outer div").hide();
  $("#outer1 div").hide();

  // outer 的按鈕切換事件
  $("#toggleButtonOuter").click(function () {
    const isHidden = $("#outer div").is(":hidden");

    // 切換內容顯示與隱藏
    $("#outer div").slideToggle(() => {
      // 切換按鈕樣式：加號或減號
      if (isHidden) {
        $(this).addClass("minus");
      } else {
        $(this).removeClass("minus");
      }
    });
  });


  

  // outer1 的按鈕切換事件
  $("#toggleButtonOuter1").click(function () {
    const isHidden = $("#outer1 div").is(":hidden");

    // 切換內容顯示與隱藏
    $("#outer1 div").slideToggle(() => {
      // 切換按鈕樣式：加號或減號
      if (isHidden) {
        $(this).addClass("minus");
      } else {
        $(this).removeClass("minus");
      }
    });
  });
});

$(document).ready(() => {
  // 頁面載入時，隱藏內容，按鈕顯示加號
  $("#outer div").hide();

  // 按鈕點擊事件
  $("#toggleButton").click(function () {
    const isHidden = $("#outer div").is(":hidden");

    // 切換內容顯示與隱藏
    $("#outer div").slideToggle(() => {
      // 切換按鈕樣式：加號（初始狀態）或減號
      if (isHidden) {
        $(this).addClass("minus"); // 切換為減號樣式
      } else {
        $(this).removeClass("minus"); // 切換回加號樣式
      }
    });
  });
});

}



// const settings = {
  // dots: true,
  // speed: 500,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // arrows: true,
  // infinite: true,



  // appendDots: (dots) => (
  //   <div style={{ marginTop: '10px' }}>
  //     <ul style={{ padding: 0 }}>{dots}</ul>
  //   </div>
  // ),

//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,

// };


const settings = {
  slidesToShow: 3,
  dots: false,
  centerMode: true,
  infinite: true,
};

// 定義樣式
const StyledSliderHTML = styled.div`
html, body{
  background-color: #e74c3c;
}
.wrapper{
  width:100%;
  padding-top: 20px;
  text-align:center;
}
// h2{
//   font-family:sans-serif;
//   color:#fff;
// }
.carousel{
  width:90%;
  margin:0px auto;
}
.slick-slide{
  margin:10px;
}
.slick-slide img{
  width:100%;
  border: 2px solid #979797;
}
// .wrapper .slick-dots li button:before {
//   font-size:20px;
//   color:#979797;
// }


.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 50px;
    line-height: 1;
    opacity: .75;
    color: #c9c9c9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;


// 定義樣式
const StyledSlider = styled(Slider)`
.slick-slide {
 
  margin: 0 0px; /* 控制間距 */
  text-align: center; /* 文字置中 */  
}

  .slick-list {
    overflow: hidden; /* 確保內容不溢出 */
       
  }

  .slick-track {
    display: flex;
    justify-content: center; /* 將所有內容置中 */
  }
    .slick-container {
  max-width: 100%; /* 限制輪播圖寬度 */
  overflow: hidden; /* 避免多餘的內容溢出 */
}
  
`;

const Head = styled.div`
	background:${theme.colors.blue4};
	padding:100px 5%;
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

const CooperateSvgImgMobile = styled.svg`

 display: none; /* 預設隱藏 */


 @media (max-width: ${theme.medias.mobile}) { 
    width:70%;
    height:70%;
display: unset;
      .cooperateParner {
         /* 預設大小 */
      &:hover {
    
        transform: translate(68.739px ,6050px);
      }
         transform:translate(68.739px ,6067px);
    }

  .cooperateZeroTrash {
          /* 預設大小 */
        
        &:hover {
          transform: translate(71.194px,6561px) ; 
        }
          transform:translate(71.194px, 6578px); 
      }

 .CooperateZeroMember{
    &:hover {
   
        transform: translate(68.739px,7072px); /* 懸停時放大 15% */
      }
    transform:translate(68.739px, 7089px);
 }
      
            
        }

`;


const CooperateSvgImg = styled.svg`
width:80%;
height:80%;

margin-top: 300px;
 @media (max-width: ${theme.medias.mobile}) { 
      display:none;
            
        }
.cooperateParner {
         /* 預設大小 */
      &:hover {
      
        transform:translate(353.957px ,5692.194px) ;
      }
        transform:translate(353.957px, 5709.194px); 
    }

.cooperateZeroTrash {
         /* 預設大小 */
      &:hover {
        transform: translate(821.912px,5692.194px) ;
      }
        transform:translate(821.912px, 5709.194px); 
    }

 .CooperateZeroMember{
    &:hover {
        transform: translate(1289.521px,5692.194px);
      }
    transform:translate(1289.521px, 5709.54px);
 }
`;

const SolveSvgImg = styled.svg`
  .clipContainer {
    width: 418px; /* 父容器的寬度 */
    height: 508px; /* 父容器的高度 */
     overflow: hidden; /* 限制內容超出範圍 */
    position: relative;
    padding: 120px; /* 添加內邊距避免滑鼠閃動 */
    box-sizing: content-box;
    pointer-events: auto; /* 保持事件正常傳遞 */
  }
.clipContainerGrandma {
    width: 420px;
    height: 504px;
     overflow: hidden; /* 限制內容超出範圍 */
    position: relative;
    padding: 120px; /* 添加內邊距避免滑鼠閃動 */
    box-sizing: content-box;
    pointer-events: auto; /* 保持事件正常傳遞 */
  }
  .imageWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }


  .imageWrapperGrandma {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }

  .imageToBig {
    width: 418px;
    height: 508px;
   
   
    transition: transform 0.3s ease; /* 平滑過渡 */
    transform: scale(1); /* 預設大小 */
  }

    .imageToBigGrandma {
   width: 423px;
    height: 509px;
   
   
    transition: transform 0.3s ease; /* 平滑過渡 */
   
  }

//  .clipContainerGrandma:hover .imageToBigGrandma {
//    transform: scale(1.2);
//     width: 697px;
//     height: 423px;
    
//   }

//   .clipContainer:hover .imageToBig {
//     transform: scale(1.1); 
//    width: 528px;
//     height: 462px;
    
//   }



  
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
        background: url("https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/e5700d5425d4f06714d5988149ea9d09.jpeg") no-repeat center center;
        
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
        font-size: 48px;
        line-height: 1.5;
        color: ${theme.colors.white}; /* 白色文字 */
        letter-spacing: 0.125em;
        margin-bottom: 20px;
        font-weight: bold; /* 加粗字體 */
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 24px;
        }
    }

    .secondary {
        font-size: 50px;
        line-height: 1.5;
        font-weight: 500;
        color: ${theme.colors.white};
        width: 1000px;
       
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 16px;
        }
    }
`;


const SliderAtHead = styled.div`
    text-align: center; 
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




const CooperationHeadTitle = styled.div`
.main {
 text-align: center;
    font-size:36px;
    fontweight: 500;
    font-family: Noto Sans CJK TC, sans-serif;
    color: ${theme.colors.black};
    margin-bottom: 80px; /* 將標題和內容間距增大 */
   
  
  }
`;
const ProjectOverview = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: theme.colors.grayLight; 
  padding: 70px 0; /* 增加上方與標題的距離 */
  position: relative; /* 定義相對定位，讓子元素可以使用絕對定位 */


    
   .main {
    font-size: 36px;
    font-weight: 500;
    font-family: Noto Sans CJK TC;
    color: ${theme.colors.black};
    margin-bottom: 80px; /* 將標題和內容間距增大 */
   
  
  }

  .content {
  @media (max-width: ${theme.medias.mobile}) {
      grid-template-areas:
      "item1"
      "item2" 
      "item3";
      
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      display: grid; /* 橫向排列 */

    }
     display: flex; /* 橫向排列 */
  justify-content: center;
  gap:70px;
  max-width: 1200px;
  margin: -10px auto 0 auto; /* 整體向上移動 */
  p{
    font-size: 24px;
    width: 350px;
    font-family: Noto Sans CJK TC;
    }
  }

  
  .item {
  
   
    text-align: left;
    grid-template-areas:
      "img"
      "value"
      "label"
      "contents";
    // max-width: 300px; 
    margin: 10 auto; /* 居中排列 */

     @media (max-width: ${theme.medias.mobile}) {
      grid-template-areas:
      "img value"
      "img label"
     ;

    
     

    }

    img {

     @media (max-width: ${theme.medias.mobile}) {
      width:150px;
      height:150px;
      padding:10px;
      margin-bottom: 0;
      }
      grid-area: img;
     width: 408px;
    height: 520px;
    object-fit: cover; /* 裁剪圖片，保持比例 */
    border-radius: 8px;
    margin-bottom: 15px;


    /* 添加過渡效果 */
  transition: transform 0.3s ease;

  /* 滑鼠放上去的效果 */
  &:hover {
    transform: translateY(-10px); /* 上移 10px */
  }
    }

    .value {
    @media (max-width: ${theme.medias.mobile}) {
      // margin-top:50px;
      display: flex;
      align-items: center;
      grid-template-columns: 210px auto;
      grid-template-rows: 60% 40%;
      }
      grid-area:value;
      font-size: 32px; /* 適度調整字體大小 */
      font-weight: bold;
      font-family: Arial, sans-serif; /* 設定字體為 Arial，預設備選 sans-serif */
      color: #252525;
      line-height: 1.5; /* 增加行距 */
    letter-spacing: 0.05em; /* 增加字距 */
    }

    .label {
    font-family: Noto Sans CJK TC;
    font-weight: 400;
    @media (max-width: ${theme.medias.mobile}) {
      // margin-top:-40px;

        display: flex;
      align-items: center;
      grid-template-columns: 210px auto;
      grid-template-rows: 60% 40%;
      
      }
      grid-area:label;
      font-size:30px; /* 調整文字大小 */
      color: #666;
      margin-top: 8px;
        line-height: 1.5; /* 增加行距 */
    letter-spacing: 0.05em; /* 增加字距 */
    }
    .contents {
    @media (max-width: ${theme.medias.mobile}) {
      // margin-top:-40px;

        display: flex;
      align-items: center;
      grid-template-columns: 210px auto;
      grid-template-rows: 60% 40%;
      
      }
      grid-area:contents;
      font-size: 14px; /* 調整文字大小 */
      color: #666;
      margin-top: 8px;
        line-height: 1.5; /* 增加行距 */
      text-align: left; /* 左對齊 */
          max-width: 260px;
    }
  }

  /* 第一張圖向左微調 */
  .item:nth-child(1) {
    grid-area: item1;
    // justify-self: start; 
  }

  /* 第二張圖向下微調 */
  .item:nth-child(2) {
  
    grid-area: item2;
    // justify-self: end; 
   
  }

  /* 第三張圖保持不變 */
  .item:nth-child(3) {
    grid-area: item3;
    // justify-self: center; 
  }

  /* 左上方的裝飾圖片 */
  .circle-left {
    position: absolute;
    top: -40px; /* 向上移動 */
    left: -50px; /* 向左移動 */
    width: 250px; /* 圖片大小 */
    height: auto;
    z-index: 0; /* 位於內容的下方 */

      @media (max-width: ${theme.medias.mobile}) {
      width: 150px; /* 縮小到 200px */
    }
  }

  /* 右下方的裝飾圖片 */
  .circle-right {
       position: absolute;
    bottom: -60px;
    right: -60px;
    width: 215px;
    height: auto;
    z-index: 0;

    @media (max-width: ${theme.medias.mobile}) {
      display: none; /* 手機模式隱藏 */
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
    
    color: #252525;
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
    color: #252525;
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


const CircleDecoration = styled.img`
  position: absolute;
  z-index: 1; /* 確保位於背景之上但內容之下 */
  left: -40px; /* 使用負值將圖片的左側稍微移出容器 */
  top: calc(100% - 100px); /* 調整垂直位置 */
  width: 200px; /* 設置圖片大小 */
  height: auto; /* 保持比例 */
  pointer-events: none; /* 確保點擊不影響此裝飾 */

  @media (max-width: ${theme.medias.mobile}) {
      display: none; /* 手機模式隱藏 */
    }
`;
const CircleDecorationRightBottom = styled.img`
  position: absolute;
  bottom: 0px; /* 調整垂直位置 */
  right: 0px; /* 調整水平位置 */
  width: 150px; /* 圖片大小 */
  height: 150px;
 
  z-index: 0;
  pointer-events: none; /* 確保點擊不影響此裝飾 */
   @media (max-width: ${theme.medias.mobile}) {
      display: none; /* 手機模式隱藏 */
    }
`;


const CircleDecorationRight = styled.img`
  position: relative;
  z-index: 1; /* 確保位於背景之上但內容之下 */
  left: 800px;
  bottom: 110px; /* 調整垂直位置 */
  width: 80px; /* 設置圖片大小 */
  height: auto; /* 保持比例 */
  pointer-events: none; /* 確保點擊不影響此裝飾 */
`;


const CooperationSection = styled.div`
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 50px 0 200px; /* 增加底部內邊距 */
  position: relative;
  margin-bottom: 40px; /* 增加與下面區塊的距離，避免擠壓 */
 #container {
 height: 400px;
     gap: 26px;
    display: grid
;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
 
  
  width: 100%; /* 使用全寬 */
  padding: 0 10%; /* 左右各留12% 空白 */
  box-sizing: border-box;

}

 #outer1 {
  
  background: #e7f7d6;
  // display: grid;
  // border: 1px solid #ccc;
 padding-bottom: 3rem;
  box-sizing: border-box;
}

/* 綠色圓形按鈕樣式 */
.circle-button {
  width: 40px; /* 按鈕寬度 */
  height: 40px; /* 按鈕高度 */
  border-radius: 50%; /* 圓形 */
  background-color: #2abcaf; /* 綠色背景 */
  border: none;
  position: relative;
  cursor: pointer;
  display: inline-flex; /* 讓內容居中 */
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 20px;
}

/* 加號的橫線 */
.circle-button::before {
  content: '';
  position: absolute;
  width: 10px; /* 橫線寬度 */
  height: 2px; /* 橫線厚度 */
  background-color: white;
  border-radius: 1px;
}

/* 加號的豎線 */
.circle-button::after {
  content: '';
  position: absolute;
  width: 2px; /* 豎線厚度 */
  height: 10px; /* 豎線高度 */
  background-color: white;
  border-radius: 1px;
}

/* 減號樣式（展開狀態） */
.circle-button.minus::after {
  display: none; /* 隱藏豎線 */
}



#outer {
 
  background: #d4f2ef;
  // display: grid;
  // border: 1px solid #ccc;
  padding-bottom: 3rem;

  box-sizing: border-box;

}

#outer div, #outer1 div {
  background: white;
  padding: 1rem; /* 內邊距保持內容的間距 */
 margin-top: -30px;
    margin-left: 15px;
  width: calc(100% - 2rem); /* 保持左右邊距對稱 */
  height: 400px; /* 固定高度，根據需要調整 */
  display: flex; /* 讓內容垂直居中 */
  flex-direction: column; /* 讓內容垂直排列 */
  
  box-sizing: border-box; /* 確保內邊距不影響寬高計算 */
}

#outer h2,#outer1 h2{
padding-top: 1rem;
  color: #8cdbd4;
  font-size: 30px;
  line-height: 1.3;
}

#outer h3,#outer1 h3{
  
  font-size: 32px;
  // line-height: 20px;
}


#outer p,#outer1 p{
  
  font-size: 24px;
  line-height: 1.2;
  text-align: left;
    font-weight: 100;
}


  .main {
    font-size: 36px;
    font-family: Noto Sans CJK TC;
    color: ${theme.colors.black};
    margin-bottom: 80px; /* 將標題和內容間距增大 */
    // font-weight: bold;
  
  }

  .content {
   
  @media (max-width: ${theme.medias.mobile}) {
     display: block; /* 使用 Flexbox */
     
     
    }

       
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    gap: 100px; /* 圖片間的距離 */
    max-width: 1200px; /* 限制整體寬度 */
    margin: 0 auto;
    position: relative; /* 為文字框定位 */
    padding-top: 40px; /* 向下移動整體內容 */

    
  }

  .item {
  
    display: flex;
    flex-direction: column; /* 保持圖片與文字垂直排列 */
    align-items: center;
   
    img {
     @media (max-width: ${theme.medias.mobile}) {
     margin-bottom: 150px; /* 圖片與文字的間距 */
     
     
    }
      width: 200px; /* 調整圖片大小 */
      height: auto;
      margin-bottom: 10px; /* 圖片與文字的間距 */
      transition: transform 0.3s ease-in-out; /* 添加平滑過渡效果 */

      /* 預設大小 */
      &:hover {
        transform: scale(1.15); /* 懸停時放大 15% */
      }
    }
  }

  /* 修改后的藍色文字框样式 */
  .blue-text-box {
 @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: #00aeae;
     left: 190px; /* 調整水平方向的偏移量 */
     top:280px;
     box-shadow: none; /* 禁用陰影效果 */
    }

     @media (min-width: 861px) and (max-width: 886px) {
          left: 140px;
          top: -35px;
  }
    @media (min-width:1134px) and (max-width: 1192px) {
    left: 300px;
}
    position: absolute;
    top: -40px; /* 藍色框框向下移動 */
    left: 310px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    background-color: #00aeae; /* 藍色背景 */
    color: white; /* 白色文字 */
    padding: 10px 20px; /* 調整內邊距 */
    border-radius: 8px; /* 添加圓角 */
    font-size: 16px; /* 字體大小 */
    
    z-index: 2; /* 確保文字框位於圖片上方 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  }

  .blue-text-box_bottom {
    @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: #00aeae;
     left: -80px; /* 調整水平方向的偏移量 */
     box-shadow: none; /* 禁用陰影效果 */
    }

     @media (min-width: 861px) and (max-width: 886px) {
      left: 140px;
          top: 290px;

  }

  @media (min-width:1134px) and (max-width: 1192px) {
    left: 290px;
  }
    position: absolute;
    top: 280px; /* 調整底部藍框的位置 */
    left: 300px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    background-color: #00aeae; /* 藍色背景 */
    color: white; /* 白色文字 */
    padding: 10px 20px; /* 調整內邊距 */
    border-radius: 8px; /* 添加圓角 */
    font-size: 16px; /* 字體大小 */
    
    z-index: 2; /* 確保文字框位於圖片上方 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  }

  .blue-text-box_bottom_title
  {
    @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color:black;
     font-size: 20px;
     box-shadow: none; /* 禁用陰影效果 */
     left: 100px;
     top: 240px;
     font-weight: unset; /* 加粗字體 */
    }
   @media (min-width: 861px) and (max-width: 886px) {
  left: 60px;
  }
   
    position: absolute;
    top: 240px; /* 調整底部藍框的位置 */
    left:220px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    
    color: black; /* 白色文字 */
  
    font-size: 16px; /* 字體大小 */
    font-weight: bold; /* 加粗字體 */
   
    
  }


   .green-text-box_bottom_title
  {
    @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: black;
      left: -40px;
     box-shadow: none; /* 禁用陰影效果 */
     font-weight: unset; 
             top: 590px;
             font-size: 20px;
    }

     @media (min-width: 861px) and (max-width: 886px) {
     
    left: 230px;
  }
    position: absolute;
  
    // left: -40px;
    transform: translateX(50%); /* 保持整體水平微調 */
    font-weight: bold; /* 加粗字體 */
    color: black; /* 白色文字 */
  left: 400px;
            top: 240px;
        // font-size: 20px;
    
   
    
  }


   .green-text-box_bottom_title2
  {
    @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: black;
     left: 40px; /* 調整水平方向的偏移量 */
     box-shadow: none; /* 禁用陰影效果 */
     font-size: 20px; /* 字體大小 */
     top: 940px;
     font-weight: unset; 
    }
      @media (min-width: 861px) and (max-width: 886px) {
    
    left: 610px;
  }

    position: absolute;
    top: 240px; /* 調整底部藍框的位置 */
    left: 780px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    font-weight: bold; /* 加粗字體 */
    color: black; /* 白色文字 */
  
    font-size: 16px; /* 字體大小 */
    
   
    
  }

  .green-text-box {
    @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: #00bb00;
     left: 190px; /* 調整水平方向的偏移量 */
     top:640px;
     box-shadow: none; /* 禁用陰影效果 */
    }

     @media (min-width: 861px) and (max-width: 886px) {
    top: -35px;
    left: 450px;
  }

   @media (min-width:1134px) and (max-width: 1192px) {
  left: 610px;
  }
    position: absolute;
    top: -40px; /* 綠色框框向下移動 */
    left: 620px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    background-color: #00bb00; /* 綠色背景 */
    color: white; /* 白色文字 */
    padding: 10px 20px; /* 調整內邊距 */
    border-radius: 8px; /* 添加圓角 */
    font-size: 16px; /* 字體大小 */
    
    z-index: 2; /* 確保文字框位於圖片上方 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  }


  .green-text-box_bottom {
     @media (max-width: ${theme.medias.mobile}) {
    background-color: transparent; /* 透明背景 */ 
     color: #00bb00;
     left: -95px; /* 調整水平方向的偏移量 */
     top:630px;
     box-shadow: none; /* 禁用陰影效果 */
    }

      @media (min-width: 861px) and (max-width: 886px) {
    top: 284px;
    left: 420px;
  }

  @media (min-width:1134px) and (max-width: 1192px) {
  left: 580px;
  }
    position: absolute;
    top: 280px; /* 綠色框框向下移動 */
    left: 600px; /* 調整水平方向的偏移量 */
    transform: translateX(50%); /* 保持整體水平微調 */
    background-color: #00bb00; /* 綠色背景 */
    color: white; /* 白色文字 */
    padding: 10px 20px; /* 調整內邊距 */
    border-radius: 8px; /* 添加圓角 */
    font-size: 16px; /* 字體大小 */
    
    z-index: 2; /* 確保文字框位於圖片上方 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  }


  /* 虛線樣式 */
.dashed-line_green {
  @media (max-width: ${theme.medias.mobile}) {
     display: none; 
     
     
    }
       @media (min-width: 861px) and (max-width: 886px) {
    left: 580px;
  }
   @media (min-width:1134px) and (max-width: 1192px) {
  left: 740px;
  }
  position: absolute;
  top: 0px; /* 起始位置 (green-text-box 的底部位置) */
  left: 750px; /* 調整居中，假設虛線寬度為 2px */
  height: 80px; /* 設置虛線的高度為框框距離的一半 */
  border-left: 2px dashed #00bb00; /* 垂直虛線 */
  z-index: 1;
}

  /* 虛線樣式 */
.dashed-line_blue {
  @media (max-width: ${theme.medias.mobile}) {
     display: none; 
     
     
    }

     @media (min-width: 861px) and (max-width: 886px) {
     top: 1px;
    left: 270px;
  }
  position: absolute;
  top: 0px; /* 起始位置 (green-text-box 的底部位置) */
  left: 440px; /* 調整居中，假設虛線寬度為 2px */
  height: 80px; /* 設置虛線的高度為框框距離的一半 */
  border-left: 2px dashed #00aeae; /* 垂直虛線 */
  z-index: 1;
}
  /* 虛線樣式 */
.dashed-line_blue_bottom {
  @media (max-width: ${theme.medias.mobile}) {
     display: none; 
     
     
    }
     @media (min-width: 861px) and (max-width: 886px) {
   top: 210px;
        left: 280px;
  }
  position: absolute;
  top: 200px; /* 起始位置 (green-text-box 的底部位置) */
  left: 440px; /* 調整居中，假設虛線寬度為 2px */
  height: 80px; /* 設置虛線的高度為框框距離的一半 */
  border-left: 2px dashed #00aeae; /* 垂直虛線 */
  z-index: 1;

  
}
  /* 虛線樣式 */
.dashed-line_green_bottom {
  @media (max-width: ${theme.medias.mobile}) {
     display: none; 
    }


      @media (min-width: 861px) and (max-width: 886px) {
   top: 201px;
    left: 580px;
  }

  @media (min-width:1134px) and (max-width: 1192px) {
  left: 740px;
  }
  position: absolute;
  top: 200px; /* 起始位置 (green-text-box 的底部位置) */
  left: 750px; /* 調整居中，假設虛線寬度為 2px */
  height: 80px; /* 設置虛線的高度為框框距離的一半 */
  border-left: 2px dashed #00bb00; /* 垂直虛線 */
  z-index: 1;

}

.arrow-right_blue {
   @media (max-width: ${theme.medias.mobile}) {
    left: 220px;
    top: 270px;
    width: 15px; /* 箭頭主體的寬度 */
  height: 100px; /* 箭頭主體的高度 */
  }

   @media (min-width: 801px) and (max-width: 826px) {
    position: absolute;
  display: inline-block;
  left: 200px;
  top:80px;
  width: 80px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }

  
  @media (min-width: 827px) and (max-width: 860px) {
    position: absolute;
  display: inline-block;
  left: 220px;
  top:80px;
  width: 80px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }
@media (min-width:1134px) and (max-width: 1192px) {
  left: 370px;
  }

  @media (min-width:1100px) and (max-width: 1133px) {
  left: 385px;
  }
  @media (min-width: 861px) and (max-width: 886px) {
    position: absolute;
  display: inline-block;
  left: 230px;
  top:80px;
  width: 80px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }
  position: absolute;
  display: inline-block;
  left: 400px;
  top:80px;
  width: 80px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
}



.arrow-right_blue::after {
 @media (max-width: ${theme.medias.mobile}) {
    border-top: 20px solid #00aeae;
    
    border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom:  none; /* 讓箭頭朝下 */
    right: -13px; 
    top:110px;
  }

  
  content: '';
  position: absolute;
  top: 50%;
  right: -20px; /* 箭頭位置，調整為負值讓其向左突出 */
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 20px solid transparent; /* 上部分透明 */
  border-bottom: 20px solid transparent; /* 下部分透明 */
  border-left: 20px solid #00aeae; /* 箭頭顏色 */
}

.arrow-left_blue {
  @media (min-width: 861px) and (max-width: 886px) {
   position: absolute;
  display: inline-block;
  left:240px;
  top:200px;
  width: 90px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }
@media (max-width: ${theme.medias.mobile}) {
    left: 140px;
    top: 280px;
    width: 15px; /* 箭頭主體的寬度 */
  height: 90px; /* 箭頭主體的高度 */
  }
@media (min-width:1134px) and (max-width: 1192px) {
left: 389px;
}

@media (min-width:1100px) and (max-width: 1134px) {
left: 370px;
}
  @media (min-width: 801px) and (max-width: 826px) {
   position: absolute;
  display: inline-block;
  left:210px;
  top:200px;
  width: 90px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }

  @media (min-width: 827px) and (max-width: 860px) {
   position: absolute;
  display: inline-block;
  left:230px;
  top:200px;
  width: 90px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
  }
  position: absolute;
  display: inline-block;
  left: 410px;
  top:200px;
  width: 90px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00aeae; /* 箭頭主體的藍色 */
}

.arrow-left_blue::after {
@media (max-width: ${theme.medias.mobile}) {
    border-top:  none; /* 讓箭頭朝下 */
    
    border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #00aeae;
    
    right: -16px; 
    left: -12px; /* 箭頭位置，調整為負值讓其向左突出 */
    top:-8px;
  }
  content: '';
  position: absolute;
  top: 50%;
  left: -10px; /* 箭頭位置，調整為負值讓其向左突出 */
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 20px solid transparent; /* 上部分透明 */
  border-bottom: 20px solid transparent; /* 下部分透明 */
  border-right: 20px solid #00aeae; /* 箭頭顏色 */
}

.arrow-left_green {

  @media (max-width: ${theme.medias.mobile}) {
    left: 220px;
    top: 640px;
    width: 15px; /* 箭頭主體的寬度 */
  height: 90px; /* 箭頭主體的高度 */
  }

   @media (min-width: 861px) and (max-width: 886px) {
   left: 540px;
  }

   @media (min-width:1134px) and (max-width: 1192px) {
  left: 695px;
  }
  position: absolute;
  display: inline-block;
  left: 710px;
  top:80px;
  width: 90px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00bb00; /* 箭頭主體的藍色 */
}

.arrow-left_green::after {
@media (max-width: ${theme.medias.mobile}) {
    border-top:  none; /* 讓箭頭朝下 */
    
    border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #00bb00;
    
    right: -16px; 
    left: -12px; /* 箭頭位置，調整為負值讓其向左突出 */
    top:-9px;
  }
 content: '';
  position: absolute;
  top: 50%;
  left: -10px; /* 箭頭位置，調整為負值讓其向左突出 */
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 20px solid transparent; /* 上部分透明 */
  border-bottom: 20px solid transparent; /* 下部分透明 */
  border-right: 20px solid #00bb00; /* 箭頭顏色 */
}


.arrow-right_green {
@media (max-width: ${theme.medias.mobile}) {
    left: 140px;
    top: 620px;
    width: 15px; /* 箭頭主體的寬度 */
  height:100px; /* 箭頭主體的高度 */
  }

   @media (min-width: 861px) and (max-width: 886px) {
  left: 540px;
  top:194px;
  }

  @media (min-width:1134px) and (max-width: 1192px) {
  
  left: 686px;
  }
  position: absolute;
  display: inline-block;
  left: 710px;
  top:190px;
  width: 80px; /* 箭頭主體的寬度 */
  height: 10px; /* 箭頭主體的高度 */
  background-color: #00bb00; /* 箭頭主體的藍色 */
}

.arrow-right_green::after {
@media (max-width: ${theme.medias.mobile}) {
    border-top: 20px solid #00bb00;
    
    border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom:  none; /* 讓箭頭朝下 */
   
    
    right: -13px; 
    top:109px;
  }
  content: '';
  position: absolute;
  top: 50%;
  right: -20px; /* 箭頭位置，調整為負值讓其向左突出 */
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 20px solid transparent; /* 上部分透明 */
  border-bottom: 20px solid transparent; /* 下部分透明 */
  border-left: 20px solid #00bb00; /* 箭頭顏色 */
}
`;


const TopMainButton = styled.div`
 text-align: center;
    margin-top: -20px;
    margin-bottom: 20px;
/* 綠色圓形按鈕樣式 */
.circle-button {
  width: 20px; /* 按鈕寬度 */
  height: 20px; /* 按鈕高度 */
  border-radius: 50%; /* 圓形 */
  background-color: #e6e6e6; /* 綠色背景 */
  border: none;
  // position: relative;
  cursor: pointer;
  display: inline-flex; /* 讓內容居中 */
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
 margin: 10px ;
}

.circle-button2 {
  width: 20px; /* 按鈕寬度 */
  height: 20px; /* 按鈕高度 */
  border-radius: 50%; /* 圓形 */
  background-color: #e6e6e6; 
  border: none;
  position: relative;
  cursor: pointer;
  display: inline-flex; /* 讓內容居中 */
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 10px;
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
    font-weight: 500;
    font-family: NOTO Sans TC;
    margin-bottom: 30px; /* 調整文字和表單的間距 */
    @media (max-width: ${theme.medias.phablet}) {
      font-size: 24px;
    }

   
  }

  .text {
    color: #252525;
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
  width: 1000px;
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



class ScavengerLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false, // 初始化 isHidden
      hash: "",
      serviceItem: '',
      township: '',
      filteredTownships: [], // 初始化 filteredTownships
      counties: [],
      townships: [],
      name: '',
      phone: '',
      description: '',
      errors: {},
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

  }
  componentDidMount(){
    try{
      this.setState({ hash: window.location.hash })
    }catch(e){
      console.error("cannot log location hash", e)
    }
    
  }
  handleHashChange = () => {
    // 更新状态以触发重新渲染
    try{
      this.setState({ hash: window.location.hash })
    }catch(e){
      console.error("cannot log location hash", e)
    }
    
  };



  handleClick = (hash, action) => {

    if (action === "updateHash") {
      history.replaceState(null, null, hash); // 更新 URL
      this.setState({ hash }); // 更新狀態
    } else if (action === "hideElement") {
      this.setState({ isHidden: true }); // 隱藏元素
    }

  };

  handleClick = (hash) => {
    // 更新哈希值并同步状态
    // 更新 URL 並手動觸發狀態變更
    history.replaceState(null, null, hash); // 修改 URL 而不跳轉頁面
    this.setState({ hash }); // 強制更新 React 狀態
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
    const { hash } = this.state;
    const showCircle = hash === "#circle" || hash === ""
    const showSquare = hash === "#square"
    // const shwoUnder= hash==="#show" || hash===""
    const { email, name, companyName, phone, description, errors } = this.state;
    return (
      <div>
        <Helmet>
          <title>拾荒者</title>
        </Helmet>


        <Container>
          <div className="background"></div>
          <div className="content">

            {/* <div className="main">為拾荒者撐起一片天，讓愛延續不息​</div> */}
            <div className="secondary">為拾荒者撐起一片天，讓愛延續不息</div>
          </div>
        </Container>



        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}


        <div style={{ textAlign: 'center' ,marginTop: '200px',marginLeft: '140px',marginRight: '200px'}}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="-32 0 1424 193.5"
          >
            <g id="Group_9994" data-name="Group 9994" transform="translate(-288 -989)">
              <text
                id="ä_ç_æ_å_ç__2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="Noto Sans CJK TC"
                fontWeight={500}
                fontSize="36"
                transform="translate(288 1028)"
              >
                <tspan x="60" y="0">
                  收聽你的聲音：
                </tspan>
                <tspan x="60" y="48">
                  生命劇變後的堅強，
                </tspan>
                <tspan x="60" y="96">
                  蔡滿足阿
                </tspan>
                <tspan
                  y="96"
                  fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                >
                  嬤
                </tspan>
                <tspan y="96">的回收路</tspan>
              </text>
              <text
                id="距離zero_zero_彰化金馬城市環保站約500公尺的一處民房_裡頭住著一位年過七旬的阿嬤-蔡滿足_即使他雙腿因年邁而退化_但他依舊每天清晨五點起床_整理堆放在家門口的資源回收物_"
                fill="#252525"
                data-name="距離zero zero 彰化金馬城市環保站約500公尺的一處民房，裡頭住著一位年過七旬的阿嬤-蔡滿足，即使他雙腿因年邁而退化，但他依舊每天清晨五點起床，整理堆放在家門口的資源回收物。"
                fontFamily="Noto Sans CJK TC"
                fontSize="24"
                transform="translate(828 991.5)"
              >
                <tspan x="0" y="26">
                  距離
                </tspan>
                <tspan y="26" fontFamily="SegoeUI, Segoe UI">
                  zero zero{" "}
                </tspan>
                <tspan y="26">彰化金馬城市環保站約</tspan>
                <tspan y="26" fontFamily="SegoeUI, Segoe UI">
                  500
                </tspan>
                <tspan y="26">公尺的一處民房，裡頭住著一位</tspan>
                <tspan x="0" y="66">
                  年過七旬的阿
                </tspan>
                <tspan
                  y="66"
                  fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                >
                  嬤
                </tspan>
                <tspan y="66" fontFamily="SegoeUI, Segoe UI">
                  -
                </tspan>
                <tspan y="66">蔡滿足，即使他雙腿因年邁而退化，但他依舊每天清晨</tspan>
                <tspan x="0" y="106">
                  五點起床，整理堆放在家門口的資源回收物。
                </tspan>
                <tspan y="106" fontFamily="SegoeUI, Segoe UI"></tspan>
              </text>
              <path
                id="Line_509"
                fill="none"
                stroke="#2abcaf"
                strokeDasharray="3"
                strokeWidth="1"
                d="M00 0h6664"
                data-name="Line 509"
                transform="translate(828 1182)"
              ></path>
            </g>
          </svg>

        </div>



        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end', // 
            alignItems: 'center',
            paddingLeft: '15%',
            paddingRight: '11%' // 使用百分比內邊距讓內容向右
            ,marginTop: '30px'

          }}
        >

          <button onClick={() => this.handleClick("#circle")} style={{ border: 'none', background: 'none', cursor: 'pointer', marginRight: '-10px' }}>
           

            {showCircle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="37"
                viewBox="0 0 37 37"

              >
                <g
                  id="Group_9983"
                  data-name="Group 9983"
                  transform="translate(-1033 -1760)"
                >
                  <path
                    id="Rectangle_4798"
                    fill="#8d8d8d"
                    d="M0 0h37v37H0z"
                    data-name="Rectangle 4798"
                    transform="translate(1033 1760)"
                  ></path>
                  <text
                    id="_1"
                    fill="#fff"
                    data-name="1"
                    fontFamily="ArialMT, Arial"
                    fontSize="30"
                    transform="translate(1043 1789)"
                  >
                    <tspan x="0" y="0">
                      1
                    </tspan>
                  </text>
                </g>
              </svg>
            ) : (

              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="37"
                viewBox="0 0 37 37"

              >
                <g
                  id="Group_9983"
                  data-name="Group 9983"
                  transform="translate(-1033 -1760)"
                >
                  <path
                    id="Rectangle_4798"
                    fill="#e6e6e6"
                    d="M0 0h37v37H0z"
                    data-name="Rectangle 4798"
                    transform="translate(1033 1760)"
                  ></path>
                  <text
                    id="_1"
                    fill="#fff"
                    data-name="1"
                    fontFamily="ArialMT, Arial"
                    fontSize="30"
                    transform="translate(1043 1789)"
                  >
                    <tspan x="0" y="0">
                      1
                    </tspan>
                  </text>
                </g>
              </svg>
            )}
          </button>

          <button onClick={() => this.handleClick("#square")} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            {showSquare ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="37"
                viewBox="0 0 37 37"

              >
                <g
                  id="Group_9983"
                  data-name="Group 9983"
                  transform="translate(-1033 -1760)"
                >
                  <path
                    id="Rectangle_4798"
                    fill="#8d8d8d"
                    d="M0 0h37v37H0z"
                    data-name="Rectangle 4798"
                    transform="translate(1033 1760)"
                  ></path>
                  <text
                    id="_1"
                    fill="#fff"
                    data-name="1"
                    fontFamily="ArialMT, Arial"
                    fontSize="30"
                    transform="translate(1043 1789)"
                  >
                    <tspan x="0" y="0">
                      2
                    </tspan>
                  </text>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="37"
                viewBox="0 0 37 37"

              >
                <g
                  id="Group_9983"
                  data-name="Group 9983"
                  transform="translate(-1033 -1760)"
                >
                  <path
                    id="Rectangle_4798"
                    fill="#e6e6e6"
                    d="M0 0h37v37H0z"
                    data-name="Rectangle 4798"
                    transform="translate(1033 1760)"
                  ></path>
                  <text
                    id="_1"
                    fill="#fff"
                    data-name="1"
                    fontFamily="ArialMT, Arial"
                    fontSize="30"
                    transform="translate(1043 1789)"
                  >
                    <tspan x="0" y="0">
                      2
                    </tspan>
                  </text>
                </g>
              </svg>
            )}
          </button>


        </div>

        <SliderAtHead>

          <div style={{ marginBottom: '30px',marginTop: '30px' }}>


            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              
              height="100%"
              viewBox="-70 0 1780 582"
              width="100%"
              
              preserveAspectRatio="xMidYMid meet"
            >
              {showCircle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100%"
                  height="100%"
                  viewBox="50 0 1311 558"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      viewBox="0 0 960 1280"
                    >
                      <image
                        xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/0753a02c9b2b196203cb165f0f3d5363.jpeg"
                        width="960"
                        height="1280"
                      ></image>
                    </pattern>
                  </defs>
                  <g
                    id="Group_9987"
                    data-name="Group 9987"
                    transform="translate(-288 -1266.5)"
                  >
                    <text
                      id="蔡滿足早年曾在肉圓店工作_與老公一同在彰化生活著_原是平凡生活的一對夫妻_卻因一場死亡車禍出現劇變_急駛而來的卡車當場奪走了另一半的性命_蔡滿足自己也因雙手粉碎性骨折而無法繼續工作_雖然術後復原順利_但接近退休年齡的他難以重返職場_最終只能被迫退休_靠著撿拾資源回收物過活_雙腿退化後_蔡滿足難以出遠門從事拾荒行為_只能在家裡附近撿拾鄰居丟棄的酒瓶來換錢_附近住戶心疼這位阿嬤的辛勞_開始主動提供紙箱_紙容器_寶特瓶等回收物給他_為避免家中環境因堆積過多物品導致髒亂_蔡滿足忍著腳痛辛苦整理_甚至為了防止有心人士"
                      fill="#252525"
                      data-name="蔡滿足早年曾在肉圓店工作，與老公一同在彰化生活著。原是平凡生活的一對夫妻，卻因一場死亡車禍出現劇變，急駛而來的卡車當場奪走了另一半的性命，蔡滿足自己也因雙手粉碎性骨折而無法繼續工作。雖然術後復原順利，但接近退休年齡的他難以重返職場，最終只能被迫退休，靠著撿拾資源回收物過活。雙腿退化後，蔡滿足難以出遠門從事拾荒行為，只能在家裡附近撿拾鄰居丟棄的酒瓶來換錢，附近住戶心疼這位阿嬤的辛勞，開始主動提供紙箱、紙容器、寶特瓶等回收物給他。為避免家中環境因堆積過多物品導致髒亂，蔡滿足忍著腳痛辛苦整理，甚至為了防止有心人士"
                      fontFamily="Noto Sans CJK TC"
                      fontSize="24"
                      fontWeight={400}
                      transform="translate(758 1330)"
                    >
                      <tspan x="0" y="26">
                        蔡滿足早年曾在肉圓店工作，與老公一同在彰化生活著。原是平凡生活的
                      </tspan>
                      <tspan x="0" y="66">
                        一對夫妻，卻因一場死亡車禍出現劇變，急駛而來的卡車當場奪走了另一
                      </tspan>
                      <tspan x="0" y="106">
                        半的性命，蔡滿足自己也因雙手粉碎性骨折而無法繼續工作。雖然術後復
                      </tspan>
                      <tspan x="0" y="146">
                        原順利，但接近退休年齡的他難以重返職場，最終只能被迫退休，靠著撿
                      </tspan>
                      <tspan x="0" y="186">
                        拾資源回收物過活。雙腿退化後，蔡滿足難以出遠門從事拾荒行為，只能
                      </tspan>
                      <tspan x="0" y="226">
                        在家裡附近撿拾鄰居丟棄的酒瓶來換錢，附近住戶心疼這位阿
                      </tspan>
                      <tspan
                        y="226"
                        fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                      >
                        嬤
                      </tspan>
                      <tspan y="226">的辛勞，</tspan>
                      <tspan x="0" y="266">
                        開始主動提供紙箱、紙容器、寶特瓶等回收物給他。為避免家中環境因堆積
                      </tspan>
                      <tspan x="0" y="306">
                        過多物品導致髒亂，蔡滿足忍著腳痛辛苦整理，甚至為了防止有心人士偷
                      </tspan>
                      <tspan x="0" y="346">
                        拿回收價格較好的紙箱，每隔一段時間，就要自己獨自將庭院的紙箱搬進
                      </tspan>
                      <tspan x="0" y="386">
                        室內。
                      </tspan>
                      <tspan y="386" fontFamily="SegoeUI, Segoe UI"></tspan>
                    </text>
                    <text
                      id="ä_ç_æ_å_ç__2"
                      fill="#252525"
                      data-name="ä¸ç§æå¾ªç°_2"
                      fontFamily="Noto Sans CJK TC"
                      fontSize="32"
                      transform="translate(828 1301.5)"
                    >
                      <tspan x="-70" y="0">
                        車禍奪夫命，身體退化靠鄰居回收物過活
                      </tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI"></tspan>
                    </text>
                    <rect
                      id="Rectangle_4788"
                      width="424"
                      height="454"
                      fill="url(#pattern)"
                      data-name="Rectangle 4788"
                      rx="10"
                      transform="translate(288 1267)"
                    ></rect>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100%"
                  height="100%"
                  viewBox="50 0 1311 588"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      width="1"
                      height="1"
                      viewBox="22.275 0 389.659 398.242"
                    >
                      <image
                        xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/991cd608ea198aefe3f36b4a747a38d1.jpeg"
                        width="618.667"
                        height="464"
                        preserveAspectRatio="xMidYMid slice"
                      ></image>
                    </pattern>
                  </defs>
                  <g id="Group_9987" data-name="Group 9987" transform="translate(13371 -724)">
                    <rect
                      id="Rectangle_4789"
                      width="452"
                      height="464"
                      fill="url(#pattern)"
                      data-name="Rectangle 4789"
                      rx="10"
                      transform="translate(-13401 724)"
                    ></rect>
                    <text
                      id="回收站雖然只距離蔡滿足住家500公尺_但雙腿不方便的前提下_他仍不易前往_有次政府單位的居家照顧服務員向蔡滿足介紹了行動回收車的服務_同時提供他_zero_zero_彰化金馬城市環保站的聯絡方式_如今每當蔡滿足蒐集到一定數量的回收物_行動回收車就會前往回收_讓蔡滿足不必出遠門_也可以有一個靠回收變現的管道_蔡滿足也感慨_雖然有很多好心人士提供回收物給他_但也不乏許多將垃圾棄置在他家門口的案例_有些陌生人烤肉完的垃圾_沒分類就丟在我家_就算知道是誰_我也不好意思說_怕他下次就不拿來給我了_言談中透露出蔡滿"
                      fill="#252525"
                      data-name="回收站雖然只距離蔡滿足住家500公尺，但雙腿不方便的前提下，他仍不易前往。有次政府單位的居家照顧服務員向蔡滿足介紹了行動回收車的服務，同時提供他 zero zero 彰化金馬城市環保站的聯絡方式。如今每當蔡滿足蒐集到一定數量的回收物，行動回收車就會前往回收，讓蔡滿足不必出遠門，也可以有一個靠回收變現的管道。蔡滿足也感慨，雖然有很多好心人士提供回收物給他，但也不乏許多將垃圾棄置在他家門口的案例。「有些陌生人烤肉完的垃圾，沒分類就丟在我家，就算知道是誰，我也不好意思說，怕他下次就不拿來給我了！」言談中透露出蔡滿"
                      fontFamily="Noto Sans CJK TC"
                      fontSize="24"
                      fontWeight={400}
                     
                      transform="translate(-12911 787)"
                    >
                      <tspan x="0" y="26">
                        回收站雖然只距離蔡滿足住家
                      </tspan>
                      <tspan y="26" fontFamily="SegoeUI, Segoe UI">
                        500
                      </tspan>
                      <tspan y="26">公尺，但雙腿不方便的前提下，他仍不</tspan>
                      <tspan x="0" y="66">
                        易前往。有次政府單位的居家照顧服務員向蔡滿足介紹了行動回收車的服
                      </tspan>
                      <tspan x="0" y="106">
                        務，同時提供他
                      </tspan>
                      <tspan xmlSpace="preserve" y="106" fontFamily="SegoeUI, Segoe UI">
                        {" "}
                        zero zero{" "}
                      </tspan>
                      <tspan y="106">彰化金馬城市環保站的聯絡方式。如今每當蔡</tspan>
                      <tspan x="0" y="146">
                        滿足蒐集到一定數量的回收物，行動回收車就會前往回收，讓蔡滿足不必
                      </tspan>
                      <tspan x="0" y="186">
                        出遠門，也可以有一個靠回收變現的管道。蔡滿足也感慨，雖然有很多好
                      </tspan>
                      <tspan x="0" y="226">
                        心人士提供回收物給他，但也不乏許多將垃圾棄置在他家門口的案例。
                      </tspan>
                      <tspan x="0" y="266">
                        「有些陌生人烤肉完的垃圾，沒分類就丟在我家，就算知道是誰，我也不
                      </tspan>
                      <tspan x="0" y="306">
                        好意思說，怕他下次就不拿來給我了！」言談中透露出蔡滿足的無奈。
                      </tspan>
                      <tspan fontFamily="SegoeUI, Segoe UI"></tspan>
                      <tspan x="0" y="386">
                        這些年來，蔡滿足每天早起面對生活的困難與挑戰，他苦笑著說：「做回
                      </tspan>
                      <tspan x="0" y="426">
                        收很辛苦，但不做又沒收入，總要有點錢才能過日子啊！」他也感激行動
                      </tspan>
                      <tspan x="0" y="466">
                        回收車以及鄰居們的協助，阿
                      </tspan>
                      <tspan
                        y="466"
                        fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                      >
                        嬤
                      </tspan>
                      <tspan y="466">最後也期盼路人能</tspan>
                      <tspan
                        y="466"
                        fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                      >
                        夠
                      </tspan>
                      <tspan y="466">發揮公德心，確實做</tspan>
                      <tspan x="0" y="506">
                        好分類，別把不可回收的一般垃圾棄置在他家門口。
                      </tspan>
                      <tspan y="506" fontFamily="SegoeUI, Segoe UI"></tspan>
                    </text>
                    <text
                      id="ä_ç_æ_å_ç__2"
                      fill="#252525"
                      data-name="ä¸ç§æå¾ªç°_2"
                     
                      fontSize="32"
                      transform="translate(-12831 758.5)"
                      fontFamily="Noto Sans CJK TC"
                    >
                      <tspan x="-80" y="0">
                        行動資收站助回收，蔡滿足：希望路人發揮公德心
                      </tspan>
                      <tspan y="0" fontFamily="SegoeUI, Segoe UI"></tspan>
                    </text>
                  </g>
                </svg>
              )}
            </svg>




            <br />
            {/* ,transform: translate('10px', '-220px') */}
            {/* <div> */}

            {/* </div> */}
          </div>

        </SliderAtHead>
        <TopMainButton>
          <button
            className="circle-button"
            onClick={() => this.handleClick("#circle")}
            style={{
              backgroundColor: showCircle ? "#8d8d8d" : "#e6e6e6",
              marginBottom: '150px'
            }}
          ></button>

          <button className='circle-button2' onClick={() => this.handleClick("#square")} style={{
            backgroundColor: showSquare ? "#8d8d8d" : "#e6e6e6",
             marginBottom: '150px'
          }}>

          </button>
        </TopMainButton>
        <Head>
          <h2>我們想要解決...</h2>

        </Head>



        <div style={{ textAlign: 'center' }}>
          <SolveSvgImg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="90%"
            height="100%"
            viewBox="100 -200 1682 1528.006"
          >
            <defs>
              <pattern
                id="pattern"
                width="1"
                height="1"
                viewBox="259.831 110.188 661.204 644.083"
              >
                <image

                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/b539c32d1a9cab41800d9dab225b8f62.jpeg"
                  width="1180.867"
                  height="790"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
              <pattern
                id="pattern-2"

                width="1"
                height="1"
                viewBox="287.544 76.372 355.158 431.628"
              >
                <image

                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/97b03e1a3c3acb2644b84e4da16f4ef6.jpeg"
                  width="762.191"
                  height="508"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
              <pattern
                id="pattern-3"
                width="1"
                height="1"
                viewBox="0 11.525 371.145 451.057"
              >
                <image
                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/6ced42db60f392c10504c7a821ec5310.png"
                  width="418"
                  height="626.336"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
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
              <clipPath id="clip-path-2">
                <path
                  id="path2130"
                  fill="none"
                  d="M0-682.665h134.771v134.771H0Z"
                  transform="translate(0 682.665)"
                ></path>
              </clipPath>
            </defs>
            <g id="Group_9989" data-name="Group 9989" transform="translate(0 -2442)">

              <text
                id="ä_ç_æ_å_ç__2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                fontSize="24"
                transform="translate(1032 3827.506)"
              >

                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="專職拾荒者每日工時超過10小時_但每月收入約僅5000_8000元_我們希望募集企業資源_為拾荒者提供回收物單價加碼補貼或生活物資_讓拾荒者能透過_回收工作_獲得基本生活所需_"
                fill="#252525"
                data-name="專職拾荒者每日工時超過10小時，但每月收入約僅5000~8000元。​我們希望募集企業資源，為拾荒者提供回收物單價加碼補貼或生活物資，讓拾荒者能透過「回收工作」獲得基本生活所需。​"
                fontFamily="Noto Sans CJK TC"
                fontWeight={400}
                fontSize="24"
                transform="translate(322.001 2621.5)"
              >
                <tspan x="0" y="26">
                  專職拾荒者每日工時超過
                </tspan>
                <tspan y="26" fontFamily="SegoeUI, Segoe UI">
                  10
                </tspan>
                <tspan y="26">小時，但每月收入約</tspan>
                <tspan x="0" y="66">
                  僅
                </tspan>
                <tspan y="66" fontFamily="SegoeUI, Segoe UI">
                  5000~8000
                </tspan>
                <tspan y="66">元。</tspan>
                <tspan y="66" fontFamily="SegoeUI, Segoe UI">

                </tspan>
                <tspan fontFamily="SegoeUI, Segoe UI"></tspan>
                <tspan x="0" y="146">
                  我們希望募集企業資源，為拾荒者提供回收物單
                </tspan>
                <tspan x="0" y="186">
                  價加碼補貼或生活物資，讓拾荒者能透過「回收
                </tspan>
                <tspan x="0" y="226">
                  工作」獲得基本生活所需。
                </tspan>
                <tspan y="226" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="每年有超過60萬噸的回收物透過回收者進入循環體系_約整體回收數量的10_拾荒者的回收行為有效減少城市垃圾量_降低環境污染_我們透過回收物單價補貼與點數兌換機制_讓拾荒者的回收付出更有價值_讓拾荒者與城市共好共榮_我們也將協助合作企業計算捐贈資源促進了多少回收量_並估算對台灣及全球減碳的貢獻_"
                fill="#252525"
                data-name="每年有超過60萬噸的回收物透過回收者進入循環體系，約整體回收數量的10%。拾荒者的回收行為有效減少城市垃圾量，降低環境污染。​我們透過回收物單價補貼與點數兌換機制，讓拾荒者的回收付出更有價值，讓拾荒者與城市共好共榮。 我們也將協助合作企業計算捐贈資源促進了多少回收量，並估算對台灣及全球減碳的貢獻。​"
                fontFamily="Noto Sans CJK TC"
                fontSize="24"
                fontcolor="#252525"
                fontWeight={400}
                transform="translate(1066.001 3223.505)"
              >
                <tspan x="0" y="26">
                  每年有超過
                </tspan>
                <tspan y="26" fontFamily="SegoeUI, Segoe UI">
                  60
                </tspan>
                <tspan y="26">萬噸的回收物透過回收者進入循環</tspan>
                <tspan x="0" y="66">
                  體系，約整體回收數量的
                </tspan>
                <tspan y="66" fontFamily="SegoeUI, Segoe UI">
                  10%
                </tspan>
                <tspan y="66">。拾荒者的回收行</tspan>
                <tspan x="0" y="106">
                  為有效減少城市垃圾量，降低環境
                </tspan>
                <tspan
                  y="106"
                  fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                >
                  污
                </tspan>
                <tspan y="106">染。</tspan>
                <tspan y="106" fontFamily="SegoeUI, Segoe UI">

                </tspan>
                <tspan fontFamily="SegoeUI, Segoe UI"></tspan>
                <tspan x="0" y="186">
                  我們透過回收物單價補貼與點數兌換機制，讓拾
                </tspan>
                <tspan x="0" y="226">
                  荒者的回收付出更有價
                </tspan>
                <tspan
                  y="226"
                  fontFamily="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI"
                >
                  值
                </tspan>
                <tspan y="226">，讓拾荒者與城市共好</tspan>
                <tspan x="0" y="266">
                  共榮。
                </tspan>
                <tspan x="0" y="306">
                  我們也將協助合作企業計算捐贈資源促進了多少
                </tspan>
                <tspan x="0" y="346">
                  回收量，並估算對台灣及全球減碳的貢獻。
                </tspan>
                <tspan y="346" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="_"
                fill="#2abcaf"
                data-name="●●"
                fontFamily="SegoeUI, Segoe UI"
                fontSize="24"
                transform="translate(288 2621.5)"
              >
                <tspan x="-10" y="26">
                  ●
                </tspan>
                <tspan x="-10" y="146">
                  ●
                </tspan>
              </text>
              <text
                id="_2"
                fill="#2abcaf"
                data-name="●●"
                fontFamily="SegoeUI, Segoe UI"
                fontSize="24"
                transform="translate(1032 3223.505)"
              >
                <tspan x="-10" y="26">
                  ●
                </tspan>
                <tspan x="-10" y="186">
                  ●
                </tspan>
              </text>
              <text
                id="_1"
                fill="#2abcaf"
                data-name="#1"
                fontFamily="Arial-BoldMT, Arial"
                fontSize="60"
                fontWeight="700"
                transform="translate(288.501 2496)"
              >
                <tspan x="-20" y="0">
                  #1
                </tspan>
              </text>
              <text
                id="_2-2"
                fill="#2abcaf"
                data-name="#2"
                fontFamily="Arial-BoldMT, Arial"
                fontSize="60"
                fontWeight="700"
                transform="translate(1033.5 3102)"
              >
                <tspan x="0" y="0">
                  #2
                </tspan>
              </text>









              <g id="Group_9987" data-name="Group 9987" >
                <g
                  id="Component_397_1"
                  data-name="Component 397 – 1"
                  transform="translate(940 2442)"

                >

                  <g className="clipContainer">
                    <g className="imageWrapper">
                      <rect
                        id="_14973526_拷貝"

                        fill="url(#pattern-2)"
                        d="M0 0h418v508H0z"
                        data-name="14973526 拷貝"
                        className="imageToBig"

                      ></rect>
                    </g>

                  </g>

                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/14efd4be40ef1eddfc0cb3ae20dca610.png"
                    id="Image_215"
                    width="254"
                    height="254"
                    data-name="Image 215"
                    transform="translate(418)"
                  ></image>
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/eb028e9ae1ec3f110089e11e9f7bed35.png"
                    id="Image_216"
                    width="254"
                    height="254"
                    data-name="Image 216"
                    transform="translate(418 254)"
                  ></image>
                </g>
              </g>
              <g id="Group_9988" data-name="Group 9988">
                <g
                  id="Component_396_1"
                  data-name="Component 396 – 1"
                  transform="translate(258 3048)"
                >
                  <g className="clipContainerGrandma">
                    <g className="imageWrapperGrandma">
                      <rect

                        className='imageToBigGrandma'
                        id="_14973526_拷貝-2"
                        fill="url(#pattern-3)"
                        d="M0 0h418v508H0z"
                        data-name="14973526 拷貝3"
                        transform="translate(254)"
                      ></rect>

                    </g>
                  </g>
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/539a4defd491d4fd528e38c50d95e238.png"
                    id="Image_217"
                    width="254"
                    height="254"
                    data-name="Image 217"
                  ></image>
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/33c61a3f0983b1e01700a83821793d46.png"
                    id="Image_218"
                    width="254"
                    height="254"
                    data-name="Image 218"
                    transform="translate(0 254)"
                  ></image>
                </g>
              </g>
              <text
                id="ä_ç_æ_å_ç__2-2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="Noto Sans CJK TC"
                fontSize="36"
                fintweight="500"
                transform="translate(288 2551)"
              >
                <tspan x="-10" y="0">
                  回收價格低落，拾荒是最糟勞動選擇
                </tspan>
                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="ä_ç_æ_å_ç__2-3"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="Noto Sans CJK TC"
                fontSize="36"
                fintweight="500"
                transform="translate(1033.5 3157)"
                
              >
                <tspan x="0" y="0">
                  讓拾荒者能為成為城市環境維護者
                </tspan>
              </text>
            </g>

          </SolveSvgImg>

        </div>
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="86%"
            height="80%"
            viewBox="0 0 1632 790"
          >
            <defs>
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
              <clipPath id="clip-path-2">
                <path
                  id="path2130"
                  fill="none"
                  d="M0-682.665h134.771v134.771H0Z"
                  transform="translate(0 682.665)"
                ></path>
              </clipPath>
              <pattern
                id="pattern2"
                width="1"
                height="1"
                viewBox="259.831 110.188 661.204 644.083"
              >
                <image
                  xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/c4ef7c508c56fe0f047ca2e4b0dc9d8b.jpeg"
                  width="1180.867"
                  height="790"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <g
              id="Group_9990"
              data-name="Group 9990"
              transform="translate(0 -3780.006)"
            >
              <path
                id="_18573"
                fill="url(#pattern2)"
                d="M0 0h511a300 300 0 0 1 300 300v190a300 300 0 0 1-300 300H0z"
                data-name="18573"
                transform="translate(0 3780.006)"
              ></path>
              <text
                id="ä_ç_æ_å_ç__2"
                fill="#252525"
                data-name="ä¸ç§æå¾ªç°_2"
                fontFamily="Noto Sans CJK TC"
                fontSize="36"
                fontWeight={500}
                transform="translate(1032 3827.506)"
              >
                <tspan x="-106" y="0">
                  拾荒者援助專案
                </tspan>
                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <path
                id="Rectangle_4770"
                fill="none"
                d="M0 0h164v164H0z"
                data-name="Rectangle 4770"
                transform="translate(926 3890.006)"
              ></path>
              <path
                id="Rectangle_4771"
                fill="none"
                d="M0 0h164v164H0z"
                data-name="Rectangle 4771"
                transform="translate(906 4106.506)"
              ></path>
              <path
                id="Rectangle_4772"
                fill="none"
                d="M0 0h164v164H0z"
                data-name="Rectangle 4772"
                transform="translate(906 4323.506)"
              ></path>
              <path
                id="Line_504"
                fill="none"
                stroke="#2abcaf"
                strokeWidth="2"
                d="M0 0h726"
                data-name="Line 504"
                transform="translate(906 4080.006)"
              ></path>
              <path
                id="Line_505"
                fill="none"
                stroke="#2abcaf"
                strokeWidth="2"
                d="M0 0h726"
                data-name="Line 505"
                transform="translate(906 4297.006)"
              ></path>
              <text
                id="_0000"
                fill="#252525"
                data-name="0"
                fontFamily="ArialMT, Arial"
                fontSize="66"
                transform="translate(1106.053 4019.006)"
              >
                <tspan x="0" y="0">
                  0000
                </tspan>
              </text>
              <text
                id="幫助人次"
                fill="#252525"
                fontFamily="Noto Sans CJK TC"
                fontWeight={400}
                fontSize="30"
                transform="translate(1106.5 3938.506)"
              >
                <tspan x="0" y="0">
                  幫助人次
                </tspan>
              </text>
              <text
                id="人"
                fill="#252525"
                fontFamily="Noto Sans CJK TC"
                fontWeight={400}
                fontSize="30"
                transform="translate(1269 4017.006)"
              >
                <tspan x="0" y="0">
                  人
                </tspan>
              </text>
              <text
                id="促進回收量"
                fill="#252525"
                fontFamily="Noto Sans CJK TC"
                fontWeight={400}
                fontSize="30"
                transform="translate(1106.5 4154.506)"
              >
                <tspan x="0" y="0">
                  促進回收量
                </tspan>
              </text>
              <text
                id="減少碳排量"
                fill="#252525"
                fontFamily="Noto Sans CJK TC"
                fontWeight={400}
                fontSize="30"
                transform="translate(1106.5 4370.775)"
              >
                <tspan x="0" y="0">
                  減少碳排量
                </tspan>
              </text>
              <g
                id="Group_9973"
                data-name="Group 9973"
                transform="translate(119.5 -841.494)"
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
              <text
                id="_0000-2"
                fill="#252525"
                data-name="0"
                fontFamily="ArialMT, Arial"
                fontSize="66"
                transform="translate(1106.053 4235.006)"
              >
                <tspan x="0" y="0">
                  0000
                </tspan>
              </text>
              <text
                id="公斤"
                fill="#252525"
                fontFamily="Noto Sans CJK TC"
                fontSize="30"
                transform="translate(1269 4233.006)"
              >
                <tspan x="0" y="0">
                  公斤
                </tspan>
              </text>
              <text
                id="_0000-3"
                fill="#252525"
                data-name="0"
                fontFamily="ArialMT, Arial"
                fontSize="66"
                transform="translate(1106.053 4451.275)"
              >
                <tspan x="0" y="0">
                  0000
                </tspan>
              </text>
              <text
                id="公斤-2"
                fill="#252525"
                data-name="公斤"
                fontFamily="Noto Sans CJK TC"
                fontSize="30"
                transform="translate(1269 4449.275)"
              >
                <tspan x="0" y="0">
                  公斤
                </tspan>
              </text>
              <g
                id="recyclable_1_"
                fill="none"
                stroke="#2abcaf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                data-name="recyclable (1)"
                transform="translate(909.537 4098.007)"
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
              <g id="g2124" transform="translate(921.011 5024.683)">
                <g id="g2126" transform="translate(0 -682.665)">
                  <g id="g2128" clipPath="url(#clip-path-2)">
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
        <ProjectOverview>
          {/* 左上與右下的圓圈圖片 */}
          <img src={awsUrl("website/ne-products/Subtraction10.png")} alt="左上裝飾圖" className="circle-left" />
          <img src={awsUrl("website/ne-products/Subtraction11.png")} alt="右下裝飾圖" className="circle-right" />

          <div className="main">我們要做...</div>

          <div className="content">
            <div className="item">
              <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/f039fcf3be6c06b258396206aed78f09.png" alt="圖片描述" />

              <div className="label">媒合企業資源</div>
              <div className="contents"> <p>透過與企業合作，募集拾荒者所需資源，共同協助改善弱勢拾荒者的生活條件，讓他們重獲尊嚴與溫暖。</p> ​</div>
            </div>
            <div className="item">
              <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/97dcccca37e0fb5e761dd0907daf33b9.png" alt="圖片描述" />


              <div className="label">接觸更多拾荒者​</div>
              <div className="contents"> <p>目前政府及回收體系尚未全面覆蓋所有弱勢拾荒者。我們將透過與地方公部門、公益組織及社區里長合作，主動尋找更多需要幫助的拾荒者，提供適切協助。​</p> ​</div>
            </div>
            <div className="item">
              <img src="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/699e7d8cd906511f2719c292f2c9778f.png" alt="圖片描述" />

              <div className="label">拓展合作回收站據點​</div>
              <div className="contents"> <p>我們希望攜手拓展更多的合作據點，以便接觸與關懷到更多的拾荒者。​</p> ​</div>
            </div>
          </div>

        </ProjectOverview>

        {/* 在 Documents 與 CooperationSection 之間加入 CircleDecoration */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <CircleDecoration src={awsUrl("website/ne-products/Ellipse1828.png")} alt="綠色圓圈裝飾" />
        </div>


        <CooperationSection>



          <div className="main">合作方式</div>
          <div style={{ textAlign: "center" }}>
            <div id="container">
              <div>
                <div id="outer">
                  <h2>模式一</h2>
                  <h3>募集企業資源為拾荒者提供生活必需品​</h3>
                  <button id="toggleButton" class="circle-button"></button>
                  <div>
                    <p>拾荒者到合作回收站回收時，除基本回收價金外，同時累積點數，兌換企業贊助品項。我們希望能為拾荒者提供：</p>
                    <p style={{ fontSize: '24px' }}><span style={{ color: '#2abcaf' }}>●</span> 民生家用品</p>

                    <p style={{ fontSize: '24px' }}><span style={{ color: '#2abcaf' }}>●</span> 待用餐券（募集經費並與超商通路合作）</p>
                    <p style={{ fontSize: '24px' }}><span style={{ color: '#2abcaf' }}>●</span> 其他拾荒者所需工作設備等​</p>
                  </div>
                </div>
              </div>
              <div>
                <div id="outer1">
                  <h2>模式二</h2>
                  <h3>補貼回收單價給予拾荒者</h3>
                  <button id="toggleButtonOuter1" class="circle-button"></button>
                  <div >
                    <p>讓拾荒者可以獲得資收物料加碼補貼金額（可指定補貼回收項目，如：廢紙、紙容器、塑膠容器等）</p>
                  </div>
                </div>
              </div>

            </div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="672"
              height="306"
              viewBox="0 0 1344 506"
            >
              <g
                id="Group_9993"
                data-name="Group 9993"
                transform="translate(-288 -6154.086)"
              >
                <g
                  id="Component_37_1"
                  data-name="Component 37 – 1"
                  transform="translate(288 6154.086)"
                >
                  <rect
                    id="Rectangle_4790"
                    width="630"
                    height="506"
                    fill="rgba(42,188,175,0.2)"
                    data-name="Rectangle 4790"
                    rx="10"
                  ></rect>
                  <rect
                    id="Rectangle_4796"
                    width="600"
                    height="326"
                    fill="#fff"
                    data-name="Rectangle 4796"
                    rx="10"
                    transform="translate(15 164)"
                  ></rect>
                  <text
                    id="å_é_æ_å__23"
                    fill="#2abcaf"
                    data-name="åé¡æå
_23"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="30"
                    transform="translate(1 32.076)"
                  >
                    <tspan x="269.5" y="32">
                      模式一
                    </tspan>
                    <tspan y="32" fill="#252525" fontFamily="SegoeUI, Segoe UI"></tspan>
                    <tspan fill="#252525" fontSize="32">
                      <tspan x="42.5" y="75">
                        募集企業資源為拾荒者提供生活必需品
                      </tspan>
                      <tspan y="75" fontFamily="SegoeUI, Segoe UI">

                      </tspan>
                    </tspan>
                  </text>
                  <g
                    id="Icon_feather-plus-circle"
                    data-name="Icon feather-plus-circle"
                    transform="translate(295 144)"
                  >
                    <path
                      id="Path_37659"
                      fill="#2abcaf"
                      d="M43 23A20 20 0 1 1 23 3a20 20 0 0 1 20 20"
                      data-name="Path 37659"
                      transform="translate(-3 -3)"
                    ></path>
                    <path
                      id="Path_37660"
                      fill="none"
                      d="M18 12v18.432"
                      data-name="Path 37660"
                      transform="translate(2 -1.216)"
                    ></path>
                    <path
                      id="Path_37661"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M12 18h18.432"
                      data-name="Path 37661"
                      transform="translate(-1.216 2)"
                    ></path>
                  </g>
                  <text
                    id="拾荒者到合作回收站回收時_除基本回收價金外_同時累積點數_兌換企業贊助品項_我們希望能為拾荒者提供_民生家用品_待用餐券_募集經費並與超商通路合作_其他拾荒者所需工作設備等"
                    fill="#252525"
                    data-name="拾荒者到合作回收站回收時，除基本回收價金外，同時累積點數，兌換企業贊助品項。我們希望能為拾荒者提供：​ ● 民生家用品​ ● 待用餐券（募集經費並與超商通路合作）​ ● 其他拾荒者所需工作設備等"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="24"
                    transform="translate(72 206)"
                  >
                    <tspan x="0" y="26">
                      拾荒者到合作回收站回收時，除基本回收價金
                    </tspan>
                    <tspan x="0" y="66">
                      外，同時累積點數，兌換企業贊助品項。我們
                    </tspan>
                    <tspan x="0" y="106">
                      希望能為拾荒者提供：
                    </tspan>
                    <tspan y="106" fontFamily="SegoeUI, Segoe UI">

                    </tspan>
                    <tspan fill="#2abcaf" fontFamily="SegoeUI, Segoe UI">
                      <tspan x="0" y="146">
                        ●
                      </tspan>
                      <tspan y="146" fill="#252525"></tspan>
                      <tspan
                        y="146"
                        fill="#252525"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      >
                        民生家用品
                      </tspan>
                      <tspan y="146" fill="#252525">

                      </tspan>
                      <tspan x="0" y="186">
                        ●
                      </tspan>
                      <tspan y="186" fill="#252525"></tspan>
                      <tspan
                        y="186"
                        fill="#252525"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      >
                        待用餐券（募集經費並與超商通路合作）
                      </tspan>
                      <tspan y="186" fill="#252525">

                      </tspan>
                      <tspan x="0" y="226">
                        ●
                      </tspan>
                      <tspan y="226" fill="#252525"></tspan>
                      <tspan
                        y="226"
                        fill="#252525"
                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                      >
                        其他拾荒者所需工作設備等
                      </tspan>
                    </tspan>
                  </text>
                </g>
                <g
                  id="Component_38_1"
                  data-name="Component 38 – 1"
                  transform="translate(1002 6154.086)"
                >
                  <rect
                    id="Rectangle_4791"
                    width="630"
                    height="505"
                    fill="rgba(226,245,204,0.8)"
                    data-name="Rectangle 4791"
                    rx="10"
                  ></rect>
                  <rect
                    id="Rectangle_4797"
                    width="600"
                    height="326"
                    fill="#fff"
                    data-name="Rectangle 4797"
                    rx="10"
                    transform="translate(15 164)"
                  ></rect>
                  <text
                    id="å_é_æ_å__23-2"
                    fill="#2abcaf"
                    data-name="åé¡æå
_23"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="30"
                    transform="translate(1 32.076)"
                  >
                    <tspan x="269.5" y="32">
                      模式二
                    </tspan>
                    <tspan y="32" fill="#252525" fontFamily="SegoeUI, Segoe UI"></tspan>
                    <tspan fill="#252525" fontSize="32">
                      <tspan x="138.5" y="75">
                        補貼回收單價給予拾荒者
                      </tspan>
                    </tspan>
                  </text>
                  <g
                    id="Icon_feather-plus-circle-2"
                    data-name="Icon feather-plus-circle"
                    transform="translate(292 141)"
                  >

                    <path
                      id="Path_37659-2"
                      fill="#2abcaf"
                      d="M43 23A20 20 0 1 1 23 3a20 20 0 0 1 20 20"
                      data-name="Path 37659"

                      onClick={() => { this.handleClick(null, "hideElement") }}
                    ></path>

                    <path
                      id="Path_37660-2"
                      fill="none"
                      d="M18 12v18.432"
                      data-name="Path 37660"
                      transform="translate(5 1.784)"
                    ></path>
                    <path
                      id="Path_37661-2"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M12 18h18.432"
                      data-name="Path 37661"
                      transform="translate(1.784 5)"
                    ></path>
                  </g>
                  <text
                    id="讓拾荒者可以獲得資收物料加碼補貼金額_可指定補貼回收項目_如_廢紙_紙容器_塑膠容器等_"
                    fill="#252525"
                    data-name="讓拾荒者可以獲得資收物料加碼補貼金額（可指定補貼回收項目，如：廢紙、紙容器、塑膠容器等）​"
                    fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                    fontSize="24"
                    transform="translate(72 206)"
                  >
                    <tspan x="0" y="26">
                      讓拾荒者可以獲得資收物料加碼補貼金額（可
                    </tspan>
                    <tspan x="0" y="66">
                      指定補貼回收項目，如：廢紙、紙容器、塑膠
                    </tspan>
                    <tspan x="0" y="106">
                      容器等）
                    </tspan>
                    <tspan y="106" fontFamily="SegoeUI, Segoe UI">

                    </tspan>
                  </text>
                </g>
              </g>
            </svg> */}
          </div>



          <CooperateSvgImgMobile
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"

            viewBox="-10 -20 401.189 1400.13"
          >
            <defs>
              <clipPath id="m-clip-path">
                <path
                  id="Rectangle_4514"
                  fill="none"
                  d="M0 0h276.522v266.152H0z"
                  data-name="Rectangle 4514"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-2">
                <path
                  id="Path_37104"
                  fill="none"
                  d="M112.592 247.479a19.66 19.66 0 0 0-10.941 8.27 19.627 19.627 0 1 0-34.58 17.4 19.73 19.73 0 0 0-12.606 1.059 23.519 23.519 0 1 0-4.826 32.92 19.646 19.646 0 0 0 28.914-3.921 23.57 23.57 0 0 0 33.083 3.257 23.564 23.564 0 0 0 30.229-.355 20 20 0 0 0 31.178-4.186 23.57 23.57 0 0 0 34.4 4.264 23.565 23.565 0 0 0 32.219-1.642 16.182 16.182 0 1 0 4.83-25.156 23.594 23.594 0 0 0-28.563-13.66 9.289 9.289 0 0 0-18.568-.417 24 24 0 0 0-3.971-.534 20 20 0 0 0 .071-1.634 19.635 19.635 0 0 0-37.793-7.438 20 20 0 0 0-2.689-.182 19 19 0 0 0-2.14.116 19.626 19.626 0 1 0-38.248-8.166"
                  data-name="Path 37104"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-4">
                <path
                  id="Path_37124"
                  fill="none"
                  d="M207.957 290.564c.012.019.063.1.158.224a9.03 9.03 0 0 0 6.7 3.208l.037-.391c-4.635-.355-6.471-3.175-6.505-3.232Z"
                  data-name="Path 37124"
                  transform="translate(-207.957 -290.373)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-5">
                <path
                  id="Rectangle_4528"
                  fill="none"
                  d="M0 0h6.89v3.623H0z"
                  data-name="Rectangle 4528"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-7">
                <path
                  id="Path_37126"
                  fill="none"
                  d="M206.817 292.639c.012.018.063.1.158.224a9.04 9.04 0 0 0 6.7 3.208l.038-.391c-4.626-.353-6.461-3.162-6.506-3.232Z"
                  data-name="Path 37126"
                  transform="translate(-206.817 -292.448)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-10">
                <path
                  id="Path_37128"
                  fill="none"
                  d="M205.774 294.84c.012.018.063.1.158.225a8 8 0 0 0 3.423 2.475l.043.017a11 11 0 0 0 3.229.716l.038-.391c-4.659-.355-6.488-3.2-6.507-3.232Z"
                  data-name="Path 37128"
                  transform="translate(-205.774 -294.65)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-14">
                <path
                  id="Path_37627"
                  fill="none"
                  d="M112.6 247.452a19.66 19.66 0 0 0-10.942 8.257 19.642 19.642 0 0 0-38.384 5.806 19.43 19.43 0 0 0 3.8 11.572 19.76 19.76 0 0 0-12.608 1.058 23.487 23.487 0 1 0-4.827 32.868 19.67 19.67 0 0 0 28.922-3.913 23.6 23.6 0 0 0 33.087 3.252 23.6 23.6 0 0 0 30.233-.352 20.02 20.02 0 0 0 31.182-4.179 23.6 23.6 0 0 0 34.406 4.257 23.6 23.6 0 0 0 32.223-1.639 16.161 16.161 0 1 0 4.831-25.117 23.616 23.616 0 0 0-28.567-13.639 9.29 9.29 0 0 0-18.57-.417 24 24 0 0 0-3.971-.533q.07-.81.071-1.631a19.642 19.642 0 0 0-37.8-7.426 20 20 0 0 0-2.69-.182 19 19 0 0 0-2.14.115 19.624 19.624 0 1 0-38.253-8.153"
                  data-name="Path 37627"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-18">
                <path
                  id="Path_37168"
                  fill="none"
                  d="M112.582 247.477a19.66 19.66 0 0 0-10.94 8.269 19.625 19.625 0 1 0-34.576 17.4 19.72 19.72 0 0 0-12.605 1.059 23.516 23.516 0 1 0-4.826 32.915 19.644 19.644 0 0 0 28.911-3.92 23.57 23.57 0 0 0 33.08 3.257 23.56 23.56 0 0 0 30.226-.355 20 20 0 0 0 31.175-4.185 23.567 23.567 0 0 0 34.4 4.263 23.563 23.563 0 0 0 32.216-1.641 16.18 16.18 0 1 0 4.83-25.153 23.59 23.59 0 0 0-28.56-13.659 9.288 9.288 0 0 0-18.566-.417 24 24 0 0 0-3.971-.534 20 20 0 0 0 .071-1.634 19.633 19.633 0 0 0-37.789-7.437 20 20 0 0 0-2.689-.182 19 19 0 0 0-2.14.116 19.624 19.624 0 1 0-38.245-8.165"
                  data-name="Path 37168"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-20">
                <path
                  id="Path_37252"
                  fill="none"
                  d="M171.8 144.41c-1.433 4.09-14.524 17.578-16.835 5.007-2.515 5.013-8.085 12.09-7.893 15.572s-.824 7.979 6.15 12.331c1.308 4.5 2.615 18.425 5.084 21.907 2.035 0 33.414-2.176 40.243 11.9 1.307 3.337 5.52 4.932 5.52 4.932s6.683-3.191-.581-28.289-16.848-38.733-23.968-44.828c-2.617.725-7.719 1.472-7.719 1.472"
                  data-name="Path 37252"
                  transform="translate(-147.072 -142.938)"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-22">
                <path
                  id="Rectangle_4566"
                  fill="none"
                  d="M0 0h22.447v4.403H0z"
                  data-name="Rectangle 4566"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-24">
                <path
                  id="Rectangle_4568"
                  fill="none"
                  d="M0 0h10.141v3.359H0z"
                  data-name="Rectangle 4568"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-25">
                <path
                  id="Rectangle_4569"
                  fill="none"
                  d="M0 0h22.698v2.855H0z"
                  data-name="Rectangle 4569"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-26">
                <path
                  id="Rectangle_4570"
                  fill="none"
                  d="M0 0h17.975v6.476H0z"
                  data-name="Rectangle 4570"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-27">
                <path
                  id="Rectangle_4571"
                  fill="none"
                  d="M0 0h17.973v3.317H0z"
                  data-name="Rectangle 4571"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-28">
                <path
                  id="Rectangle_4572"
                  fill="none"
                  d="M0 0h8.802v5.445H0z"
                  data-name="Rectangle 4572"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-29">
                <path
                  id="Rectangle_4573"
                  fill="none"
                  d="M0 0h8.802v3.339H0z"
                  data-name="Rectangle 4573"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-30">
                <path
                  id="Rectangle_4574"
                  fill="none"
                  d="M0 0h9.672v11.306H0z"
                  data-name="Rectangle 4574"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-31">
                <path
                  id="Rectangle_4575"
                  fill="none"
                  d="M0 0h9.868v4.493H0z"
                  data-name="Rectangle 4575"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-32">
                <path
                  id="Rectangle_4576"
                  fill="none"
                  d="M0 0h6.841v6.766H0z"
                  data-name="Rectangle 4576"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-33">
                <path
                  id="Rectangle_4577"
                  fill="none"
                  d="M0 0h17.126v3.735H0z"
                  data-name="Rectangle 4577"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-34">
                <path
                  id="Rectangle_4578"
                  fill="none"
                  d="M0 0h19.151v11.408H0z"
                  data-name="Rectangle 4578"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-35">
                <path
                  id="Rectangle_4579"
                  fill="none"
                  d="M0 0h19.141v6.823H0z"
                  data-name="Rectangle 4579"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-36">
                <path
                  id="Rectangle_4580"
                  fill="none"
                  d="M0 0h22.035v43.538H0z"
                  data-name="Rectangle 4580"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-37">
                <path
                  id="Rectangle_4581"
                  fill="none"
                  d="M0 0h20.864v5.488H0z"
                  data-name="Rectangle 4581"
                ></path>
              </clipPath>
              <clipPath id="m-clip-path-38">
                <path
                  id="Rectangle_4582"
                  fill="none"
                  d="M0 0h20.796v4.386H0z"
                  data-name="Rectangle 4582"
                ></path>
              </clipPath>
              <linearGradient
                id="linear-gradient"
                x1="-0.036"
                x2="-0.033"
                y1="1.102"
                y2="1.102"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#42c5a0"></stop>
                <stop offset="1" stopColor="#0ebaa0"></stop>
              </linearGradient>
            </defs>
            <g id="Group_9971" data-name="Group 9971" transform="translate(-10 -6067)">
              <text
                id="回饋現金與點數_點數兌換即期品_"
                fill="#8bdc65"
                data-name="回饋現金與點數​ 點數兌換即期品​"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                fontSize="20"
                transform="translate(80 6995.324)"
              >
                <tspan x="-82" y="0">
                  回饋現金與點數
                </tspan>
                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
                <tspan x="-82" y="32">
                  點數兌換即期品
                </tspan>
                <tspan y="32" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <g id="Group_9970" data-name="Group 9970">
                <g
                  id="Component_26_1"
                  data-name="Component 26 – 1"
                  class="cooperateZeroTrash"
                >
                  <g id="Group_9579" data-name="Group 9579">
                    <g
                      id="Group_9578"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9578"
                    >
                      <path
                        id="Path_37103"
                        fill="#e1f2fc"
                        d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.865 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.893 57.067 20.421 87.973 2.8 123.631.3"
                        data-name="Path 37103"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9581"
                    data-name="Group 9581"
                    transform="translate(9.224 176.381)"
                  >
                    <g
                      id="Group_9580"
                      clipPath="url(#m-clip-path-2)"
                      data-name="Group 9580"
                    >
                      <path
                        id="Rectangle_4515"
                        fill="url(#linear-gradient)"
                        d="M0 0h255.962v81.475H0z"
                        data-name="Rectangle 4515"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_9583" data-name="Group 9583">
                    <g
                      id="Group_9582"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9582"
                    >
                      <path
                        id="Path_37105"
                        fill="#75c8d1"
                        fillRule="evenodd"
                        d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                        data-name="Path 37105"
                        transform="translate(-4.177 -75.043)"
                      ></path>
                      <path
                        id="Path_37106"
                        fill="#8bdc64"
                        d="M192.778 148.538a5.055 5.055 0 1 0 5.055-5.047 5.05 5.05 0 0 0-5.055 5.047"
                        data-name="Path 37106"
                        transform="translate(-44.924 -33.589)"
                      ></path>
                      <path
                        id="Path_37107"
                        fill="#22d3c5"
                        d="M197.864 122.461a5.04 5.04 0 0 1-5.047-5.039V98.939a25.05 25.05 0 0 1 40.626-19.574 5.043 5.043 0 1 1-6.286 7.887 14.8 14.8 0 0 0-9.3-3.24 14.954 14.954 0 0 0-14.948 14.927v18.483a5.044 5.044 0 0 1-5.047 5.039"
                        data-name="Path 37107"
                        transform="translate(-44.933 -17.307)"
                      ></path>
                      <path
                        id="Path_37108"
                        fill="#8bdc64"
                        d="M239.324 116.26a5.043 5.043 0 0 1 5.048 5.039v18.484a25.05 25.05 0 0 1-40.628 19.572 5.043 5.043 0 0 1 6.287-7.886 14.8 14.8 0 0 0 9.3 3.24 14.957 14.957 0 0 0 14.95-14.926V121.3a5.04 5.04 0 0 1 5.045-5.039"
                        data-name="Path 37108"
                        transform="translate(-47.036 -27.215)"
                      ></path>
                      <path
                        id="Path_37109"
                        fill="#22d3c5"
                        d="M244.135 101.858a5.054 5.054 0 1 0 5.053-5.047 5.05 5.05 0 0 0-5.053 5.047"
                        data-name="Path 37109"
                        transform="translate(-56.892 -22.662)"
                      ></path>
                      <path
                        id="Path_37110"
                        fill="#22d3c5"
                        d="M100.164 100.584h-7.13a1.924 1.924 0 1 1 0-3.846h11.727a1.935 1.935 0 0 1 2.026 2.159 2.58 2.58 0 0 1-.776 1.653l-9.125 9.991H105a1.925 1.925 0 1 1 0 3.847H92.426a1.98 1.98 0 0 1-2.2-1.925 2.53 2.53 0 0 1 .64-1.788Z"
                        data-name="Path 37110"
                        transform="translate(-21.027 -22.645)"
                      ></path>
                      <path
                        id="Path_37111"
                        fill="#22d3c5"
                        d="M127.7 103.521a4.22 4.22 0 0 0-4.157-3.914c-2.467 0-3.953 1.517-4.494 3.914Zm-8.651 2.835a4.254 4.254 0 0 0 4.562 4.489c3.718 0 3.718-2.429 5.713-2.429a2.036 2.036 0 0 1 2.027 1.922c0 2.97-4.767 4.353-7.74 4.353-6.895 0-9.5-4.655-9.5-8.94 0-5.74 3.483-9.587 9.329-9.587 5.679 0 8.924 4.016 8.924 8.067 0 1.687-.508 2.125-2.164 2.125Z"
                        data-name="Path 37111"
                        transform="translate(-26.591 -22.511)"
                      ></path>
                      <path
                        id="Path_37112"
                        fill="#22d3c5"
                        d="M141.516 98.46a2.232 2.232 0 1 1 4.463 0v1.889h.067c.574-2.058 1.689-4.183 4.088-4.183a2.49 2.49 0 0 1 2.705 2.4 2.254 2.254 0 0 1-2.434 2.463h-.878c-1.993 0-3.074 1.383-3.074 5.466v5.739a2.468 2.468 0 0 1-4.936 0Z"
                        data-name="Path 37112"
                        transform="translate(-32.978 -22.511)"
                      ></path>
                      <path
                        id="Path_37113"
                        fill="#22d3c5"
                        d="M165.843 111.047c2.94 0 4.191-2.632 4.191-5.636 0-3.205-1.318-5.6-4.191-5.6s-4.189 2.4-4.189 5.6c0 3 1.249 5.636 4.189 5.636m0-14.883c5.949 0 9.126 4.05 9.126 9.247 0 4.927-2.4 9.28-9.126 9.28s-9.125-4.353-9.125-9.28c0-5.2 3.177-9.247 9.125-9.247"
                        data-name="Path 37113"
                        transform="translate(-36.521 -22.511)"
                      ></path>
                      <path
                        id="Path_37114"
                        fill="#8bdc64"
                        d="M100.164 137.811h-7.13a1.925 1.925 0 1 1 0-3.848h11.727a1.936 1.936 0 0 1 2.026 2.159 2.58 2.58 0 0 1-.776 1.655l-9.125 9.991H105a1.926 1.926 0 1 1 0 3.849H92.426a1.98 1.98 0 0 1-2.2-1.925 2.54 2.54 0 0 1 .64-1.789Z"
                        data-name="Path 37114"
                        transform="translate(-21.027 -31.359)"
                      ></path>
                      <path
                        id="Path_37115"
                        fill="#8bdc64"
                        d="M127.7 140.749a4.22 4.22 0 0 0-4.157-3.915c-2.467 0-3.953 1.52-4.494 3.915Zm-8.651 2.835a4.255 4.255 0 0 0 4.562 4.489c3.718 0 3.718-2.431 5.713-2.431a2.036 2.036 0 0 1 2.027 1.923c0 2.972-4.767 4.356-7.74 4.356-6.895 0-9.5-4.658-9.5-8.944 0-5.737 3.483-9.587 9.329-9.587 5.679 0 8.924 4.018 8.924 8.069 0 1.687-.508 2.125-2.164 2.125Z"
                        data-name="Path 37115"
                        transform="translate(-26.591 -31.225)"
                      ></path>
                      <path
                        id="Path_37116"
                        fill="#8bdc64"
                        d="M141.516 135.685a2.232 2.232 0 1 1 4.463 0v1.892h.067c.574-2.06 1.689-4.187 4.088-4.187a2.49 2.49 0 0 1 2.705 2.4 2.255 2.255 0 0 1-2.434 2.467h-.878c-1.993 0-3.074 1.383-3.074 5.466v5.737a2.468 2.468 0 0 1-4.936 0Z"
                        data-name="Path 37116"
                        transform="translate(-32.978 -31.225)"
                      ></path>
                      <path
                        id="Path_37117"
                        fill="#8bdc64"
                        d="M165.843 148.276c2.94 0 4.191-2.633 4.191-5.636 0-3.2-1.318-5.6-4.191-5.6s-4.189 2.4-4.189 5.6c0 3 1.249 5.636 4.189 5.636m0-14.886c5.949 0 9.126 4.053 9.126 9.249 0 4.927-2.4 9.281-9.126 9.281s-9.125-4.354-9.125-9.281c0-5.2 3.177-9.249 9.125-9.249"
                        data-name="Path 37117"
                        transform="translate(-36.521 -31.225)"
                      ></path>
                      <path
                        id="Rectangle_4516"
                        fill="#fff"
                        d="M0 0h122.443v81.395H0z"
                        data-name="Rectangle 4516"
                        transform="translate(73.046 155.778)"
                      ></path>
                      <path
                        id="Rectangle_4517"
                        fill="#22d3c5"
                        d="M0 0h143.776v5.897H0z"
                        data-name="Rectangle 4517"
                        transform="translate(62.379 152.83)"
                      ></path>
                      <path
                        id="Rectangle_4518"
                        fill="#22d3c5"
                        d="M0 0h78.12v53.089H0z"
                        data-name="Rectangle 4518"
                        transform="translate(73.046 199.367)"
                      ></path>
                      <path
                        id="Rectangle_4519"
                        fill="#80a5b7"
                        d="M0 0h18.738v53.089H0z"
                        data-name="Rectangle 4519"
                        transform="translate(131.26 199.367)"
                      ></path>
                      <path
                        id="Path_37118"
                        fill="#fff"
                        d="m181.741 279.98-1.149-.539-2.625-1.231 1.167-1.984 1.914.217.125-.882-2.6-.294-1.489 2.531-2.707-1.27-.97-.455a.27.27 0 0 0-.34.094l-.351.6a.213.213 0 0 0 .105.3l.062.028-4.287 8.331a.807.807 0 0 0 .49 1.051l5.331 2.5a1.01 1.01 0 0 0 1.247-.236l5.247-7.88.241.113a.27.27 0 0 0 .339-.094l.352-.6a.214.214 0 0 0-.106-.3"
                        data-name="Path 37118"
                        transform="translate(-39.274 -64.436)"
                      ></path>
                      <path
                        id="Rectangle_4520"
                        fill="#abdbe1"
                        d="M0 0h4.007v53.089H0z"
                        data-name="Rectangle 4520"
                        transform="translate(127.254 199.367)"
                      ></path>
                      <path
                        id="Rectangle_4521"
                        fill="#80a5b7"
                        d="M0 0h18.738v53.089H0z"
                        data-name="Rectangle 4521"
                        transform="translate(154.005 199.367)"
                      ></path>
                      <path
                        id="Rectangle_4522"
                        fill="#abdbe1"
                        d="M0 0h4.007v53.089H0z"
                        data-name="Rectangle 4522"
                        transform="translate(149.999 199.367)"
                      ></path>
                      <path
                        id="Path_37119"
                        fill="#fff"
                        d="m191.706 301.737-.329-1.33-1.309-5.333-.314-1.272a1.6 1.6 0 0 0-.09-.363 1 1 0 0 0-.174-.132l-.513-.378-1.633-1.229c-.059-.049-.051-.047-.054-.12h-.028l.247-.048.024-.015h.012a.22.22 0 0 0 .187-.26l-.16-.65a.247.247 0 0 0-.292-.167l-4.834.945a.22.22 0 0 0-.187.261l.16.65a.247.247 0 0 0 .291.167l.43-.084.028.006c.031.068.038.062.007.129l-.908 1.726-.289.535a1 1 0 0 0-.1.185 1.6 1.6 0 0 0 .088.364l.31 1.273 1.305 5.333.324 1.332a3.8 3.8 0 0 0 .184.687 1.3 1.3 0 0 0 .686.594l.206.061a1 1 0 0 1 .074.026 4.3 4.3 0 0 0 1.249-.18l1.887-.374 1.889-.365a4.2 4.2 0 0 0 1.219-.3 1 1 0 0 1 .056-.051l.158-.132a1.14 1.14 0 0 0 .345-.8 3.8 3.8 0 0 0-.155-.692"
                        data-name="Path 37119"
                        transform="translate(-42.385 -67.987)"
                      ></path>
                      <path
                        id="Rectangle_4523"
                        fill="#80a5b7"
                        d="M0 0h18.738v53.089H0z"
                        data-name="Rectangle 4523"
                        transform="translate(176.75 199.367)"
                      ></path>
                      <path
                        id="Path_37120"
                        fill="#fff"
                        d="m235.182 276.015-1.172-1.779-1.01-2.02-1.873 1.072-1.791.955-1.644 1.175-1.951.758 1.035 1.882 1.556 1.575 1 1.756 1.727-.883 1.821-.906 1.943-.724 1.764-1.124Z"
                        data-name="Path 37120"
                        transform="translate(-52.606 -63.722)"
                      ></path>
                      <path
                        id="Rectangle_4524"
                        fill="#abdbe1"
                        d="M0 0h4.007v53.089H0z"
                        data-name="Rectangle 4524"
                        transform="translate(172.744 199.367)"
                      ></path>
                      <path
                        id="Rectangle_4525"
                        fill="#22d3c5"
                        d="M0 0h22.745v21.815H0z"
                        data-name="Rectangle 4525"
                        transform="translate(127.254 230.641)"
                      ></path>
                      <path
                        id="Path_37121"
                        fill="#fff"
                        d="M217.34 288.284a2.9 2.9 0 0 0 .018-1.069 12.7 12.7 0 0 0-1.017-3.44 9.4 9.4 0 0 0-1.226-2.13 4.5 4.5 0 0 0-.492-.489l-.325-.145c-.465.009-.68.174-.767.591a3.7 3.7 0 0 0 0 1.188.14.14 0 0 0 .081.1c.176.108.35.22.528.325.087.051.118.084 0 .132s-.223.107-.34.15c-.1.036-.124.083-.1.178.117.42.235.839.379 1.252.016.046.029.093.052.169l-.208-.093a9.7 9.7 0 0 0-2.893-.859 4.6 4.6 0 0 0-1.034-.015 1.72 1.72 0 0 0-1.238.587l-.8 1.428-.28.5-.427.767-.3.529-.943 1.692-.294.529-.4.714-.3.529-.176.317c.026.063-.028.112-.038.168a1.39 1.39 0 0 0 .288 1.064 6 6 0 0 0 2.156 1.778 10.7 10.7 0 0 0 2.411.977 6.1 6.1 0 0 0 2.19.245 1.55 1.55 0 0 0 1.311-.7l.4-.724a1 1 0 0 0 .169-.3l2.512-4.5.431-.78a.22.22 0 0 1 .166-.119.64.64 0 0 0 .481-.545"
                        data-name="Path 37121"
                        transform="translate(-47.726 -65.781)"
                      ></path>
                      <path
                        id="Path_37122"
                        fill="#80a5b7"
                        d="M209.3 288.773c-.1-.125-.146-.205-.158-.224l.384-.191c.019.028 1.851 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                        data-name="Path 37122"
                        transform="translate(-48.738 -67.501)"
                      ></path>
                      <path
                        id="Path_37123"
                        fill="#80a5b7"
                        d="M208.114 290.788c-.1-.125-.146-.205-.158-.224l.385-.191c.017.029 1.85 2.876 6.514 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                        data-name="Path 37123"
                        transform="translate(-48.461 -67.972)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9588"
                    data-name="Group 9588"
                    transform="translate(159.5 222.395)"
                  >
                    <g
                      id="Group_9587"
                      clipPath="url(#m-clip-path-4)"
                      data-name="Group 9587"
                    >
                      <g id="Group_9586" data-name="Group 9586">
                        <g id="Group_9585" data-name="Group 9585">
                          <g
                            id="Group_9584"
                            clipPath="url(#m-clip-path-5)"
                            data-name="Group 9584"
                          >
                            <image
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAIAAAAStyFtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAE6ADAAQAAAABAAAACwAAAABTN67fAAAAkElEQVQoFWPYf+n2/Rdv/5MOmBVtvC7ef3rw8h0GBgYFcSEgSSRggasDagYieTEhB10VYoxA6IQY8fDVu4V7TwHZ9roqQCPg5mIy0HXCVRB0AiMwhB68fAe0Cq4HKwPTCYzAQAUqBWp+8OodJJyw6oQIIocCVCdc9YHLd4h0ArpOiBHEOAG7TmKcQEAnHicAALCwkPbClyq9AAAAAElFTkSuQmCC"
                              id="Rectangle_4527"
                              width="6.986"
                              height="4.045"
                              data-name="Rectangle 4527"
                              transform="translate(-.09 -.365)"
                            ></image>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_9590" data-name="Group 9590">
                    <g
                      id="Group_9589"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9589"
                    >
                      <path
                        id="Path_37125"
                        fill="#80a5b7"
                        d="M206.975 292.863c-.1-.125-.146-.205-.158-.224l.384-.191c.018.03 1.85 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                        data-name="Path 37125"
                        transform="translate(-48.196 -68.458)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9595"
                    data-name="Group 9595"
                    transform="translate(158.626 223.984)"
                  >
                    <g
                      id="Group_9594"
                      clipPath="url(#m-clip-path-7)"
                      data-name="Group 9594"
                    >
                      <g id="Group_9593" data-name="Group 9593">
                        <g id="Group_9592" data-name="Group 9592">
                          <g
                            id="Group_9591"
                            clipPath="url(#m-clip-path-5)"
                            data-name="Group 9591"
                          >
                            <image
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAACwAAAABzpdKUAAAAk0lEQVQoFWO8/+Ltwr2n5MWEFMSFHHRVGEgBjPsv3T54+Q5ci72uigLYILgIHgYLmhzQoIMMDEQ6BF0zxKyHr94BEdAg/A5hhPgZzX40Li6HMP7//x+o9MHLdwcu3wHahqYNjYvmEKhmuCKgEcjhBxdHYwBNAUYNumaIIiIdgl0z3B78DiGgGb9DiNKM7BA4G8gAAJQXV1hZTnEPAAAAAElFTkSuQmCC"
                              id="Rectangle_4530"
                              width="7.354"
                              height="4.045"
                              data-name="Rectangle 4530"
                              transform="translate(-.319 -.116)"
                            ></image>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_9597" data-name="Group 9597">
                    <g
                      id="Group_9596"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9596"
                    >
                      <path
                        id="Path_37127"
                        fill="#80a5b7"
                        d="M205.932 295.064c-.1-.125-.146-.205-.158-.224l.384-.191c.018.029 1.851 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                        data-name="Path 37127"
                        transform="translate(-47.953 -68.973)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9602"
                    data-name="Group 9602"
                    transform="translate(157.826 225.671)"
                  >
                    <g
                      id="Group_9601"
                      clipPath="url(#m-clip-path-10)"
                      data-name="Group 9601"
                    >
                      <g id="Group_9600" data-name="Group 9600">
                        <g id="Group_9599" data-name="Group 9599">
                          <g
                            id="Group_9598"
                            clipPath="url(#m-clip-path-5)"
                            data-name="Group 9598"
                          >
                            <image
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAACwAAAABzpdKUAAAAnElEQVQoFWO4/+Lt/ku3/5MFGIE6D16+w8DAIC8mpCAu5KCrAmQTCVjg6h6+egdEQIPsdVUUwAbBpXAxEJrhKoD6DxLnECyaIaYQ4xBGYIA9ALsWbjNWBtYQYQQGM0T1gct3HrwEeRurZrggcoggNEOkgfqJdAgwXtA1w20AmgJ0Cx6HAJ2AUzPcFKARkIQAF4EwiNIMUYrpEKBmADAWl0WMydGUAAAAAElFTkSuQmCC"
                              id="Rectangle_4533"
                              width="7.354"
                              height="4.045"
                              data-name="Rectangle 4533"
                              transform="translate(-.256 -.332)"
                            ></image>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_9604" data-name="Group 9604">
                    <g
                      id="Group_9603"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9603"
                    >
                      <path
                        id="Path_37129"
                        fill="#80a5b7"
                        d="M210.521 286.807c-.1-.125-.146-.2-.157-.223l.384-.191c.018.028 1.8 2.8 6.33 3.216a7.6 7.6 0 0 1-1.785-2.86l.424-.1a7.3 7.3 0 0 0 2.055 3.038.18.18 0 0 1 .053.217.22.22 0 0 1-.207.123h-.378a9.07 9.07 0 0 1-6.719-3.21"
                        data-name="Path 37129"
                        transform="translate(-49.023 -67.041)"
                      ></path>
                      <path
                        id="Rectangle_4535"
                        fill="#22d3c5"
                        d="M0 0h22.745v21.815H0z"
                        data-name="Rectangle 4535"
                        transform="translate(149.999 230.641)"
                      ></path>
                      <path
                        id="Path_37130"
                        fill="#fff"
                        d="m246.87 291.608-.745-2.9-.377-2.986-1.148-2.922-3.615 1.155-3.579.813-3.924.486 1.009 3.045.842 2.88 1.285 2.778.433 3.012 3.694-.578 3.4-1.43 3.466-.594Zm-11.32-4.614-.232-.487 1.058-.368 1.092-.073 1.074-.136.955-.551 1.055-.2 1.073-.142 1.142.093.879-.2.413.4-1.217.061-1.051.216-1.091.078-.949.571-1.1.046-1.015.345-1.1.053Zm.468 2.073-.232-.487 1.058-.368 1.092-.073 1.074-.139.955-.552 1.055-.2 1.074-.142 1.141.093.879-.2.413.4-1.216.06-1.051.216-1.091.078-.949.571-1.1.046-1.015.345-1.1.053Zm.936 1.921-.232-.488 1.058-.368 1.093-.074 1.074-.136.955-.552 1.055-.2 1.074-.142 1.141.093.879-.2.413.4-1.216.061-1.052.216-1.091.079-.949.571-1.1.045-1.015.345-1.1.053Zm8.218 1.432-1.052.216-1.091.079-.95.571-1.1.045-1.015.345-1.1.053-.984.307-.232-.488 1.057-.368 1.093-.074 1.074-.136.955-.551 1.055-.2 1.073-.142 1.142.093.878-.2.413.4Z"
                        data-name="Path 37130"
                        transform="translate(-54.411 -66.201)"
                      ></path>
                      <path
                        id="Rectangle_4536"
                        fill="#22d3c5"
                        d="M0 0h22.745v21.815H0z"
                        data-name="Rectangle 4536"
                        transform="translate(172.744 230.641)"
                      ></path>
                      <path
                        id="Path_37131"
                        fill="#fff"
                        d="M112.508 297.706h-8.5a2.747 2.747 0 0 1-2.749-2.745V271.61c0-1.516 1.23-6.543 2.749-6.543h8.5c1.518 0 2.749 5.027 2.749 6.543v23.351a2.747 2.747 0 0 1-2.749 2.745"
                        data-name="Path 37131"
                        transform="translate(-23.598 -62.049)"
                      ></path>
                      <path
                        id="Path_37132"
                        fill="#fff"
                        d="M112.438 297.865h-8.5a2.98 2.98 0 0 1-2.978-2.974V271.54c0-1.355 1.154-6.772 2.978-6.772h8.5c1.825 0 2.978 5.417 2.978 6.772v23.351a2.98 2.98 0 0 1-2.978 2.974m-8.5-32.639c-1.239 0-2.519 4.689-2.519 6.314v23.351a2.52 2.52 0 0 0 2.519 2.516h8.5a2.52 2.52 0 0 0 2.519-2.516V271.54c0-1.625-1.281-6.314-2.519-6.314Z"
                        data-name="Path 37132"
                        transform="translate(-23.528 -61.979)"
                      ></path>
                      <path
                        id="Rectangle_4537"
                        fill="#299153"
                        d="M0 0h11.94v23.662H0z"
                        data-name="Rectangle 4537"
                        transform="translate(79.689 209.062)"
                      ></path>
                      <path
                        id="Path_37133"
                        fill="#61b308"
                        d="M112.015 257.7H106.4a1.06 1.06 0 0 0-1.063 1.061v4.583h7.735v-4.583a1.06 1.06 0 0 0-1.061-1.061"
                        data-name="Path 37133"
                        transform="translate(-24.549 -60.324)"
                      ></path>
                      <path
                        id="Rectangle_4538"
                        fill="#161b49"
                        d="M0 0h4.604v3.094H0z"
                        data-name="Rectangle 4538"
                        transform="translate(82.36 194.281)"
                      ></path>
                      <path
                        id="Path_37134"
                        fill="#161b49"
                        d="M111.918 256.912h-4.6a.23.23 0 0 1-.229-.229v-3.093a.23.23 0 0 1 .229-.229h4.6a.23.23 0 0 1 .229.229v3.093a.23.23 0 0 1-.229.229m-4.375-.458h4.145v-2.636h-4.145Z"
                        data-name="Path 37134"
                        transform="translate(-24.955 -59.308)"
                      ></path>
                      <path
                        id="Path_37135"
                        fill="#61b308"
                        d="M116.347 255.148a.9.9 0 0 1-1.261.115l-1.828-1.52a2.73 2.73 0 0 0-1.748-.631h-4.91a.894.894 0 1 1 0-1.788h5.253a3.6 3.6 0 0 1 2.3.829l2.087 1.735a.893.893 0 0 1 .115 1.259"
                        data-name="Path 37135"
                        transform="translate(-24.632 -58.832)"
                      ></path>
                      <path
                        id="Rectangle_4539"
                        fill="#299153"
                        d="M0 0h1.995v6.043H0z"
                        data-name="Rectangle 4539"
                        transform="translate(83.664 203.018)"
                      ></path>
                      <path
                        id="Path_37136"
                        fill="#fff"
                        d="M86.649 267.237v-2.516H79.92v2.516a2.39 2.39 0 0 1-1.3 2.114 7.02 7.02 0 0 0-3.784 6.23v12.5a1.563 1.563 0 0 0 1.565 1.562h13.768a1.563 1.563 0 0 0 1.565-1.562v-12.5a7.02 7.02 0 0 0-3.784-6.23 2.39 2.39 0 0 1-1.3-2.114"
                        data-name="Path 37136"
                        transform="translate(-17.439 -61.968)"
                      ></path>
                      <path
                        id="Path_37137"
                        fill="#fff"
                        d="M90.1 289.8H76.33a1.794 1.794 0 0 1-1.794-1.791v-12.5a7.24 7.24 0 0 1 3.907-6.433 2.16 2.16 0 0 0 1.178-1.911v-2.516a.23.23 0 0 1 .229-.229h6.729a.23.23 0 0 1 .229.229v2.516a2.16 2.16 0 0 0 1.178 1.911 7.24 7.24 0 0 1 3.907 6.433v12.5A1.794 1.794 0 0 1 90.1 289.8m-10.02-24.92v2.287a2.62 2.62 0 0 1-1.424 2.317 6.78 6.78 0 0 0-3.661 6.027v12.5a1.336 1.336 0 0 0 1.335 1.333H90.1a1.336 1.336 0 0 0 1.335-1.333v-12.5a6.78 6.78 0 0 0-3.661-6.027 2.61 2.61 0 0 1-1.424-2.317v-2.287Z"
                        data-name="Path 37137"
                        transform="translate(-17.37 -61.898)"
                      ></path>
                      <path
                        id="Path_37138"
                        fill="#61b308"
                        d="M87.6 264.291h-6.257a1.407 1.407 0 0 1-1.408-1.406h9.075a1.407 1.407 0 0 1-1.408 1.406"
                        data-name="Path 37138"
                        transform="translate(-18.628 -61.538)"
                      ></path>
                      <path
                        id="Path_37139"
                        fill="#9ee073"
                        d="M89.01 261.548h-9.075V258.7a1.524 1.524 0 0 1 1.525-1.523h6.024a1.524 1.524 0 0 1 1.526 1.523Z"
                        data-name="Path 37139"
                        transform="translate(-18.628 -60.201)"
                      ></path>
                      <path
                        id="Rectangle_4540"
                        fill="#9ee073"
                        d="M0 0h12.478v13.536H0z"
                        data-name="Rectangle 4540"
                        transform="translate(59.606 212.363)"
                      ></path>
                      <path
                        id="Path_37140"
                        fill="#299153"
                        d="m120.561 303.4-1.866-.661a2.8 2.8 0 0 1-1.766-3.382l5.724-20.736a23.7 23.7 0 0 1 2.078-5.114l2.1-3.809 8.259 2.924-.775 4.277a23.7 23.7 0 0 1-1.611 5.279l-8.634 19.706a2.8 2.8 0 0 1-3.505 1.517"
                        data-name="Path 37140"
                        transform="translate(-27.225 -63.132)"
                      ></path>
                      <path
                        id="Rectangle_4541"
                        fill="#161b49"
                        d="M0 0h3.546v8.762H0z"
                        data-name="Rectangle 4541"
                        transform="rotate(-70.5 195.871 32.796)"
                      ></path>
                      <path
                        id="Path_37141"
                        fill="#161b49"
                        d="M138.054 271.756a.2.2 0 0 1-.076-.013l-8.259-2.923a.23.23 0 0 1-.13-.118.22.22 0 0 1-.009-.175l1.185-3.339a.23.23 0 0 1 .117-.13.23.23 0 0 1 .176-.008l8.259 2.923a.23.23 0 0 1 .139.293l-1.186 3.334a.23.23 0 0 1-.216.152m-7.966-3.292 7.827 2.771 1.032-2.907-7.826-2.771Z"
                        data-name="Path 37141"
                        transform="translate(-30.194 -62.041)"
                      ></path>
                      <path
                        id="Path_37142"
                        fill="#161b49"
                        d="m139.356 267.415-8.021-2.84a1.133 1.133 0 0 1-.69-1.448l.165-.464a1.136 1.136 0 0 1 1.45-.69l8.02 2.84a1.133 1.133 0 0 1 .691 1.448l-.165.464a1.136 1.136 0 0 1-1.45.69"
                        data-name="Path 37142"
                        transform="translate(-30.43 -61.309)"
                      ></path>
                      <path
                        id="Path_37143"
                        fill="#fff"
                        d="M65.626 293.075h-7.02a1.92 1.92 0 0 1-1.92-1.917v-4.536h10.859v4.536a1.92 1.92 0 0 1-1.92 1.917"
                        data-name="Path 37143"
                        transform="translate(-13.21 -67.094)"
                      ></path>
                      <path
                        id="Path_37144"
                        fill="#161b49"
                        d="M65.557 293.234h-7.02a2.15 2.15 0 0 1-2.149-2.146v-4.537a.23.23 0 0 1 .229-.229h10.86a.23.23 0 0 1 .229.229v4.537a2.15 2.15 0 0 1-2.149 2.146m-8.71-6.454v4.307a1.69 1.69 0 0 0 1.69 1.688h7.02a1.69 1.69 0 0 0 1.69-1.688v-4.307Z"
                        data-name="Path 37144"
                        transform="translate(-13.14 -67.024)"
                      ></path>
                      <path
                        id="Path_37145"
                        fill="#61b308"
                        d="M68.109 290.115a1.643 1.643 0 1 1-1.644-1.641 1.643 1.643 0 0 1 1.644 1.641"
                        data-name="Path 37145"
                        transform="translate(-15.106 -67.528)"
                      ></path>
                      <path
                        id="Path_37146"
                        fill="#161b49"
                        d="M66.4 291.915a1.87 1.87 0 1 1 1.873-1.87 1.874 1.874 0 0 1-1.873 1.87m0-3.282a1.412 1.412 0 1 0 1.414 1.412 1.415 1.415 0 0 0-1.414-1.412"
                        data-name="Path 37146"
                        transform="translate(-15.036 -67.458)"
                      ></path>
                      <path
                        id="Path_37147"
                        fill="#299153"
                        d="m54.2 256.074 1.962 23.4h10.804l1.961-23.4Z"
                        data-name="Path 37147"
                        transform="translate(-12.63 -59.943)"
                      ></path>
                      <path
                        id="Path_37148"
                        fill="#fff"
                        d="M54.364 258.07h14.4l.167-2H54.2Z"
                        data-name="Path 37148"
                        transform="translate(-12.63 -59.943)"
                      ></path>
                      <path
                        id="Path_37149"
                        fill="#fff"
                        d="M69.763 266.9h-8.242a.75.75 0 0 0-.752.751v6.437a.75.75 0 0 0 .752.751H69.1Z"
                        data-name="Path 37149"
                        transform="translate(-14.161 -62.478)"
                      ></path>
                      <path
                        id="Rectangle_4542"
                        fill="#61b308"
                        d="M0 0h31.202v26.56H0z"
                        data-name="Rectangle 4542"
                        transform="translate(41.454 225.896)"
                      ></path>
                      <path
                        id="Rectangle_4543"
                        fill="#9ee073"
                        d="M0 0h33.46v26.56H0z"
                        data-name="Rectangle 4543"
                        transform="translate(72.656 225.896)"
                      ></path>
                      <path
                        id="Path_37150"
                        fill="#fff"
                        d="M122.621 318.61H106.4a1.893 1.893 0 0 1-1.894-1.892v-14.461a1.893 1.893 0 0 1 1.894-1.892h16.226a1.893 1.893 0 0 1 1.894 1.892v14.461a1.893 1.893 0 0 1-1.894 1.892"
                        data-name="Path 37150"
                        transform="translate(-24.353 -70.311)"
                      ></path>
                      <path
                        id="Path_37151"
                        fill="#54992b"
                        d="m83.079 291.851-6.175-10.1H44.727l7.15 10.1Z"
                        data-name="Path 37151"
                        transform="translate(-10.423 -65.955)"
                      ></path>
                      <path
                        id="Path_37152"
                        fill="#89c573"
                        d="M100.907 281.755h34.435l-7.15 10.1h-33.46Z"
                        data-name="Path 37152"
                        transform="translate(-22.076 -65.955)"
                      ></path>
                      <path
                        id="Path_37153"
                        fill="#61b308"
                        d="M122.563 310.9a1.5 1.5 0 0 0-.128-.64l-.006-.014-1.408-2.735a.23.23 0 0 0-.3-.1l-1.028.467 1.279-3.13a.23.23 0 0 0-.318-.29l-1.018.525-.964-1.229a1.5 1.5 0 0 0-.5-.417 1.6 1.6 0 0 0-.727-.175h-.122l-3.452.031a1.56 1.56 0 0 0-.723.188 1.5 1.5 0 0 0-.5.426l-2.009 2.755a.23.23 0 0 0 .051.32l1 .73-3.345.62a.229.229 0 0 0-.073.424l.992.572-.514 1.474a1.54 1.54 0 0 0 .166 1.353l.067.1 1.216 1.852.608.928.067.1a1.56 1.56 0 0 0 .548.506 1.5 1.5 0 0 0 .627.186h.009l3.059.11h.008a.23.23 0 0 0 .229-.216l.072-1.233 2.086 2.636a.229.229 0 0 0 .409-.133l.044-1.143 1.545-.233a1.55 1.55 0 0 0 1.121-.779l.061-.108.882-1.591.729-1.316.06-.108a1.55 1.55 0 0 0 .193-.721m-7.114 1.912a.24.24 0 0 0-.172-.069l-3.974.139a2.4 2.4 0 0 1-.338-.03 2.4 2.4 0 0 1 .107-.322l.77-1.817.932.537a.229.229 0 0 0 .331-.272l-1.061-3.11.788.574a.23.23 0 0 0 .135.044.2.2 0 0 0 .044 0 .23.23 0 0 0 .151-.1l2.3-3.663a2.4 2.4 0 0 1 .209-.268 2.4 2.4 0 0 1 .212.264l1.114 1.629-.956.492a.228.228 0 0 0 .05.425l3.214.794-1 .453a.23.23 0 0 0-.1.326l2.057 3.43a3 3 0 0 1 .128.306 2.5 2.5 0 0 1-.335.055l-1.969.167.041-1.074a.229.229 0 0 0-.4-.165l-2.273 2.4.057-.967a.23.23 0 0 0-.065-.173"
                        data-name="Path 37153"
                        transform="translate(-25.205 -70.966)"
                      ></path>
                      <path
                        id="Path_37154"
                        fill="#8bdc64"
                        d="M177.783 237.6a.984.984 0 1 0 .985-.983.984.984 0 0 0-.985.983"
                        data-name="Path 37154"
                        transform="translate(-41.43 -55.388)"
                      ></path>
                      <path
                        id="Path_37155"
                        fill="#22d3c5"
                        d="M178.773 232.519a.98.98 0 0 1-.983-.981v-3.6a4.879 4.879 0 0 1 7.913-3.813.982.982 0 0 1-1.224 1.536 2.88 2.88 0 0 0-1.812-.631 2.91 2.91 0 0 0-2.911 2.907v3.6a.983.983 0 0 1-.983.981"
                        data-name="Path 37155"
                        transform="translate(-41.432 -52.217)"
                      ></path>
                      <path
                        id="Path_37156"
                        fill="#8bdc64"
                        d="M186.849 231.311a.98.98 0 0 1 .983.981v3.6a4.879 4.879 0 0 1-7.913 3.813.982.982 0 0 1 1.224-1.536 2.88 2.88 0 0 0 1.811.631 2.913 2.913 0 0 0 2.912-2.907v-3.6a.98.98 0 0 1 .983-.981"
                        data-name="Path 37156"
                        transform="translate(-41.841 -54.147)"
                      ></path>
                      <path
                        id="Path_37157"
                        fill="#22d3c5"
                        d="M187.785 228.507a.984.984 0 1 0 .984-.983.984.984 0 0 0-.984.983"
                        data-name="Path 37157"
                        transform="translate(-43.761 -53.26)"
                      ></path>
                      <path
                        id="Path_37158"
                        fill="#22d3c5"
                        d="M159.745 228.258h-1.388a.375.375 0 1 1 0-.749h2.283a.377.377 0 0 1 .395.42.5.5 0 0 1-.151.322l-1.777 1.946h1.58a.375.375 0 1 1 0 .749h-2.449a.386.386 0 0 1-.428-.375.5.5 0 0 1 .125-.348Z"
                        data-name="Path 37158"
                        transform="translate(-36.776 -53.257)"
                      ></path>
                      <path
                        id="Path_37159"
                        fill="#22d3c5"
                        d="M165.108 228.83a.82.82 0 0 0-.81-.762.863.863 0 0 0-.875.762Zm-1.685.552a.83.83 0 0 0 .888.875c.725 0 .725-.473 1.113-.473a.4.4 0 0 1 .395.374c0 .578-.929.848-1.508.848a1.682 1.682 0 0 1-1.85-1.742 1.718 1.718 0 0 1 1.817-1.867 1.62 1.62 0 0 1 1.738 1.572c0 .329-.1.414-.421.414Z"
                        data-name="Path 37159"
                        transform="translate(-37.859 -53.231)"
                      ></path>
                      <path
                        id="Path_37160"
                        fill="#22d3c5"
                        d="M167.8 227.844a.435.435 0 1 1 .869 0v.368h.013c.112-.4.329-.815.8-.815a.485.485 0 0 1 .527.467.44.44 0 0 1-.474.479h-.171c-.388 0-.6.27-.6 1.065v1.118a.481.481 0 0 1-.961 0Z"
                        data-name="Path 37160"
                        transform="translate(-39.103 -53.231)"
                      ></path>
                      <path
                        id="Path_37161"
                        fill="#22d3c5"
                        d="M172.537 230.3c.572 0 .816-.513.816-1.1 0-.624-.256-1.091-.816-1.091s-.816.466-.816 1.091c0 .585.243 1.1.816 1.1m0-2.9a1.677 1.677 0 0 1 1.778 1.8 1.778 1.778 0 1 1-3.555 0 1.677 1.677 0 0 1 1.777-1.8"
                        data-name="Path 37161"
                        transform="translate(-39.793 -53.231)"
                      ></path>
                      <path
                        id="Path_37162"
                        fill="#8bdc64"
                        d="M159.745 235.509h-1.388a.375.375 0 1 1 0-.749h2.283a.377.377 0 0 1 .395.421.5.5 0 0 1-.151.322l-1.777 1.946h1.58a.375.375 0 1 1 0 .75h-2.449a.386.386 0 0 1-.428-.375.5.5 0 0 1 .125-.349Z"
                        data-name="Path 37162"
                        transform="translate(-36.776 -54.954)"
                      ></path>
                      <path
                        id="Path_37163"
                        fill="#8bdc64"
                        d="M165.108 236.081a.82.82 0 0 0-.81-.763.863.863 0 0 0-.875.763Zm-1.685.552a.83.83 0 0 0 .888.875c.725 0 .725-.474 1.113-.474a.4.4 0 0 1 .395.375c0 .579-.929.849-1.508.849a1.682 1.682 0 0 1-1.85-1.742 1.718 1.718 0 0 1 1.817-1.867 1.62 1.62 0 0 1 1.738 1.572c0 .329-.1.414-.421.414Z"
                        data-name="Path 37163"
                        transform="translate(-37.859 -54.928)"
                      ></path>
                      <path
                        id="Path_37164"
                        fill="#8bdc64"
                        d="M167.8 235.094a.435.435 0 1 1 .869 0v.368h.013c.112-.4.329-.816.8-.816a.485.485 0 0 1 .527.466.44.44 0 0 1-.474.481h-.171c-.388 0-.6.269-.6 1.065v1.117a.481.481 0 0 1-.961 0Z"
                        data-name="Path 37164"
                        transform="translate(-39.103 -54.928)"
                      ></path>
                      <path
                        id="Path_37165"
                        fill="#8bdc64"
                        d="M172.537 237.546c.572 0 .816-.512.816-1.1 0-.624-.256-1.091-.816-1.091s-.816.467-.816 1.091c0 .585.243 1.1.816 1.1m0-2.9a1.678 1.678 0 0 1 1.778 1.8 1.778 1.778 0 1 1-3.555 0 1.678 1.678 0 0 1 1.777-1.8"
                        data-name="Path 37165"
                        transform="translate(-39.793 -54.928)"
                      ></path>
                    </g>
                  </g>
                </g>
                <text
                  id="å_é_æ_å__23"
                  fill="#252525"
                  data-name="åé¡æå
_23"
                  fontFamily="Noto Sans CJK TC"
                  fontSize="30"
                  transform="translate(207 6898.476)"
                >
                  <tspan x="-151.37" y="0">
                    zero zero
                  </tspan>
                  <tspan y="0" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    合作回收據點
                  </tspan>
                  <tspan y="0">​</tspan>
                </text>
                <text
                  id="å_é_æ_å__23-2"
                  fill="#252525"
                  data-name="åé¡æå
_23"
                  fontFamily="Noto Sans CJK TC"
                  fontSize="30"
                  transform="translate(205.87 6387.476)"
                >
                  <tspan x="-60" y="0">
                    企業夥伴
                  </tspan>
                </text>
                <g
                  id="Component_25_2"
                  data-name="Component 25 – 2"
                  class="cooperateParner"
                >
                  <g id="Group_9951" data-name="Group 9951">
                    <g
                      id="Group_9950"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9950"
                    >
                      <path
                        id="Path_37624"
                        fill="#e1f2fc"
                        d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.866 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.894 57.067 20.421 87.973 2.8 123.631.3"
                        data-name="Path 37624"
                      ></path>
                      <path
                        id="Path_37625"
                        fill="#fff"
                        fillRule="evenodd"
                        d="M92.14 63.813a20.9 20.9 0 1 1 6.54 36.637 9.18 9.18 0 0 1-6.718-.859 13.2 13.2 0 0 1-15.662-.939A18.08 18.08 0 1 1 62.249 66.8a15.686 15.686 0 0 1 29.891-2.987"
                        data-name="Path 37625"
                        transform="translate(-10.889 -12.669)"
                      ></path>
                      <path
                        id="Path_37626"
                        fill="#fff"
                        fillRule="evenodd"
                        d="M295.766 135.366a16.539 16.539 0 1 0-5.172 29.007 7.24 7.24 0 0 0 5.322-.678 10.45 10.45 0 0 0 12.4-.747 14.316 14.316 0 1 0 11.124-25.224 12.422 12.422 0 0 0-23.669-2.359"
                        data-name="Path 37626"
                        transform="translate(-62.73 -29.891)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9953"
                    data-name="Group 9953"
                    transform="translate(9.208 176.522)"
                  >
                    <g
                      id="Group_9952"
                      clipPath="url(#m-clip-path-14)"
                      data-name="Group 9952"
                    >
                      <path
                        id="Rectangle_4678"
                        fill="url(#linear-gradient)"
                        d="M0 0h255.994v81.347H0z"
                        data-name="Rectangle 4678"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_9955" data-name="Group 9955">
                    <g
                      id="Group_9954"
                      clipPath="url(#m-clip-path)"
                      data-name="Group 9954"
                    >
                      <path
                        id="Path_37628"
                        fill="#75c8d1"
                        fillRule="evenodd"
                        d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                        data-name="Path 37628"
                        transform="translate(-4.177 -75.043)"
                      ></path>
                      <path
                        id="Path_37629"
                        fill="#a5becb"
                        d="M147.218 85.868v13.741l-30.794 5.365-30.794-5.365V85.868Z"
                        data-name="Path 37629"
                        transform="translate(-19.955 -20.1)"
                      ></path>
                      <path
                        id="Rectangle_4679"
                        fill="#c4d5da"
                        d="M0 0h83.584v170.781H0z"
                        data-name="Rectangle 4679"
                        transform="translate(54.677 79.508)"
                      ></path>
                      <path
                        id="Rectangle_4680"
                        fill="#a5becb"
                        d="M0 0h13.197v29.445H0z"
                        data-name="Rectangle 4680"
                        transform="translate(96.469 220.844)"
                      ></path>
                      <path
                        id="Rectangle_4681"
                        fill="#fff"
                        d="M0 0h13.197v29.445H0z"
                        data-name="Rectangle 4681"
                        transform="translate(83.271 220.844)"
                      ></path>
                      <path
                        id="Rectangle_4682"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4682"
                        transform="translate(114.066 134.472)"
                      ></path>
                      <path
                        id="Rectangle_4683"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4683"
                        transform="translate(114.066 199.251)"
                      ></path>
                      <path
                        id="Rectangle_4684"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4684"
                        transform="translate(114.066 177.658)"
                      ></path>
                      <path
                        id="Rectangle_4685"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4685"
                        transform="translate(114.066 156.065)"
                      ></path>
                      <path
                        id="Rectangle_4686"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4686"
                        transform="translate(65.675 112.879)"
                      ></path>
                      <path
                        id="Rectangle_4687"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4687"
                        transform="translate(89.87 112.879)"
                      ></path>
                      <path
                        id="Rectangle_4688"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4688"
                        transform="translate(89.87 156.065)"
                      ></path>
                      <path
                        id="Rectangle_4689"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4689"
                        transform="translate(65.675 156.065)"
                      ></path>
                      <path
                        id="Rectangle_4690"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4690"
                        transform="translate(65.675 177.658)"
                      ></path>
                      <path
                        id="Rectangle_4691"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4691"
                        transform="translate(65.675 134.472)"
                      ></path>
                      <path
                        id="Rectangle_4692"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4692"
                        transform="translate(65.675 199.251)"
                      ></path>
                      <path
                        id="Rectangle_4693"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4693"
                        transform="translate(89.87 134.472)"
                      ></path>
                      <path
                        id="Rectangle_4694"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4694"
                        transform="translate(89.87 199.251)"
                      ></path>
                      <path
                        id="Rectangle_4695"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4695"
                        transform="translate(89.87 177.658)"
                      ></path>
                      <path
                        id="Rectangle_4696"
                        fill="#fff"
                        d="M0 0h13.197v11.778H0z"
                        data-name="Rectangle 4696"
                        transform="translate(114.066 112.879)"
                      ></path>
                      <path
                        id="Path_37630"
                        fill="#8ba0ac"
                        d="M87.721 127.82a3.9 3.9 0 0 1-1.535-1.471 4.29 4.29 0 0 1 .006-4.234 3.96 3.96 0 0 1 1.541-1.47 4.5 4.5 0 0 1 2.194-.532 4.6 4.6 0 0 1 1.8.343 3.7 3.7 0 0 1 1.375 1l-.963.9a2.8 2.8 0 0 0-2.139-.939 3 3 0 0 0-1.479.361 2.6 2.6 0 0 0-1.019 1 3.06 3.06 0 0 0 0 2.907 2.6 2.6 0 0 0 1.019 1 3 3 0 0 0 1.479.361 2.8 2.8 0 0 0 2.142-.95l.963.915a3.7 3.7 0 0 1-1.381 1 4.6 4.6 0 0 1-1.8.343 4.5 4.5 0 0 1-2.194-.532"
                        data-name="Path 37630"
                        transform="translate(-19.955 -28.117)"
                      ></path>
                      <path
                        id="Path_37631"
                        fill="#8ba0ac"
                        d="M98.375 127.82a3.94 3.94 0 0 1-1.547-1.476 4.25 4.25 0 0 1 0-4.222 3.94 3.94 0 0 1 1.547-1.476 4.86 4.86 0 0 1 4.423 0 3.96 3.96 0 0 1 1.547 1.471 4.27 4.27 0 0 1 0 4.233 3.96 3.96 0 0 1-1.547 1.471 4.86 4.86 0 0 1-4.423 0m3.655-1.133a2.6 2.6 0 0 0 1.009-1.007 3.04 3.04 0 0 0 0-2.894 2.6 2.6 0 0 0-1.009-1.007 3.07 3.07 0 0 0-2.888 0 2.6 2.6 0 0 0-1.009 1.007 3.04 3.04 0 0 0 0 2.894 2.6 2.6 0 0 0 1.009 1.007 3.07 3.07 0 0 0 2.888 0"
                        data-name="Path 37631"
                        transform="translate(-22.434 -28.117)"
                      ></path>
                      <path
                        id="Path_37632"
                        fill="#8ba0ac"
                        d="m116.961 128.273-.011-5.309-2.635 4.394h-.665l-2.635-4.325v5.24h-1.42v-8.01h1.226l3.186 5.309 3.128-5.309h1.226l.012 8.01Z"
                        data-name="Path 37632"
                        transform="translate(-25.539 -28.152)"
                      ></path>
                      <path
                        id="Path_37633"
                        fill="#8ba0ac"
                        d="M128.977 120.606a2.64 2.64 0 0 1 1.186.984 3 3 0 0 1 0 3.038 2.63 2.63 0 0 1-1.186.99 4.4 4.4 0 0 1-1.816.343h-1.81v2.312h-1.489v-8.01h3.3a4.45 4.45 0 0 1 1.816.343m-.406 3.684a1.63 1.63 0 0 0 0-2.357 2.3 2.3 0 0 0-1.478-.411h-1.744v3.178h1.742a2.3 2.3 0 0 0 1.478-.413"
                        data-name="Path 37633"
                        transform="translate(-28.864 -28.152)"
                      ></path>
                      <path
                        id="Path_37634"
                        fill="#8ba0ac"
                        d="M138.892 126.418h-4.01l-.79 1.854h-1.535l3.609-8.01h1.466l3.621 8.01h-1.558Zm-.492-1.167-1.512-3.5-1.5 3.5Z"
                        data-name="Path 37634"
                        transform="translate(-30.89 -28.152)"
                      ></path>
                      <path
                        id="Path_37635"
                        fill="#8ba0ac"
                        d="M152.351 120.263v8.01h-1.226l-4.422-5.424v5.424h-1.479v-8.01h1.226l4.423 5.424v-5.424Z"
                        data-name="Path 37635"
                        transform="translate(-33.843 -28.152)"
                      ></path>
                      <path
                        id="Path_37636"
                        fill="#8ba0ac"
                        d="M160.427 125.446v2.826h-1.489v-2.8l-3.151-5.207h1.593l2.349 3.9 2.371-3.9h1.467Z"
                        data-name="Path 37636"
                        transform="translate(-36.304 -28.152)"
                      ></path>
                      <path
                        id="Rectangle_4697"
                        fill="#a5becb"
                        d="M0 0h20.104v12.715H0z"
                        data-name="Rectangle 4697"
                        transform="translate(185.709 93.163)"
                      ></path>
                      <path
                        id="Path_37637"
                        fill="#bbd8e7"
                        d="M269.237 134.743v11.711h-40.208v-11.711h40.207Z"
                        data-name="Path 37637"
                        transform="translate(-53.372 -31.542)"
                      ></path>
                      <path
                        id="Rectangle_4698"
                        fill="#a5becb"
                        d="M0 0h35.628v78.632H0z"
                        data-name="Rectangle 4698"
                        transform="translate(128.748 161.758)"
                      ></path>
                      <path
                        id="Rectangle_4699"
                        fill="#8ba0ac"
                        d="M0 0h35.628v12.046H0z"
                        data-name="Rectangle 4699"
                        transform="translate(128.748 238.382)"
                      ></path>
                      <path
                        id="Rectangle_4700"
                        fill="#c4d5da"
                        d="M0 0h67.013v137.188H0z"
                        data-name="Rectangle 4700"
                        transform="translate(162.254 113.24)"
                      ></path>
                      <path
                        id="Path_37638"
                        fill="#6cf"
                        d="M224.66 158.771v90.343h46.909v-90.343Z"
                        data-name="Path 37638"
                        transform="translate(-52.354 -37.166)"
                      ></path>
                      <path
                        id="Rectangle_4701"
                        fill="#bbd8e7"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4701"
                        transform="translate(172.306 191.872)"
                      ></path>
                      <path
                        id="Rectangle_4702"
                        fill="#bbd8e7"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4702"
                        transform="translate(172.306 171.795)"
                      ></path>
                      <path
                        id="Rectangle_4703"
                        fill="#bbd8e7"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4703"
                        transform="translate(172.306 151.719)"
                      ></path>
                      <path
                        id="Rectangle_4704"
                        fill="#bbd8e7"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4704"
                        transform="translate(172.306 131.643)"
                      ></path>
                      <path
                        id="Rectangle_4705"
                        fill="#bbd8e7"
                        d="M0 0h10.052v13.384H0z"
                        data-name="Rectangle 4705"
                        transform="translate(140.475 191.871)"
                      ></path>
                      <path
                        id="Rectangle_4706"
                        fill="#fff"
                        d="M0 0h10.052v21.75H0z"
                        data-name="Rectangle 4706"
                        transform="translate(140.475 205.256)"
                      ></path>
                      <path
                        id="Rectangle_4707"
                        fill="#fff"
                        d="M0 0h10.052v21.749H0z"
                        data-name="Rectangle 4707"
                        transform="translate(140.475 170.122)"
                      ></path>
                      <path
                        id="Rectangle_4708"
                        fill="#fff"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4708"
                        transform="translate(172.306 201.91)"
                      ></path>
                      <path
                        id="Rectangle_4709"
                        fill="#fff"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4709"
                        transform="translate(172.306 181.833)"
                      ></path>
                      <path
                        id="Rectangle_4710"
                        fill="#fff"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4710"
                        transform="translate(172.306 161.757)"
                      ></path>
                      <path
                        id="Rectangle_4711"
                        fill="#fff"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4711"
                        transform="translate(172.306 141.681)"
                      ></path>
                      <path
                        id="Rectangle_4712"
                        fill="#fff"
                        d="M0 0h46.909v10.038H0z"
                        data-name="Rectangle 4712"
                        transform="translate(172.306 121.605)"
                      ></path>
                    </g>
                  </g>
                </g>
                <g
                  id="Group_9965"
                  data-name="Group 9965"
                  transform="rotate(-90 3379.635 3158.303)"
                >
                  <g
                    id="Group_9608"
                    data-name="Group 9608"
                    transform="rotate(180 50.469 7.846)"
                  >
                    <path
                      id="Line_503"
                      fill="none"
                      stroke="#24d1c2"
                      strokeLinejoin="round"
                      strokeWidth="10"
                      d="M0 0h81.611"
                      data-name="Line 503"
                    ></path>
                  </g>
                  <path
                    id="Path_37166"
                    fill="#24d1c2"
                    d="M0 0v31.385L29.776 15.7Z"
                    data-name="Path 37166"
                    transform="rotate(180 14.888 15.693)"
                  ></path>
                </g>
                <g
                  id="Group_9966"
                  data-name="Group 9966"
                  transform="rotate(90 -3122.565 3314.436)"
                >
                  <g
                    id="Group_9608-2"
                    data-name="Group 9608"
                    transform="rotate(180 50.469 7.846)"
                  >
                    <path
                      id="Line_503-2"
                      fill="none"
                      stroke="#24d1c2"
                      strokeLinejoin="round"
                      strokeWidth="10"
                      d="M0 0h81.611"
                      data-name="Line 503"
                    ></path>
                  </g>
                  <path
                    id="Path_37166-2"
                    fill="#24d1c2"
                    d="M0 0v31.385L29.776 15.7Z"
                    data-name="Path 37166"
                    transform="rotate(180 14.888 15.693)"
                  ></path>
                </g>
                <text
                  id="提供即期品_"
                  fill="#2abcaf"
                  data-name="提供即期品​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="20"
                  transform="translate(343.189 6504)"
                >
                  <tspan x="-50" y="0">
                    提供即期品
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <text
                  id="提供回收物"
                  fill="#8bdc65"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="20"
                  transform="translate(343.189 7011.324)"
                >
                  <tspan x="-50" y="0">
                    提供回收物
                  </tspan>
                </text>
                <text
                  id="定期回饋_ESG相關數據_"
                  fill="#2abcaf"
                  data-name="定期回饋 ESG相關數據​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="20"
                  transform="translate(80 6488)"
                >
                  <tspan x="-40" y="0">
                    定期回饋
                  </tspan>
                  <tspan fontFamily="SegoeUI, Segoe UI">
                    <tspan x="-57.231" y="32">
                      ESG
                    </tspan>
                    <tspan y="32" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                      相關數據
                    </tspan>
                    <tspan y="32">​</tspan>
                  </tspan>
                </text>
                <g
                  id="Group_9967"
                  data-name="Group 9967"
                  transform="rotate(90 -3347.642 3600.358)"
                >
                  <g
                    id="Group_9608-3"
                    data-name="Group 9608"
                    transform="rotate(180 50.469 7.846)"
                  >
                    <path
                      id="Line_503-3"
                      fill="none"
                      stroke="#8bdc65"
                      strokeLinejoin="round"
                      strokeWidth="10"
                      d="M0 0h81.611"
                      data-name="Line 503"
                    ></path>
                  </g>
                  <path
                    id="Path_37166-3"
                    fill="#8bdc65"
                    d="M0 0v31.385L29.776 15.7Z"
                    data-name="Path 37166"
                    transform="rotate(180 14.888 15.693)"
                  ></path>
                </g>
                <g
                  id="Group_9968"
                  data-name="Group 9968"
                  transform="rotate(-90 3604.712 3444.227)"
                >
                  <g
                    id="Group_9608-4"
                    data-name="Group 9608"
                    transform="rotate(180 50.469 7.846)"
                  >
                    <path
                      id="Line_503-4"
                      fill="none"
                      stroke="#8bdc65"
                      strokeLinejoin="round"
                      strokeWidth="10"
                      d="M0 0h81.611"
                      data-name="Line 503"
                    ></path>
                  </g>
                  <path
                    id="Path_37166-4"
                    fill="#8bdc65"
                    d="M0 0v31.385L29.776 15.7Z"
                    data-name="Path 37166"
                    transform="rotate(180 14.888 15.693)"
                  ></path>
                </g>
                <text
                  id="å_é_æ_å__23-3"
                  fill="#252525"
                  data-name="åé¡æå
_23"
                  fontFamily="SegoeUI, Segoe UI"
                  fontSize="30"
                  transform="translate(205.848 7409.13)"
                >
                  <tspan x="-91.37" y="0">
                    zero zero
                  </tspan>
                  <tspan y="0" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    會員
                  </tspan>
                </text>
                <g
                  id="Component_27_1"
                  data-name="Component 27 – 1"
                  class="CooperateZeroMember"
                >
                  <g id="Group_9682" clipPath="url(#m-clip-path)" data-name="Group 9682">
                    <g id="Group_9622" data-name="Group 9622">
                      <g
                        id="Group_9621"
                        clipPath="url(#m-clip-path)"
                        data-name="Group 9621"
                      >
                        <path
                          id="Path_37167"
                          fill="#e1f2fc"
                          d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.865 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.893 57.067 20.421 87.973 2.8 123.631.3"
                          data-name="Path 37167"
                        ></path>
                      </g>
                    </g>
                    <g
                      id="Group_9624"
                      data-name="Group 9624"
                      transform="translate(9.234 176.394)"
                    >
                      <g
                        id="Group_9623"
                        clipPath="url(#m-clip-path-18)"
                        data-name="Group 9623"
                      >
                        <path
                          id="Rectangle_4560"
                          fill="url(#linear-gradient)"
                          d="M0 0h255.936v81.464H0z"
                          data-name="Rectangle 4560"
                        ></path>
                      </g>
                    </g>
                    <g id="Group_9626" data-name="Group 9626">
                      <g
                        id="Group_9625"
                        clipPath="url(#m-clip-path)"
                        data-name="Group 9625"
                      >
                        <path
                          id="Path_37169"
                          fill="#75c8d1"
                          fillRule="evenodd"
                          d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                          data-name="Path 37169"
                          transform="translate(-4.177 -75.043)"
                        ></path>
                        <path
                          id="Path_37170"
                          fill="#fff"
                          fillRule="evenodd"
                          d="M78.985 89.4a15.363 15.363 0 1 1 4.807 26.933 6.75 6.75 0 0 1-4.938-.632 9.7 9.7 0 0 1-11.514-.69 13.291 13.291 0 1 1-10.328-23.417A11.531 11.531 0 0 1 78.985 89.4"
                          data-name="Path 37170"
                          transform="translate(-10.627 -19.259)"
                        ></path>
                        <path
                          id="Path_37171"
                          fill="#e7421c"
                          d="M168.818 215.265c-6.594.768-32.167-2.4-36.794 4.42s13.951 35.02 19.268 37.568 9.823-3.479 9.823-3.479l-11.06-20.808h22.882Z"
                          data-name="Path 37171"
                          transform="translate(-30.596 -50.371)"
                        ></path>
                        <path
                          id="Path_37172"
                          fill="#5c5a5a"
                          d="m135.67 208.414 2.054-2.54a61 61 0 0 0-6.281-4.36c-5.021-3-8.485-3.724-10.589-2.225-.8.568-1.394 1.082-1.874 1.5-1.58 1.36-2.111 1.818-8.243 1.242-3.063-.289-3.608-.9-3.659-.965a2.4 2.4 0 0 1 .069-.887 3.29 3.29 0 0 0-1.163-3.666c-2.309-1.533-12.8-3.3-14.878-3.643l-.527 3.221c5.541.9 11.9 2.259 13.425 3.042-.017.143-.051.331-.076.471a4.08 4.08 0 0 0 .546 3.437c.952 1.25 2.789 1.941 5.955 2.24 6.935.653 8.291.041 10.685-2.019.452-.39.964-.831 1.638-1.312.513-.366 2.562-.282 6.986 2.355a59 59 0 0 1 5.93 4.113"
                          data-name="Path 37172"
                          transform="translate(-21.109 -45.147)"
                        ></path>
                        <path
                          id="Path_37347"
                          fill="#5c5a5a"
                          d="M0 0h3.267L3.3 46.823H.033Z"
                          data-name="Path 37347"
                          transform="rotate(-30.422 416.627 -203.617)"
                        ></path>
                        <path
                          id="Path_37173"
                          fill="#5c5a5a"
                          d="M175.2 293.829c-4.327-3.981-4.452-9.225-.342-14.387 3.967-4.981 12.537-7.1 23.511-5.8 10.435 1.23 21.015 5.377 28.3 11.093a1.63 1.63 0 0 1 .108 2.474 47.18 47.18 0 0 1-28.531 12.231c-1.289.1-2.564.152-3.816.152-8.1 0-15.253-2.1-19.229-5.76m2.217-12.356c-3.036 3.814-3.036 7.163 0 9.955 3.884 3.573 11.958 5.44 20.571 4.753a44.24 44.24 0 0 0 25.09-10.053c-14.58-10.282-39.038-12.973-45.66-4.656"
                          data-name="Path 37173"
                          transform="translate(-40.051 -63.968)"
                        ></path>
                        <path
                          id="Path_37174"
                          fill="#5c5a5a"
                          d="M100.079 272.6h.048a7.32 7.32 0 0 0 5.208-2.544c4.456-4.749 7.268-16.653 8.361-35.382.8-13.736.355-26.318.35-26.444a1.634 1.634 0 0 0-3.266.119c.5 13.688.069 51.057-7.83 59.476a4.14 4.14 0 0 1-2.915 1.513 1.632 1.632 0 0 0 .045 3.263"
                          data-name="Path 37174"
                          transform="translate(-22.941 -48.375)"
                        ></path>
                        <path
                          id="Path_37175"
                          fill="#5c5a5a"
                          d="M88.43 312.286c-13.107-1.137-23.383-8.475-28.192-20.133-4.8-11.636-3.03-24.9 4.51-33.789 7.9-9.317 20.828-12.485 36.4-8.921 17.348 3.971 24.239 21.824 21.912 36.605a31.8 31.8 0 0 1-10.373 19.342c-5.433 4.649-12.486 7.059-20.563 7.059q-1.815 0-3.7-.163m-21.182-51.812c-6.758 7.97-8.321 19.917-3.981 30.436 4.327 10.491 13.6 17.1 25.452 18.125 8.728.757 16.285-1.36 21.851-6.123a28.53 28.53 0 0 0 9.271-17.37c2.1-13.324-3.994-29.388-19.413-32.916a50 50 0 0 0-11.135-1.339c-9.28 0-16.907 3.129-22.045 9.187"
                          data-name="Path 37175"
                          transform="translate(-13.415 -58.057)"
                        ></path>
                        <path
                          id="Path_37176"
                          fill="#5c5a5a"
                          d="M229.86 312.286c-13.107-1.137-23.383-8.475-28.192-20.133-4.8-11.636-3.029-24.9 4.51-33.789 7.9-9.317 20.829-12.485 36.4-8.921 17.348 3.972 24.239 21.824 21.912 36.605a31.8 31.8 0 0 1-10.373 19.342c-5.433 4.649-12.487 7.059-20.563 7.059q-1.815 0-3.7-.163m-21.188-51.813c-6.758 7.97-8.321 19.917-3.981 30.436 4.327 10.491 13.6 17.1 25.452 18.125 8.727.757 16.285-1.36 21.85-6.123a28.52 28.52 0 0 0 9.272-17.37c2.1-13.324-3.994-29.388-19.413-32.916a50 50 0 0 0-11.135-1.339c-9.28 0-16.907 3.129-22.045 9.187"
                          data-name="Path 37176"
                          transform="translate(-46.374 -58.057)"
                        ></path>
                        <path
                          id="Path_37348"
                          fill="#5c5a5a"
                          d="M0 0h3.266L3.3 53.793H.034Z"
                          data-name="Path 37348"
                          transform="rotate(-56.13 205.252 2.738)"
                        ></path>
                        <path
                          id="Path_37349"
                          fill="#5c5a5a"
                          d="M0 0h3.265l.024 43.354H.024Z"
                          data-name="Path 37349"
                          transform="rotate(-62.906 199.056 22.088)"
                        ></path>
                        <path
                          id="Path_37177"
                          fill="#9d9aae"
                          d="M164.286 281.124c-1.2.421-6.691.607-8.235 0a5.06 5.06 0 0 1-.686-2.834l8.407-.515Z"
                          data-name="Path 37177"
                          transform="translate(-36.202 -65.023)"
                        ></path>
                        <path
                          id="Path_37178"
                          fill="#8a5c3a"
                          d="M156.613 268.215c-1.152 2.309-3.041 2.714-6.447 3.956-2.631.96-3.86 3.889-1.544 4.061s14.48-.3 16.813-2.141c2.262-1.785-5.088-13.362-8.822-5.875"
                          data-name="Path 37178"
                          transform="translate(-34.349 -62.201)"
                        ></path>
                        <path
                          id="Path_37179"
                          fill="#ffb076"
                          d="M149.55 118.565c-2.118 4.143-3.441 18.148-1.589 22.641 1.058 2.907 3.039 2.51 7.011 2.113a38 38 0 0 1 0 5.947c7.427 1.038 19.583-4.228 19.583-4.228L165.69 116.9Z"
                          data-name="Path 37179"
                          transform="translate(-34.275 -27.364)"
                        ></path>
                        <path
                          id="Path_37180"
                          fill="#ffb076"
                          d="M136.143 182.406c-.364 2.522-4.91 3.944-7.4 3.918s-21.1 4.686-22.475 4.086-6.863-5.3-12.439-1.793c-2.659 1.879.772 8.389.772 8.389 2.059.686 5.49 1.542 6.519.686s.413-5.475.413-5.475 4.82 5.217 6.879 5.217 34.828-5.225 34.828-5.225 2.659-2.57 0-7.282a5.34 5.34 0 0 0-7.1-2.522"
                          data-name="Path 37180"
                          transform="translate(-21.631 -42.58)"
                        ></path>
                        <path
                          id="Path_37181"
                          fill="#938e91"
                          d="M159.989 107.731c-2.108 1.3-13.054-5.794-12.527 1.975-.264 2.9-2.016 5-.018 5.926s7.667-.527 10.831 1.185 4.22 8.823 5.934 10.8 4.219 1.185 6.065 6.716 12.131 1.844 9.494-5c2.374-2.9 4.615-6.584-4.22-11.983-3.56-1.844-3.824-16.855-15.559-9.613"
                          data-name="Path 37181"
                          transform="translate(-34.14 -24.759)"
                        ></path>
                        <path
                          id="Path_37182"
                          fill="#ffb076"
                          d="M195.578 282.092c-1.529-3.9-11.311-9.275-12.113-11.16-2.124 3.685-5.277 7.19-8.544 7.563 3.045 3.157 14.343 5.649 14.785 7.7s2.79 3.372 2.79 3.372 5.725-.733 3.082-7.475"
                          data-name="Path 37182"
                          transform="translate(-40.763 -63.421)"
                        ></path>
                        <path
                          id="Path_37183"
                          fill="#8a5c3a"
                          d="M198.6 284.363c2 .827 5.492 2.423 7.217 5.4-1.333 3.836-5.879 13.934-9.955 15.89s-6.827-.235-5.764-2.505 3.648-4.952 3.648-7.759a20 20 0 0 0-.392-4.373s6.024-2.889 5.246-6.65"
                          data-name="Path 37183"
                          transform="translate(-44.247 -66.566)"
                        ></path>
                        <path
                          id="Path_37184"
                          fill="#9d9aae"
                          d="M212.016 296.765c-1.184-1.261-3.507-2.621-3.951-1.61s-4.5 6.5-3.391 7.759 4.552 2.05 4.552 2.05Z"
                          data-name="Path 37184"
                          transform="translate(-47.652 -69.009)"
                        ></path>
                        <path
                          id="Path_37185"
                          fill="#ff4d23"
                          d="M201.435 228.51c-3.866 7.569-25.294 10.395-27.235 14.486s-1.411 8.182 3.392 12.919-1.53 10.5-7.507 8.031-13.193-10.086-15.46-15.027 3.917-18.525 18.551-34.17 33.637 3.228 28.259 13.759"
                          data-name="Path 37185"
                          transform="translate(-35.927 -48.874)"
                        ></path>
                        <path
                          id="Path_37186"
                          fill="#ed8b85"
                          d="M171.8 144.41c-1.433 4.089-14.524 17.578-16.834 5.006-2.516 5.014-8.086 12.091-7.893 15.573s-.824 7.979 6.15 12.331c1.307 4.5 2.615 18.425 5.084 21.907 2.034 0 33.413-2.176 40.242 11.9 1.307 3.337 5.521 4.932 5.521 4.932s6.683-3.192-.581-28.29-16.849-38.733-23.969-44.827c-2.616.724-7.719 1.472-7.719 1.472"
                          data-name="Path 37186"
                          transform="translate(-34.273 -33.46)"
                        ></path>
                      </g>
                    </g>
                    <g
                      id="Group_9628"
                      data-name="Group 9628"
                      transform="translate(112.799 109.478)"
                    >
                      <g
                        id="Group_9627"
                        fill="none"
                        stroke="#e0777f"
                        strokeMiterlimit="10"
                        strokeWidth="2.616"
                        clipPath="url(#m-clip-path-20)"
                        data-name="Group 9627"
                      >
                        <path
                          id="Path_37187"
                          d="M239.266 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37187"
                          transform="translate(-167.378 -161.741)"
                        ></path>
                        <path
                          id="Path_37188"
                          d="M228.545 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37188"
                          transform="translate(-164.88 -164.296)"
                        ></path>
                        <path
                          id="Path_37189"
                          d="M217.008 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37189"
                          transform="translate(-162.191 -161.741)"
                        ></path>
                        <path
                          id="Path_37190"
                          d="M209.212 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37190"
                          transform="translate(-160.374 -164.296)"
                        ></path>
                        <path
                          id="Path_37191"
                          d="M197.675 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37191"
                          transform="translate(-157.686 -161.741)"
                        ></path>
                        <path
                          id="Path_37192"
                          d="M189.879 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37192"
                          transform="translate(-155.869 -164.296)"
                        ></path>
                        <path
                          id="Path_37193"
                          d="M178.342 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37193"
                          transform="translate(-153.181 -161.741)"
                        ></path>
                        <path
                          id="Path_37194"
                          d="M170.545 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37194"
                          transform="translate(-151.364 -164.296)"
                        ></path>
                        <path
                          id="Path_37195"
                          d="M159.008 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37195"
                          transform="translate(-148.675 -161.741)"
                        ></path>
                        <path
                          id="Path_37196"
                          d="M151.212 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37196"
                          transform="translate(-146.858 -164.296)"
                        ></path>
                        <path
                          id="Path_37197"
                          d="M139.675 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37197"
                          transform="translate(-144.17 -161.741)"
                        ></path>
                        <path
                          id="Path_37198"
                          d="M131.879 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37198"
                          transform="translate(-142.353 -164.296)"
                        ></path>
                        <path
                          id="Path_37199"
                          d="M120.342 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37199"
                          transform="translate(-139.664 -161.741)"
                        ></path>
                        <path
                          id="Path_37200"
                          d="M239.266 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37200"
                          transform="translate(-167.378 -156.535)"
                        ></path>
                        <path
                          id="Path_37201"
                          d="M228.545 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37201"
                          transform="translate(-164.88 -159.09)"
                        ></path>
                        <path
                          id="Path_37202"
                          d="M217.008 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37202"
                          transform="translate(-162.191 -156.535)"
                        ></path>
                        <path
                          id="Path_37203"
                          d="M209.212 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37203"
                          transform="translate(-160.374 -159.09)"
                        ></path>
                        <path
                          id="Path_37204"
                          d="M197.675 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37204"
                          transform="translate(-157.686 -156.535)"
                        ></path>
                        <path
                          id="Path_37205"
                          d="M189.879 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37205"
                          transform="translate(-155.869 -159.09)"
                        ></path>
                        <path
                          id="Path_37206"
                          d="M178.342 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37206"
                          transform="translate(-153.181 -156.535)"
                        ></path>
                        <path
                          id="Path_37207"
                          d="M170.545 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37207"
                          transform="translate(-151.364 -159.09)"
                        ></path>
                        <path
                          id="Path_37208"
                          d="M159.008 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37208"
                          transform="translate(-148.675 -156.535)"
                        ></path>
                        <path
                          id="Path_37209"
                          d="M151.212 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37209"
                          transform="translate(-146.858 -159.09)"
                        ></path>
                        <path
                          id="Path_37210"
                          d="M139.675 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37210"
                          transform="translate(-144.17 -156.535)"
                        ></path>
                        <path
                          id="Path_37211"
                          d="M131.879 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                          data-name="Path 37211"
                          transform="translate(-142.353 -159.09)"
                        ></path>
                        <path
                          id="Path_37212"
                          d="M120.342 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37212"
                          transform="translate(-139.664 -156.535)"
                        ></path>
                        <path
                          id="Path_37213"
                          d="M239.266 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37213"
                          transform="translate(-167.378 -151.329)"
                        ></path>
                        <path
                          id="Path_37214"
                          d="M228.545 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37214"
                          transform="translate(-164.88 -153.885)"
                        ></path>
                        <path
                          id="Path_37215"
                          d="M217.008 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37215"
                          transform="translate(-162.191 -151.329)"
                        ></path>
                        <path
                          id="Path_37216"
                          d="M209.212 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37216"
                          transform="translate(-160.374 -153.885)"
                        ></path>
                        <path
                          id="Path_37217"
                          d="M197.675 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37217"
                          transform="translate(-157.686 -151.329)"
                        ></path>
                        <path
                          id="Path_37218"
                          d="M189.879 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37218"
                          transform="translate(-155.869 -153.885)"
                        ></path>
                        <path
                          id="Path_37219"
                          d="M178.342 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37219"
                          transform="translate(-153.181 -151.329)"
                        ></path>
                        <path
                          id="Path_37220"
                          d="M170.545 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37220"
                          transform="translate(-151.364 -153.885)"
                        ></path>
                        <path
                          id="Path_37221"
                          d="M159.008 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37221"
                          transform="translate(-148.675 -151.329)"
                        ></path>
                        <path
                          id="Path_37222"
                          d="M151.212 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37222"
                          transform="translate(-146.858 -153.885)"
                        ></path>
                        <path
                          id="Path_37223"
                          d="M139.675 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37223"
                          transform="translate(-144.17 -151.329)"
                        ></path>
                        <path
                          id="Path_37224"
                          d="M131.879 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37224"
                          transform="translate(-142.353 -153.885)"
                        ></path>
                        <path
                          id="Path_37225"
                          d="M120.342 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37225"
                          transform="translate(-139.664 -151.329)"
                        ></path>
                        <path
                          id="Path_37226"
                          d="M239.266 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37226"
                          transform="translate(-167.378 -146.124)"
                        ></path>
                        <path
                          id="Path_37227"
                          d="M228.545 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37227"
                          transform="translate(-164.88 -148.679)"
                        ></path>
                        <path
                          id="Path_37228"
                          d="M217.008 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37228"
                          transform="translate(-162.191 -146.124)"
                        ></path>
                        <path
                          id="Path_37229"
                          d="M209.212 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37229"
                          transform="translate(-160.374 -148.679)"
                        ></path>
                        <path
                          id="Path_37230"
                          d="M197.675 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37230"
                          transform="translate(-157.686 -146.124)"
                        ></path>
                        <path
                          id="Path_37231"
                          d="M189.879 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37231"
                          transform="translate(-155.869 -148.679)"
                        ></path>
                        <path
                          id="Path_37232"
                          d="M178.342 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37232"
                          transform="translate(-153.181 -146.124)"
                        ></path>
                        <path
                          id="Path_37233"
                          d="M170.545 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37233"
                          transform="translate(-151.364 -148.679)"
                        ></path>
                        <path
                          id="Path_37234"
                          d="M159.008 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37234"
                          transform="translate(-148.675 -146.124)"
                        ></path>
                        <path
                          id="Path_37235"
                          d="M151.212 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37235"
                          transform="translate(-146.858 -148.679)"
                        ></path>
                        <path
                          id="Path_37236"
                          d="M139.675 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37236"
                          transform="translate(-144.17 -146.124)"
                        ></path>
                        <path
                          id="Path_37237"
                          d="M131.879 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37237"
                          transform="translate(-142.353 -148.679)"
                        ></path>
                        <path
                          id="Path_37238"
                          d="M120.342 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37238"
                          transform="translate(-139.664 -146.124)"
                        ></path>
                        <path
                          id="Path_37239"
                          d="M239.266 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37239"
                          transform="translate(-167.378 -140.918)"
                        ></path>
                        <path
                          id="Path_37240"
                          d="M228.545 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37240"
                          transform="translate(-164.88 -143.473)"
                        ></path>
                        <path
                          id="Path_37241"
                          d="M217.008 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37241"
                          transform="translate(-162.191 -140.918)"
                        ></path>
                        <path
                          id="Path_37242"
                          d="M209.212 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37242"
                          transform="translate(-160.374 -143.473)"
                        ></path>
                        <path
                          id="Path_37243"
                          d="M197.675 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37243"
                          transform="translate(-157.686 -140.918)"
                        ></path>
                        <path
                          id="Path_37244"
                          d="M189.879 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37244"
                          transform="translate(-155.869 -143.473)"
                        ></path>
                        <path
                          id="Path_37245"
                          d="M178.342 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37245"
                          transform="translate(-153.181 -140.918)"
                        ></path>
                        <path
                          id="Path_37246"
                          d="M170.545 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37246"
                          transform="translate(-151.364 -143.473)"
                        ></path>
                        <path
                          id="Path_37247"
                          d="M159.008 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37247"
                          transform="translate(-148.675 -140.918)"
                        ></path>
                        <path
                          id="Path_37248"
                          d="M151.212 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37248"
                          transform="translate(-146.858 -143.473)"
                        ></path>
                        <path
                          id="Path_37249"
                          d="M139.675 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37249"
                          transform="translate(-144.17 -140.918)"
                        ></path>
                        <path
                          id="Path_37250"
                          d="M131.879 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37250"
                          transform="translate(-142.353 -143.473)"
                        ></path>
                        <path
                          id="Path_37251"
                          d="M120.342 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                          data-name="Path 37251"
                          transform="translate(-139.664 -140.918)"
                        ></path>
                      </g>
                    </g>
                    <g id="Group_9681" data-name="Group 9681">
                      <g
                        id="Group_9680"
                        clipPath="url(#m-clip-path)"
                        data-name="Group 9680"
                      >
                        <path
                          id="Path_37253"
                          fill="#ffb076"
                          d="M179.882 182.514c0 3.634 2 8.45-3.094 10.449s-30.027 9.749-31.209 8.918c.364 3.621-1.82 3.349-4.459 3.621s-5.732.364-6.187-2.635-1.82-4.816 3.367-5.907 28.571-7.36 27.752-14.447c0 0 1.051-4 6.94-3.907s6.89 3.907 6.89 3.907"
                          data-name="Path 37253"
                          transform="translate(-31.327 -41.809)"
                        ></path>
                        <path
                          id="Path_37254"
                          fill="#e0777f"
                          d="M190.543 180.487c1.529-6-1.321-24.22-11.286-23.5s-4.922 19.663-4.922 19.663c2.641 0 13.75-.48 16.208 3.836"
                          data-name="Path 37254"
                          transform="translate(-40.329 -36.744)"
                        ></path>
                        <path
                          id="Path_37255"
                          fill="#ffe5bb"
                          d="M160.866 132.419v4.039l-5.776-1.358v-3.779Z"
                          data-name="Path 37255"
                          transform="translate(-36.142 -30.742)"
                        ></path>
                        <path
                          id="Path_37256"
                          fill="#ffe5bb"
                          d="M148.79 129.983v3.362l-5.776-.976v-3.381Z"
                          data-name="Path 37256"
                          transform="translate(-33.327 -30.194)"
                        ></path>
                        <path
                          id="Path_37257"
                          fill="none"
                          stroke="#2e2c2c"
                          strokeMiterlimit="10"
                          strokeWidth="9.811"
                          d="M105.4 197.928c-.538-.15-1.124-.3-1.737-.448"
                          data-name="Path 37257"
                          transform="translate(-24.156 -46.227)"
                        ></path>
                        <path
                          id="Rectangle_4565"
                          fill="#5c5a5a"
                          d="M0 0h45.856v3.473H0z"
                          data-name="Rectangle 4565"
                          transform="translate(165.544 198.294)"
                        ></path>
                        <path
                          id="Path_37258"
                          fill="#fff"
                          fillRule="evenodd"
                          d="M260.034 131.657a16.539 16.539 0 1 0-5.172 29.007 7.24 7.24 0 0 0 5.322-.678 10.45 10.45 0 0 0 12.4-.747 14.316 14.316 0 1 0 11.116-25.223 12.422 12.422 0 0 0-23.669-2.359"
                          data-name="Path 37258"
                          transform="translate(-54.403 -29.023)"
                        ></path>
                        <path
                          id="Path_37259"
                          fill="#e0a365"
                          d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                          data-name="Path 37259"
                          transform="translate(-59.869 -48.645)"
                        ></path>
                        <g
                          id="Group_9631"
                          data-name="Group 9631"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(197.039 159.163)"
                        >
                          <g id="Group_9630" data-name="Group 9630">
                            <g
                              id="Group_9629"
                              clipPath="url(#m-clip-path-22)"
                              data-name="Group 9629"
                            >
                              <path
                                id="Path_37260"
                                fill="#b56e39"
                                d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                                data-name="Path 37260"
                                transform="translate(-256.908 -207.808)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9634"
                          data-name="Group 9634"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(197.039 159.163)"
                        >
                          <g id="Group_9633" data-name="Group 9633">
                            <g
                              id="Group_9632"
                              clipPath="url(#m-clip-path-22)"
                              data-name="Group 9632"
                            >
                              <path
                                id="Path_37261"
                                fill="#b56e39"
                                d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                                data-name="Path 37261"
                                transform="translate(-256.908 -207.808)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37262"
                          fill="#e0a365"
                          d="M274.6 207.38a.185.185 0 0 0-.234.179v.29a.185.185 0 0 0 .137.178l10 2.7v-.675Z"
                          data-name="Path 37262"
                          transform="translate(-63.937 -48.543)"
                        ></path>
                        <path
                          id="Path_37263"
                          fill="#e0a365"
                          d="M237.054 207.373h28.793v.666h-28.793Z"
                          data-name="Path 37263"
                          transform="translate(-55.242 -48.543)"
                        ></path>
                        <g
                          id="Group_9637"
                          data-name="Group 9637"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(210.429 158.831)"
                        >
                          <g id="Group_9636" data-name="Group 9636">
                            <g
                              id="Group_9635"
                              clipPath="url(#m-clip-path-24)"
                              data-name="Group 9635"
                            >
                              <path
                                id="Path_37264"
                                fill="#b56e39"
                                d="m284.507 210.732-10-2.7a.185.185 0 0 1-.137-.178v-.29a.186.186 0 0 1 .234-.179l9.907 2.678Z"
                                data-name="Path 37264"
                                transform="translate(-274.366 -207.374)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9640"
                          data-name="Group 9640"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(197.871 160.712)"
                        >
                          <g id="Group_9639" data-name="Group 9639">
                            <g
                              id="Group_9638"
                              clipPath="url(#m-clip-path-25)"
                              data-name="Group 9638"
                            >
                              <path
                                id="Path_37265"
                                fill="#b56e39"
                                d="m280.691 210.633-2.97-.8-18.259.064-1.468 1.085 2.154 1.7 13.308-.492 5.685-1.3 1.551.419Z"
                                data-name="Path 37265"
                                transform="translate(-257.993 -209.83)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37266"
                          fill="#f2b879"
                          d="m251.327 209.2 7.015-5.351a.073.073 0 0 0-.044-.131h-28.925l-7.187 5.482Z"
                          data-name="Path 37266"
                          transform="translate(-51.778 -47.688)"
                        ></path>
                        <path
                          id="Path_37267"
                          fill="#fcc584"
                          d="m220.523 210.879 1.032 8.626a3.4 3.4 0 0 1-.2 1.608l-1.225 3.2a3.4 3.4 0 0 0-.221 1.346l.575 14.022a.93.93 0 0 0 .927.891h29.826v-29.693Z"
                          data-name="Path 37267"
                          transform="translate(-51.247 -49.364)"
                        ></path>
                        <path
                          id="Path_37268"
                          fill="#fcc584"
                          d="m220.523 210.879 1.032 8.626a3.4 3.4 0 0 1-.2 1.608l-1.225 3.2a3.4 3.4 0 0 0-.221 1.346l.575 14.022a.93.93 0 0 0 .927.891h29.826v-29.693Z"
                          data-name="Path 37268"
                          transform="translate(-51.247 -49.364)"
                        ></path>
                        <g
                          id="Group_9643"
                          data-name="Group 9643"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(181.442 172.239)"
                        >
                          <g id="Group_9642" data-name="Group 9642">
                            <g
                              id="Group_9641"
                              clipPath="url(#m-clip-path-26)"
                              data-name="Group 9641"
                            >
                              <path
                                id="Path_37269"
                                fill="#b56e39"
                                d="m253.767 230.578.6-1.551a2.68 2.68 0 0 0 .02-1.88l-.644-1.769a3 3 0 0 1-.137-.5l-16.685 1.253a.377.377 0 0 0-.07.739l16.721 4.484a3.2 3.2 0 0 1 .194-.778"
                                data-name="Path 37269"
                                transform="translate(-236.572 -224.881)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37270"
                          fill="#ffcf9f"
                          d="M256.822 203.721h-28.463a1.37 1.37 0 0 0-.829.28l-6.82 5.2h29.141l7.016-5.351a.073.073 0 0 0-.044-.131"
                          data-name="Path 37270"
                          transform="translate(-51.434 -47.688)"
                        ></path>
                        <g
                          id="Group_9646"
                          data-name="Group 9646"
                          opacity="0.14"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(181.443 172.239)"
                        >
                          <g id="Group_9645" data-name="Group 9645">
                            <g
                              id="Group_9644"
                              clipPath="url(#m-clip-path-27)"
                              data-name="Group 9644"
                            >
                              <path
                                id="Path_37271"
                                fill="#ad6937"
                                d="M254.544 228.2a2.7 2.7 0 0 0-.157-1.05l-.643-1.768a3.3 3.3 0 0 1-.137-.5l-16.685 1.253a.365.365 0 0 0-.347.344Z"
                                data-name="Path 37271"
                                transform="translate(-236.574 -224.881)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37272"
                          fill="#e0a365"
                          d="M280.769 223.146a2 2 0 0 0 .087-.585v-11.683h-22.151v10.114a3.2 3.2 0 0 0 .2 1.11l.643 1.768a2.67 2.67 0 0 1-.019 1.88l-.6 1.55a3.3 3.3 0 0 0-.219 1.173v11.088a1.01 1.01 0 0 0 1.009 1.009h20.134a1.01 1.01 0 0 0 1.009-1.009v-10.75a2 2 0 0 0-.22-.911l-.459-.895a2 2 0 0 1-.133-1.5Z"
                          data-name="Path 37272"
                          transform="translate(-60.288 -49.364)"
                        ></path>
                        <path
                          id="Path_37273"
                          fill="#e0a365"
                          d="M280.769 223.146a2 2 0 0 0 .087-.585v-11.683h-22.151v10.114a3.2 3.2 0 0 0 .2 1.11l.643 1.768a2.67 2.67 0 0 1-.019 1.88l-.6 1.55a3.3 3.3 0 0 0-.219 1.173v11.088a1.01 1.01 0 0 0 1.009 1.009h20.134a1.01 1.01 0 0 0 1.009-1.009v-10.75a2 2 0 0 0-.22-.911l-.459-.895a2 2 0 0 1-.133-1.5Z"
                          data-name="Path 37273"
                          transform="translate(-60.288 -49.364)"
                        ></path>
                        <g
                          id="Group_9649"
                          data-name="Group 9649"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(211.744 173.504)"
                        >
                          <g id="Group_9648" data-name="Group 9648">
                            <g
                              id="Group_9647"
                              clipPath="url(#m-clip-path-28)"
                              data-name="Group 9647"
                            >
                              <path
                                id="Path_37274"
                                fill="#b56e39"
                                d="m284.685 231.565-.459-.894a2 2 0 0 1-.133-1.5l.725-2.364a2 2 0 0 0 .064-.279l-8.545 2.5a.357.357 0 0 0 .008.687l8.5 2.259a2 2 0 0 0-.156-.412"
                                data-name="Path 37274"
                                transform="translate(-276.081 -226.532)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9652"
                          data-name="Group 9652"
                          opacity="0.15"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(211.744 173.504)"
                        >
                          <g id="Group_9651" data-name="Group 9651">
                            <g
                              id="Group_9650"
                              clipPath="url(#m-clip-path-29)"
                              data-name="Group 9650"
                            >
                              <path
                                id="Path_37275"
                                fill="#b56e39"
                                d="M284.01 229.871a2 2 0 0 1 .084-.7l.724-2.363a2 2 0 0 0 .064-.279l-8.545 2.5-.034.012h-.011l-.021.01-.011.006-.018.011-.011.007-.017.012-.009.007-.018.016-.006.005a.4.4 0 0 0-.04.049v.006l-.012.021v.008l-.01.021v.007l-.009.024a.4.4 0 0 0-.016.126v.029q-.001.016.005.031Z"
                                data-name="Path 37275"
                                transform="translate(-276.081 -226.532)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9655"
                          data-name="Group 9655"
                          opacity="0.18"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(169.276 161.514)"
                        >
                          <g id="Group_9654" data-name="Group 9654">
                            <g
                              id="Group_9653"
                              clipPath="url(#m-clip-path-30)"
                              data-name="Group 9653"
                            >
                              <path
                                id="Path_37276"
                                fill="#c4aa8d"
                                d="M221.742 219.5a3.4 3.4 0 0 1-.2 1.608l-.41 1.072a1.55 1.55 0 0 0 .884-.234c1.529-.96.557-3.954 2.1-4.883s4.94 1.816 6.066-.183c.93-1.65-1.651-3.077-1.86-6.006h-7.612Z"
                                data-name="Path 37276"
                                transform="translate(-220.71 -210.878)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9658"
                          data-name="Group 9658"
                          opacity="0.18"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(179.981 186.714)"
                        >
                          <g id="Group_9657" data-name="Group 9657">
                            <g
                              id="Group_9656"
                              clipPath="url(#m-clip-path-31)"
                              data-name="Group 9656"
                            >
                              <path
                                id="Path_37277"
                                fill="#c4aa8d"
                                d="M244.275 246.569c-.856-.657-2.348.838-3.55-.039-.587-.427-.218-2.547-1.512-2.74s-1.251 2.365-1.94 2.635-1.775-.94-2.4-.353c-.581.549.193 1.376.473 2.2h8.983c.114-.594.42-1.336-.059-1.7"
                                data-name="Path 37277"
                                transform="translate(-234.667 -243.779)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9661"
                          data-name="Group 9661"
                          opacity="0.18"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(213.729 184.44)"
                        >
                          <g id="Group_9660" data-name="Group 9660">
                            <g
                              id="Group_9659"
                              clipPath="url(#m-clip-path-32)"
                              data-name="Group 9659"
                            >
                              <path
                                id="Path_37278"
                                fill="#c4aa8d"
                                d="M285.51 246.568v-5.522a1.02 1.02 0 0 0-1.057-.138c-1.161.639-.219 3.054-1.8 3.974-.77.449-2.969-1.013-3.826.346-.538.853.4 1.65 1.169 2.35h4.5a1.01 1.01 0 0 0 1.009-1.009"
                                data-name="Path 37278"
                                transform="translate(-278.669 -240.811)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9664"
                          data-name="Group 9664"
                          opacity="0.18"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(201.866 161.514)"
                        >
                          <g id="Group_9663" data-name="Group 9663">
                            <g
                              id="Group_9662"
                              clipPath="url(#m-clip-path-33)"
                              data-name="Group 9662"
                            >
                              <path
                                id="Path_37279"
                                fill="#c4aa8d"
                                d="M265.749 212.157c3.24-.315 2.891 2.3 4.451 2.447s2.19-1.579 3.694-2.076c1.94-.64 6.518.021 6.433-1.65h-17.045c-.367.739.542 1.466 2.467 1.279"
                                data-name="Path 37279"
                                transform="translate(-263.202 -210.878)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37280"
                          fill="#e0a365"
                          d="M254.811 152.082a.32.32 0 0 0 .225-.094c.026-.025 2.744-2.618 8.465-2.387a.353.353 0 0 0 .025-.7c-6.015-.244-8.822 2.459-8.939 2.575a.37.37 0 0 0-.018.5.32.32 0 0 0 .242.113"
                          data-name="Path 37280"
                          transform="translate(-59.303 -34.851)"
                        ></path>
                        <path
                          id="Path_37281"
                          fill="#ce8d51"
                          d="M260.795 149.367a7 7 0 0 1-.532.7 13 13 0 0 0-1.39.419 7.4 7.4 0 0 0 1.062-1.072c.3-.077.626-.147.964-.208q-.052.082-.1.162"
                          data-name="Path 37281"
                          transform="translate(-60.327 -34.927)"
                        ></path>
                        <path
                          id="Path_37282"
                          fill="#ce8d51"
                          d="M254.883 151.926q0 .421.015.855a.3.3 0 0 1-.087.015.32.32 0 0 1-.242-.113.37.37 0 0 1 .018-.5c.02-.019.118-.114.3-.257"
                          data-name="Path 37282"
                          transform="translate(-59.303 -35.564)"
                        ></path>
                        <path
                          id="Path_37283"
                          fill="#bdc5c7"
                          d="M254.811 152.885a.32.32 0 0 1-.242-.113.37.37 0 0 1-.012-.462 7 7 0 0 0 .621.358 3 3 0 0 0-.141.123.32.32 0 0 1-.225.094"
                          data-name="Path 37283"
                          transform="translate(-59.304 -35.654)"
                        ></path>
                        <path
                          id="Path_37284"
                          fill="#ce8d51"
                          d="M256.16 151.825a7 7 0 0 0-.357.234l-.318-.042q.036-.311.058-.626c.188-.128.412-.27.674-.417q-.016.426-.056.852"
                          data-name="Path 37284"
                          transform="translate(-59.537 -35.341)"
                        ></path>
                        <path
                          id="Path_37285"
                          fill="#ce8d51"
                          d="M250.422 152.077a.32.32 0 0 0 .194-.067.37.37 0 0 0 .073-.492c-2.279-3.346-4.763-4.165-6.445-4.262a6.3 6.3 0 0 0-3.166.617.365.365 0 0 0-.142.476.32.32 0 0 0 .446.151 5.75 5.75 0 0 1 2.86-.537c2.225.141 4.214 1.477 5.913 3.971a.32.32 0 0 0 .268.146"
                          data-name="Path 37285"
                          transform="translate(-56.138 -34.468)"
                        ></path>
                        <path
                          id="Path_37286"
                          fill="#bc723f"
                          d="M245.662 148.176c2.225.141 4.214 1.477 5.913 3.971a.4.4 0 0 0 .041.05l-.03.028a.3.3 0 0 1-.194.067.33.33 0 0 1-.268-.146c-1.7-2.493-3.688-3.83-5.913-3.971l-.15-.008a6 6 0 0 1 .6.008"
                          data-name="Path 37286"
                          transform="translate(-57.108 -34.683)"
                        ></path>
                        <path
                          id="Path_37287"
                          fill="#bc723f"
                          d="M241.078 147.872a6.24 6.24 0 0 1 3.014-.624 6.1 6.1 0 0 0-2.564.624.365.365 0 0 0-.142.476.3.3 0 0 0 .082.108q-.083.04-.087.043a.32.32 0 0 1-.446-.151.365.365 0 0 1 .142-.476"
                          data-name="Path 37287"
                          transform="translate(-56.138 -34.468)"
                        ></path>
                        <path
                          id="Path_37288"
                          fill="#bc723f"
                          d="M249.535 148.669a9.3 9.3 0 0 1 1.74 1.421q.223.263.462.5a14 14 0 0 1 .965 1.258.37.37 0 0 1 .006.4 8.5 8.5 0 0 1-1.525-1.266q-.15-.167-.3-.324a10 10 0 0 1-1.081-1.5c-.1-.163-.185-.328-.271-.493"
                          data-name="Path 37288"
                          transform="translate(-58.151 -34.801)"
                        ></path>
                        <path
                          id="Path_37289"
                          fill="#ce8d51"
                          d="M255.616 150.67a9.36 9.36 0 0 0 3.822-3.119 5.4 5.4 0 0 0 .972-3.321 2.83 2.83 0 0 0-1.742-2.662 2.52 2.52 0 0 0-2.45.543c-1.592 1.334-2.454 4.421-2.3 8.257l.65-.029c-.139-3.56.649-6.5 2.055-7.682a1.9 1.9 0 0 1 1.867-.421 2.16 2.16 0 0 1 1.273 2.044 4.7 4.7 0 0 1-.853 2.868 8.7 8.7 0 0 1-3.56 2.888Z"
                          data-name="Path 37289"
                          transform="translate(-59.168 -33.112)"
                        ></path>
                        <path
                          id="Path_37290"
                          fill="#ce8d51"
                          d="M261.209 149.171a16.3 16.3 0 0 1 3.263-.29 16 16 0 0 0-3.307.359z"
                          data-name="Path 37290"
                          transform="translate(-60.861 -34.851)"
                        ></path>
                        <path
                          id="Path_37291"
                          fill="#ce8d51"
                          d="M254.749 151.538a10.1 10.1 0 0 1 3.974-1.976l-.09.11a9.4 9.4 0 0 0-3.7 1.959.37.37 0 0 0-.018.5.3.3 0 0 0 .1.076.3.3 0 0 1-.144.037.3.3 0 0 1-.11-.021q-.013-.345-.015-.682"
                          data-name="Path 37291"
                          transform="translate(-59.366 -35.01)"
                        ></path>
                        <path
                          id="Path_37292"
                          fill="#bc723f"
                          d="M259.349 147.361a4.7 4.7 0 0 0 .853-2.868 2.16 2.16 0 0 0-1.273-2.044 2 2 0 0 0-.459-.086 1.9 1.9 0 0 1 .693.086 2.16 2.16 0 0 1 1.273 2.044 4.7 4.7 0 0 1-.853 2.868 8.7 8.7 0 0 1-3.56 2.889l.227.536-.193.1-.269-.633a8.7 8.7 0 0 0 3.561-2.889"
                          data-name="Path 37292"
                          transform="translate(-59.608 -33.324)"
                        ></path>
                        <path
                          id="Path_37293"
                          fill="#bc723f"
                          d="M256.219 142.111a2.58 2.58 0 0 1 1.82-.656 2.64 2.64 0 0 0-1.586.656c-1.591 1.333-2.452 4.415-2.3 8.247l-.234.011c-.15-3.836.712-6.923 2.3-8.257"
                          data-name="Path 37293"
                          transform="translate(-59.168 -33.112)"
                        ></path>
                        <path
                          id="Path_37294"
                          fill="#e0a365"
                          d="m253.512 150.538.26-.637a8.17 8.17 0 0 1-3.485-3.308 7.8 7.8 0 0 1-1.17-3.964 1.79 1.79 0 0 1 .943-1.759 1.53 1.53 0 0 1 1.6.363c1.5 1.3 2.375 4.914 1.99 8.234l.646.085c.418-3.593-.538-7.4-2.225-8.859a2.14 2.14 0 0 0-2.225-.479 2.4 2.4 0 0 0-1.381 2.387 8.4 8.4 0 0 0 1.269 4.36 8.84 8.84 0 0 0 3.777 3.577"
                          data-name="Path 37294"
                          transform="translate(-57.901 -32.791)"
                        ></path>
                        <path
                          id="Path_37295"
                          fill="#ce8d51"
                          d="M252.338 141.445a1.73 1.73 0 0 0-.974-.452 1.62 1.62 0 0 1 1.208.452c1.5 1.3 2.375 4.914 1.99 8.234l.415.056v.031l-.646-.087c.386-3.319-.489-6.936-1.989-8.234"
                          data-name="Path 37295"
                          transform="translate(-58.577 -33.003)"
                        ></path>
                        <path
                          id="Path_37296"
                          fill="#ce8d51"
                          d="M248.466 142.6a2.4 2.4 0 0 1 1.381-2.388 2.1 2.1 0 0 1 .85-.129 2.1 2.1 0 0 0-.616.129 2.4 2.4 0 0 0-1.381 2.388 8.43 8.43 0 0 0 1.269 4.36 8.93 8.93 0 0 0 3.582 3.48l-.039.1a8.85 8.85 0 0 1-3.777-3.577 8.4 8.4 0 0 1-1.269-4.36"
                          data-name="Path 37296"
                          transform="translate(-57.901 -32.791)"
                        ></path>
                        <path
                          id="Path_37297"
                          fill="#e5ded6"
                          d="m289.439 191.783 3.975-1.442-4.134 5.623Z"
                          data-name="Path 37297"
                          transform="translate(-67.413 -44.556)"
                        ></path>
                        <path
                          id="Path_37298"
                          fill="#d3cac1"
                          d="m216.149 196.371.65 10.848h57.768l-.909-11.391Z"
                          data-name="Path 37298"
                          transform="translate(-50.371 -45.84)"
                        ></path>
                        <path
                          id="Path_37299"
                          fill="#d3cac1"
                          d="M217.564 181.486v11.391l55.481-.516.826-11.408Z"
                          data-name="Path 37299"
                          transform="translate(-50.701 -42.359)"
                        ></path>
                        <path
                          id="Path_37300"
                          fill="#e5ded6"
                          d="m215.109 205.206 59.72.888-2.5-.888Z"
                          data-name="Path 37300"
                          transform="translate(-50.128 -48.036)"
                        ></path>
                        <path
                          id="Path_37301"
                          fill="#c4b7ab"
                          d="M218.073 186.483c2.312-.039 4.625-.015 6.936-.025l6.936.079c4.624.062 9.248.213 13.872.316 4.623.182 9.247.322 13.871.543l6.935.352c2.312.154 4.623.273 6.935.456-2.312.04-4.625.016-6.937.025l-6.936-.078c-4.624-.065-9.247-.212-13.871-.317-4.624-.185-9.247-.321-13.871-.545l-6.936-.352c-2.311-.153-4.622-.273-6.934-.455"
                          data-name="Path 37301"
                          transform="translate(-50.819 -43.647)"
                        ></path>
                        <path
                          id="Path_37302"
                          fill="#c4b7ab"
                          d="M217.717 191.725c2.306-.038 4.613-.013 6.918-.021l6.918.081c4.612.065 9.223.217 13.834.322 4.611.184 9.223.325 13.834.548l6.916.355c2.3.155 4.61.275 6.916.46-2.306.038-4.613.014-6.918.022l-6.918-.081c-4.612-.067-9.223-.216-13.835-.323-4.611-.186-9.223-.325-13.834-.551l-6.916-.355c-2.3-.153-4.61-.274-6.916-.457"
                          data-name="Path 37302"
                          transform="translate(-50.736 -44.875)"
                        ></path>
                        <path
                          id="Path_37303"
                          fill="#e5ded6"
                          d="m288.311 165.5 3.414-.82-2.671-1.338Z"
                          data-name="Path 37303"
                          transform="translate(-67.187 -38.235)"
                        ></path>
                        <path
                          id="Path_37304"
                          fill="#d3cac1"
                          d="m217.209 154.031 2.829 10.745 53.042-.493.826-11.408Z"
                          data-name="Path 37304"
                          transform="translate(-50.618 -35.786)"
                        ></path>
                        <path
                          id="Path_37305"
                          fill="#d8cfc7"
                          d="m272.531 162.164-53.042.493-2.184-8.294h-.1l2.829 10.745 53.042-.493.746-10.315Z"
                          data-name="Path 37305"
                          transform="translate(-50.618 -36.12)"
                        ></path>
                        <path
                          id="Path_37306"
                          fill="#c4b7ab"
                          d="M221.237 158.909c2.143-.208 4.286-.354 6.429-.532l6.429-.43c4.287-.276 8.574-.463 12.86-.7 4.287-.156 8.574-.355 12.861-.473l6.432-.155c2.144-.016 4.288-.066 6.432-.052-2.142.209-4.286.355-6.429.534l-6.429.43c-4.287.273-8.573.465-12.86.7-4.287.154-8.575.357-12.862.471l-6.432.156c-2.144.017-4.287.067-6.432.054"
                          data-name="Path 37306"
                          transform="translate(-51.556 -36.65)"
                        ></path>
                        <path
                          id="Path_37307"
                          fill="#d3cac1"
                          d="m218.073 164.54.635 13.2 54.456-.506.825-11.408Z"
                          data-name="Path 37307"
                          transform="translate(-50.819 -38.517)"
                        ></path>
                        <path
                          id="Path_37308"
                          fill="#c4b7ab"
                          d="M220.558 169.67c1.778-.027 3.556.009 5.333.011l5.334.114c3.555.087 7.11.261 10.665.388 3.554.205 7.109.369 10.663.614l5.33.388c1.777.165 3.554.3 5.33.492-1.778.028-3.556-.008-5.333-.01l-5.333-.114c-3.556-.089-7.11-.26-10.665-.389-3.555-.208-7.109-.368-10.663-.617l-5.331-.388c-1.777-.165-3.554-.3-5.33-.49"
                          data-name="Path 37308"
                          transform="translate(-51.398 -39.715)"
                        ></path>
                        <path
                          id="Path_37309"
                          fill="#c4b7ab"
                          d="M222.932 176.075c2.017-.11 4.035-.159 6.052-.24l6.053-.136c4.034-.081 8.069-.074 12.1-.115 4.035.038 8.07.034 12.1.113l6.052.136c2.018.082 4.035.13 6.052.241-2.017.111-4.034.159-6.052.241l-6.052.137c-4.035.078-8.07.074-12.1.113-4.035-.041-8.07-.034-12.1-.115l-6.053-.136c-2.017-.081-4.035-.129-6.052-.24"
                          data-name="Path 37309"
                          transform="translate(-51.951 -41.102)"
                        ></path>
                        <path
                          id="Path_37310"
                          fill="#d8cfc7"
                          d="m218.382 170.983 1.669 6.189 44.228 1.652-45.5.424Z"
                          data-name="Path 37310"
                          transform="translate(-50.891 -40.025)"
                        ></path>
                        <g
                          id="Group_9667"
                          data-name="Group 9667"
                          opacity="0.61"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(204.019 138.595)"
                        >
                          <g id="Group_9666" data-name="Group 9666">
                            <g
                              id="Group_9665"
                              clipPath="url(#m-clip-path-34)"
                              data-name="Group 9665"
                            >
                              <path
                                id="Path_37311"
                                fill="#f7f1e8"
                                d="m266.009 181.246 18.047 1.857-.716 7.821-8.713 1.422 9.707.016.826-11.408Z"
                                data-name="Path 37311"
                                transform="translate(-266.009 -180.954)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9670"
                          data-name="Group 9670"
                          opacity="0.61"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(166.864 143.696)"
                        >
                          <g id="Group_9669" data-name="Group 9669">
                            <g
                              id="Group_9668"
                              clipPath="url(#m-clip-path-35)"
                              data-name="Group 9668"
                            >
                              <path
                                id="Path_37312"
                                fill="#f7f1e8"
                                d="m217.564 187.614.825 4.9 18.316 1.391-19.141.532Z"
                                data-name="Path 37312"
                                transform="translate(-217.564 -187.614)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37313"
                          fill="#ded5cc"
                          d="M268.842 169.045h9.682l-.9 3.827Z"
                          data-name="Path 37313"
                          transform="translate(-62.65 -39.571)"
                        ></path>
                        <path
                          id="Path_37314"
                          fill="#ded5cc"
                          d="M250.789 198.686h9.682l-6.081 3.506Z"
                          data-name="Path 37314"
                          transform="translate(-58.443 -46.51)"
                        ></path>
                        <path
                          id="Path_37315"
                          fill="#ded5cc"
                          d="M225.476 199.1h9.343l-7.685 3.186Z"
                          data-name="Path 37315"
                          transform="translate(-52.544 -46.607)"
                        ></path>
                        <path
                          id="Path_37316"
                          fill="#ded5cc"
                          d="m230.5 163.954 6.244-2.6v2.446Z"
                          data-name="Path 37316"
                          transform="translate(-53.715 -37.772)"
                        ></path>
                        <path
                          id="Path_37317"
                          fill="#ce8d51"
                          d="m271.65 197.259.086-43.98h-.89l-.086 43.98Z"
                          data-name="Path 37317"
                          transform="translate(-63.097 -35.88)"
                        ></path>
                        <path
                          id="Path_37318"
                          fill="#e0a365"
                          d="m271.139 197.259-.45-43.98h-.889l.45 43.98Z"
                          data-name="Path 37318"
                          transform="translate(-62.873 -35.88)"
                        ></path>
                        <path
                          id="Path_37319"
                          fill="#d39059"
                          d="m279.91 185-35.26 2.845.072-2.834 35.395-2.864Z"
                          data-name="Path 37319"
                          transform="translate(-57.012 -42.639)"
                        ></path>
                        <path
                          id="Path_37320"
                          fill="#d4884b"
                          d="m279.843 186.092-35.194 2.69.022-.9 35.171-1.889Z"
                          data-name="Path 37320"
                          transform="translate(-57.012 -43.538)"
                        ></path>
                        <path
                          id="Path_37321"
                          fill="#e8ac6b"
                          d="m279.742 187.533-34.985-3.065.074-2.892 35.117 3.105Z"
                          data-name="Path 37321"
                          transform="translate(-57.037 -42.504)"
                        ></path>
                        <path
                          id="Path_37322"
                          fill="#dd9f62"
                          d="m270.336 187.165-25.578-1.91.008-.317Z"
                          data-name="Path 37322"
                          transform="translate(-57.038 -43.291)"
                        ></path>
                        <g
                          id="Group_9673"
                          data-name="Group 9673"
                          opacity="0.61"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(165.778 117.84)"
                        >
                          <g id="Group_9672" data-name="Group 9672">
                            <g
                              id="Group_9671"
                              clipPath="url(#m-clip-path-36)"
                              data-name="Group 9671"
                            >
                              <path
                                id="Path_37323"
                                fill="#e0dbd3"
                                d="m238.184 193.525-.3-7.523.276-10.915-.617-.477.195-12.571-.946-8.184-19.834.4 2.057 7.811-1.394-.031.63 13.094-1.02.009v11.392l7.541-.07-8.627.081.65 10.848h20.364Z"
                                data-name="Path 37323"
                                transform="translate(-216.149 -153.856)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37324"
                          fill="#d89150"
                          d="m238.493 181.576-20.929 5.152v2.911l20.856-5.171Z"
                          data-name="Path 37324"
                          transform="translate(-50.701 -42.504)"
                        ></path>
                        <path
                          id="Path_37325"
                          fill="#c6824a"
                          d="m238.41 185.416-20.845-1.552v2.836l20.773 1.546Z"
                          data-name="Path 37325"
                          transform="translate(-50.701 -43.04)"
                        ></path>
                        <g
                          id="Group_9676"
                          data-name="Group 9676"
                          opacity="0.61"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(166.864 141.647)"
                        >
                          <g id="Group_9675" data-name="Group 9675">
                            <g
                              id="Group_9674"
                              clipPath="url(#m-clip-path-37)"
                              data-name="Group 9674"
                            >
                              <path
                                id="Path_37326"
                                fill="#e0dbd3"
                                d="m238.428 184.938-19.012 4.577a1.46 1.46 0 0 1-1.67-2.046l-.182.045v2.911l20.856-5.171Z"
                                data-name="Path 37326"
                                transform="translate(-217.564 -184.938)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_9679"
                          data-name="Group 9679"
                          opacity="0.61"
                          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                          transform="translate(166.864 140.824)"
                        >
                          <g id="Group_9678" data-name="Group 9678">
                            <g
                              id="Group_9677"
                              clipPath="url(#m-clip-path-38)"
                              data-name="Group 9677"
                            >
                              <path
                                id="Path_37327"
                                fill="#e0dbd3"
                                d="m238.359 187.382-19.395-1.412a1.465 1.465 0 0 1-1.219-2.092l-.182-.014v2.836l20.773 1.546Z"
                                data-name="Path 37327"
                                transform="translate(-217.564 -183.864)"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <path
                          id="Path_37328"
                          fill="#d89150"
                          d="m229.586 154.125-.206 43.328h.853l.206-43.345Z"
                          data-name="Path 37328"
                          transform="translate(-53.454 -36.074)"
                        ></path>
                        <path
                          id="Path_37329"
                          fill="#bc723f"
                          d="m228.794 154.142.206 43.315h.853l-.206-43.332Z"
                          data-name="Path 37329"
                          transform="translate(-53.318 -36.078)"
                        ></path>
                        <path
                          id="Path_37330"
                          fill="#fff"
                          d="m278.336 234.058-12.885 1.883a1.52 1.52 0 0 1-1.725-1.282l-1.684-11.484a1.52 1.52 0 0 1 1.285-1.722l12.885-1.884a1.52 1.52 0 0 1 1.724 1.283l1.683 11.484a1.52 1.52 0 0 1-1.284 1.722"
                          data-name="Path 37330"
                          transform="translate(-61.062 -51.394)"
                        ></path>
                        <path
                          id="Path_37331"
                          fill="#bc723f"
                          d="M277.517 228.258a1.2 1.2 0 0 0-.176-.494l-.007-.01-1.437-2.008a.184.184 0 0 0-.249-.048l-.762.49.651-2.634a.184.184 0 0 0-.286-.193l-.747.535-.909-.864a1.2 1.2 0 0 0-.448-.273 1.3 1.3 0 0 0-.6-.054l-.1.015-2.737.425a1.25 1.25 0 0 0-.553.233 1.2 1.2 0 0 0-.344.4l-1.275 2.421a.18.18 0 0 0-.012.139.19.19 0 0 0 .09.109l.884.463-2.584.881a.18.18 0 0 0-.124.17.18.18 0 0 0 .116.175l.854.339-.237 1.23a1.24 1.24 0 0 0 .29 1.055l.066.074 1.18 1.329.591.666.066.075a1.24 1.24 0 0 0 1.015.414h.007l2.442-.268h.007a.183.183 0 0 0 .156-.2l-.087-.988 1.963 1.852a.19.19 0 0 0 .153.048.2.2 0 0 0 .054-.018.18.18 0 0 0 .1-.184l-.1-.913 1.2-.365a1.24 1.24 0 0 0 .8-.748l.035-.093.515-1.366.426-1.13.035-.093a1.25 1.25 0 0 0 .069-.6m-5.426 2.344a.19.19 0 0 0-.144-.034l-3.14.571a2 2 0 0 1-.272.015 2 2 0 0 1 .048-.268l.4-1.532.8.319a.184.184 0 0 0 .232-.255l-1.2-2.346.693.364a.2.2 0 0 0 .112.019l.034-.008a.19.19 0 0 0 .108-.1l1.4-3.175a2 2 0 0 1 .134-.237 2 2 0 0 1 .2.185l1.075 1.164-.7.5a.183.183 0 0 0 .09.332l2.644.257-.739.476a.19.19 0 0 0-.082.126.18.18 0 0 0 .04.145l2.032 2.485a2 2 0 0 1 .137.228 2 2 0 0 1-.26.083l-1.544.361-.092-.857a.184.184 0 0 0-.334-.086l-1.525 2.171-.067-.774a.18.18 0 0 0-.072-.13"
                          data-name="Path 37331"
                          transform="translate(-61.94 -52.129)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </CooperateSvgImgMobile>

          <CooperateSvgImg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"

            viewBox="-50 0 1332.086 602.373"
          >
            <defs>
              <clipPath id="computer-path">
                <path
                  id="Rectangle_4514"
                  fill="none"
                  d="M0 0h276.522v266.152H0z"
                  data-name="Rectangle 4514"
                ></path>
              </clipPath>
              <clipPath id="computer-path-2">
                <path
                  id="Path_37104"
                  fill="none"
                  d="M112.592 247.479a19.66 19.66 0 0 0-10.941 8.27 19.627 19.627 0 1 0-34.58 17.4 19.73 19.73 0 0 0-12.606 1.059 23.519 23.519 0 1 0-4.826 32.92 19.646 19.646 0 0 0 28.914-3.921 23.57 23.57 0 0 0 33.083 3.257 23.564 23.564 0 0 0 30.229-.355 20 20 0 0 0 31.178-4.186 23.57 23.57 0 0 0 34.4 4.264 23.565 23.565 0 0 0 32.219-1.642 16.182 16.182 0 1 0 4.83-25.156 23.594 23.594 0 0 0-28.563-13.66 9.289 9.289 0 0 0-18.568-.417 24 24 0 0 0-3.971-.534 20 20 0 0 0 .071-1.634 19.635 19.635 0 0 0-37.793-7.438 20 20 0 0 0-2.689-.182 19 19 0 0 0-2.14.116 19.626 19.626 0 1 0-38.248-8.166"
                  data-name="Path 37104"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-4">
                <path
                  id="Path_37124"
                  fill="none"
                  d="M207.957 290.564c.012.019.063.1.158.224a9.03 9.03 0 0 0 6.7 3.208l.037-.391c-4.635-.355-6.471-3.175-6.505-3.232Z"
                  data-name="Path 37124"
                  transform="translate(-207.957 -290.373)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-5">
                <path
                  id="Rectangle_4528"
                  fill="none"
                  d="M0 0h6.89v3.623H0z"
                  data-name="Rectangle 4528"
                ></path>
              </clipPath>
              <clipPath id="computer-path-7">
                <path
                  id="Path_37126"
                  fill="none"
                  d="M206.817 292.639c.012.018.063.1.158.224a9.04 9.04 0 0 0 6.7 3.208l.038-.391c-4.626-.353-6.461-3.162-6.506-3.232Z"
                  data-name="Path 37126"
                  transform="translate(-206.817 -292.448)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-10">
                <path
                  id="Path_37128"
                  fill="none"
                  d="M205.774 294.84c.012.018.063.1.158.225a8 8 0 0 0 3.423 2.475l.043.017a11 11 0 0 0 3.229.716l.038-.391c-4.659-.355-6.488-3.2-6.507-3.232Z"
                  data-name="Path 37128"
                  transform="translate(-205.774 -294.65)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-15">
                <path
                  id="Path_37168"
                  fill="none"
                  d="M112.582 247.477a19.66 19.66 0 0 0-10.94 8.269 19.625 19.625 0 1 0-34.576 17.4 19.72 19.72 0 0 0-12.605 1.059 23.516 23.516 0 1 0-4.826 32.915 19.644 19.644 0 0 0 28.911-3.92 23.57 23.57 0 0 0 33.08 3.257 23.56 23.56 0 0 0 30.226-.355 20 20 0 0 0 31.175-4.185 23.567 23.567 0 0 0 34.4 4.263 23.563 23.563 0 0 0 32.216-1.641 16.18 16.18 0 1 0 4.83-25.153 23.59 23.59 0 0 0-28.56-13.659 9.288 9.288 0 0 0-18.566-.417 24 24 0 0 0-3.971-.534 20 20 0 0 0 .071-1.634 19.633 19.633 0 0 0-37.789-7.437 20 20 0 0 0-2.689-.182 19 19 0 0 0-2.14.116 19.624 19.624 0 1 0-38.245-8.165"
                  data-name="Path 37168"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-17">
                <path
                  id="Path_37252"
                  fill="none"
                  d="M171.8 144.41c-1.433 4.09-14.524 17.578-16.835 5.007-2.515 5.013-8.085 12.09-7.893 15.572s-.824 7.979 6.15 12.331c1.308 4.5 2.615 18.425 5.084 21.907 2.035 0 33.414-2.176 40.243 11.9 1.307 3.337 5.52 4.932 5.52 4.932s6.683-3.191-.581-28.289-16.848-38.733-23.968-44.828c-2.617.725-7.719 1.472-7.719 1.472"
                  data-name="Path 37252"
                  transform="translate(-147.072 -142.938)"
                ></path>
              </clipPath>
              <clipPath id="computer-path-19">
                <path
                  id="Rectangle_4566"
                  fill="none"
                  d="M0 0h22.447v4.403H0z"
                  data-name="Rectangle 4566"
                ></path>
              </clipPath>
              <clipPath id="computer-path-21">
                <path
                  id="Rectangle_4568"
                  fill="none"
                  d="M0 0h10.141v3.359H0z"
                  data-name="Rectangle 4568"
                ></path>
              </clipPath>
              <clipPath id="computer-path-22">
                <path
                  id="Rectangle_4569"
                  fill="none"
                  d="M0 0h22.698v2.855H0z"
                  data-name="Rectangle 4569"
                ></path>
              </clipPath>
              <clipPath id="computer-path-23">
                <path
                  id="Rectangle_4570"
                  fill="none"
                  d="M0 0h17.975v6.476H0z"
                  data-name="Rectangle 4570"
                ></path>
              </clipPath>
              <clipPath id="computer-path-24">
                <path
                  id="Rectangle_4571"
                  fill="none"
                  d="M0 0h17.973v3.317H0z"
                  data-name="Rectangle 4571"
                ></path>
              </clipPath>
              <clipPath id="computer-path-25">
                <path
                  id="Rectangle_4572"
                  fill="none"
                  d="M0 0h8.802v5.445H0z"
                  data-name="Rectangle 4572"
                ></path>
              </clipPath>
              <clipPath id="computer-path-26">
                <path
                  id="Rectangle_4573"
                  fill="none"
                  d="M0 0h8.802v3.339H0z"
                  data-name="Rectangle 4573"
                ></path>
              </clipPath>
              <clipPath id="computer-path-27">
                <path
                  id="Rectangle_4574"
                  fill="none"
                  d="M0 0h9.672v11.306H0z"
                  data-name="Rectangle 4574"
                ></path>
              </clipPath>
              <clipPath id="computer-path-28">
                <path
                  id="Rectangle_4575"
                  fill="none"
                  d="M0 0h9.868v4.493H0z"
                  data-name="Rectangle 4575"
                ></path>
              </clipPath>
              <clipPath id="computer-path-29">
                <path
                  id="Rectangle_4576"
                  fill="none"
                  d="M0 0h6.841v6.766H0z"
                  data-name="Rectangle 4576"
                ></path>
              </clipPath>
              <clipPath id="computer-path-30">
                <path
                  id="Rectangle_4577"
                  fill="none"
                  d="M0 0h17.126v3.735H0z"
                  data-name="Rectangle 4577"
                ></path>
              </clipPath>
              <clipPath id="computer-path-31">
                <path
                  id="Rectangle_4578"
                  fill="none"
                  d="M0 0h19.151v11.408H0z"
                  data-name="Rectangle 4578"
                ></path>
              </clipPath>
              <clipPath id="computer-path-32">
                <path
                  id="Rectangle_4579"
                  fill="none"
                  d="M0 0h19.141v6.823H0z"
                  data-name="Rectangle 4579"
                ></path>
              </clipPath>
              <clipPath id="computer-path-33">
                <path
                  id="Rectangle_4580"
                  fill="none"
                  d="M0 0h22.035v43.538H0z"
                  data-name="Rectangle 4580"
                ></path>
              </clipPath>
              <clipPath id="computer-path-34">
                <path
                  id="Rectangle_4581"
                  fill="none"
                  d="M0 0h20.864v5.488H0z"
                  data-name="Rectangle 4581"
                ></path>
              </clipPath>
              <clipPath id="computer-path-35">
                <path
                  id="Rectangle_4582"
                  fill="none"
                  d="M0 0h20.796v4.386H0z"
                  data-name="Rectangle 4582"
                ></path>
              </clipPath>
              <clipPath id="computer-path-37">
                <path
                  id="Path_37627"
                  fill="none"
                  d="M112.6 247.452a19.66 19.66 0 0 0-10.942 8.257 19.642 19.642 0 0 0-38.384 5.806 19.43 19.43 0 0 0 3.8 11.572 19.76 19.76 0 0 0-12.608 1.058 23.487 23.487 0 1 0-4.827 32.868 19.67 19.67 0 0 0 28.922-3.913 23.6 23.6 0 0 0 33.087 3.252 23.6 23.6 0 0 0 30.233-.352 20.02 20.02 0 0 0 31.182-4.179 23.6 23.6 0 0 0 34.406 4.257 23.6 23.6 0 0 0 32.223-1.639 16.161 16.161 0 1 0 4.831-25.117 23.616 23.616 0 0 0-28.567-13.639 9.29 9.29 0 0 0-18.57-.417 24 24 0 0 0-3.971-.533q.07-.81.071-1.631a19.642 19.642 0 0 0-37.8-7.426 20 20 0 0 0-2.69-.182 19 19 0 0 0-2.14.115 19.624 19.624 0 1 0-38.253-8.153"
                  data-name="Path 37627"
                  transform="translate(-12.04 -230.305)"
                ></path>
              </clipPath>
              <linearGradient
                id="linear-gradient2"
                x1="-0.036"
                x2="-0.033"
                y1="1.102"
                y2="1.102"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#42c5a0"></stop>
                <stop offset="1" stopColor="#0ebaa0"></stop>
              </linearGradient>
            </defs>
            <g
              id="Group_9966"
              data-name="Group 9966"
              transform="translate(-353.957 -5576.695)"
            >
              <g
                id="Component_26_1"
                data-name="Component 26 – 1"
                class="cooperateZeroTrash"
              >
                <g id="Group_9579" data-name="Group 9579">
                  <g id="Group_9578" clipPath="url(#computer-path)" data-name="Group 9578">
                    <path
                      id="Path_37103"
                      fill="#e1f2fc"
                      d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.865 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.893 57.067 20.421 87.973 2.8 123.631.3"
                      data-name="Path 37103"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_9581"
                  data-name="Group 9581"
                  transform="translate(9.224 176.381)"
                >
                  <g
                    id="Group_9580"
                    clipPath="url(#computer-path-2)"
                    data-name="Group 9580"
                  >
                    <path
                      id="Rectangle_4515"
                      fill="url(#linear-gradient2)"
                      d="M0 0h255.962v81.475H0z"
                      data-name="Rectangle 4515"
                    ></path>
                  </g>
                </g>
                <g id="Group_9583" data-name="Group 9583">
                  <g id="Group_9582" clipPath="url(#computer-path)" data-name="Group 9582">
                    <path
                      id="Path_37105"
                      fill="#75c8d1"
                      fillRule="evenodd"
                      d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                      data-name="Path 37105"
                      transform="translate(-4.177 -75.043)"
                    ></path>
                    <path
                      id="Path_37106"
                      fill="#8bdc64"
                      d="M192.778 148.538a5.055 5.055 0 1 0 5.055-5.047 5.05 5.05 0 0 0-5.055 5.047"
                      data-name="Path 37106"
                      transform="translate(-44.924 -33.589)"
                    ></path>
                    <path
                      id="Path_37107"
                      fill="#22d3c5"
                      d="M197.864 122.461a5.04 5.04 0 0 1-5.047-5.039V98.939a25.05 25.05 0 0 1 40.626-19.574 5.043 5.043 0 1 1-6.286 7.887 14.8 14.8 0 0 0-9.3-3.24 14.954 14.954 0 0 0-14.948 14.927v18.483a5.044 5.044 0 0 1-5.047 5.039"
                      data-name="Path 37107"
                      transform="translate(-44.933 -17.307)"
                    ></path>
                    <path
                      id="Path_37108"
                      fill="#8bdc64"
                      d="M239.324 116.26a5.043 5.043 0 0 1 5.048 5.039v18.484a25.05 25.05 0 0 1-40.628 19.572 5.043 5.043 0 0 1 6.287-7.886 14.8 14.8 0 0 0 9.3 3.24 14.957 14.957 0 0 0 14.95-14.926V121.3a5.04 5.04 0 0 1 5.045-5.039"
                      data-name="Path 37108"
                      transform="translate(-47.036 -27.215)"
                    ></path>
                    <path
                      id="Path_37109"
                      fill="#22d3c5"
                      d="M244.135 101.858a5.054 5.054 0 1 0 5.053-5.047 5.05 5.05 0 0 0-5.053 5.047"
                      data-name="Path 37109"
                      transform="translate(-56.892 -22.662)"
                    ></path>
                    <path
                      id="Path_37110"
                      fill="#22d3c5"
                      d="M100.164 100.584h-7.13a1.924 1.924 0 1 1 0-3.846h11.727a1.935 1.935 0 0 1 2.026 2.159 2.58 2.58 0 0 1-.776 1.653l-9.125 9.991H105a1.925 1.925 0 1 1 0 3.847H92.426a1.98 1.98 0 0 1-2.2-1.925 2.53 2.53 0 0 1 .64-1.788Z"
                      data-name="Path 37110"
                      transform="translate(-21.027 -22.645)"
                    ></path>
                    <path
                      id="Path_37111"
                      fill="#22d3c5"
                      d="M127.7 103.521a4.22 4.22 0 0 0-4.157-3.914c-2.467 0-3.953 1.517-4.494 3.914Zm-8.651 2.835a4.254 4.254 0 0 0 4.562 4.489c3.718 0 3.718-2.429 5.713-2.429a2.036 2.036 0 0 1 2.027 1.922c0 2.97-4.767 4.353-7.74 4.353-6.895 0-9.5-4.655-9.5-8.94 0-5.74 3.483-9.587 9.329-9.587 5.679 0 8.924 4.016 8.924 8.067 0 1.687-.508 2.125-2.164 2.125Z"
                      data-name="Path 37111"
                      transform="translate(-26.591 -22.511)"
                    ></path>
                    <path
                      id="Path_37112"
                      fill="#22d3c5"
                      d="M141.516 98.46a2.232 2.232 0 1 1 4.463 0v1.889h.067c.574-2.058 1.689-4.183 4.088-4.183a2.49 2.49 0 0 1 2.705 2.4 2.254 2.254 0 0 1-2.434 2.463h-.878c-1.993 0-3.074 1.383-3.074 5.466v5.739a2.468 2.468 0 0 1-4.936 0Z"
                      data-name="Path 37112"
                      transform="translate(-32.978 -22.511)"
                    ></path>
                    <path
                      id="Path_37113"
                      fill="#22d3c5"
                      d="M165.843 111.047c2.94 0 4.191-2.632 4.191-5.636 0-3.205-1.318-5.6-4.191-5.6s-4.189 2.4-4.189 5.6c0 3 1.249 5.636 4.189 5.636m0-14.883c5.949 0 9.126 4.05 9.126 9.247 0 4.927-2.4 9.28-9.126 9.28s-9.125-4.353-9.125-9.28c0-5.2 3.177-9.247 9.125-9.247"
                      data-name="Path 37113"
                      transform="translate(-36.521 -22.511)"
                    ></path>
                    <path
                      id="Path_37114"
                      fill="#8bdc64"
                      d="M100.164 137.811h-7.13a1.925 1.925 0 1 1 0-3.848h11.727a1.936 1.936 0 0 1 2.026 2.159 2.58 2.58 0 0 1-.776 1.655l-9.125 9.991H105a1.926 1.926 0 1 1 0 3.849H92.426a1.98 1.98 0 0 1-2.2-1.925 2.54 2.54 0 0 1 .64-1.789Z"
                      data-name="Path 37114"
                      transform="translate(-21.027 -31.359)"
                    ></path>
                    <path
                      id="Path_37115"
                      fill="#8bdc64"
                      d="M127.7 140.749a4.22 4.22 0 0 0-4.157-3.915c-2.467 0-3.953 1.52-4.494 3.915Zm-8.651 2.835a4.255 4.255 0 0 0 4.562 4.489c3.718 0 3.718-2.431 5.713-2.431a2.036 2.036 0 0 1 2.027 1.923c0 2.972-4.767 4.356-7.74 4.356-6.895 0-9.5-4.658-9.5-8.944 0-5.737 3.483-9.587 9.329-9.587 5.679 0 8.924 4.018 8.924 8.069 0 1.687-.508 2.125-2.164 2.125Z"
                      data-name="Path 37115"
                      transform="translate(-26.591 -31.225)"
                    ></path>
                    <path
                      id="Path_37116"
                      fill="#8bdc64"
                      d="M141.516 135.685a2.232 2.232 0 1 1 4.463 0v1.892h.067c.574-2.06 1.689-4.187 4.088-4.187a2.49 2.49 0 0 1 2.705 2.4 2.255 2.255 0 0 1-2.434 2.467h-.878c-1.993 0-3.074 1.383-3.074 5.466v5.737a2.468 2.468 0 0 1-4.936 0Z"
                      data-name="Path 37116"
                      transform="translate(-32.978 -31.225)"
                    ></path>
                    <path
                      id="Path_37117"
                      fill="#8bdc64"
                      d="M165.843 148.276c2.94 0 4.191-2.633 4.191-5.636 0-3.2-1.318-5.6-4.191-5.6s-4.189 2.4-4.189 5.6c0 3 1.249 5.636 4.189 5.636m0-14.886c5.949 0 9.126 4.053 9.126 9.249 0 4.927-2.4 9.281-9.126 9.281s-9.125-4.354-9.125-9.281c0-5.2 3.177-9.249 9.125-9.249"
                      data-name="Path 37117"
                      transform="translate(-36.521 -31.225)"
                    ></path>
                    <path
                      id="Rectangle_4516"
                      fill="#fff"
                      d="M0 0h122.443v81.395H0z"
                      data-name="Rectangle 4516"
                      transform="translate(73.046 155.778)"
                    ></path>
                    <path
                      id="Rectangle_4517"
                      fill="#22d3c5"
                      d="M0 0h143.776v5.897H0z"
                      data-name="Rectangle 4517"
                      transform="translate(62.379 152.83)"
                    ></path>
                    <path
                      id="Rectangle_4518"
                      fill="#22d3c5"
                      d="M0 0h78.12v53.089H0z"
                      data-name="Rectangle 4518"
                      transform="translate(73.046 199.367)"
                    ></path>
                    <path
                      id="Rectangle_4519"
                      fill="#80a5b7"
                      d="M0 0h18.738v53.089H0z"
                      data-name="Rectangle 4519"
                      transform="translate(131.26 199.367)"
                    ></path>
                    <path
                      id="Path_37118"
                      fill="#fff"
                      d="m181.741 279.98-1.149-.539-2.625-1.231 1.167-1.984 1.914.217.125-.882-2.6-.294-1.489 2.531-2.707-1.27-.97-.455a.27.27 0 0 0-.34.094l-.351.6a.213.213 0 0 0 .105.3l.062.028-4.287 8.331a.807.807 0 0 0 .49 1.051l5.331 2.5a1.01 1.01 0 0 0 1.247-.236l5.247-7.88.241.113a.27.27 0 0 0 .339-.094l.352-.6a.214.214 0 0 0-.106-.3"
                      data-name="Path 37118"
                      transform="translate(-39.274 -64.436)"
                    ></path>
                    <path
                      id="Rectangle_4520"
                      fill="#abdbe1"
                      d="M0 0h4.007v53.089H0z"
                      data-name="Rectangle 4520"
                      transform="translate(127.254 199.367)"
                    ></path>
                    <path
                      id="Rectangle_4521"
                      fill="#80a5b7"
                      d="M0 0h18.738v53.089H0z"
                      data-name="Rectangle 4521"
                      transform="translate(154.005 199.367)"
                    ></path>
                    <path
                      id="Rectangle_4522"
                      fill="#abdbe1"
                      d="M0 0h4.007v53.089H0z"
                      data-name="Rectangle 4522"
                      transform="translate(149.999 199.367)"
                    ></path>
                    <path
                      id="Path_37119"
                      fill="#fff"
                      d="m191.706 301.737-.329-1.33-1.309-5.333-.314-1.272a1.6 1.6 0 0 0-.09-.363 1 1 0 0 0-.174-.132l-.513-.378-1.633-1.229c-.059-.049-.051-.047-.054-.12h-.028l.247-.048.024-.015h.012a.22.22 0 0 0 .187-.26l-.16-.65a.247.247 0 0 0-.292-.167l-4.834.945a.22.22 0 0 0-.187.261l.16.65a.247.247 0 0 0 .291.167l.43-.084.028.006c.031.068.038.062.007.129l-.908 1.726-.289.535a1 1 0 0 0-.1.185 1.6 1.6 0 0 0 .088.364l.31 1.273 1.305 5.333.324 1.332a3.8 3.8 0 0 0 .184.687 1.3 1.3 0 0 0 .686.594l.206.061a1 1 0 0 1 .074.026 4.3 4.3 0 0 0 1.249-.18l1.887-.374 1.889-.365a4.2 4.2 0 0 0 1.219-.3 1 1 0 0 1 .056-.051l.158-.132a1.14 1.14 0 0 0 .345-.8 3.8 3.8 0 0 0-.155-.692"
                      data-name="Path 37119"
                      transform="translate(-42.385 -67.987)"
                    ></path>
                    <path
                      id="Rectangle_4523"
                      fill="#80a5b7"
                      d="M0 0h18.738v53.089H0z"
                      data-name="Rectangle 4523"
                      transform="translate(176.75 199.367)"
                    ></path>
                    <path
                      id="Path_37120"
                      fill="#fff"
                      d="m235.182 276.015-1.172-1.779-1.01-2.02-1.873 1.072-1.791.955-1.644 1.175-1.951.758 1.035 1.882 1.556 1.575 1 1.756 1.727-.883 1.821-.906 1.943-.724 1.764-1.124Z"
                      data-name="Path 37120"
                      transform="translate(-52.606 -63.722)"
                    ></path>
                    <path
                      id="Rectangle_4524"
                      fill="#abdbe1"
                      d="M0 0h4.007v53.089H0z"
                      data-name="Rectangle 4524"
                      transform="translate(172.744 199.367)"
                    ></path>
                    <path
                      id="Rectangle_4525"
                      fill="#22d3c5"
                      d="M0 0h22.745v21.815H0z"
                      data-name="Rectangle 4525"
                      transform="translate(127.254 230.641)"
                    ></path>
                    <path
                      id="Path_37121"
                      fill="#fff"
                      d="M217.34 288.284a2.9 2.9 0 0 0 .018-1.069 12.7 12.7 0 0 0-1.017-3.44 9.4 9.4 0 0 0-1.226-2.13 4.5 4.5 0 0 0-.492-.489l-.325-.145c-.465.009-.68.174-.767.591a3.7 3.7 0 0 0 0 1.188.14.14 0 0 0 .081.1c.176.108.35.22.528.325.087.051.118.084 0 .132s-.223.107-.34.15c-.1.036-.124.083-.1.178.117.42.235.839.379 1.252.016.046.029.093.052.169l-.208-.093a9.7 9.7 0 0 0-2.893-.859 4.6 4.6 0 0 0-1.034-.015 1.72 1.72 0 0 0-1.238.587l-.8 1.428-.28.5-.427.767-.3.529-.943 1.692-.294.529-.4.714-.3.529-.176.317c.026.063-.028.112-.038.168a1.39 1.39 0 0 0 .288 1.064 6 6 0 0 0 2.156 1.778 10.7 10.7 0 0 0 2.411.977 6.1 6.1 0 0 0 2.19.245 1.55 1.55 0 0 0 1.311-.7l.4-.724a1 1 0 0 0 .169-.3l2.512-4.5.431-.78a.22.22 0 0 1 .166-.119.64.64 0 0 0 .481-.545"
                      data-name="Path 37121"
                      transform="translate(-47.726 -65.781)"
                    ></path>
                    <path
                      id="Path_37122"
                      fill="#80a5b7"
                      d="M209.3 288.773c-.1-.125-.146-.205-.158-.224l.384-.191c.019.028 1.851 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                      data-name="Path 37122"
                      transform="translate(-48.738 -67.501)"
                    ></path>
                    <path
                      id="Path_37123"
                      fill="#80a5b7"
                      d="M208.114 290.788c-.1-.125-.146-.205-.158-.224l.385-.191c.017.029 1.85 2.876 6.514 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                      data-name="Path 37123"
                      transform="translate(-48.461 -67.972)"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_9588"
                  data-name="Group 9588"
                  transform="translate(159.5 222.395)"
                >
                  <g
                    id="Group_9587"
                    clipPath="url(#computer-path-4)"
                    data-name="Group 9587"
                  >
                    <g id="Group_9586" data-name="Group 9586">
                      <g id="Group_9585" data-name="Group 9585">
                        <g
                          id="Group_9584"
                          clipPath="url(#computer-path-5)"
                          data-name="Group 9584"
                        >
                          <image
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAIAAAAStyFtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAE6ADAAQAAAABAAAACwAAAABTN67fAAAAkElEQVQoFWPYf+n2/Rdv/5MOmBVtvC7ef3rw8h0GBgYFcSEgSSRggasDagYieTEhB10VYoxA6IQY8fDVu4V7TwHZ9roqQCPg5mIy0HXCVRB0AiMwhB68fAe0Cq4HKwPTCYzAQAUqBWp+8OodJJyw6oQIIocCVCdc9YHLd4h0ArpOiBHEOAG7TmKcQEAnHicAALCwkPbClyq9AAAAAElFTkSuQmCC"
                            id="Rectangle_4527"
                            width="6.986"
                            height="4.045"
                            data-name="Rectangle 4527"
                            transform="translate(-.09 -.365)"
                          ></image>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Group_9590" data-name="Group 9590">
                  <g id="Group_9589" clipPath="url(#computer-path)" data-name="Group 9589">
                    <path
                      id="Path_37125"
                      fill="#80a5b7"
                      d="M206.975 292.863c-.1-.125-.146-.205-.158-.224l.384-.191c.018.03 1.85 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                      data-name="Path 37125"
                      transform="translate(-48.196 -68.458)"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_9595"
                  data-name="Group 9595"
                  transform="translate(158.626 223.984)"
                >
                  <g
                    id="Group_9594"
                    clipPath="url(#computer-path-7)"
                    data-name="Group 9594"
                  >
                    <g id="Group_9593" data-name="Group 9593">
                      <g id="Group_9592" data-name="Group 9592">
                        <g
                          id="Group_9591"
                          clipPath="url(#computer-path-5)"
                          data-name="Group 9591"
                        >
                          <image
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAACwAAAABzpdKUAAAAk0lEQVQoFWO8/+Ltwr2n5MWEFMSFHHRVGEgBjPsv3T54+Q5ci72uigLYILgIHgYLmhzQoIMMDEQ6BF0zxKyHr94BEdAg/A5hhPgZzX40Li6HMP7//x+o9MHLdwcu3wHahqYNjYvmEKhmuCKgEcjhBxdHYwBNAUYNumaIIiIdgl0z3B78DiGgGb9DiNKM7BA4G8gAAJQXV1hZTnEPAAAAAElFTkSuQmCC"
                            id="Rectangle_4530"
                            width="7.354"
                            height="4.045"
                            data-name="Rectangle 4530"
                            transform="translate(-.319 -.116)"
                          ></image>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Group_9597" data-name="Group 9597">
                  <g id="Group_9596" clipPath="url(#computer-path)" data-name="Group 9596">
                    <path
                      id="Path_37127"
                      fill="#80a5b7"
                      d="M205.932 295.064c-.1-.125-.146-.205-.158-.224l.384-.191c.018.029 1.851 2.876 6.515 3.232l-.038.391a9.05 9.05 0 0 1-6.7-3.208"
                      data-name="Path 37127"
                      transform="translate(-47.953 -68.973)"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_9602"
                  data-name="Group 9602"
                  transform="translate(157.826 225.671)"
                >
                  <g
                    id="Group_9601"
                    clipPath="url(#computer-path-10)"
                    data-name="Group 9601"
                  >
                    <g id="Group_9600" data-name="Group 9600">
                      <g id="Group_9599" data-name="Group 9599">
                        <g
                          id="Group_9598"
                          clipPath="url(#computer-path-5)"
                          data-name="Group 9598"
                        >
                          <image
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAACwAAAABzpdKUAAAAnElEQVQoFWO4/+Lt/ku3/5MFGIE6D16+w8DAIC8mpCAu5KCrAmQTCVjg6h6+egdEQIPsdVUUwAbBpXAxEJrhKoD6DxLnECyaIaYQ4xBGYIA9ALsWbjNWBtYQYQQGM0T1gct3HrwEeRurZrggcoggNEOkgfqJdAgwXtA1w20AmgJ0Cx6HAJ2AUzPcFKARkIQAF4EwiNIMUYrpEKBmADAWl0WMydGUAAAAAElFTkSuQmCC"
                            id="Rectangle_4533"
                            width="7.354"
                            height="4.045"
                            data-name="Rectangle 4533"
                            transform="translate(-.256 -.332)"
                          ></image>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Group_9604" data-name="Group 9604">
                  <g id="Group_9603" clipPath="url(#computer-path)" data-name="Group 9603">
                    <path
                      id="Path_37129"
                      fill="#80a5b7"
                      d="M210.521 286.807c-.1-.125-.146-.2-.157-.223l.384-.191c.018.028 1.8 2.8 6.33 3.216a7.6 7.6 0 0 1-1.785-2.86l.424-.1a7.3 7.3 0 0 0 2.055 3.038.18.18 0 0 1 .053.217.22.22 0 0 1-.207.123h-.378a9.07 9.07 0 0 1-6.719-3.21"
                      data-name="Path 37129"
                      transform="translate(-49.023 -67.041)"
                    ></path>
                    <path
                      id="Rectangle_4535"
                      fill="#22d3c5"
                      d="M0 0h22.745v21.815H0z"
                      data-name="Rectangle 4535"
                      transform="translate(149.999 230.641)"
                    ></path>
                    <path
                      id="Path_37130"
                      fill="#fff"
                      d="m246.87 291.608-.745-2.9-.377-2.986-1.148-2.922-3.615 1.155-3.579.813-3.924.486 1.009 3.045.842 2.88 1.285 2.778.433 3.012 3.694-.578 3.4-1.43 3.466-.594Zm-11.32-4.614-.232-.487 1.058-.368 1.092-.073 1.074-.136.955-.551 1.055-.2 1.073-.142 1.142.093.879-.2.413.4-1.217.061-1.051.216-1.091.078-.949.571-1.1.046-1.015.345-1.1.053Zm.468 2.073-.232-.487 1.058-.368 1.092-.073 1.074-.139.955-.552 1.055-.2 1.074-.142 1.141.093.879-.2.413.4-1.216.06-1.051.216-1.091.078-.949.571-1.1.046-1.015.345-1.1.053Zm.936 1.921-.232-.488 1.058-.368 1.093-.074 1.074-.136.955-.552 1.055-.2 1.074-.142 1.141.093.879-.2.413.4-1.216.061-1.052.216-1.091.079-.949.571-1.1.045-1.015.345-1.1.053Zm8.218 1.432-1.052.216-1.091.079-.95.571-1.1.045-1.015.345-1.1.053-.984.307-.232-.488 1.057-.368 1.093-.074 1.074-.136.955-.551 1.055-.2 1.073-.142 1.142.093.878-.2.413.4Z"
                      data-name="Path 37130"
                      transform="translate(-54.411 -66.201)"
                    ></path>
                    <path
                      id="Rectangle_4536"
                      fill="#22d3c5"
                      d="M0 0h22.745v21.815H0z"
                      data-name="Rectangle 4536"
                      transform="translate(172.744 230.641)"
                    ></path>
                    <path
                      id="Path_37131"
                      fill="#fff"
                      d="M112.508 297.706h-8.5a2.747 2.747 0 0 1-2.749-2.745V271.61c0-1.516 1.23-6.543 2.749-6.543h8.5c1.518 0 2.749 5.027 2.749 6.543v23.351a2.747 2.747 0 0 1-2.749 2.745"
                      data-name="Path 37131"
                      transform="translate(-23.598 -62.049)"
                    ></path>
                    <path
                      id="Path_37132"
                      fill="#fff"
                      d="M112.438 297.865h-8.5a2.98 2.98 0 0 1-2.978-2.974V271.54c0-1.355 1.154-6.772 2.978-6.772h8.5c1.825 0 2.978 5.417 2.978 6.772v23.351a2.98 2.98 0 0 1-2.978 2.974m-8.5-32.639c-1.239 0-2.519 4.689-2.519 6.314v23.351a2.52 2.52 0 0 0 2.519 2.516h8.5a2.52 2.52 0 0 0 2.519-2.516V271.54c0-1.625-1.281-6.314-2.519-6.314Z"
                      data-name="Path 37132"
                      transform="translate(-23.528 -61.979)"
                    ></path>
                    <path
                      id="Rectangle_4537"
                      fill="#299153"
                      d="M0 0h11.94v23.662H0z"
                      data-name="Rectangle 4537"
                      transform="translate(79.689 209.062)"
                    ></path>
                    <path
                      id="Path_37133"
                      fill="#61b308"
                      d="M112.015 257.7H106.4a1.06 1.06 0 0 0-1.063 1.061v4.583h7.735v-4.583a1.06 1.06 0 0 0-1.061-1.061"
                      data-name="Path 37133"
                      transform="translate(-24.549 -60.324)"
                    ></path>
                    <path
                      id="Rectangle_4538"
                      fill="#161b49"
                      d="M0 0h4.604v3.094H0z"
                      data-name="Rectangle 4538"
                      transform="translate(82.36 194.281)"
                    ></path>
                    <path
                      id="Path_37134"
                      fill="#161b49"
                      d="M111.918 256.912h-4.6a.23.23 0 0 1-.229-.229v-3.093a.23.23 0 0 1 .229-.229h4.6a.23.23 0 0 1 .229.229v3.093a.23.23 0 0 1-.229.229m-4.375-.458h4.145v-2.636h-4.145Z"
                      data-name="Path 37134"
                      transform="translate(-24.955 -59.308)"
                    ></path>
                    <path
                      id="Path_37135"
                      fill="#61b308"
                      d="M116.347 255.148a.9.9 0 0 1-1.261.115l-1.828-1.52a2.73 2.73 0 0 0-1.748-.631h-4.91a.894.894 0 1 1 0-1.788h5.253a3.6 3.6 0 0 1 2.3.829l2.087 1.735a.893.893 0 0 1 .115 1.259"
                      data-name="Path 37135"
                      transform="translate(-24.632 -58.832)"
                    ></path>
                    <path
                      id="Rectangle_4539"
                      fill="#299153"
                      d="M0 0h1.995v6.043H0z"
                      data-name="Rectangle 4539"
                      transform="translate(83.664 203.018)"
                    ></path>
                    <path
                      id="Path_37136"
                      fill="#fff"
                      d="M86.649 267.237v-2.516H79.92v2.516a2.39 2.39 0 0 1-1.3 2.114 7.02 7.02 0 0 0-3.784 6.23v12.5a1.563 1.563 0 0 0 1.565 1.562h13.768a1.563 1.563 0 0 0 1.565-1.562v-12.5a7.02 7.02 0 0 0-3.784-6.23 2.39 2.39 0 0 1-1.3-2.114"
                      data-name="Path 37136"
                      transform="translate(-17.439 -61.968)"
                    ></path>
                    <path
                      id="Path_37137"
                      fill="#fff"
                      d="M90.1 289.8H76.33a1.794 1.794 0 0 1-1.794-1.791v-12.5a7.24 7.24 0 0 1 3.907-6.433 2.16 2.16 0 0 0 1.178-1.911v-2.516a.23.23 0 0 1 .229-.229h6.729a.23.23 0 0 1 .229.229v2.516a2.16 2.16 0 0 0 1.178 1.911 7.24 7.24 0 0 1 3.907 6.433v12.5A1.794 1.794 0 0 1 90.1 289.8m-10.02-24.92v2.287a2.62 2.62 0 0 1-1.424 2.317 6.78 6.78 0 0 0-3.661 6.027v12.5a1.336 1.336 0 0 0 1.335 1.333H90.1a1.336 1.336 0 0 0 1.335-1.333v-12.5a6.78 6.78 0 0 0-3.661-6.027 2.61 2.61 0 0 1-1.424-2.317v-2.287Z"
                      data-name="Path 37137"
                      transform="translate(-17.37 -61.898)"
                    ></path>
                    <path
                      id="Path_37138"
                      fill="#61b308"
                      d="M87.6 264.291h-6.257a1.407 1.407 0 0 1-1.408-1.406h9.075a1.407 1.407 0 0 1-1.408 1.406"
                      data-name="Path 37138"
                      transform="translate(-18.628 -61.538)"
                    ></path>
                    <path
                      id="Path_37139"
                      fill="#9ee073"
                      d="M89.01 261.548h-9.075V258.7a1.524 1.524 0 0 1 1.525-1.523h6.024a1.524 1.524 0 0 1 1.526 1.523Z"
                      data-name="Path 37139"
                      transform="translate(-18.628 -60.201)"
                    ></path>
                    <path
                      id="Rectangle_4540"
                      fill="#9ee073"
                      d="M0 0h12.478v13.536H0z"
                      data-name="Rectangle 4540"
                      transform="translate(59.606 212.363)"
                    ></path>
                    <path
                      id="Path_37140"
                      fill="#299153"
                      d="m120.561 303.4-1.866-.661a2.8 2.8 0 0 1-1.766-3.382l5.724-20.736a23.7 23.7 0 0 1 2.078-5.114l2.1-3.809 8.259 2.924-.775 4.277a23.7 23.7 0 0 1-1.611 5.279l-8.634 19.706a2.8 2.8 0 0 1-3.505 1.517"
                      data-name="Path 37140"
                      transform="translate(-27.225 -63.132)"
                    ></path>
                    <path
                      id="Rectangle_4541"
                      fill="#161b49"
                      d="M0 0h3.546v8.762H0z"
                      data-name="Rectangle 4541"
                      transform="rotate(-70.5 195.871 32.796)"
                    ></path>
                    <path
                      id="Path_37141"
                      fill="#161b49"
                      d="M138.054 271.756a.2.2 0 0 1-.076-.013l-8.259-2.923a.23.23 0 0 1-.13-.118.22.22 0 0 1-.009-.175l1.185-3.339a.23.23 0 0 1 .117-.13.23.23 0 0 1 .176-.008l8.259 2.923a.23.23 0 0 1 .139.293l-1.186 3.334a.23.23 0 0 1-.216.152m-7.966-3.292 7.827 2.771 1.032-2.907-7.826-2.771Z"
                      data-name="Path 37141"
                      transform="translate(-30.194 -62.041)"
                    ></path>
                    <path
                      id="Path_37142"
                      fill="#161b49"
                      d="m139.356 267.415-8.021-2.84a1.133 1.133 0 0 1-.69-1.448l.165-.464a1.136 1.136 0 0 1 1.45-.69l8.02 2.84a1.133 1.133 0 0 1 .691 1.448l-.165.464a1.136 1.136 0 0 1-1.45.69"
                      data-name="Path 37142"
                      transform="translate(-30.43 -61.309)"
                    ></path>
                    <path
                      id="Path_37143"
                      fill="#fff"
                      d="M65.626 293.075h-7.02a1.92 1.92 0 0 1-1.92-1.917v-4.536h10.859v4.536a1.92 1.92 0 0 1-1.92 1.917"
                      data-name="Path 37143"
                      transform="translate(-13.21 -67.094)"
                    ></path>
                    <path
                      id="Path_37144"
                      fill="#161b49"
                      d="M65.557 293.234h-7.02a2.15 2.15 0 0 1-2.149-2.146v-4.537a.23.23 0 0 1 .229-.229h10.86a.23.23 0 0 1 .229.229v4.537a2.15 2.15 0 0 1-2.149 2.146m-8.71-6.454v4.307a1.69 1.69 0 0 0 1.69 1.688h7.02a1.69 1.69 0 0 0 1.69-1.688v-4.307Z"
                      data-name="Path 37144"
                      transform="translate(-13.14 -67.024)"
                    ></path>
                    <path
                      id="Path_37145"
                      fill="#61b308"
                      d="M68.109 290.115a1.643 1.643 0 1 1-1.644-1.641 1.643 1.643 0 0 1 1.644 1.641"
                      data-name="Path 37145"
                      transform="translate(-15.106 -67.528)"
                    ></path>
                    <path
                      id="Path_37146"
                      fill="#161b49"
                      d="M66.4 291.915a1.87 1.87 0 1 1 1.873-1.87 1.874 1.874 0 0 1-1.873 1.87m0-3.282a1.412 1.412 0 1 0 1.414 1.412 1.415 1.415 0 0 0-1.414-1.412"
                      data-name="Path 37146"
                      transform="translate(-15.036 -67.458)"
                    ></path>
                    <path
                      id="Path_37147"
                      fill="#299153"
                      d="m54.2 256.074 1.962 23.4h10.804l1.961-23.4Z"
                      data-name="Path 37147"
                      transform="translate(-12.63 -59.943)"
                    ></path>
                    <path
                      id="Path_37148"
                      fill="#fff"
                      d="M54.364 258.07h14.4l.167-2H54.2Z"
                      data-name="Path 37148"
                      transform="translate(-12.63 -59.943)"
                    ></path>
                    <path
                      id="Path_37149"
                      fill="#fff"
                      d="M69.763 266.9h-8.242a.75.75 0 0 0-.752.751v6.437a.75.75 0 0 0 .752.751H69.1Z"
                      data-name="Path 37149"
                      transform="translate(-14.161 -62.478)"
                    ></path>
                    <path
                      id="Rectangle_4542"
                      fill="#61b308"
                      d="M0 0h31.202v26.56H0z"
                      data-name="Rectangle 4542"
                      transform="translate(41.454 225.896)"
                    ></path>
                    <path
                      id="Rectangle_4543"
                      fill="#9ee073"
                      d="M0 0h33.46v26.56H0z"
                      data-name="Rectangle 4543"
                      transform="translate(72.656 225.896)"
                    ></path>
                    <path
                      id="Path_37150"
                      fill="#fff"
                      d="M122.621 318.61H106.4a1.893 1.893 0 0 1-1.894-1.892v-14.461a1.893 1.893 0 0 1 1.894-1.892h16.226a1.893 1.893 0 0 1 1.894 1.892v14.461a1.893 1.893 0 0 1-1.894 1.892"
                      data-name="Path 37150"
                      transform="translate(-24.353 -70.311)"
                    ></path>
                    <path
                      id="Path_37151"
                      fill="#54992b"
                      d="m83.079 291.851-6.175-10.1H44.727l7.15 10.1Z"
                      data-name="Path 37151"
                      transform="translate(-10.423 -65.955)"
                    ></path>
                    <path
                      id="Path_37152"
                      fill="#89c573"
                      d="M100.907 281.755h34.435l-7.15 10.1h-33.46Z"
                      data-name="Path 37152"
                      transform="translate(-22.076 -65.955)"
                    ></path>
                    <path
                      id="Path_37153"
                      fill="#61b308"
                      d="M122.563 310.9a1.5 1.5 0 0 0-.128-.64l-.006-.014-1.408-2.735a.23.23 0 0 0-.3-.1l-1.028.467 1.279-3.13a.23.23 0 0 0-.318-.29l-1.018.525-.964-1.229a1.5 1.5 0 0 0-.5-.417 1.6 1.6 0 0 0-.727-.175h-.122l-3.452.031a1.56 1.56 0 0 0-.723.188 1.5 1.5 0 0 0-.5.426l-2.009 2.755a.23.23 0 0 0 .051.32l1 .73-3.345.62a.229.229 0 0 0-.073.424l.992.572-.514 1.474a1.54 1.54 0 0 0 .166 1.353l.067.1 1.216 1.852.608.928.067.1a1.56 1.56 0 0 0 .548.506 1.5 1.5 0 0 0 .627.186h.009l3.059.11h.008a.23.23 0 0 0 .229-.216l.072-1.233 2.086 2.636a.229.229 0 0 0 .409-.133l.044-1.143 1.545-.233a1.55 1.55 0 0 0 1.121-.779l.061-.108.882-1.591.729-1.316.06-.108a1.55 1.55 0 0 0 .193-.721m-7.114 1.912a.24.24 0 0 0-.172-.069l-3.974.139a2.4 2.4 0 0 1-.338-.03 2.4 2.4 0 0 1 .107-.322l.77-1.817.932.537a.229.229 0 0 0 .331-.272l-1.061-3.11.788.574a.23.23 0 0 0 .135.044.2.2 0 0 0 .044 0 .23.23 0 0 0 .151-.1l2.3-3.663a2.4 2.4 0 0 1 .209-.268 2.4 2.4 0 0 1 .212.264l1.114 1.629-.956.492a.228.228 0 0 0 .05.425l3.214.794-1 .453a.23.23 0 0 0-.1.326l2.057 3.43a3 3 0 0 1 .128.306 2.5 2.5 0 0 1-.335.055l-1.969.167.041-1.074a.229.229 0 0 0-.4-.165l-2.273 2.4.057-.967a.23.23 0 0 0-.065-.173"
                      data-name="Path 37153"
                      transform="translate(-25.205 -70.966)"
                    ></path>
                    <path
                      id="Path_37154"
                      fill="#8bdc64"
                      d="M177.783 237.6a.984.984 0 1 0 .985-.983.984.984 0 0 0-.985.983"
                      data-name="Path 37154"
                      transform="translate(-41.43 -55.388)"
                    ></path>
                    <path
                      id="Path_37155"
                      fill="#22d3c5"
                      d="M178.773 232.519a.98.98 0 0 1-.983-.981v-3.6a4.879 4.879 0 0 1 7.913-3.813.982.982 0 0 1-1.224 1.536 2.88 2.88 0 0 0-1.812-.631 2.91 2.91 0 0 0-2.911 2.907v3.6a.983.983 0 0 1-.983.981"
                      data-name="Path 37155"
                      transform="translate(-41.432 -52.217)"
                    ></path>
                    <path
                      id="Path_37156"
                      fill="#8bdc64"
                      d="M186.849 231.311a.98.98 0 0 1 .983.981v3.6a4.879 4.879 0 0 1-7.913 3.813.982.982 0 0 1 1.224-1.536 2.88 2.88 0 0 0 1.811.631 2.913 2.913 0 0 0 2.912-2.907v-3.6a.98.98 0 0 1 .983-.981"
                      data-name="Path 37156"
                      transform="translate(-41.841 -54.147)"
                    ></path>
                    <path
                      id="Path_37157"
                      fill="#22d3c5"
                      d="M187.785 228.507a.984.984 0 1 0 .984-.983.984.984 0 0 0-.984.983"
                      data-name="Path 37157"
                      transform="translate(-43.761 -53.26)"
                    ></path>
                    <path
                      id="Path_37158"
                      fill="#22d3c5"
                      d="M159.745 228.258h-1.388a.375.375 0 1 1 0-.749h2.283a.377.377 0 0 1 .395.42.5.5 0 0 1-.151.322l-1.777 1.946h1.58a.375.375 0 1 1 0 .749h-2.449a.386.386 0 0 1-.428-.375.5.5 0 0 1 .125-.348Z"
                      data-name="Path 37158"
                      transform="translate(-36.776 -53.257)"
                    ></path>
                    <path
                      id="Path_37159"
                      fill="#22d3c5"
                      d="M165.108 228.83a.82.82 0 0 0-.81-.762.863.863 0 0 0-.875.762Zm-1.685.552a.83.83 0 0 0 .888.875c.725 0 .725-.473 1.113-.473a.4.4 0 0 1 .395.374c0 .578-.929.848-1.508.848a1.682 1.682 0 0 1-1.85-1.742 1.718 1.718 0 0 1 1.817-1.867 1.62 1.62 0 0 1 1.738 1.572c0 .329-.1.414-.421.414Z"
                      data-name="Path 37159"
                      transform="translate(-37.859 -53.231)"
                    ></path>
                    <path
                      id="Path_37160"
                      fill="#22d3c5"
                      d="M167.8 227.844a.435.435 0 1 1 .869 0v.368h.013c.112-.4.329-.815.8-.815a.485.485 0 0 1 .527.467.44.44 0 0 1-.474.479h-.171c-.388 0-.6.27-.6 1.065v1.118a.481.481 0 0 1-.961 0Z"
                      data-name="Path 37160"
                      transform="translate(-39.103 -53.231)"
                    ></path>
                    <path
                      id="Path_37161"
                      fill="#22d3c5"
                      d="M172.537 230.3c.572 0 .816-.513.816-1.1 0-.624-.256-1.091-.816-1.091s-.816.466-.816 1.091c0 .585.243 1.1.816 1.1m0-2.9a1.677 1.677 0 0 1 1.778 1.8 1.778 1.778 0 1 1-3.555 0 1.677 1.677 0 0 1 1.777-1.8"
                      data-name="Path 37161"
                      transform="translate(-39.793 -53.231)"
                    ></path>
                    <path
                      id="Path_37162"
                      fill="#8bdc64"
                      d="M159.745 235.509h-1.388a.375.375 0 1 1 0-.749h2.283a.377.377 0 0 1 .395.421.5.5 0 0 1-.151.322l-1.777 1.946h1.58a.375.375 0 1 1 0 .75h-2.449a.386.386 0 0 1-.428-.375.5.5 0 0 1 .125-.349Z"
                      data-name="Path 37162"
                      transform="translate(-36.776 -54.954)"
                    ></path>
                    <path
                      id="Path_37163"
                      fill="#8bdc64"
                      d="M165.108 236.081a.82.82 0 0 0-.81-.763.863.863 0 0 0-.875.763Zm-1.685.552a.83.83 0 0 0 .888.875c.725 0 .725-.474 1.113-.474a.4.4 0 0 1 .395.375c0 .579-.929.849-1.508.849a1.682 1.682 0 0 1-1.85-1.742 1.718 1.718 0 0 1 1.817-1.867 1.62 1.62 0 0 1 1.738 1.572c0 .329-.1.414-.421.414Z"
                      data-name="Path 37163"
                      transform="translate(-37.859 -54.928)"
                    ></path>
                    <path
                      id="Path_37164"
                      fill="#8bdc64"
                      d="M167.8 235.094a.435.435 0 1 1 .869 0v.368h.013c.112-.4.329-.816.8-.816a.485.485 0 0 1 .527.466.44.44 0 0 1-.474.481h-.171c-.388 0-.6.269-.6 1.065v1.117a.481.481 0 0 1-.961 0Z"
                      data-name="Path 37164"
                      transform="translate(-39.103 -54.928)"
                    ></path>
                    <path
                      id="Path_37165"
                      fill="#8bdc64"
                      d="M172.537 237.546c.572 0 .816-.512.816-1.1 0-.624-.256-1.091-.816-1.091s-.816.467-.816 1.091c0 .585.243 1.1.816 1.1m0-2.9a1.678 1.678 0 0 1 1.778 1.8 1.778 1.778 0 1 1-3.555 0 1.678 1.678 0 0 1 1.777-1.8"
                      data-name="Path 37165"
                      transform="translate(-39.793 -54.928)"
                    ></path>
                  </g>
                </g>
              </g>
              <text
                id="å_é_æ_å__23"
                fill="#252525"
                data-name="åé¡æå
_23"
                fontFamily="Noto Sans CJK TC"
                fontSize="30"
                transform="translate(491.088 6029.67)"
              >
                <tspan x="-60" y="0">
                  企業夥伴
                </tspan>
              </text>
              <text
                id="å_é_æ_å__23-2"
                fill="#252525"
                data-name="åé¡æå
_23"
                fontFamily="Noto Sans CJK TC"
                fontSize="30"
                transform="translate(957.718 6029.67)"
              >
                <tspan x="-151.37" y="0">
                  zero zero
                </tspan>
                <tspan y="0" fontFamily="Noto Sans CJK TC">
                  合作回收據點
                </tspan>
                <tspan y="0">​</tspan>
              </text>
              <text
                id="å_é_æ_å__23-3"
                fill="#252525"
                data-name="åé¡æå
_23"
                fontFamily="SegoeUI, Segoe UI"
                fontSize="30"
                transform="translate(1426.63 6029.67)"
              >
                <tspan x="-51.37" y="0" fontFamily="Noto Sans CJK TC">
                  拾荒者
                </tspan>

              </text>
              <g
                id="Group_9611"
                data-name="Group 9611"
                transform="rotate(180 394.985 2904.666)"
              >
                <g
                  id="Group_9608"
                  data-name="Group 9608"
                  transform="rotate(180 63.04 9.8)"
                >
                  <path
                    id="Line_503"
                    fill="none"
                    stroke="#24d1c2"
                    strokeLinejoin="round"
                    strokeWidth="10"
                    d="M0 0h101.937"
                    data-name="Line 503"
                  ></path>
                </g>
                <path
                  id="Path_37166"
                  fill="#24d1c2"
                  d="M0 0v39.2l37.193-19.6Z"
                  data-name="Path 37166"
                  transform="rotate(180 18.596 19.601)"
                ></path>
              </g>
              <g
                id="Group_9957"
                data-name="Group 9957"
                transform="translate(663.892 5865.989)"
              >
                <g
                  id="Group_9608-2"
                  data-name="Group 9608"
                  transform="rotate(180 63.04 9.8)"
                >
                  <path
                    id="Line_503-2"
                    fill="none"
                    stroke="#24d1c2"
                    strokeLinejoin="round"
                    strokeWidth="10"
                    d="M0 0h101.937"
                    data-name="Line 503"
                  ></path>
                </g>
                <path
                  id="Path_37166-2"
                  fill="#24d1c2"
                  d="M0 0v39.2l37.193-19.6Z"
                  data-name="Path 37166"
                  transform="rotate(180 18.596 19.601)"
                ></path>
              </g>
              <g
                id="Group_9614"
                data-name="Group 9614"
                transform="rotate(90 -2455.826 3183.086)"
              >
                <path
                  id="Line_503-3"
                  fill="none"
                  stroke="#24d1c2"
                  strokeDasharray="0 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M0 0h146.624"
                  data-name="Line 503"
                ></path>
              </g>
              <g
                id="Group_9618"
                data-name="Group 9618"
                transform="rotate(90 -2579.165 3306.425)"
              >
                <path
                  id="Line_503-4"
                  fill="none"
                  stroke="#24d1c2"
                  strokeDasharray="0 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M0 0h218.01"
                  data-name="Line 503"
                ></path>
              </g>
              <g
                id="Group_9620"
                data-name="Group 9620"
                transform="rotate(90 -2348.73 3536.86)"
              >
                <path
                  id="Line_503-5"
                  fill="none"
                  stroke="#8bdc65"
                  strokeDasharray="0 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M0 0h187.478"
                  data-name="Line 503"
                ></path>
              </g>
              <g
                id="Group_9616"
                data-name="Group 9616"
                transform="rotate(90 -2200.619 3388.75)"
              >
                <path
                  id="Line_503-6"
                  fill="none"
                  stroke="#8bdc65"
                  strokeDasharray="0 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M0 0h196.167"
                  data-name="Line 503"
                ></path>
              </g>
              <rect
                id="Rectangle_4552"
                width="362"
                height="106"
                fill="#6bc441"
                data-name="Rectangle 4552"
                rx="10"
                transform="translate(1046.017  6066.741)"
              ></rect>
              <text
                id="回饋現金與點數_點數兌換即期品_"
                fill="#fff"
                data-name="回饋現金與點數​ 點數兌換即期品​"
                fontFamily="Noto Sans CJK TC"
                fontSize="26"
                transform="translate(1045.017 6116.741)"
              >
                <tspan x="11" y="0">
                  ▸ 累積點數兌換生活必需品
                </tspan>
                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
                <tspan x="11" y="36">
                  ▸ 加碼補貼回收金
                </tspan>
                <tspan y="36" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <rect
                id="Rectangle_4550"
                width="352"
                height="62"
                fill="#2abcaf"
                data-name="Rectangle 4550"
                rx="10"
                transform="translate(585.544 5576.695)"
              ></rect>
              <rect
                id="Rectangle_4555"
                width="362"
                height="106"
                fill="#2abcaf"
                data-name="Rectangle 4555"
                rx="10"
                transform="translate(585.544 6073.067)"
              ></rect>
              <text
                id="提供即期品_"
                fill="#fff"
                data-name="提供即期品​"
                fontFamily="Noto Sans CJK TC"
                fontSize="26"
                transform="translate(588.131 5618.064)"
              >
                <tspan x="20" y="0">
                  贊助經費或​提供生活物資
                </tspan>
                <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                </tspan>
              </text>
              <text
                id="定期回饋_ESG相關數據_"
                fill="#fff"
                data-name="定期回饋 ESG相關數據​"
                fontFamily="Noto Sans CJK TC"
                fontSize="26"
                transform="translate(725.278 6116.741)"
              >
                <tspan x="-80" y="20">
                  定期回饋ESG數據
                </tspan>
                <tspan fontFamily="SegoeUI, Segoe UI">

                  <tspan y="36">​</tspan>
                </tspan>
              </text>
              <g
                id="Component_27_1"
                data-name="Component 27 – 1"
                class="CooperateZeroMember"
              >
                <g id="Group_9682" clipPath="url(#computer-path)" data-name="Group 9682">
                  <g id="Group_9622" data-name="Group 9622">
                    <g
                      id="Group_9621"
                      clipPath="url(#computer-path)"
                      data-name="Group 9621"
                    >
                      <path
                        id="Path_37167"
                        fill="#e1f2fc"
                        d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.865 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.893 57.067 20.421 87.973 2.8 123.631.3"
                        data-name="Path 37167"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9624"
                    data-name="Group 9624"
                    transform="translate(9.234 176.394)"
                  >
                    <g
                      id="Group_9623"
                      clipPath="url(#computer-path-15)"
                      data-name="Group 9623"
                    >
                      <path
                        id="Rectangle_4560"
                        fill="url(#linear-gradient2)"
                        d="M0 0h255.936v81.464H0z"
                        data-name="Rectangle 4560"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_9626" data-name="Group 9626">
                    <g
                      id="Group_9625"
                      clipPath="url(#computer-path)"
                      data-name="Group 9625"
                    >
                      <path
                        id="Path_37169"
                        fill="#75c8d1"
                        fillRule="evenodd"
                        d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                        data-name="Path 37169"
                        transform="translate(-4.177 -75.043)"
                      ></path>
                      <path
                        id="Path_37170"
                        fill="#fff"
                        fillRule="evenodd"
                        d="M78.985 89.4a15.363 15.363 0 1 1 4.807 26.933 6.75 6.75 0 0 1-4.938-.632 9.7 9.7 0 0 1-11.514-.69 13.291 13.291 0 1 1-10.328-23.417A11.531 11.531 0 0 1 78.985 89.4"
                        data-name="Path 37170"
                        transform="translate(-10.627 -19.259)"
                      ></path>
                      <path
                        id="Path_37171"
                        fill="#e7421c"
                        d="M168.818 215.265c-6.594.768-32.167-2.4-36.794 4.42s13.951 35.02 19.268 37.568 9.823-3.479 9.823-3.479l-11.06-20.808h22.882Z"
                        data-name="Path 37171"
                        transform="translate(-30.596 -50.371)"
                      ></path>
                      <path
                        id="Path_37172"
                        fill="#5c5a5a"
                        d="m135.67 208.414 2.054-2.54a61 61 0 0 0-6.281-4.36c-5.021-3-8.485-3.724-10.589-2.225-.8.568-1.394 1.082-1.874 1.5-1.58 1.36-2.111 1.818-8.243 1.242-3.063-.289-3.608-.9-3.659-.965a2.4 2.4 0 0 1 .069-.887 3.29 3.29 0 0 0-1.163-3.666c-2.309-1.533-12.8-3.3-14.878-3.643l-.527 3.221c5.541.9 11.9 2.259 13.425 3.042-.017.143-.051.331-.076.471a4.08 4.08 0 0 0 .546 3.437c.952 1.25 2.789 1.941 5.955 2.24 6.935.653 8.291.041 10.685-2.019.452-.39.964-.831 1.638-1.312.513-.366 2.562-.282 6.986 2.355a59 59 0 0 1 5.93 4.113"
                        data-name="Path 37172"
                        transform="translate(-21.109 -45.147)"
                      ></path>
                      <path
                        id="Path_37347"
                        fill="#5c5a5a"
                        d="M0 0h3.267L3.3 46.823H.033Z"
                        data-name="Path 37347"
                        transform="rotate(-30.422 416.627 -203.617)"
                      ></path>
                      <path
                        id="Path_37173"
                        fill="#5c5a5a"
                        d="M175.2 293.829c-4.327-3.981-4.452-9.225-.342-14.387 3.967-4.981 12.537-7.1 23.511-5.8 10.435 1.23 21.015 5.377 28.3 11.093a1.63 1.63 0 0 1 .108 2.474 47.18 47.18 0 0 1-28.531 12.231c-1.289.1-2.564.152-3.816.152-8.1 0-15.253-2.1-19.229-5.76m2.217-12.356c-3.036 3.814-3.036 7.163 0 9.955 3.884 3.573 11.958 5.44 20.571 4.753a44.24 44.24 0 0 0 25.09-10.053c-14.58-10.282-39.038-12.973-45.66-4.656"
                        data-name="Path 37173"
                        transform="translate(-40.051 -63.968)"
                      ></path>
                      <path
                        id="Path_37174"
                        fill="#5c5a5a"
                        d="M100.079 272.6h.048a7.32 7.32 0 0 0 5.208-2.544c4.456-4.749 7.268-16.653 8.361-35.382.8-13.736.355-26.318.35-26.444a1.634 1.634 0 0 0-3.266.119c.5 13.688.069 51.057-7.83 59.476a4.14 4.14 0 0 1-2.915 1.513 1.632 1.632 0 0 0 .045 3.263"
                        data-name="Path 37174"
                        transform="translate(-22.941 -48.375)"
                      ></path>
                      <path
                        id="Path_37175"
                        fill="#5c5a5a"
                        d="M88.43 312.286c-13.107-1.137-23.383-8.475-28.192-20.133-4.8-11.636-3.03-24.9 4.51-33.789 7.9-9.317 20.828-12.485 36.4-8.921 17.348 3.971 24.239 21.824 21.912 36.605a31.8 31.8 0 0 1-10.373 19.342c-5.433 4.649-12.486 7.059-20.563 7.059q-1.815 0-3.7-.163m-21.182-51.812c-6.758 7.97-8.321 19.917-3.981 30.436 4.327 10.491 13.6 17.1 25.452 18.125 8.728.757 16.285-1.36 21.851-6.123a28.53 28.53 0 0 0 9.271-17.37c2.1-13.324-3.994-29.388-19.413-32.916a50 50 0 0 0-11.135-1.339c-9.28 0-16.907 3.129-22.045 9.187"
                        data-name="Path 37175"
                        transform="translate(-13.415 -58.057)"
                      ></path>
                      <path
                        id="Path_37176"
                        fill="#5c5a5a"
                        d="M229.86 312.286c-13.107-1.137-23.383-8.475-28.192-20.133-4.8-11.636-3.029-24.9 4.51-33.789 7.9-9.317 20.829-12.485 36.4-8.921 17.348 3.972 24.239 21.824 21.912 36.605a31.8 31.8 0 0 1-10.373 19.342c-5.433 4.649-12.487 7.059-20.563 7.059q-1.815 0-3.7-.163m-21.188-51.813c-6.758 7.97-8.321 19.917-3.981 30.436 4.327 10.491 13.6 17.1 25.452 18.125 8.727.757 16.285-1.36 21.85-6.123a28.52 28.52 0 0 0 9.272-17.37c2.1-13.324-3.994-29.388-19.413-32.916a50 50 0 0 0-11.135-1.339c-9.28 0-16.907 3.129-22.045 9.187"
                        data-name="Path 37176"
                        transform="translate(-46.374 -58.057)"
                      ></path>
                      <path
                        id="Path_37348"
                        fill="#5c5a5a"
                        d="M0 0h3.266L3.3 53.793H.034Z"
                        data-name="Path 37348"
                        transform="rotate(-56.13 205.252 2.738)"
                      ></path>
                      <path
                        id="Path_37349"
                        fill="#5c5a5a"
                        d="M0 0h3.265l.024 43.354H.024Z"
                        data-name="Path 37349"
                        transform="rotate(-62.906 199.056 22.088)"
                      ></path>
                      <path
                        id="Path_37177"
                        fill="#9d9aae"
                        d="M164.286 281.124c-1.2.421-6.691.607-8.235 0a5.06 5.06 0 0 1-.686-2.834l8.407-.515Z"
                        data-name="Path 37177"
                        transform="translate(-36.202 -65.023)"
                      ></path>
                      <path
                        id="Path_37178"
                        fill="#8a5c3a"
                        d="M156.613 268.215c-1.152 2.309-3.041 2.714-6.447 3.956-2.631.96-3.86 3.889-1.544 4.061s14.48-.3 16.813-2.141c2.262-1.785-5.088-13.362-8.822-5.875"
                        data-name="Path 37178"
                        transform="translate(-34.349 -62.201)"
                      ></path>
                      <path
                        id="Path_37179"
                        fill="#ffb076"
                        d="M149.55 118.565c-2.118 4.143-3.441 18.148-1.589 22.641 1.058 2.907 3.039 2.51 7.011 2.113a38 38 0 0 1 0 5.947c7.427 1.038 19.583-4.228 19.583-4.228L165.69 116.9Z"
                        data-name="Path 37179"
                        transform="translate(-34.275 -27.364)"
                      ></path>
                      <path
                        id="Path_37180"
                        fill="#ffb076"
                        d="M136.143 182.406c-.364 2.522-4.91 3.944-7.4 3.918s-21.1 4.686-22.475 4.086-6.863-5.3-12.439-1.793c-2.659 1.879.772 8.389.772 8.389 2.059.686 5.49 1.542 6.519.686s.413-5.475.413-5.475 4.82 5.217 6.879 5.217 34.828-5.225 34.828-5.225 2.659-2.57 0-7.282a5.34 5.34 0 0 0-7.1-2.522"
                        data-name="Path 37180"
                        transform="translate(-21.631 -42.58)"
                      ></path>
                      <path
                        id="Path_37181"
                        fill="#938e91"
                        d="M159.989 107.731c-2.108 1.3-13.054-5.794-12.527 1.975-.264 2.9-2.016 5-.018 5.926s7.667-.527 10.831 1.185 4.22 8.823 5.934 10.8 4.219 1.185 6.065 6.716 12.131 1.844 9.494-5c2.374-2.9 4.615-6.584-4.22-11.983-3.56-1.844-3.824-16.855-15.559-9.613"
                        data-name="Path 37181"
                        transform="translate(-34.14 -24.759)"
                      ></path>
                      <path
                        id="Path_37182"
                        fill="#ffb076"
                        d="M195.578 282.092c-1.529-3.9-11.311-9.275-12.113-11.16-2.124 3.685-5.277 7.19-8.544 7.563 3.045 3.157 14.343 5.649 14.785 7.7s2.79 3.372 2.79 3.372 5.725-.733 3.082-7.475"
                        data-name="Path 37182"
                        transform="translate(-40.763 -63.421)"
                      ></path>
                      <path
                        id="Path_37183"
                        fill="#8a5c3a"
                        d="M198.6 284.363c2 .827 5.492 2.423 7.217 5.4-1.333 3.836-5.879 13.934-9.955 15.89s-6.827-.235-5.764-2.505 3.648-4.952 3.648-7.759a20 20 0 0 0-.392-4.373s6.024-2.889 5.246-6.65"
                        data-name="Path 37183"
                        transform="translate(-44.247 -66.566)"
                      ></path>
                      <path
                        id="Path_37184"
                        fill="#9d9aae"
                        d="M212.016 296.765c-1.184-1.261-3.507-2.621-3.951-1.61s-4.5 6.5-3.391 7.759 4.552 2.05 4.552 2.05Z"
                        data-name="Path 37184"
                        transform="translate(-47.652 -69.009)"
                      ></path>
                      <path
                        id="Path_37185"
                        fill="#ff4d23"
                        d="M201.435 228.51c-3.866 7.569-25.294 10.395-27.235 14.486s-1.411 8.182 3.392 12.919-1.53 10.5-7.507 8.031-13.193-10.086-15.46-15.027 3.917-18.525 18.551-34.17 33.637 3.228 28.259 13.759"
                        data-name="Path 37185"
                        transform="translate(-35.927 -48.874)"
                      ></path>
                      <path
                        id="Path_37186"
                        fill="#ed8b85"
                        d="M171.8 144.41c-1.433 4.089-14.524 17.578-16.834 5.006-2.516 5.014-8.086 12.091-7.893 15.573s-.824 7.979 6.15 12.331c1.307 4.5 2.615 18.425 5.084 21.907 2.034 0 33.413-2.176 40.242 11.9 1.307 3.337 5.521 4.932 5.521 4.932s6.683-3.192-.581-28.29-16.849-38.733-23.969-44.827c-2.616.724-7.719 1.472-7.719 1.472"
                        data-name="Path 37186"
                        transform="translate(-34.273 -33.46)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_9628"
                    data-name="Group 9628"
                    transform="translate(112.799 109.478)"
                  >
                    <g
                      id="Group_9627"
                      fill="none"
                      stroke="#e0777f"
                      strokeMiterlimit="10"
                      strokeWidth="2.616"
                      clipPath="url(#computer-path-17)"
                      data-name="Group 9627"
                    >
                      <path
                        id="Path_37187"
                        d="M239.266 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37187"
                        transform="translate(-167.378 -161.741)"
                      ></path>
                      <path
                        id="Path_37188"
                        d="M228.545 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37188"
                        transform="translate(-164.88 -164.296)"
                      ></path>
                      <path
                        id="Path_37189"
                        d="M217.008 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37189"
                        transform="translate(-162.191 -161.741)"
                      ></path>
                      <path
                        id="Path_37190"
                        d="M209.212 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37190"
                        transform="translate(-160.374 -164.296)"
                      ></path>
                      <path
                        id="Path_37191"
                        d="M197.675 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37191"
                        transform="translate(-157.686 -161.741)"
                      ></path>
                      <path
                        id="Path_37192"
                        d="M189.879 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37192"
                        transform="translate(-155.869 -164.296)"
                      ></path>
                      <path
                        id="Path_37193"
                        d="M178.342 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37193"
                        transform="translate(-153.181 -161.741)"
                      ></path>
                      <path
                        id="Path_37194"
                        d="M170.545 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37194"
                        transform="translate(-151.364 -164.296)"
                      ></path>
                      <path
                        id="Path_37195"
                        d="M159.008 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37195"
                        transform="translate(-148.675 -161.741)"
                      ></path>
                      <path
                        id="Path_37196"
                        d="M151.212 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37196"
                        transform="translate(-146.858 -164.296)"
                      ></path>
                      <path
                        id="Path_37197"
                        d="M139.675 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37197"
                        transform="translate(-144.17 -161.741)"
                      ></path>
                      <path
                        id="Path_37198"
                        d="M131.879 235.541c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37198"
                        transform="translate(-142.353 -164.296)"
                      ></path>
                      <path
                        id="Path_37199"
                        d="M120.342 224.625c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37199"
                        transform="translate(-139.664 -161.741)"
                      ></path>
                      <path
                        id="Path_37200"
                        d="M239.266 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37200"
                        transform="translate(-167.378 -156.535)"
                      ></path>
                      <path
                        id="Path_37201"
                        d="M228.545 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37201"
                        transform="translate(-164.88 -159.09)"
                      ></path>
                      <path
                        id="Path_37202"
                        d="M217.008 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37202"
                        transform="translate(-162.191 -156.535)"
                      ></path>
                      <path
                        id="Path_37203"
                        d="M209.212 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37203"
                        transform="translate(-160.374 -159.09)"
                      ></path>
                      <path
                        id="Path_37204"
                        d="M197.675 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37204"
                        transform="translate(-157.686 -156.535)"
                      ></path>
                      <path
                        id="Path_37205"
                        d="M189.879 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37205"
                        transform="translate(-155.869 -159.09)"
                      ></path>
                      <path
                        id="Path_37206"
                        d="M178.342 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37206"
                        transform="translate(-153.181 -156.535)"
                      ></path>
                      <path
                        id="Path_37207"
                        d="M170.545 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37207"
                        transform="translate(-151.364 -159.09)"
                      ></path>
                      <path
                        id="Path_37208"
                        d="M159.008 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37208"
                        transform="translate(-148.675 -156.535)"
                      ></path>
                      <path
                        id="Path_37209"
                        d="M151.212 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37209"
                        transform="translate(-146.858 -159.09)"
                      ></path>
                      <path
                        id="Path_37210"
                        d="M139.675 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37210"
                        transform="translate(-144.17 -156.535)"
                      ></path>
                      <path
                        id="Path_37211"
                        d="M131.879 213.3c-2.62-3.955-6.411 1.776-4.569 3.592s7.749 1.213 4.569-3.592Z"
                        data-name="Path 37211"
                        transform="translate(-142.353 -159.09)"
                      ></path>
                      <path
                        id="Path_37212"
                        d="M120.342 202.387c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37212"
                        transform="translate(-139.664 -156.535)"
                      ></path>
                      <path
                        id="Path_37213"
                        d="M239.266 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37213"
                        transform="translate(-167.378 -151.329)"
                      ></path>
                      <path
                        id="Path_37214"
                        d="M228.545 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37214"
                        transform="translate(-164.88 -153.885)"
                      ></path>
                      <path
                        id="Path_37215"
                        d="M217.008 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37215"
                        transform="translate(-162.191 -151.329)"
                      ></path>
                      <path
                        id="Path_37216"
                        d="M209.212 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37216"
                        transform="translate(-160.374 -153.885)"
                      ></path>
                      <path
                        id="Path_37217"
                        d="M197.675 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37217"
                        transform="translate(-157.686 -151.329)"
                      ></path>
                      <path
                        id="Path_37218"
                        d="M189.879 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37218"
                        transform="translate(-155.869 -153.885)"
                      ></path>
                      <path
                        id="Path_37219"
                        d="M178.342 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37219"
                        transform="translate(-153.181 -151.329)"
                      ></path>
                      <path
                        id="Path_37220"
                        d="M170.545 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37220"
                        transform="translate(-151.364 -153.885)"
                      ></path>
                      <path
                        id="Path_37221"
                        d="M159.008 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37221"
                        transform="translate(-148.675 -151.329)"
                      ></path>
                      <path
                        id="Path_37222"
                        d="M151.212 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37222"
                        transform="translate(-146.858 -153.885)"
                      ></path>
                      <path
                        id="Path_37223"
                        d="M139.675 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37223"
                        transform="translate(-144.17 -151.329)"
                      ></path>
                      <path
                        id="Path_37224"
                        d="M131.879 191.064c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37224"
                        transform="translate(-142.353 -153.885)"
                      ></path>
                      <path
                        id="Path_37225"
                        d="M120.342 180.148c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37225"
                        transform="translate(-139.664 -151.329)"
                      ></path>
                      <path
                        id="Path_37226"
                        d="M239.266 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37226"
                        transform="translate(-167.378 -146.124)"
                      ></path>
                      <path
                        id="Path_37227"
                        d="M228.545 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37227"
                        transform="translate(-164.88 -148.679)"
                      ></path>
                      <path
                        id="Path_37228"
                        d="M217.008 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37228"
                        transform="translate(-162.191 -146.124)"
                      ></path>
                      <path
                        id="Path_37229"
                        d="M209.212 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37229"
                        transform="translate(-160.374 -148.679)"
                      ></path>
                      <path
                        id="Path_37230"
                        d="M197.675 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37230"
                        transform="translate(-157.686 -146.124)"
                      ></path>
                      <path
                        id="Path_37231"
                        d="M189.879 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37231"
                        transform="translate(-155.869 -148.679)"
                      ></path>
                      <path
                        id="Path_37232"
                        d="M178.342 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37232"
                        transform="translate(-153.181 -146.124)"
                      ></path>
                      <path
                        id="Path_37233"
                        d="M170.545 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37233"
                        transform="translate(-151.364 -148.679)"
                      ></path>
                      <path
                        id="Path_37234"
                        d="M159.008 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37234"
                        transform="translate(-148.675 -146.124)"
                      ></path>
                      <path
                        id="Path_37235"
                        d="M151.212 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37235"
                        transform="translate(-146.858 -148.679)"
                      ></path>
                      <path
                        id="Path_37236"
                        d="M139.675 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37236"
                        transform="translate(-144.17 -146.124)"
                      ></path>
                      <path
                        id="Path_37237"
                        d="M131.879 168.825c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37237"
                        transform="translate(-142.353 -148.679)"
                      ></path>
                      <path
                        id="Path_37238"
                        d="M120.342 157.91c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37238"
                        transform="translate(-139.664 -146.124)"
                      ></path>
                      <path
                        id="Path_37239"
                        d="M239.266 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37239"
                        transform="translate(-167.378 -140.918)"
                      ></path>
                      <path
                        id="Path_37240"
                        d="M228.545 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37240"
                        transform="translate(-164.88 -143.473)"
                      ></path>
                      <path
                        id="Path_37241"
                        d="M217.008 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37241"
                        transform="translate(-162.191 -140.918)"
                      ></path>
                      <path
                        id="Path_37242"
                        d="M209.212 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37242"
                        transform="translate(-160.374 -143.473)"
                      ></path>
                      <path
                        id="Path_37243"
                        d="M197.675 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37243"
                        transform="translate(-157.686 -140.918)"
                      ></path>
                      <path
                        id="Path_37244"
                        d="M189.879 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37244"
                        transform="translate(-155.869 -143.473)"
                      ></path>
                      <path
                        id="Path_37245"
                        d="M178.342 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37245"
                        transform="translate(-153.181 -140.918)"
                      ></path>
                      <path
                        id="Path_37246"
                        d="M170.545 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37246"
                        transform="translate(-151.364 -143.473)"
                      ></path>
                      <path
                        id="Path_37247"
                        d="M159.008 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37247"
                        transform="translate(-148.675 -140.918)"
                      ></path>
                      <path
                        id="Path_37248"
                        d="M151.212 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37248"
                        transform="translate(-146.858 -143.473)"
                      ></path>
                      <path
                        id="Path_37249"
                        d="M139.675 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37249"
                        transform="translate(-144.17 -140.918)"
                      ></path>
                      <path
                        id="Path_37250"
                        d="M131.879 146.587c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37250"
                        transform="translate(-142.353 -143.473)"
                      ></path>
                      <path
                        id="Path_37251"
                        d="M120.342 135.671c-2.62-3.956-6.411 1.776-4.569 3.591s7.749 1.212 4.569-3.591Z"
                        data-name="Path 37251"
                        transform="translate(-139.664 -140.918)"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_9681" data-name="Group 9681">
                    <g
                      id="Group_9680"
                      clipPath="url(#computer-path)"
                      data-name="Group 9680"
                    >
                      <path
                        id="Path_37253"
                        fill="#ffb076"
                        d="M179.882 182.514c0 3.634 2 8.45-3.094 10.449s-30.027 9.749-31.209 8.918c.364 3.621-1.82 3.349-4.459 3.621s-5.732.364-6.187-2.635-1.82-4.816 3.367-5.907 28.571-7.36 27.752-14.447c0 0 1.051-4 6.94-3.907s6.89 3.907 6.89 3.907"
                        data-name="Path 37253"
                        transform="translate(-31.327 -41.809)"
                      ></path>
                      <path
                        id="Path_37254"
                        fill="#e0777f"
                        d="M190.543 180.487c1.529-6-1.321-24.22-11.286-23.5s-4.922 19.663-4.922 19.663c2.641 0 13.75-.48 16.208 3.836"
                        data-name="Path 37254"
                        transform="translate(-40.329 -36.744)"
                      ></path>
                      <path
                        id="Path_37255"
                        fill="#ffe5bb"
                        d="M160.866 132.419v4.039l-5.776-1.358v-3.779Z"
                        data-name="Path 37255"
                        transform="translate(-36.142 -30.742)"
                      ></path>
                      <path
                        id="Path_37256"
                        fill="#ffe5bb"
                        d="M148.79 129.983v3.362l-5.776-.976v-3.381Z"
                        data-name="Path 37256"
                        transform="translate(-33.327 -30.194)"
                      ></path>
                      <path
                        id="Path_37257"
                        fill="none"
                        stroke="#2e2c2c"
                        strokeMiterlimit="10"
                        strokeWidth="9.811"
                        d="M105.4 197.928c-.538-.15-1.124-.3-1.737-.448"
                        data-name="Path 37257"
                        transform="translate(-24.156 -46.227)"
                      ></path>
                      <path
                        id="Rectangle_4565"
                        fill="#5c5a5a"
                        d="M0 0h45.856v3.473H0z"
                        data-name="Rectangle 4565"
                        transform="translate(165.544 198.294)"
                      ></path>
                      <path
                        id="Path_37258"
                        fill="#fff"
                        fillRule="evenodd"
                        d="M260.034 131.657a16.539 16.539 0 1 0-5.172 29.007 7.24 7.24 0 0 0 5.322-.678 10.45 10.45 0 0 0 12.4-.747 14.316 14.316 0 1 0 11.116-25.223 12.422 12.422 0 0 0-23.669-2.359"
                        data-name="Path 37258"
                        transform="translate(-54.403 -29.023)"
                      ></path>
                      <path
                        id="Path_37259"
                        fill="#e0a365"
                        d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                        data-name="Path 37259"
                        transform="translate(-59.869 -48.645)"
                      ></path>
                      <g
                        id="Group_9631"
                        data-name="Group 9631"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(197.039 159.163)"
                      >
                        <g id="Group_9630" data-name="Group 9630">
                          <g
                            id="Group_9629"
                            clipPath="url(#computer-path-19)"
                            data-name="Group 9629"
                          >
                            <path
                              id="Path_37260"
                              fill="#b56e39"
                              d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                              data-name="Path 37260"
                              transform="translate(-256.908 -207.808)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9634"
                        data-name="Group 9634"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(197.039 159.163)"
                      >
                        <g id="Group_9633" data-name="Group 9633">
                          <g
                            id="Group_9632"
                            clipPath="url(#computer-path-19)"
                            data-name="Group 9632"
                          >
                            <path
                              id="Path_37261"
                              fill="#b56e39"
                              d="m259.55 207.895 11.207-.087 8.6 2.5-6.153 1.412-13.308.492-2.986-2.364Z"
                              data-name="Path 37261"
                              transform="translate(-256.908 -207.808)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37262"
                        fill="#e0a365"
                        d="M274.6 207.38a.185.185 0 0 0-.234.179v.29a.185.185 0 0 0 .137.178l10 2.7v-.675Z"
                        data-name="Path 37262"
                        transform="translate(-63.937 -48.543)"
                      ></path>
                      <path
                        id="Path_37263"
                        fill="#e0a365"
                        d="M237.054 207.373h28.793v.666h-28.793Z"
                        data-name="Path 37263"
                        transform="translate(-55.242 -48.543)"
                      ></path>
                      <g
                        id="Group_9637"
                        data-name="Group 9637"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(210.429 158.831)"
                      >
                        <g id="Group_9636" data-name="Group 9636">
                          <g
                            id="Group_9635"
                            clipPath="url(#computer-path-21)"
                            data-name="Group 9635"
                          >
                            <path
                              id="Path_37264"
                              fill="#b56e39"
                              d="m284.507 210.732-10-2.7a.185.185 0 0 1-.137-.178v-.29a.186.186 0 0 1 .234-.179l9.907 2.678Z"
                              data-name="Path 37264"
                              transform="translate(-274.366 -207.374)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9640"
                        data-name="Group 9640"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(197.871 160.712)"
                      >
                        <g id="Group_9639" data-name="Group 9639">
                          <g
                            id="Group_9638"
                            clipPath="url(#computer-path-22)"
                            data-name="Group 9638"
                          >
                            <path
                              id="Path_37265"
                              fill="#b56e39"
                              d="m280.691 210.633-2.97-.8-18.259.064-1.468 1.085 2.154 1.7 13.308-.492 5.685-1.3 1.551.419Z"
                              data-name="Path 37265"
                              transform="translate(-257.993 -209.83)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37266"
                        fill="#f2b879"
                        d="m251.327 209.2 7.015-5.351a.073.073 0 0 0-.044-.131h-28.925l-7.187 5.482Z"
                        data-name="Path 37266"
                        transform="translate(-51.778 -47.688)"
                      ></path>
                      <path
                        id="Path_37267"
                        fill="#fcc584"
                        d="m220.523 210.879 1.032 8.626a3.4 3.4 0 0 1-.2 1.608l-1.225 3.2a3.4 3.4 0 0 0-.221 1.346l.575 14.022a.93.93 0 0 0 .927.891h29.826v-29.693Z"
                        data-name="Path 37267"
                        transform="translate(-51.247 -49.364)"
                      ></path>
                      <path
                        id="Path_37268"
                        fill="#fcc584"
                        d="m220.523 210.879 1.032 8.626a3.4 3.4 0 0 1-.2 1.608l-1.225 3.2a3.4 3.4 0 0 0-.221 1.346l.575 14.022a.93.93 0 0 0 .927.891h29.826v-29.693Z"
                        data-name="Path 37268"
                        transform="translate(-51.247 -49.364)"
                      ></path>
                      <g
                        id="Group_9643"
                        data-name="Group 9643"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(181.442 172.239)"
                      >
                        <g id="Group_9642" data-name="Group 9642">
                          <g
                            id="Group_9641"
                            clipPath="url(#computer-path-23)"
                            data-name="Group 9641"
                          >
                            <path
                              id="Path_37269"
                              fill="#b56e39"
                              d="m253.767 230.578.6-1.551a2.68 2.68 0 0 0 .02-1.88l-.644-1.769a3 3 0 0 1-.137-.5l-16.685 1.253a.377.377 0 0 0-.07.739l16.721 4.484a3.2 3.2 0 0 1 .194-.778"
                              data-name="Path 37269"
                              transform="translate(-236.572 -224.881)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37270"
                        fill="#ffcf9f"
                        d="M256.822 203.721h-28.463a1.37 1.37 0 0 0-.829.28l-6.82 5.2h29.141l7.016-5.351a.073.073 0 0 0-.044-.131"
                        data-name="Path 37270"
                        transform="translate(-51.434 -47.688)"
                      ></path>
                      <g
                        id="Group_9646"
                        data-name="Group 9646"
                        opacity="0.14"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(181.443 172.239)"
                      >
                        <g id="Group_9645" data-name="Group 9645">
                          <g
                            id="Group_9644"
                            clipPath="url(#computer-path-24)"
                            data-name="Group 9644"
                          >
                            <path
                              id="Path_37271"
                              fill="#ad6937"
                              d="M254.544 228.2a2.7 2.7 0 0 0-.157-1.05l-.643-1.768a3.3 3.3 0 0 1-.137-.5l-16.685 1.253a.365.365 0 0 0-.347.344Z"
                              data-name="Path 37271"
                              transform="translate(-236.574 -224.881)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37272"
                        fill="#e0a365"
                        d="M280.769 223.146a2 2 0 0 0 .087-.585v-11.683h-22.151v10.114a3.2 3.2 0 0 0 .2 1.11l.643 1.768a2.67 2.67 0 0 1-.019 1.88l-.6 1.55a3.3 3.3 0 0 0-.219 1.173v11.088a1.01 1.01 0 0 0 1.009 1.009h20.134a1.01 1.01 0 0 0 1.009-1.009v-10.75a2 2 0 0 0-.22-.911l-.459-.895a2 2 0 0 1-.133-1.5Z"
                        data-name="Path 37272"
                        transform="translate(-60.288 -49.364)"
                      ></path>
                      <path
                        id="Path_37273"
                        fill="#e0a365"
                        d="M280.769 223.146a2 2 0 0 0 .087-.585v-11.683h-22.151v10.114a3.2 3.2 0 0 0 .2 1.11l.643 1.768a2.67 2.67 0 0 1-.019 1.88l-.6 1.55a3.3 3.3 0 0 0-.219 1.173v11.088a1.01 1.01 0 0 0 1.009 1.009h20.134a1.01 1.01 0 0 0 1.009-1.009v-10.75a2 2 0 0 0-.22-.911l-.459-.895a2 2 0 0 1-.133-1.5Z"
                        data-name="Path 37273"
                        transform="translate(-60.288 -49.364)"
                      ></path>
                      <g
                        id="Group_9649"
                        data-name="Group 9649"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(211.744 173.504)"
                      >
                        <g id="Group_9648" data-name="Group 9648">
                          <g
                            id="Group_9647"
                            clipPath="url(#computer-path-25)"
                            data-name="Group 9647"
                          >
                            <path
                              id="Path_37274"
                              fill="#b56e39"
                              d="m284.685 231.565-.459-.894a2 2 0 0 1-.133-1.5l.725-2.364a2 2 0 0 0 .064-.279l-8.545 2.5a.357.357 0 0 0 .008.687l8.5 2.259a2 2 0 0 0-.156-.412"
                              data-name="Path 37274"
                              transform="translate(-276.081 -226.532)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9652"
                        data-name="Group 9652"
                        opacity="0.15"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(211.744 173.504)"
                      >
                        <g id="Group_9651" data-name="Group 9651">
                          <g
                            id="Group_9650"
                            clipPath="url(#computer-path-26)"
                            data-name="Group 9650"
                          >
                            <path
                              id="Path_37275"
                              fill="#b56e39"
                              d="M284.01 229.871a2 2 0 0 1 .084-.7l.724-2.363a2 2 0 0 0 .064-.279l-8.545 2.5-.034.012h-.011l-.021.01-.011.006-.018.011-.011.007-.017.012-.009.007-.018.016-.006.005a.4.4 0 0 0-.04.049v.006l-.012.021v.008l-.01.021v.007l-.009.024a.4.4 0 0 0-.016.126v.029q-.001.016.005.031Z"
                              data-name="Path 37275"
                              transform="translate(-276.081 -226.532)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9655"
                        data-name="Group 9655"
                        opacity="0.18"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(169.276 161.514)"
                      >
                        <g id="Group_9654" data-name="Group 9654">
                          <g
                            id="Group_9653"
                            clipPath="url(#computer-path-27)"
                            data-name="Group 9653"
                          >
                            <path
                              id="Path_37276"
                              fill="#c4aa8d"
                              d="M221.742 219.5a3.4 3.4 0 0 1-.2 1.608l-.41 1.072a1.55 1.55 0 0 0 .884-.234c1.529-.96.557-3.954 2.1-4.883s4.94 1.816 6.066-.183c.93-1.65-1.651-3.077-1.86-6.006h-7.612Z"
                              data-name="Path 37276"
                              transform="translate(-220.71 -210.878)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9658"
                        data-name="Group 9658"
                        opacity="0.18"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(179.981 186.714)"
                      >
                        <g id="Group_9657" data-name="Group 9657">
                          <g
                            id="Group_9656"
                            clipPath="url(#computer-path-28)"
                            data-name="Group 9656"
                          >
                            <path
                              id="Path_37277"
                              fill="#c4aa8d"
                              d="M244.275 246.569c-.856-.657-2.348.838-3.55-.039-.587-.427-.218-2.547-1.512-2.74s-1.251 2.365-1.94 2.635-1.775-.94-2.4-.353c-.581.549.193 1.376.473 2.2h8.983c.114-.594.42-1.336-.059-1.7"
                              data-name="Path 37277"
                              transform="translate(-234.667 -243.779)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9661"
                        data-name="Group 9661"
                        opacity="0.18"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(213.729 184.44)"
                      >
                        <g id="Group_9660" data-name="Group 9660">
                          <g
                            id="Group_9659"
                            clipPath="url(#computer-path-29)"
                            data-name="Group 9659"
                          >
                            <path
                              id="Path_37278"
                              fill="#c4aa8d"
                              d="M285.51 246.568v-5.522a1.02 1.02 0 0 0-1.057-.138c-1.161.639-.219 3.054-1.8 3.974-.77.449-2.969-1.013-3.826.346-.538.853.4 1.65 1.169 2.35h4.5a1.01 1.01 0 0 0 1.009-1.009"
                              data-name="Path 37278"
                              transform="translate(-278.669 -240.811)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9664"
                        data-name="Group 9664"
                        opacity="0.18"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(201.866 161.514)"
                      >
                        <g id="Group_9663" data-name="Group 9663">
                          <g
                            id="Group_9662"
                            clipPath="url(#computer-path-30)"
                            data-name="Group 9662"
                          >
                            <path
                              id="Path_37279"
                              fill="#c4aa8d"
                              d="M265.749 212.157c3.24-.315 2.891 2.3 4.451 2.447s2.19-1.579 3.694-2.076c1.94-.64 6.518.021 6.433-1.65h-17.045c-.367.739.542 1.466 2.467 1.279"
                              data-name="Path 37279"
                              transform="translate(-263.202 -210.878)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37280"
                        fill="#e0a365"
                        d="M254.811 152.082a.32.32 0 0 0 .225-.094c.026-.025 2.744-2.618 8.465-2.387a.353.353 0 0 0 .025-.7c-6.015-.244-8.822 2.459-8.939 2.575a.37.37 0 0 0-.018.5.32.32 0 0 0 .242.113"
                        data-name="Path 37280"
                        transform="translate(-59.303 -34.851)"
                      ></path>
                      <path
                        id="Path_37281"
                        fill="#ce8d51"
                        d="M260.795 149.367a7 7 0 0 1-.532.7 13 13 0 0 0-1.39.419 7.4 7.4 0 0 0 1.062-1.072c.3-.077.626-.147.964-.208q-.052.082-.1.162"
                        data-name="Path 37281"
                        transform="translate(-60.327 -34.927)"
                      ></path>
                      <path
                        id="Path_37282"
                        fill="#ce8d51"
                        d="M254.883 151.926q0 .421.015.855a.3.3 0 0 1-.087.015.32.32 0 0 1-.242-.113.37.37 0 0 1 .018-.5c.02-.019.118-.114.3-.257"
                        data-name="Path 37282"
                        transform="translate(-59.303 -35.564)"
                      ></path>
                      <path
                        id="Path_37283"
                        fill="#bdc5c7"
                        d="M254.811 152.885a.32.32 0 0 1-.242-.113.37.37 0 0 1-.012-.462 7 7 0 0 0 .621.358 3 3 0 0 0-.141.123.32.32 0 0 1-.225.094"
                        data-name="Path 37283"
                        transform="translate(-59.304 -35.654)"
                      ></path>
                      <path
                        id="Path_37284"
                        fill="#ce8d51"
                        d="M256.16 151.825a7 7 0 0 0-.357.234l-.318-.042q.036-.311.058-.626c.188-.128.412-.27.674-.417q-.016.426-.056.852"
                        data-name="Path 37284"
                        transform="translate(-59.537 -35.341)"
                      ></path>
                      <path
                        id="Path_37285"
                        fill="#ce8d51"
                        d="M250.422 152.077a.32.32 0 0 0 .194-.067.37.37 0 0 0 .073-.492c-2.279-3.346-4.763-4.165-6.445-4.262a6.3 6.3 0 0 0-3.166.617.365.365 0 0 0-.142.476.32.32 0 0 0 .446.151 5.75 5.75 0 0 1 2.86-.537c2.225.141 4.214 1.477 5.913 3.971a.32.32 0 0 0 .268.146"
                        data-name="Path 37285"
                        transform="translate(-56.138 -34.468)"
                      ></path>
                      <path
                        id="Path_37286"
                        fill="#bc723f"
                        d="M245.662 148.176c2.225.141 4.214 1.477 5.913 3.971a.4.4 0 0 0 .041.05l-.03.028a.3.3 0 0 1-.194.067.33.33 0 0 1-.268-.146c-1.7-2.493-3.688-3.83-5.913-3.971l-.15-.008a6 6 0 0 1 .6.008"
                        data-name="Path 37286"
                        transform="translate(-57.108 -34.683)"
                      ></path>
                      <path
                        id="Path_37287"
                        fill="#bc723f"
                        d="M241.078 147.872a6.24 6.24 0 0 1 3.014-.624 6.1 6.1 0 0 0-2.564.624.365.365 0 0 0-.142.476.3.3 0 0 0 .082.108q-.083.04-.087.043a.32.32 0 0 1-.446-.151.365.365 0 0 1 .142-.476"
                        data-name="Path 37287"
                        transform="translate(-56.138 -34.468)"
                      ></path>
                      <path
                        id="Path_37288"
                        fill="#bc723f"
                        d="M249.535 148.669a9.3 9.3 0 0 1 1.74 1.421q.223.263.462.5a14 14 0 0 1 .965 1.258.37.37 0 0 1 .006.4 8.5 8.5 0 0 1-1.525-1.266q-.15-.167-.3-.324a10 10 0 0 1-1.081-1.5c-.1-.163-.185-.328-.271-.493"
                        data-name="Path 37288"
                        transform="translate(-58.151 -34.801)"
                      ></path>
                      <path
                        id="Path_37289"
                        fill="#ce8d51"
                        d="M255.616 150.67a9.36 9.36 0 0 0 3.822-3.119 5.4 5.4 0 0 0 .972-3.321 2.83 2.83 0 0 0-1.742-2.662 2.52 2.52 0 0 0-2.45.543c-1.592 1.334-2.454 4.421-2.3 8.257l.65-.029c-.139-3.56.649-6.5 2.055-7.682a1.9 1.9 0 0 1 1.867-.421 2.16 2.16 0 0 1 1.273 2.044 4.7 4.7 0 0 1-.853 2.868 8.7 8.7 0 0 1-3.56 2.888Z"
                        data-name="Path 37289"
                        transform="translate(-59.168 -33.112)"
                      ></path>
                      <path
                        id="Path_37290"
                        fill="#ce8d51"
                        d="M261.209 149.171a16.3 16.3 0 0 1 3.263-.29 16 16 0 0 0-3.307.359z"
                        data-name="Path 37290"
                        transform="translate(-60.861 -34.851)"
                      ></path>
                      <path
                        id="Path_37291"
                        fill="#ce8d51"
                        d="M254.749 151.538a10.1 10.1 0 0 1 3.974-1.976l-.09.11a9.4 9.4 0 0 0-3.7 1.959.37.37 0 0 0-.018.5.3.3 0 0 0 .1.076.3.3 0 0 1-.144.037.3.3 0 0 1-.11-.021q-.013-.345-.015-.682"
                        data-name="Path 37291"
                        transform="translate(-59.366 -35.01)"
                      ></path>
                      <path
                        id="Path_37292"
                        fill="#bc723f"
                        d="M259.349 147.361a4.7 4.7 0 0 0 .853-2.868 2.16 2.16 0 0 0-1.273-2.044 2 2 0 0 0-.459-.086 1.9 1.9 0 0 1 .693.086 2.16 2.16 0 0 1 1.273 2.044 4.7 4.7 0 0 1-.853 2.868 8.7 8.7 0 0 1-3.56 2.889l.227.536-.193.1-.269-.633a8.7 8.7 0 0 0 3.561-2.889"
                        data-name="Path 37292"
                        transform="translate(-59.608 -33.324)"
                      ></path>
                      <path
                        id="Path_37293"
                        fill="#bc723f"
                        d="M256.219 142.111a2.58 2.58 0 0 1 1.82-.656 2.64 2.64 0 0 0-1.586.656c-1.591 1.333-2.452 4.415-2.3 8.247l-.234.011c-.15-3.836.712-6.923 2.3-8.257"
                        data-name="Path 37293"
                        transform="translate(-59.168 -33.112)"
                      ></path>
                      <path
                        id="Path_37294"
                        fill="#e0a365"
                        d="m253.512 150.538.26-.637a8.17 8.17 0 0 1-3.485-3.308 7.8 7.8 0 0 1-1.17-3.964 1.79 1.79 0 0 1 .943-1.759 1.53 1.53 0 0 1 1.6.363c1.5 1.3 2.375 4.914 1.99 8.234l.646.085c.418-3.593-.538-7.4-2.225-8.859a2.14 2.14 0 0 0-2.225-.479 2.4 2.4 0 0 0-1.381 2.387 8.4 8.4 0 0 0 1.269 4.36 8.84 8.84 0 0 0 3.777 3.577"
                        data-name="Path 37294"
                        transform="translate(-57.901 -32.791)"
                      ></path>
                      <path
                        id="Path_37295"
                        fill="#ce8d51"
                        d="M252.338 141.445a1.73 1.73 0 0 0-.974-.452 1.62 1.62 0 0 1 1.208.452c1.5 1.3 2.375 4.914 1.99 8.234l.415.056v.031l-.646-.087c.386-3.319-.489-6.936-1.989-8.234"
                        data-name="Path 37295"
                        transform="translate(-58.577 -33.003)"
                      ></path>
                      <path
                        id="Path_37296"
                        fill="#ce8d51"
                        d="M248.466 142.6a2.4 2.4 0 0 1 1.381-2.388 2.1 2.1 0 0 1 .85-.129 2.1 2.1 0 0 0-.616.129 2.4 2.4 0 0 0-1.381 2.388 8.43 8.43 0 0 0 1.269 4.36 8.93 8.93 0 0 0 3.582 3.48l-.039.1a8.85 8.85 0 0 1-3.777-3.577 8.4 8.4 0 0 1-1.269-4.36"
                        data-name="Path 37296"
                        transform="translate(-57.901 -32.791)"
                      ></path>
                      <path
                        id="Path_37297"
                        fill="#e5ded6"
                        d="m289.439 191.783 3.975-1.442-4.134 5.623Z"
                        data-name="Path 37297"
                        transform="translate(-67.413 -44.556)"
                      ></path>
                      <path
                        id="Path_37298"
                        fill="#d3cac1"
                        d="m216.149 196.371.65 10.848h57.768l-.909-11.391Z"
                        data-name="Path 37298"
                        transform="translate(-50.371 -45.84)"
                      ></path>
                      <path
                        id="Path_37299"
                        fill="#d3cac1"
                        d="M217.564 181.486v11.391l55.481-.516.826-11.408Z"
                        data-name="Path 37299"
                        transform="translate(-50.701 -42.359)"
                      ></path>
                      <path
                        id="Path_37300"
                        fill="#e5ded6"
                        d="m215.109 205.206 59.72.888-2.5-.888Z"
                        data-name="Path 37300"
                        transform="translate(-50.128 -48.036)"
                      ></path>
                      <path
                        id="Path_37301"
                        fill="#c4b7ab"
                        d="M218.073 186.483c2.312-.039 4.625-.015 6.936-.025l6.936.079c4.624.062 9.248.213 13.872.316 4.623.182 9.247.322 13.871.543l6.935.352c2.312.154 4.623.273 6.935.456-2.312.04-4.625.016-6.937.025l-6.936-.078c-4.624-.065-9.247-.212-13.871-.317-4.624-.185-9.247-.321-13.871-.545l-6.936-.352c-2.311-.153-4.622-.273-6.934-.455"
                        data-name="Path 37301"
                        transform="translate(-50.819 -43.647)"
                      ></path>
                      <path
                        id="Path_37302"
                        fill="#c4b7ab"
                        d="M217.717 191.725c2.306-.038 4.613-.013 6.918-.021l6.918.081c4.612.065 9.223.217 13.834.322 4.611.184 9.223.325 13.834.548l6.916.355c2.3.155 4.61.275 6.916.46-2.306.038-4.613.014-6.918.022l-6.918-.081c-4.612-.067-9.223-.216-13.835-.323-4.611-.186-9.223-.325-13.834-.551l-6.916-.355c-2.3-.153-4.61-.274-6.916-.457"
                        data-name="Path 37302"
                        transform="translate(-50.736 -44.875)"
                      ></path>
                      <path
                        id="Path_37303"
                        fill="#e5ded6"
                        d="m288.311 165.5 3.414-.82-2.671-1.338Z"
                        data-name="Path 37303"
                        transform="translate(-67.187 -38.235)"
                      ></path>
                      <path
                        id="Path_37304"
                        fill="#d3cac1"
                        d="m217.209 154.031 2.829 10.745 53.042-.493.826-11.408Z"
                        data-name="Path 37304"
                        transform="translate(-50.618 -35.786)"
                      ></path>
                      <path
                        id="Path_37305"
                        fill="#d8cfc7"
                        d="m272.531 162.164-53.042.493-2.184-8.294h-.1l2.829 10.745 53.042-.493.746-10.315Z"
                        data-name="Path 37305"
                        transform="translate(-50.618 -36.12)"
                      ></path>
                      <path
                        id="Path_37306"
                        fill="#c4b7ab"
                        d="M221.237 158.909c2.143-.208 4.286-.354 6.429-.532l6.429-.43c4.287-.276 8.574-.463 12.86-.7 4.287-.156 8.574-.355 12.861-.473l6.432-.155c2.144-.016 4.288-.066 6.432-.052-2.142.209-4.286.355-6.429.534l-6.429.43c-4.287.273-8.573.465-12.86.7-4.287.154-8.575.357-12.862.471l-6.432.156c-2.144.017-4.287.067-6.432.054"
                        data-name="Path 37306"
                        transform="translate(-51.556 -36.65)"
                      ></path>
                      <path
                        id="Path_37307"
                        fill="#d3cac1"
                        d="m218.073 164.54.635 13.2 54.456-.506.825-11.408Z"
                        data-name="Path 37307"
                        transform="translate(-50.819 -38.517)"
                      ></path>
                      <path
                        id="Path_37308"
                        fill="#c4b7ab"
                        d="M220.558 169.67c1.778-.027 3.556.009 5.333.011l5.334.114c3.555.087 7.11.261 10.665.388 3.554.205 7.109.369 10.663.614l5.33.388c1.777.165 3.554.3 5.33.492-1.778.028-3.556-.008-5.333-.01l-5.333-.114c-3.556-.089-7.11-.26-10.665-.389-3.555-.208-7.109-.368-10.663-.617l-5.331-.388c-1.777-.165-3.554-.3-5.33-.49"
                        data-name="Path 37308"
                        transform="translate(-51.398 -39.715)"
                      ></path>
                      <path
                        id="Path_37309"
                        fill="#c4b7ab"
                        d="M222.932 176.075c2.017-.11 4.035-.159 6.052-.24l6.053-.136c4.034-.081 8.069-.074 12.1-.115 4.035.038 8.07.034 12.1.113l6.052.136c2.018.082 4.035.13 6.052.241-2.017.111-4.034.159-6.052.241l-6.052.137c-4.035.078-8.07.074-12.1.113-4.035-.041-8.07-.034-12.1-.115l-6.053-.136c-2.017-.081-4.035-.129-6.052-.24"
                        data-name="Path 37309"
                        transform="translate(-51.951 -41.102)"
                      ></path>
                      <path
                        id="Path_37310"
                        fill="#d8cfc7"
                        d="m218.382 170.983 1.669 6.189 44.228 1.652-45.5.424Z"
                        data-name="Path 37310"
                        transform="translate(-50.891 -40.025)"
                      ></path>
                      <g
                        id="Group_9667"
                        data-name="Group 9667"
                        opacity="0.61"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(204.019 138.595)"
                      >
                        <g id="Group_9666" data-name="Group 9666">
                          <g
                            id="Group_9665"
                            clipPath="url(#computer-path-31)"
                            data-name="Group 9665"
                          >
                            <path
                              id="Path_37311"
                              fill="#f7f1e8"
                              d="m266.009 181.246 18.047 1.857-.716 7.821-8.713 1.422 9.707.016.826-11.408Z"
                              data-name="Path 37311"
                              transform="translate(-266.009 -180.954)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9670"
                        data-name="Group 9670"
                        opacity="0.61"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(166.864 143.696)"
                      >
                        <g id="Group_9669" data-name="Group 9669">
                          <g
                            id="Group_9668"
                            clipPath="url(#computer-path-32)"
                            data-name="Group 9668"
                          >
                            <path
                              id="Path_37312"
                              fill="#f7f1e8"
                              d="m217.564 187.614.825 4.9 18.316 1.391-19.141.532Z"
                              data-name="Path 37312"
                              transform="translate(-217.564 -187.614)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37313"
                        fill="#ded5cc"
                        d="M268.842 169.045h9.682l-.9 3.827Z"
                        data-name="Path 37313"
                        transform="translate(-62.65 -39.571)"
                      ></path>
                      <path
                        id="Path_37314"
                        fill="#ded5cc"
                        d="M250.789 198.686h9.682l-6.081 3.506Z"
                        data-name="Path 37314"
                        transform="translate(-58.443 -46.51)"
                      ></path>
                      <path
                        id="Path_37315"
                        fill="#ded5cc"
                        d="M225.476 199.1h9.343l-7.685 3.186Z"
                        data-name="Path 37315"
                        transform="translate(-52.544 -46.607)"
                      ></path>
                      <path
                        id="Path_37316"
                        fill="#ded5cc"
                        d="m230.5 163.954 6.244-2.6v2.446Z"
                        data-name="Path 37316"
                        transform="translate(-53.715 -37.772)"
                      ></path>
                      <path
                        id="Path_37317"
                        fill="#ce8d51"
                        d="m271.65 197.259.086-43.98h-.89l-.086 43.98Z"
                        data-name="Path 37317"
                        transform="translate(-63.097 -35.88)"
                      ></path>
                      <path
                        id="Path_37318"
                        fill="#e0a365"
                        d="m271.139 197.259-.45-43.98h-.889l.45 43.98Z"
                        data-name="Path 37318"
                        transform="translate(-62.873 -35.88)"
                      ></path>
                      <path
                        id="Path_37319"
                        fill="#d39059"
                        d="m279.91 185-35.26 2.845.072-2.834 35.395-2.864Z"
                        data-name="Path 37319"
                        transform="translate(-57.012 -42.639)"
                      ></path>
                      <path
                        id="Path_37320"
                        fill="#d4884b"
                        d="m279.843 186.092-35.194 2.69.022-.9 35.171-1.889Z"
                        data-name="Path 37320"
                        transform="translate(-57.012 -43.538)"
                      ></path>
                      <path
                        id="Path_37321"
                        fill="#e8ac6b"
                        d="m279.742 187.533-34.985-3.065.074-2.892 35.117 3.105Z"
                        data-name="Path 37321"
                        transform="translate(-57.037 -42.504)"
                      ></path>
                      <path
                        id="Path_37322"
                        fill="#dd9f62"
                        d="m270.336 187.165-25.578-1.91.008-.317Z"
                        data-name="Path 37322"
                        transform="translate(-57.038 -43.291)"
                      ></path>
                      <g
                        id="Group_9673"
                        data-name="Group 9673"
                        opacity="0.61"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(165.778 117.84)"
                      >
                        <g id="Group_9672" data-name="Group 9672">
                          <g
                            id="Group_9671"
                            clipPath="url(#computer-path-33)"
                            data-name="Group 9671"
                          >
                            <path
                              id="Path_37323"
                              fill="#e0dbd3"
                              d="m238.184 193.525-.3-7.523.276-10.915-.617-.477.195-12.571-.946-8.184-19.834.4 2.057 7.811-1.394-.031.63 13.094-1.02.009v11.392l7.541-.07-8.627.081.65 10.848h20.364Z"
                              data-name="Path 37323"
                              transform="translate(-216.149 -153.856)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37324"
                        fill="#d89150"
                        d="m238.493 181.576-20.929 5.152v2.911l20.856-5.171Z"
                        data-name="Path 37324"
                        transform="translate(-50.701 -42.504)"
                      ></path>
                      <path
                        id="Path_37325"
                        fill="#c6824a"
                        d="m238.41 185.416-20.845-1.552v2.836l20.773 1.546Z"
                        data-name="Path 37325"
                        transform="translate(-50.701 -43.04)"
                      ></path>
                      <g
                        id="Group_9676"
                        data-name="Group 9676"
                        opacity="0.61"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(166.864 141.647)"
                      >
                        <g id="Group_9675" data-name="Group 9675">
                          <g
                            id="Group_9674"
                            clipPath="url(#computer-path-34)"
                            data-name="Group 9674"
                          >
                            <path
                              id="Path_37326"
                              fill="#e0dbd3"
                              d="m238.428 184.938-19.012 4.577a1.46 1.46 0 0 1-1.67-2.046l-.182.045v2.911l20.856-5.171Z"
                              data-name="Path 37326"
                              transform="translate(-217.564 -184.938)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_9679"
                        data-name="Group 9679"
                        opacity="0.61"
                        style={{ mixBlendMode: "multiply", isolation: "isolate" }}
                        transform="translate(166.864 140.824)"
                      >
                        <g id="Group_9678" data-name="Group 9678">
                          <g
                            id="Group_9677"
                            clipPath="url(#computer-path-35)"
                            data-name="Group 9677"
                          >
                            <path
                              id="Path_37327"
                              fill="#e0dbd3"
                              d="m238.359 187.382-19.395-1.412a1.465 1.465 0 0 1-1.219-2.092l-.182-.014v2.836l20.773 1.546Z"
                              data-name="Path 37327"
                              transform="translate(-217.564 -183.864)"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path
                        id="Path_37328"
                        fill="#d89150"
                        d="m229.586 154.125-.206 43.328h.853l.206-43.345Z"
                        data-name="Path 37328"
                        transform="translate(-53.454 -36.074)"
                      ></path>
                      <path
                        id="Path_37329"
                        fill="#bc723f"
                        d="m228.794 154.142.206 43.315h.853l-.206-43.332Z"
                        data-name="Path 37329"
                        transform="translate(-53.318 -36.078)"
                      ></path>
                      <path
                        id="Path_37330"
                        fill="#fff"
                        d="m278.336 234.058-12.885 1.883a1.52 1.52 0 0 1-1.725-1.282l-1.684-11.484a1.52 1.52 0 0 1 1.285-1.722l12.885-1.884a1.52 1.52 0 0 1 1.724 1.283l1.683 11.484a1.52 1.52 0 0 1-1.284 1.722"
                        data-name="Path 37330"
                        transform="translate(-61.062 -51.394)"
                      ></path>
                      <path
                        id="Path_37331"
                        fill="#bc723f"
                        d="M277.517 228.258a1.2 1.2 0 0 0-.176-.494l-.007-.01-1.437-2.008a.184.184 0 0 0-.249-.048l-.762.49.651-2.634a.184.184 0 0 0-.286-.193l-.747.535-.909-.864a1.2 1.2 0 0 0-.448-.273 1.3 1.3 0 0 0-.6-.054l-.1.015-2.737.425a1.25 1.25 0 0 0-.553.233 1.2 1.2 0 0 0-.344.4l-1.275 2.421a.18.18 0 0 0-.012.139.19.19 0 0 0 .09.109l.884.463-2.584.881a.18.18 0 0 0-.124.17.18.18 0 0 0 .116.175l.854.339-.237 1.23a1.24 1.24 0 0 0 .29 1.055l.066.074 1.18 1.329.591.666.066.075a1.24 1.24 0 0 0 1.015.414h.007l2.442-.268h.007a.183.183 0 0 0 .156-.2l-.087-.988 1.963 1.852a.19.19 0 0 0 .153.048.2.2 0 0 0 .054-.018.18.18 0 0 0 .1-.184l-.1-.913 1.2-.365a1.24 1.24 0 0 0 .8-.748l.035-.093.515-1.366.426-1.13.035-.093a1.25 1.25 0 0 0 .069-.6m-5.426 2.344a.19.19 0 0 0-.144-.034l-3.14.571a2 2 0 0 1-.272.015 2 2 0 0 1 .048-.268l.4-1.532.8.319a.184.184 0 0 0 .232-.255l-1.2-2.346.693.364a.2.2 0 0 0 .112.019l.034-.008a.19.19 0 0 0 .108-.1l1.4-3.175a2 2 0 0 1 .134-.237 2 2 0 0 1 .2.185l1.075 1.164-.7.5a.183.183 0 0 0 .09.332l2.644.257-.739.476a.19.19 0 0 0-.082.126.18.18 0 0 0 .04.145l2.032 2.485a2 2 0 0 1 .137.228 2 2 0 0 1-.26.083l-1.544.361-.092-.857a.184.184 0 0 0-.334-.086l-1.525 2.171-.067-.774a.18.18 0 0 0-.072-.13"
                        data-name="Path 37331"
                        transform="translate(-61.94 -52.129)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="Component_25_1"
                data-name="Component 25 – 1"
                class="cooperateParner"
              >
                <g id="Group_9951" data-name="Group 9951">
                  <g id="Group_9950" clipPath="url(#computer-path)" data-name="Group 9950">
                    <path
                      id="Path_37624"
                      fill="#e1f2fc"
                      d="M123.631.3c35.917-2.526 68.784 10.85 90.8 33.735 34.964 15.689 59.743 48.1 61.935 87.086 3.253 57.931-44.59 108.435-106.866 112.8a118.8 118.8 0 0 1-48.306-6.5c-.789.076-1.579.136-2.382.2C56.535 232 3.423 188.582.156 130.666-1.7 97.585 13.117 66.923 37.747 45.894 57.067 20.421 87.973 2.8 123.631.3"
                      data-name="Path 37624"
                    ></path>
                    <path
                      id="Path_37625"
                      fill="#fff"
                      fillRule="evenodd"
                      d="M92.14 63.813a20.9 20.9 0 1 1 6.54 36.637 9.18 9.18 0 0 1-6.718-.859 13.2 13.2 0 0 1-15.662-.939A18.08 18.08 0 1 1 62.249 66.8a15.686 15.686 0 0 1 29.891-2.987"
                      data-name="Path 37625"
                      transform="translate(-10.889 -12.669)"
                    ></path>
                    <path
                      id="Path_37626"
                      fill="#fff"
                      fillRule="evenodd"
                      d="M295.766 135.366a16.539 16.539 0 1 0-5.172 29.007 7.24 7.24 0 0 0 5.322-.678 10.45 10.45 0 0 0 12.4-.747 14.316 14.316 0 1 0 11.124-25.224 12.422 12.422 0 0 0-23.669-2.359"
                      data-name="Path 37626"
                      transform="translate(-62.73 -29.891)"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_9953"
                  data-name="Group 9953"
                  transform="translate(9.208 176.522)"
                >
                  <g
                    id="Group_9952"
                    clipPath="url(#computer-path-37)"
                    data-name="Group 9952"
                  >
                    <path
                      id="Rectangle_4678"
                      fill="url(#linear-gradient2)"
                      d="M0 0h255.994v81.347H0z"
                      data-name="Rectangle 4678"
                    ></path>
                  </g>
                </g>
                <g id="Group_9955" data-name="Group 9955">
                  <g id="Group_9954" clipPath="url(#computer-path)" data-name="Group 9954">
                    <path
                      id="Path_37628"
                      fill="#75c8d1"
                      fillRule="evenodd"
                      d="M266.95 330.888c0 5.693-55.746 10.308-124.513 10.308s-124.512-4.615-124.512-10.308 55.747-10.308 124.513-10.308 124.513 4.615 124.513 10.308"
                      data-name="Path 37628"
                      transform="translate(-4.177 -75.043)"
                    ></path>
                    <path
                      id="Path_37629"
                      fill="#a5becb"
                      d="M147.218 85.868v13.741l-30.794 5.365-30.794-5.365V85.868Z"
                      data-name="Path 37629"
                      transform="translate(-19.955 -20.1)"
                    ></path>
                    <path
                      id="Rectangle_4679"
                      fill="#c4d5da"
                      d="M0 0h83.584v170.781H0z"
                      data-name="Rectangle 4679"
                      transform="translate(54.677 79.508)"
                    ></path>
                    <path
                      id="Rectangle_4680"
                      fill="#a5becb"
                      d="M0 0h13.197v29.445H0z"
                      data-name="Rectangle 4680"
                      transform="translate(96.469 220.844)"
                    ></path>
                    <path
                      id="Rectangle_4681"
                      fill="#fff"
                      d="M0 0h13.197v29.445H0z"
                      data-name="Rectangle 4681"
                      transform="translate(83.271 220.844)"
                    ></path>
                    <path
                      id="Rectangle_4682"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4682"
                      transform="translate(114.066 134.472)"
                    ></path>
                    <path
                      id="Rectangle_4683"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4683"
                      transform="translate(114.066 199.251)"
                    ></path>
                    <path
                      id="Rectangle_4684"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4684"
                      transform="translate(114.066 177.658)"
                    ></path>
                    <path
                      id="Rectangle_4685"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4685"
                      transform="translate(114.066 156.065)"
                    ></path>
                    <path
                      id="Rectangle_4686"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4686"
                      transform="translate(65.675 112.879)"
                    ></path>
                    <path
                      id="Rectangle_4687"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4687"
                      transform="translate(89.87 112.879)"
                    ></path>
                    <path
                      id="Rectangle_4688"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4688"
                      transform="translate(89.87 156.065)"
                    ></path>
                    <path
                      id="Rectangle_4689"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4689"
                      transform="translate(65.675 156.065)"
                    ></path>
                    <path
                      id="Rectangle_4690"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4690"
                      transform="translate(65.675 177.658)"
                    ></path>
                    <path
                      id="Rectangle_4691"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4691"
                      transform="translate(65.675 134.472)"
                    ></path>
                    <path
                      id="Rectangle_4692"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4692"
                      transform="translate(65.675 199.251)"
                    ></path>
                    <path
                      id="Rectangle_4693"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4693"
                      transform="translate(89.87 134.472)"
                    ></path>
                    <path
                      id="Rectangle_4694"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4694"
                      transform="translate(89.87 199.251)"
                    ></path>
                    <path
                      id="Rectangle_4695"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4695"
                      transform="translate(89.87 177.658)"
                    ></path>
                    <path
                      id="Rectangle_4696"
                      fill="#fff"
                      d="M0 0h13.197v11.778H0z"
                      data-name="Rectangle 4696"
                      transform="translate(114.066 112.879)"
                    ></path>
                    <path
                      id="Path_37630"
                      fill="#8ba0ac"
                      d="M87.721 127.82a3.9 3.9 0 0 1-1.535-1.471 4.29 4.29 0 0 1 .006-4.234 3.96 3.96 0 0 1 1.541-1.47 4.5 4.5 0 0 1 2.194-.532 4.6 4.6 0 0 1 1.8.343 3.7 3.7 0 0 1 1.375 1l-.963.9a2.8 2.8 0 0 0-2.139-.939 3 3 0 0 0-1.479.361 2.6 2.6 0 0 0-1.019 1 3.06 3.06 0 0 0 0 2.907 2.6 2.6 0 0 0 1.019 1 3 3 0 0 0 1.479.361 2.8 2.8 0 0 0 2.142-.95l.963.915a3.7 3.7 0 0 1-1.381 1 4.6 4.6 0 0 1-1.8.343 4.5 4.5 0 0 1-2.194-.532"
                      data-name="Path 37630"
                      transform="translate(-19.955 -28.117)"
                    ></path>
                    <path
                      id="Path_37631"
                      fill="#8ba0ac"
                      d="M98.375 127.82a3.94 3.94 0 0 1-1.547-1.476 4.25 4.25 0 0 1 0-4.222 3.94 3.94 0 0 1 1.547-1.476 4.86 4.86 0 0 1 4.423 0 3.96 3.96 0 0 1 1.547 1.471 4.27 4.27 0 0 1 0 4.233 3.96 3.96 0 0 1-1.547 1.471 4.86 4.86 0 0 1-4.423 0m3.655-1.133a2.6 2.6 0 0 0 1.009-1.007 3.04 3.04 0 0 0 0-2.894 2.6 2.6 0 0 0-1.009-1.007 3.07 3.07 0 0 0-2.888 0 2.6 2.6 0 0 0-1.009 1.007 3.04 3.04 0 0 0 0 2.894 2.6 2.6 0 0 0 1.009 1.007 3.07 3.07 0 0 0 2.888 0"
                      data-name="Path 37631"
                      transform="translate(-22.434 -28.117)"
                    ></path>
                    <path
                      id="Path_37632"
                      fill="#8ba0ac"
                      d="m116.961 128.273-.011-5.309-2.635 4.394h-.665l-2.635-4.325v5.24h-1.42v-8.01h1.226l3.186 5.309 3.128-5.309h1.226l.012 8.01Z"
                      data-name="Path 37632"
                      transform="translate(-25.539 -28.152)"
                    ></path>
                    <path
                      id="Path_37633"
                      fill="#8ba0ac"
                      d="M128.977 120.606a2.64 2.64 0 0 1 1.186.984 3 3 0 0 1 0 3.038 2.63 2.63 0 0 1-1.186.99 4.4 4.4 0 0 1-1.816.343h-1.81v2.312h-1.489v-8.01h3.3a4.45 4.45 0 0 1 1.816.343m-.406 3.684a1.63 1.63 0 0 0 0-2.357 2.3 2.3 0 0 0-1.478-.411h-1.744v3.178h1.742a2.3 2.3 0 0 0 1.478-.413"
                      data-name="Path 37633"
                      transform="translate(-28.864 -28.152)"
                    ></path>
                    <path
                      id="Path_37634"
                      fill="#8ba0ac"
                      d="M138.892 126.418h-4.01l-.79 1.854h-1.535l3.609-8.01h1.466l3.621 8.01h-1.558Zm-.492-1.167-1.512-3.5-1.5 3.5Z"
                      data-name="Path 37634"
                      transform="translate(-30.89 -28.152)"
                    ></path>
                    <path
                      id="Path_37635"
                      fill="#8ba0ac"
                      d="M152.351 120.263v8.01h-1.226l-4.422-5.424v5.424h-1.479v-8.01h1.226l4.423 5.424v-5.424Z"
                      data-name="Path 37635"
                      transform="translate(-33.843 -28.152)"
                    ></path>
                    <path
                      id="Path_37636"
                      fill="#8ba0ac"
                      d="M160.427 125.446v2.826h-1.489v-2.8l-3.151-5.207h1.593l2.349 3.9 2.371-3.9h1.467Z"
                      data-name="Path 37636"
                      transform="translate(-36.304 -28.152)"
                    ></path>
                    <path
                      id="Rectangle_4697"
                      fill="#a5becb"
                      d="M0 0h20.104v12.715H0z"
                      data-name="Rectangle 4697"
                      transform="translate(185.709 93.163)"
                    ></path>
                    <path
                      id="Path_37637"
                      fill="#bbd8e7"
                      d="M269.237 134.743v11.711h-40.208v-11.711h40.207Z"
                      data-name="Path 37637"
                      transform="translate(-53.372 -31.542)"
                    ></path>
                    <path
                      id="Rectangle_4698"
                      fill="#a5becb"
                      d="M0 0h35.628v78.632H0z"
                      data-name="Rectangle 4698"
                      transform="translate(128.748 161.758)"
                    ></path>
                    <path
                      id="Rectangle_4699"
                      fill="#8ba0ac"
                      d="M0 0h35.628v12.046H0z"
                      data-name="Rectangle 4699"
                      transform="translate(128.748 238.382)"
                    ></path>
                    <path
                      id="Rectangle_4700"
                      fill="#c4d5da"
                      d="M0 0h67.013v137.188H0z"
                      data-name="Rectangle 4700"
                      transform="translate(162.254 113.24)"
                    ></path>
                    <path
                      id="Path_37638"
                      fill="#6cf"
                      d="M224.66 158.771v90.343h46.909v-90.343Z"
                      data-name="Path 37638"
                      transform="translate(-52.354 -37.166)"
                    ></path>
                    <path
                      id="Rectangle_4701"
                      fill="#bbd8e7"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4701"
                      transform="translate(172.306 191.872)"
                    ></path>
                    <path
                      id="Rectangle_4702"
                      fill="#bbd8e7"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4702"
                      transform="translate(172.306 171.795)"
                    ></path>
                    <path
                      id="Rectangle_4703"
                      fill="#bbd8e7"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4703"
                      transform="translate(172.306 151.719)"
                    ></path>
                    <path
                      id="Rectangle_4704"
                      fill="#bbd8e7"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4704"
                      transform="translate(172.306 131.643)"
                    ></path>
                    <path
                      id="Rectangle_4705"
                      fill="#bbd8e7"
                      d="M0 0h10.052v13.384H0z"
                      data-name="Rectangle 4705"
                      transform="translate(140.475 191.871)"
                    ></path>
                    <path
                      id="Rectangle_4706"
                      fill="#fff"
                      d="M0 0h10.052v21.75H0z"
                      data-name="Rectangle 4706"
                      transform="translate(140.475 205.256)"
                    ></path>
                    <path
                      id="Rectangle_4707"
                      fill="#fff"
                      d="M0 0h10.052v21.749H0z"
                      data-name="Rectangle 4707"
                      transform="translate(140.475 170.122)"
                    ></path>
                    <path
                      id="Rectangle_4708"
                      fill="#fff"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4708"
                      transform="translate(172.306 201.91)"
                    ></path>
                    <path
                      id="Rectangle_4709"
                      fill="#fff"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4709"
                      transform="translate(172.306 181.833)"
                    ></path>
                    <path
                      id="Rectangle_4710"
                      fill="#fff"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4710"
                      transform="translate(172.306 161.757)"
                    ></path>
                    <path
                      id="Rectangle_4711"
                      fill="#fff"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4711"
                      transform="translate(172.306 141.681)"
                    ></path>
                    <path
                      id="Rectangle_4712"
                      fill="#fff"
                      d="M0 0h46.909v10.038H0z"
                      data-name="Rectangle 4712"
                      transform="translate(172.306 121.605)"
                    ></path>
                  </g>
                </g>
              </g>
              <g
                id="Group_9958"
                data-name="Group 9958"
                transform="translate(1124.762 5770.13)"
              >
                <g
                  id="Group_9608-3"
                  data-name="Group 9608"
                  transform="rotate(180 63.039 9.8)"
                >
                  <path
                    id="Line_503-7"
                    fill="none"
                    stroke="#8bdc65"
                    strokeLinejoin="round"
                    strokeWidth="10"
                    d="M0 0h101.937"
                    data-name="Line 503"
                  ></path>
                </g>
                <path
                  id="Path_37166-3"
                  fill="#8bdc65"
                  d="M0 0v39.2l37.193-19.6Z"
                  data-name="Path 37166"
                  transform="rotate(180 18.596 19.601)"
                ></path>
              </g>
              <g
                id="Group_9959"
                data-name="Group 9959"
                transform="rotate(180 625.42 2950.753)"
              >
                <g
                  id="Group_9608-4"
                  data-name="Group 9608"
                  transform="rotate(180 63.04 9.8)"
                >
                  <path
                    id="Line_503-8"
                    fill="none"
                    stroke="#8bdc65"
                    strokeLinejoin="round"
                    strokeWidth="10"
                    d="M0 0h101.937"
                    data-name="Line 503"
                  ></path>
                </g>
                <path
                  id="Path_37166-4"
                  fill="#8bdc65"
                  d="M0 0v39.2l37.193-19.6Z"
                  data-name="Path 37166"
                  transform="rotate(180 18.596 19.601)"
                ></path>
              </g>
              <rect
                id="Rectangle_4714"
                width="352"
                height="62"
                fill="#6bc441"
                data-name="Rectangle 4714"
                rx="10"
                transform="translate(1046.413 5576.695)"
              ></rect>
              <text
                id="提供回收物"
                fill="#fff"
                fontFamily="Noto Sans CJK TC"
                fontSize="26"
                transform="translate(1118.669 5618.064)"
              >
                <tspan x="30" y="0">
                  提供回收物
                </tspan>
              </text>
            </g>
          </CooperateSvgImg>



          <div style={{ position: "relative", textAlign: "center" }}>
            <CircleDecorationRight src={awsUrl("website/ne-products/Ellipse1828.png")} alt="綠色圓圈裝飾" />
          </div>


          <CircleDecorationRightBottom src={awsUrl("website/ne-products/Ellipse1825.png")} alt="綠色圓圈裝飾" />

        </CooperationSection>
        <CooperationHeadTitle>
          <div className="main">合作夥伴</div>
        </CooperationHeadTitle>

        <StyledSliderHTML>
          <div className="wrapper">
          <Slider {...settings} className="carousel">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="90%"
              height="100%"
              viewBox="0 0 472 730"
            >
              <defs>
                <pattern
                  id="pattern_partner"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 225 225"
                >
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/59dbbe2d37c1bc4032a4092384dc7d2c.png"
                    width="225"
                    height="225"
                  ></image>
                </pattern>
                <filter
                  id="Rectangle_4783"
                  width="472"
                  height="730"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3"></feOffset>
                  <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                  <feFlood floodOpacity="0.161"></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g id="Group_9967" data-name="Group 9967" transform="translate(-279 -6585)">
                <g filter="url(#Rectangle_4783)" transform="translate(279 6585)">
                  <rect
                    id="Rectangle_4783-2"
                    width="454"
                    height="712"
                    fill="#fff"
                    data-name="Rectangle 4783"
                    rx="10"
                    transform="translate(9 6)"
                  ></rect>
                </g>
                <path
                  id="_8fd86b408e2f482d86aa347c824d2bb6"
                  fill="url(#pattern_partner)"
                  d="M0 0h394v274H0z"
                  data-name="8fd86b408e2f482d86aa347c824d2bb6"
                  transform="translate(318 6621)"
                ></path>
                <text
                  id="幫助人次"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7111.5)"
                >
                  <tspan x="0" y="0">
                    幫助人次
                  </tspan>
                </text>
                <text
                  id="正隆股份有限公司_"
                  fill="#252525"
                  data-name="正隆股份有限公司​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="30"
                  transform="translate(318 6940)"
                >
                  <tspan x="0" y="0">
                    正隆股份有限公司
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <text
                  id="促進回收量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7173.5)"
                >
                  <tspan x="0" y="0">
                    促進回收量
                  </tspan>
                </text>
                <text
                  id="減碳量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7235.5)"
                >
                  <tspan x="0" y="0">
                    減碳量
                  </tspan>
                </text>
                <text
                  id="位"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7111.5)"
                >
                  <tspan x="0" y="0">
                    位
                  </tspan>
                </text>
                <text
                  id="公斤"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7173.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="公斤-2"
                  fill="#252525"
                  data-name="公斤"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7235.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="_0_000"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7075.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-2"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7137.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-3"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7199.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_2025年提供XXX份蒲公英_淨世代環保家用品"
                  fill="#252525"
                  data-name="2025年提供XXX份蒲公英、淨世代環保家用品"
                  fontFamily="SegoeUI, Segoe UI"
                  fontSize="24"
                  transform="translate(318 6960)"
                >
                  <tspan x="0" y="26">
                    2025
                  </tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    年提供
                  </tspan>
                  <tspan y="26">XXX</tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    份蒲公英、淨世代
                  </tspan>
                  <tspan x="0" y="66" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    環保家用品
                  </tspan>
                </text>
                <path
                  id="Line_507"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 507"
                  transform="translate(318 7048)"
                ></path>
                <path
                  id="Line_508"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 508"
                  transform="translate(318 6895)"
                ></path>
              </g>
            </svg>

          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="90%"
              height="100%"
              viewBox="0 0 472 730"
            >
              <defs>
                <pattern
                  id="pattern_partner"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 225 225"
                >
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/59dbbe2d37c1bc4032a4092384dc7d2c.png"
                    width="225"
                    height="225"
                  ></image>
                </pattern>
                <filter
                  id="Rectangle_4783"
                  width="472"
                  height="730"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3"></feOffset>
                  <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                  <feFlood floodOpacity="0.161"></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g id="Group_9967" data-name="Group 9967" transform="translate(-279 -6585)">
                <g filter="url(#Rectangle_4783)" transform="translate(279 6585)">
                  <rect
                    id="Rectangle_4783-2"
                    width="454"
                    height="712"
                    fill="#fff"
                    data-name="Rectangle 4783"
                    rx="10"
                    transform="translate(9 6)"
                  ></rect>
                </g>
                <path
                  id="_8fd86b408e2f482d86aa347c824d2bb6"
                  fill="url(#pattern_partner)"
                  d="M0 0h394v274H0z"
                  data-name="8fd86b408e2f482d86aa347c824d2bb6"
                  transform="translate(318 6621)"
                ></path>
                <text
                  id="幫助人次"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7111.5)"
                >
                  <tspan x="0" y="0">
                    幫助人次
                  </tspan>
                </text>
                <text
                  id="正隆股份有限公司_"
                  fill="#252525"
                  data-name="正隆股份有限公司​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="30"
                  transform="translate(318 6940)"
                >
                  <tspan x="0" y="0">
                    正隆股份有限公司
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <text
                  id="促進回收量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7173.5)"
                >
                  <tspan x="0" y="0">
                    促進回收量
                  </tspan>
                </text>
                <text
                  id="減碳量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7235.5)"
                >
                  <tspan x="0" y="0">
                    減碳量
                  </tspan>
                </text>
                <text
                  id="位"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7111.5)"
                >
                  <tspan x="0" y="0">
                    位
                  </tspan>
                </text>
                <text
                  id="公斤"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7173.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="公斤-2"
                  fill="#252525"
                  data-name="公斤"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7235.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="_0_000"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7075.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-2"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7137.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-3"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7199.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_2025年提供XXX份蒲公英_淨世代環保家用品"
                  fill="#252525"
                  data-name="2025年提供XXX份蒲公英、淨世代環保家用品"
                  fontFamily="SegoeUI, Segoe UI"
                  fontSize="24"
                  transform="translate(318 6960)"
                >
                  <tspan x="0" y="26">
                    2025
                  </tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    年提供
                  </tspan>
                  <tspan y="26">XXX</tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    份蒲公英、淨世代
                  </tspan>
                  <tspan x="0" y="66" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    環保家用品
                  </tspan>
                </text>
                <path
                  id="Line_507"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 507"
                  transform="translate(318 7048)"
                ></path>
                <path
                  id="Line_508"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 508"
                  transform="translate(318 6895)"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="90%"
              height="100%"
              viewBox="0 0 472 730"
            >
              <defs>
                <pattern
                  id="pattern_partner"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 225 225"
                >
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/59dbbe2d37c1bc4032a4092384dc7d2c.png"
                    width="225"
                    height="225"
                  ></image>
                </pattern>
                <filter
                  id="Rectangle_4783"
                  width="472"
                  height="730"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3"></feOffset>
                  <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                  <feFlood floodOpacity="0.161"></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g id="Group_9967" data-name="Group 9967" transform="translate(-279 -6585)">
                <g filter="url(#Rectangle_4783)" transform="translate(279 6585)">
                  <rect
                    id="Rectangle_4783-2"
                    width="454"
                    height="712"
                    fill="#fff"
                    data-name="Rectangle 4783"
                    rx="10"
                    transform="translate(9 6)"
                  ></rect>
                </g>
                <path
                  id="_8fd86b408e2f482d86aa347c824d2bb6"
                  fill="url(#pattern_partner)"
                  d="M0 0h394v274H0z"
                  data-name="8fd86b408e2f482d86aa347c824d2bb6"
                  transform="translate(318 6621)"
                ></path>
                <text
                  id="幫助人次"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7111.5)"
                >
                  <tspan x="0" y="0">
                    幫助人次
                  </tspan>
                </text>
                <text
                  id="正隆股份有限公司_"
                  fill="#252525"
                  data-name="正隆股份有限公司​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="30"
                  transform="translate(318 6940)"
                >
                  <tspan x="0" y="0">
                    正隆股份有限公司
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <text
                  id="促進回收量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7173.5)"
                >
                  <tspan x="0" y="0">
                    促進回收量
                  </tspan>
                </text>
                <text
                  id="減碳量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7235.5)"
                >
                  <tspan x="0" y="0">
                    減碳量
                  </tspan>
                </text>
                <text
                  id="位"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7111.5)"
                >
                  <tspan x="0" y="0">
                    位
                  </tspan>
                </text>
                <text
                  id="公斤"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7173.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="公斤-2"
                  fill="#252525"
                  data-name="公斤"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7235.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="_0_000"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7075.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-2"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7137.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-3"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7199.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_2025年提供XXX份蒲公英_淨世代環保家用品"
                  fill="#252525"
                  data-name="2025年提供XXX份蒲公英、淨世代環保家用品"
                  fontFamily="SegoeUI, Segoe UI"
                  fontSize="24"
                  transform="translate(318 6960)"
                >
                  <tspan x="0" y="26">
                    2025
                  </tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    年提供
                  </tspan>
                  <tspan y="26">XXX</tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    份蒲公英、淨世代
                  </tspan>
                  <tspan x="0" y="66" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    環保家用品
                  </tspan>
                </text>
                <path
                  id="Line_507"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 507"
                  transform="translate(318 7048)"
                ></path>
                <path
                  id="Line_508"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 508"
                  transform="translate(318 6895)"
                ></path>
              </g>
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="90%"
              height="100%"
              viewBox="0 0 472 730"
            >
              <defs>
                <pattern
                  id="pattern_partner"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 225 225"
                >
                  <image
                    xlinkHref="https://s3-ap-northeast-1.amazonaws.com/zerozero-storage/59dbbe2d37c1bc4032a4092384dc7d2c.png"
                    width="225"
                    height="225"
                  ></image>
                </pattern>
                <filter
                  id="Rectangle_4783"
                  width="472"
                  height="730"
                  x="0"
                  y="0"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3"></feOffset>
                  <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                  <feFlood floodOpacity="0.161"></feFlood>
                  <feComposite in2="blur" operator="in"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g id="Group_9967" data-name="Group 9967" transform="translate(-279 -6585)">
                <g filter="url(#Rectangle_4783)" transform="translate(279 6585)">
                  <rect
                    id="Rectangle_4783-2"
                    width="454"
                    height="712"
                    fill="#fff"
                    data-name="Rectangle 4783"
                    rx="10"
                    transform="translate(9 6)"
                  ></rect>
                </g>
                <path
                  id="_8fd86b408e2f482d86aa347c824d2bb6"
                  fill="url(#pattern_partner)"
                  d="M0 0h394v274H0z"
                  data-name="8fd86b408e2f482d86aa347c824d2bb6"
                  transform="translate(318 6621)"
                ></path>
                <text
                  id="幫助人次"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7111.5)"
                >
                  <tspan x="0" y="0">
                    幫助人次
                  </tspan>
                </text>
                <text
                  id="正隆股份有限公司_"
                  fill="#252525"
                  data-name="正隆股份有限公司​"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="30"
                  transform="translate(318 6940)"
                >
                  <tspan x="0" y="0">
                    正隆股份有限公司
                  </tspan>
                  <tspan y="0" fontFamily="SegoeUI, Segoe UI">

                  </tspan>
                </text>
                <text
                  id="促進回收量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7173.5)"
                >
                  <tspan x="0" y="0">
                    促進回收量
                  </tspan>
                </text>
                <text
                  id="減碳量"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(318 7235.5)"
                >
                  <tspan x="0" y="0">
                    減碳量
                  </tspan>
                </text>
                <text
                  id="位"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7111.5)"
                >
                  <tspan x="0" y="0">
                    位
                  </tspan>
                </text>
                <text
                  id="公斤"
                  fill="#252525"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7173.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="公斤-2"
                  fill="#252525"
                  data-name="公斤"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                  fontSize="24"
                  transform="translate(580.139 7235.5)"
                >
                  <tspan x="0" y="0">
                    公斤
                  </tspan>
                </text>
                <text
                  id="_0_000"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7075.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-2"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7137.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_0_000-3"
                  fill="#252525"
                  data-name="0,000"
                  fontFamily="ArialMT, Arial"
                  fontSize="40"
                  transform="translate(464 7199.5)"
                >
                  <tspan x="-10.098" y="36">
                    0,000
                  </tspan>
                </text>
                <text
                  id="_2025年提供XXX份蒲公英_淨世代環保家用品"
                  fill="#252525"
                  data-name="2025年提供XXX份蒲公英、淨世代環保家用品"
                  fontFamily="SegoeUI, Segoe UI"
                  fontSize="24"
                  transform="translate(318 6960)"
                >
                  <tspan x="0" y="26">
                    2025
                  </tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    年提供
                  </tspan>
                  <tspan y="26">XXX</tspan>
                  <tspan y="26" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    份蒲公英、淨世代
                  </tspan>
                  <tspan x="0" y="66" fontFamily="YuGothicUI-Regular, Yu Gothic UI">
                    環保家用品
                  </tspan>
                </text>
                <path
                  id="Line_507"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 507"
                  transform="translate(318 7048)"
                ></path>
                <path
                  id="Line_508"
                  fill="none"
                  stroke="#bfbfbf"
                  strokeWidth="1"
                  d="M0 0h394"
                  data-name="Line 508"
                  transform="translate(318 6895)"
                ></path>
              </g>
            </svg>
          </div>

          </Slider>
          </div>


        </StyledSliderHTML >




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
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <SubmitButton type="submit">送出</SubmitButton>  
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

export default ScavengerLanding;