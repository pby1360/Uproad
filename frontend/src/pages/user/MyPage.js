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
        <article className="top-banner">Banner</article>
        <article className="center-profile">
          <section className="user-profile-img"><img src="/assets/ceo_info2.jpg" alt="ceo"></img></section>
          <section className="user-profile-info">
            <section className="user-name">bala un</section>
            <section className="user-job">디자이너</section>
            <section className="user-group">WTM</section>
            <section className="user-region"><Room/>Icheon, korea, Republic of</section>
          </section>
          <section className="user-profile-buttons">
            <Button className="edit-profile" href={"/profile/" + id} variant="contained" startIcon={<CreateIcon />}>내 프로필 편집</Button>
            <Button className="edit-availability" variant="contained" startIcon={<MailOutlineIcon />}>가용성 편집</Button>
            <Button className="edit-dummy" variant="contained" startIcon={<PictureAsPdfIcon />}>Adobe Portfolio 시험 사용</Button>
            <section className="following">
              <span>팔로잉</span>
              <span className="following-count">9</span>
            </section>
          </section>
          <section className="user-profile-date">
            <p>멤버 가입일: 2021년 7월 20일</p>
          </section>
        </article>
        <article className="bottom-dashboard">
        <article className="user-tabs-dummy"></article>
          <article className="user-tabs">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="작업" {...a11yProps(0)} />
              <Tab label="라이브스트림" {...a11yProps(1)} />
              <Tab label="무드보드" {...a11yProps(2)} />
              <Tab label="평가" {...a11yProps(3)} />
              <Tab label="인사이트" {...a11yProps(4)} />
              <Tab label="초안" {...a11yProps(5)} />
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
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </article>
        </article>
      </section>
    </div>
  )
}

export default MyPage;