import React from "react";
import PriceStyle from "../styles/Price.scss";


const Price = () => {

  

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
              <span className="total-price">7,000</span>
              <section className="title">원</section>
            </section>
                <ul className="all-list-content">
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <input type="checkbox" id="marketing" className="checkbox-image"></input>
                      </section>
                      <section className="sub_title">마케팅</section>
                  
                    </section>
                  </li>
                  <li className="list-content">
                  <section className="list-content-padding">
                    <section className="checkbox-background">
                        <input type="checkbox" id="name1" className="checkbox-image"></input>
                      </section>
                      <section className="sub_title">???</section>
                    </section>
                  </li>
                  <li className="list-content">
                  <section className="list-content-padding">
                    <section className="checkbox-background">
                        <input type="checkbox" id="name2" className="checkbox-image"></input>
                      </section>
                      <section className="sub_title">???</section>
                    </section>
                  </li>
                  <li className="list-content">
                    <section className="list-content-padding">
                      <section className="checkbox-background">
                        <input type="checkbox" id="name3" className="checkbox-image"></input>
                      </section>
                      <section className="sub_title">???</section>
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