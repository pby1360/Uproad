import React from "react";
import HomeStyle from "../styles/Home.scss";

const Home = () => {
  return (
    <div className={HomeStyle}>
      <section className="home">
        <article className="home-greeting">
          <h1>새로운 도전의 시작, uproad</h1>
          <span className="phrase">
            미루는 것은 괜찮습니다.<br/>
            하지만 미뤄둔 시간만큼 공부하고 고생해야 한다는 것 또한 사실입니다.<br/>
            그러니 언젠가 해야만 하는 일이라면 눈 딱 감고,<br/>
            지금 당장 실천해보세요!
          </span>
        </article>
        <article className="home-middle">
          <h1>챌린지가 뭐에요?</h1>
          <section className="home-img-1">
            <img src="/assets/img-team.jpg" alt="ceo"></img> 
          </section>
        </article>
        <article className="home-bottom">
        </article>
      </section>
    </div>
  )
}

export default Home;