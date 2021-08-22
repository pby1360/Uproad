import React, { useState } from "react";
import PriceStyle from "../styles/Price.scss";
// UI 컴포넌트에서 체크박스 import
import Checkbox from '@material-ui/core/Checkbox';
// UI 컴포넌트에서 AddBox 아이콘 import
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Button from '@material-ui/core/Button';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from 'react-router-dom';

const Price = () => {

  // react userState를 사용하여 total에 기본 구독료를 입력
  // setTotal은 함수이며 호출 시 total의 값을 변경함
  const [ total, setTotal ] = useState(7000);

  // checkbox 클릭 시 호출 됨
  function checkItem (e) {
    // 호출 시 e에 이벤트 받아옴
    console.log(e.target);
    // 이벤트 발생 시 전달 된 값 저장
    let value = parseInt(e.target.value);
    // 삼항연산자 e.target.checked 의 값이
    // true 이면 setTotal(total + value) 실행
    // false 이면 setTotal(total - value) 실행
    e.target.checked ? setTotal(total + value) : setTotal(total - value);
  }

  const history = useHistory();

  const joinUproad = () => {
    
    //회원 가입 시 1달 무료 체험?
    history.push('/join');
    //이미 가입하여 1달 무료 체험 하였을 경우 팝업 ??
  };

  return (
    <div className={PriceStyle}>
      <section className="price-content-info">
        <article className="price-content-info-phrase">
          <h1>구독료</h1>
          <h2>원하는 카테고리를 선택하세요.</h2>
          <h2>카테고리 갯수에 따라 할인이 적용됩니다.</h2>
          <Button className="button-free" startIcon={<AssignmentTurnedInIcon />} variant="contained" color="primary" disableElevation onClick={joinUproad}>무료 체험 신청하기</Button>

          <article className="price-select-content">
            <section className="monthly-price-title">
              <section className="title">월 구독료</section>
              {/* react는 변수를 html내에서 사용할 때 중괄호{} 안에 선언하여 사용. 함수도 사용할  수 있음 */}
              {/* toLocaleString() 함수는 데이터타입이 number인 변수에 천단위마다 콤마를 삽입하여 String으로 변환 후 돌려줌 */}
              <span className="total-price">{total.toLocaleString()}</span>
              <section className="title">원</section>
            </section>
                <ul className="all-list-content">
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        {/* <input type="checkbox" id="marketing" className="checkbox-image"></input> */}
                        {/* 정석적으로 input type=checkbox를 사용하는게 맞지만 */}
                        {/* 이번 프로젝트에서 하나하나 모두 스타일 코딩하는 것은 시간이 오래 걸리기때문에 */}
                        {/* react에서 가장 많이사용하는 material-ui 컴포넌트 사용 */}
                        {/* defaultChecked 속성은 화면 렌더링 시 기본적으로 체크 되게 해줌 */}
                        {/* diabled 속성은 체크기능을 비활성화 시킴 */}
                        <Checkbox defaultChecked disabled className="checkbox-image"/>
                      </section>
                      <span className="item-emoji">🙋‍♂️</span>
                      {/*<EmojiPeopleIcon className="item-icon"></EmojiPeopleIcon>*/}
                      <section className="item-title">마케팅</section>
                      <section className="item-descrip">마케팅 관련 설명</section>
                      <section className="item-price-content">
                        <section className="item-price">7000</section>
                        <section className="item-price-won">원</section>
                      </section>
                    </section>
                    <ul className="detail-descrip-content">
                      <li className="detail-descrip-title">주요 기능</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명1</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명2</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명3</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명4</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명5</li>
                    </ul>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        {/* <input type="checkbox" id="name1" className="checkbox-image"></input> */}
                        {/* icon 속성은 import한 아이콘 사용 */}
                        {/* onChange 속성은 체크될 때 마다 checkItem 함수를 호출함 */}
                        <Checkbox icon={<AddBoxOutlinedIcon className="checkbox-icon" /> } name="item2" value="5000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <EmojiPeopleIcon className="item-icon"></EmojiPeopleIcon>
                      <section className="item-title">Item 2</section>
                      <section className="item-descrip">Item 관련 설명</section>
                      <section className="item-price-content">
                        <section className="item-price">5000</section>
                        <section className="item-price-won">원</section>
                      </section>
                    </section>
                    <ul className="detail-descrip-content">
                      <li className="detail-descrip-title">주요 기능</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명1</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명2</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명3</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명4</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명5</li>
                    </ul>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <Checkbox icon={<AddBoxOutlinedIcon />} name="item3" value="4000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <EmojiPeopleIcon className="item-icon"></EmojiPeopleIcon>
                      <section className="item-title">Item 3</section>
                      <section className="item-descrip">Item 관련 설명</section>
                      <section className="item-price-content">
                        <section className="item-price">4000</section>
                        <section className="item-price-won">원</section>
                      </section>
                    </section>
                    <ul className="detail-descrip-content">
                      <li className="detail-descrip-title">주요 기능</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명1</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명2</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명3</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명4</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명5</li>
                    </ul>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <Checkbox icon={<AddBoxOutlinedIcon />} name="item3" value="2000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <EmojiPeopleIcon className="item-icon"></EmojiPeopleIcon>
                      <section className="item-title">Item 4</section>
                      <section className="item-descrip">Item 관련 설명</section>
                      <section className="item-price-content">
                        <section className="item-price">2000</section>
                        <section className="item-price-won">원</section>
                      </section>
                    </section>
                    <ul className="detail-descrip-content">
                      <li className="detail-descrip-title">주요 기능</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명1</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명2</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명3</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명4</li>
                      <li className="detail-descrip"><CheckIcon className="check-icon"/>설명5</li>
                    </ul>
                  </li>
                </ul>
                <section className="vat-info">※ 모든 이용요금은 VAT(10%) 별도입니다.</section>
              </article>
            </article>
      </section>
    </div>
  )
}

export default Price;