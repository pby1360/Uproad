import React, { useEffect } from "react";
import UserHomeStyles from "../../styles/UserHome.scss";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
// import axios from "../components/AxiosInstance";
// import Room from "@material-ui/icons/Room";
// import CreateIcon from '@material-ui/icons/Create';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import axios from "../components/AxiosInstance";

const { Kakao } = window;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyPage = ({match}) => {
  // const { id } = match.params;
  let userInfo = {
    id: "bb17",
    name: "박병윤",
    job: "developer",
    years: "3",
    proceding: "27",
    follower: "2169",
    following: "685",
    certification_rate: "42",
    total_post: "36",
    goal_achievement_rate:"77",
  };


  const [value, setValue] = React.useState(0);
  const [profileImage, setProfileImage] = React.useState("");

  useEffect(() => {

    const getUser = () => {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log(response);
          setProfileImage(response.properties.thumbnail_image);
        },
        fail: function(error) {
          console.log(error);
        },
      });
    }

    // async function getUser() {
    //   await axios.get(`/api/user/${id}`)
    //     .then((response) => {
    //       userInfo = response;
    //     }).catch((error) => {
    //       // console.error(error);
    //       // alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
    //     });
    // }
    getUser();
  }); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={UserHomeStyles}>
      <section className="user-home-container">
        <article className="top-banner">배너 이미지 추가</article>
        <article className="center-profile">
          <section className="user-profile-img"><img src={ profileImage ? profileImage : "/assets/ceo_info2.jpg" } alt="ceo"></img></section>
          <section className="user-profile-info">
            <section className="user-name">{userInfo.name}</section>
            <section className="user-id">@{userInfo.id}</section>
            <section className="user-subscrip-period">{userInfo.job}, For {userInfo.years} years</section>
          </section>
          <section className="user-profile-buttons">
            <section className="count-container">
              <section className="preceding-container">
                <span>선행</span>
                <span className="preceding-count">{userInfo.proceding.toLocaleString()}</span>
              </section>
              <section className="follower-container">
                <span>팔로워</span>
                <span className="follower-count">{userInfo.follower.toLocaleString()}</span>
              </section>
              <section className="following-container">
                <span>팔로잉</span>
                <span className="following-count">{userInfo.following.toLocaleString()}</span>
              </section>
            </section>
            <Button className="edit-profile" href={"/editprofile/" + userInfo.id} variant="contained">내 프로필 편집</Button>
            <Button className="edit-availability" variant="contained">커뮤니티 이동하기</Button>
          </section>
        </article>
        <article className="top-dashboard">
          <ul className="all-list-content">
            <li className="list-content-certification-rate">
              <section className="list-title-certification-rate">📈 인증률</section>
              <section className="list-value-content">
                <section className="list-certification-rate">{userInfo.certification_rate.toLocaleString()}</section>
                <section className="list-unit">%</section>
              </section>  
              <section className="list-content-bottom"></section>
            </li>
            <li className="list-content-post-count">
              <section className="list-title-post-count">📌 작성글</section>
              <section className="list-value-content">
                <section className="list-post-count">{userInfo.total_post.toLocaleString()}</section>
                <section className="list-unit">개</section>
              </section>
            </li>
            <li className="list-content-preceding-count">
              <section className="list-title-preceding-count">🎈 선행수</section>
              <section className="list-value-content">
                <section className="list-preceding-count">{userInfo.proceding.toLocaleString()}</section>
                <section className="list-unit">개</section>
              </section>
            </li>
            <li className="list-content-goal-achievement-rate">
              <section className="list-title-goal-achievement-rate">📊 목표달성여부</section>
              <section className="list-value-content">
                <section className="list-goal-achievement-count">{userInfo.goal_achievement_rate.toLocaleString()}</section>
                <section className="list-unit">%</section>
              </section>
            </li>
          </ul>
        </article>
        <article className="bottom-dashboard">
        <article className="user-tabs-dummy"></article>
          <article className="user-tabs">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="참여 챌린지" {...a11yProps(0)} />
              <Tab label="나의 인증" {...a11yProps(1)} />
              <Tab label="작성한 글" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <section className="card-container">
                <Card className="card-item">
                  <CardContent>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card className="card-item">
                  <CardContent>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card className="card-item">
                  <CardContent>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </section>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <section classNmae="card-container">Item Two</section>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <section classNmae="card-container">Item Three</section>
            </TabPanel>
          </article>
        </article>
      </section>
    </div>
  )
}

export default MyPage;