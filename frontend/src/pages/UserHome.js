import React from "react";
import UserHomeStyles from "../styles/UserHome.scss";
import { Button } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Room from "@material-ui/icons/Room";
import CreateIcon from '@material-ui/icons/Create';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

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

const UserHome = () => {

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
            <section className="user-region"><Room/>Icheon, korea, Repulic of</section>
          </section>
          <section className="user-profile-buttons">
            <Button className="edit-profile" variant="contained" startIcon={<CreateIcon />}>내 프로필 편집</Button>
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
              Item One
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

export default UserHome;