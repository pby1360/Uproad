import React, { useEffect } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    marginRight: 10,
  },
  media: {
    height: 140,
  },
});


const Home = () => {
  const baseUrl = "http://localhost:8080";

  const classes = useStyles();

  useEffect(() => {
    getHello();
  }, []);

  async function getHello () {
    await axios.get(baseUrl + "/api/home")
    .then(function (response) {
         // response  
         console.log(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  }
  return (
    <section>
      <article className="home-content-info">
        <section className="home-content-info-phrase">
          <h1>지키고 싶은</h1>
          <h1>나와의 약속을 고르세요</h1>
          <br />
          <p>아침기상, 운동, 책읽기, 취미연습까지</p>
          <p>나에게 필요한 작은 미션을 선택하세요.</p>
          <p>평균 2주의 짧은 기간으로 부담없이 도전할 수 있어요.</p>
          <article className="buttons">
            <Button variant="contained">컨텐츠 보러가기</Button>
            <Button variant="contained">구독하러 가기</Button>
          </article>
          <article className="home-content-card">
            <p>🔥인기 클래스</p>
            <article className="card-item">
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/img_card_nail.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2">
            네일아트 창업
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            소자본 창업 네일아트. 1인사장님 고수익 비법 강의
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          바로가기
        </Button>
        <Button size="small" color="primary">
          나중에 보기
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/img_card_hair.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            미용실 창업
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            미용실 재료 선정부터 고정지출 줄이기 노하우 강의
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          바로가기
        </Button>
        <Button size="small" color="primary">
          나중에 보기
        </Button>
      </CardActions>
    </Card>
    </article>
          </article>
        </section>
        <section className="home-content-info-img">
          <section>
            <img className="home-content-info-img-1" src="/assets/ceo_info2.jpg" alt="ceo"></img>
            <article className="home-content-info-img-phrase-1">
              <h3>전문가와 함께합니다</h3>
              <p>팀워크는 어렵고, 정신없으며, 복잡합니다. 그렇지만 업무를 진행하는 가장 좋은 방법입니다. 그래서 탄생한 것이 바로 사람들과 함께 일할 수 있는 공간인 Uproad입니다.</p>
            </article>
          </section>
          <section>
            <article className="home-content-info-img-phrase-2">
              <h3>더 나은 커뮤니케이션 방법</h3>
              <p>이메일과 달리 Slack에서는 대화 내용을 쉽게 파악 수 있습니다. 그리고 단순히 대화하는 기능뿐만 아니라 전화를 하거나, 파일을 공유하거나, 심지어 다른 앱과 연결하는 것도 가능합니다.</p>
            </article>
            <img className="home-content-info-img-2" src="/assets/img_plan.jpeg" alt="plan"></img>
          </section>
        </section>
      </article>
    </section>
  )
}

export default Home;