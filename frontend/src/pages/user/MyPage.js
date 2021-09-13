import React, { useEffect } from "react";
import UserHomeStyles from "../../styles/UserHome.scss";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Room from "@material-ui/icons/Room";
import CreateIcon from '@material-ui/icons/Create';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import axios from "../components/AxiosInstance";

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
  const { id } = match.params;

  const preceding = 27;
  const follower = 2169;
  const following = 685;

  useEffect(() => {
    // async function getUser() {
    //   await axios.get(`/api/user/${id}`)
    //     .then((response) => {
    //       // console.log(response);
    //     }).catch((error) => {
    //       // console.error(error);
    //       // alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
    //     });
    // }
    // getUser();
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={UserHomeStyles}>
      <section className="user-home-container">
        <article className="top-banner">배너 이미지 추가</article>
        <article className="center-profile">
          <section className="user-profile-img"><img src="/assets/ceo_info2.jpg" alt="ceo"></img></section>
          <section className="user-profile-info">
            <section className="user-name">언발라</section>
            <section className="user-id">@unbalance_life</section>
            <section className="user-subscrip-period">Cafe,For 3 years</section>
          </section>
          <section className="user-profile-buttons">
            <section className="count-container">
              <section className="preceding-container">
                <span>선행</span>
                <span className="preceding-count">{preceding.toLocaleString()}</span>
              </section>
              <section className="follower-container">
                <span>팔로워</span>
                <span className="follower-count">{follower.toLocaleString()}</span>
              </section>
              <section className="following-container">
                <span>팔로잉</span>
                <span className="following-count">{following.toLocaleString()}</span>
              </section>
            </section>
            <Button className="edit-profile" href={"/profile/" + id} variant="contained">내 프로필 편집</Button>
            <Button className="edit-availability" variant="contained">커뮤니티 이동하기</Button>
          </section>
        </article>
        <article className="top-dashboard"></article>
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