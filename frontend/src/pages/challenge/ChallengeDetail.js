import React from "react";
import { useState } from "react";
import detailStyle from '../../styles/challenge/ChallengeDetail.scss';
import { IconButton, Button, Paper, Tab, Tabs } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import ShareIcon from '@material-ui/icons/Share';
import Table from '../../components/Table';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const rows = [
  { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
  { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
  { name: 'Italy', code: 'IT', population: 60483973, size: 301340 },
  { name: 'United States', code: 'US', population: 327167434, size: 9833520 },
  { name: 'Canada', code: 'CA', population: 37602103, size: 9984670 },
  { name: 'Australia', code: 'AU', population: 25475400, size: 7692024 },
  { name: 'Germany', code: 'DE', population: 83019200, size: 357578 },
  { name: 'Ireland', code: 'IE', population: 4857000, size: 70273 },
  { name: 'Mexico', code: 'MX', population: 126577691, size: 1972550 },
  { name: 'Japan', code: 'JP', population: 126317000, size: 377973 },
  { name: 'France', code: 'FR', population: 67022000, size: 640679 },
  { name: 'United Kingdom', code: 'GB', population: 67545757, size: 242495 },
  { name: 'Russia', code: 'RU', population: 146793744, size: 17098246 },
  { name: 'Nigeria', code: 'NG', population: 200962417, size: 923768 },
  { name: 'Brazil', code: 'BR', population: 210147125, size: 8515767 },
];

const columns2 = [
  { id: 'no', label: '글번호', minWidth: 170 },
  { id: 'title', label: '제목', minWidth: 100 },
  {
    id: 'crtDt',
    label: '작성시간',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'crtUsr',
    label: '작성자',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const rows2 = [
  { no: '1', title: ' github에 올려도 되나요?', crtDt: '2021.09.10', crtUsr: 'cosmic_void' },
  { no: '2', title: ' 카운터 약간의 응용을 하였는데 코드좀 봐주실수 있나요?', crtDt: '2021.09.11', crtUsr: 'kty9504' },
  { no: '3', title: ' 앱개발하다가 궁금한 부분이 생겨서 질문 드립니다', crtDt: '2021.09.12', crtUsr: 'KyeongHan Lee' },
  { no: '4', title: ' 데이터 전달이 안되서 질문드립니다', crtDt: '2021.09.14', crtUsr: '문종현' },
];

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (children)}
    </div>
  );
}
function TablePanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (children)}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const ChallengeDetail = () => {
  const [value, setValue] = useState(0);
  const [tableIndex, setTableIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTable = (newValue) => {
    setTableIndex(newValue);
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
              <span  className="detail-desc-category">마케팅 / SNS</span>
              <p className="detail-desc-title">나홀로 마케팅 3기</p>
              <span className="detail-desc-charger">unbala</span>
              <section className="detail-desc-review">
                <span>
                  평점 <Rating value={5} readOnly />
                </span>
                <span className="detail-desc-review-item">
                  <a href="/">16개</a>의 리뷰
                </span>
                <span className="detail-desc-review-item">
                  40명의 수강생
                </span>
              </section>
              <section className="detail-desc-hashtag">#마케팅 #SNS #네이버플레이스 #소상공인</section>
              <section className="detail-desc-button">
                <Button className="detail-desc-button-enter" variant="contained">참여하기</Button>
                <Button className="detail-desc-button-keep" variant="contained">찜하기</Button>
                <IconButton className="detail-desc-button-share"><ShareIcon /></IconButton>
              </section>
            </section>
          </article>
        </article>
        <article>
          <Paper position="static" className="detail-lower">
            <Tabs value={value} onChange={handleChange}>
              {/* <Tab label="챌린지소개" {...a11yProps(0)} />
              <Tab label="챌린지미션" {...a11yProps(1)} />
              <Tab label="커뮤니티" {...a11yProps(2)} />
              <Tab label="자료실" {...a11yProps(3)} />
              <Tab label="후기" {...a11yProps(4)} /> */}
              <Tab label="챌린지소개" />
              <Tab label="챌린지미션" />
              <Tab label="커뮤니티" />
              <Tab label="자료실" />
              <Tab label="후기" />
            </Tabs>
          </Paper>
          <article className="detail-content">
            <TabPanel value={value} index={0}>
              <p>챌린지소개</p>
              <ul>
                <li>강사소개</li>
                <li>목적</li>
                <li>금액</li>
              </ul>
              <p>챌린지기간</p>
              <p>모집인원</p>
              <p>챌린지 커리큘럼</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              <section className="detail-content-community">
                <article className="detail-content-community-nav">
                  <ul>
                    <li><a href="#!" onClick={ () => handleChangeTable(0)}>자유게시판</a></li>
                    <li><a href="#!" onClick={ () => handleChangeTable(1)}>자주묻는질문</a></li>
                  </ul>
                </article>
                <article className="detail-content-community-content">
                  <TablePanel value={tableIndex} index={0}>
                    <h3>자유게시판</h3>
                    <Table columns={columns} rows={rows} />
                  </TablePanel>
                  <TablePanel value={tableIndex} index={1}>
                    <h3>자주묻는질문</h3>
                    <Table columns={columns2} rows={rows2} />
                  </TablePanel>
                </article>
                <article className="detail-content-community-etc"></article>
              </section>
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
          </article>
        </article>
      </section>
    </div>
  );
};

export default ChallengeDetail;