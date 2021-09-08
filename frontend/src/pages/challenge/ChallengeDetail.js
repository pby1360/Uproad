import React from "react";
import { useState } from "react";
import detailStyle from '../../styles/challenge/ChallengeDetail.scss';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';

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

const ChallengeDetail = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={detailStyle}>
      <section className="detail-container">
        <article className="detail-upper">
          <article className="detail-intro">
            <section className="detail-img">
              <img style={{width: '100%'}} src="https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg" alt="intro" />
            </section>
            <section className="detail-desc">
              <span>category/category</span>
              <h3>챌린지 이름</h3>
              <span>담당자</span>
              <section>
                <span>별별별별별</span>
                <span>16개의 리뷰</span>
                <span>40명의 수강생</span>
              </section>
              <section>#hashtag #hashtag #hashtag #hashtag</section>
              <section>
                <Button>참여하기</Button>
                <Button>찜하기</Button>
                <Button>공유</Button>
              </section>
            </section>
          </article>
        </article>
        <article>
        <Paper position="static" className="detail-lower">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="챌린지소개" {...a11yProps(0)} />
            <Tab label="챌린지미션" {...a11yProps(1)} />
            <Tab label="커뮤니티" {...a11yProps(2)} />
            <Tab label="자료실" {...a11yProps(3)} />
            <Tab label="리뷰" {...a11yProps(4)} />
          </Tabs>
        </Paper>
        <TabPanel className="detail-tab-content" value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel className="detail-tab-content" value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel className="detail-tab-content" value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel className="detail-tab-content" value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel className="detail-tab-content" value={value} index={4}>
          Item Five
        </TabPanel>
        </article>
      </section>
    </div>
  );
};

export default ChallengeDetail;