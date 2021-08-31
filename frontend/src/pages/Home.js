import React from "react";
import HomeStyle from "../styles/Home.scss";
import { Button } from "@material-ui/core";
import FlagIcon from '@material-ui/icons/Flag';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

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
          </span><br/>
          <section className="home-btns">
            <Button className="home-btn-challenge" variant="contained" startIcon={<FlagIcon />}>챌린지 도전하기</Button>
            <Button className="home-btn-history" variant="contained" startIcon={<AssignmentOutlinedIcon />}>우수사례 살펴보기</Button>
          </section>          
        </article>
        <article className="home-middle">
          <h1>챌린지가 뭐에요?</h1>
          <span className="phrase">
            결심을 실천으로 만들고 성공하려는 분들 위해 챌린지를 만들었습니다.<br/>
            마케팅 코치 언발라가 이끌어주고 동기들과 코치가 함께하는 무작정 챌린지!🚀
          </span>
          <h3>30일 내에 고객 유치와 매출 증대를 경험하세요. 허황된 꿈이 아닙니다.</h3>
          <section className="home-img-1">
            <img src="/assets/img-team.jpg" alt="ceo"></img> 
          </section>
        </article>
        {/* <article className="home-bottom">
          <h1>진행중인 챌린지</h1>
          <section className="home-challenges"></section>
        </article> */}
      </section>
    </div>
  )
}

export default Home;