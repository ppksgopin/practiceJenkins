import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// 浮動按鈕樣式
const FloatingButtons = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 1000;

  .button {
    margin: 8px 0;
    width: 80px;
    height: 80px;
    background-color: #4CAF50; /* 默認顏色 */
    color: black; /* 字體顏色設置為黑色 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: bold; /* 可選，增加字體粗細 */
    border-radius: 5px; /* 方形按鈕的圓角 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #d4cc00; /* hover 時稍微變暗的黃色 */
      transform: scale(1.1);
    }
  }

  .button.booking {
    background-color: #E1E100; /* 修改立即預約按鈕的背景顏色 */
  }

  .button.phone {
    background-color: #00AEAE; /* 電話按鈕顏色 */
    // background-image: url('https://via.placeholder.com/80'); /* 替換為你的圖片網址 */
    background-size: cover;
    background-position: center;
    color: transparent; /* 隱藏文字 */
  }

  .button.events {
    background-color: #01B468; /* 活動按鈕顏色 */
  }
`;


// 浮動按鈕組件
const FloatingButtonGroup = ({ onButtonClick }) => {
  return (
    <FloatingButtons>
      <div className="button booking" onClick={() => onButtonClick('booking')}>
        立即預約
      </div>
      <div className="button events" onClick={() => onButtonClick('events')}>
        最新活動
      </div>
      <div className="button phone" onClick={() => onButtonClick('phone')} />
    </FloatingButtons>
  );
};

// 主頁面組件
class MotorcycleUnuseMoneyLanding extends Component {
  handleButtonClick = (action) => {
    switch (action) {
      case 'booking':
        alert('立即預約功能尚未實現');
        break;
      case 'events':
        alert('跳轉到最新活動頁面');
        break;
      case 'phone':
        window.location.href = 'tel:+123456789'; // 修改為您的電話號碼
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>廢機車報廢補助</title>
        </Helmet>

        {/* 渲染浮動按鈕組件 */}
        <FloatingButtonGroup onButtonClick={this.handleButtonClick} />

        {/* 其他頁面內容 */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>歡迎來到廢機車報廢補助頁面</h1>
          <p>這裡是頁面內容...</p>
        </div>
      </div>
    );
  }
}

export default MotorcycleUnuseMoneyLanding;
