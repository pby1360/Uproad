import React from "react";

const Price = () => {
  return (
    <section>
      <article className="price-content-info">
        <section className="price-content-info-phrase">
          <h1>구독료</h1>
          <h2>원하는 카테고리를 선택하세요.</h2>
          <h2>카테고리 갯수에 따라 할인이 적용됩니다.</h2>
          <div className="price-select-content">
            <section style={{display: "flex"}}>
              <article style={{flex: "1"}}>
                <ul style={{listStyle: "none"}}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </article>
              <article style={{flex: "1"}}>
                <ul style={{listStyle: "none"}}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </article>
              <article style={{flex: "1"}}>
                <ul style={{listStyle: "none"}}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </article>
            </section>
          </div>
        </section>
      </article>
    </section>
  )
}

export default Price;