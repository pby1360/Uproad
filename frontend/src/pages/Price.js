import React, { useState } from "react";
import PriceStyle from "../styles/Price.scss";
// UI 컴포넌트에서 체크박스 import
import Checkbox from '@material-ui/core/Checkbox';
// UI 컴포넌트에서 AddBox 아이콘 import
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

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

  return (
    <div className={PriceStyle}>
      <section className="price-content-info">
        <article className="price-content-info-phrase">
          <h1>구독료</h1>
          <h2>원하는 카테고리를 선택하세요.</h2>
          <h2>카테고리 갯수에 따라 할인이 적용됩니다.</h2>

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
                      <section className="item-title">마케팅</section>
                      <section className="item-descrip">마케팅 관련 설명</section>
                    </section>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        {/* <input type="checkbox" id="name1" className="checkbox-image"></input> */}
                        {/* icon 속성은 import한 아이콘 사용 */}
                        {/* onChange 속성은 체크될 때 마다 checkItem 함수를 호출함 */}
                        <Checkbox icon={<AddBoxOutlinedIcon />} name="item2" value="5000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <section className="item-title">second Item</section>
                      <section className="item-descrip">second Item 관련 설명</section>
                    </section>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <Checkbox icon={<AddBoxOutlinedIcon />} name="item3" value="4000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <section className="item-title">third Item</section>
                      <section className="item-descrip">third Item 관련 설명</section>
                    </section>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <Checkbox icon={<AddBoxOutlinedIcon />} name="item3" value="2000" onChange={checkItem} className="checkbox-image"/>
                      </section>
                      <section className="item-title">fourth Item</section>
                      <section className="item-descrip">fourth Item 관련 설명</section>
                    </section>
                  </li>
                </ul>
              </article>
            </article>
      </section>
    </div>
  )
}

export default Price;