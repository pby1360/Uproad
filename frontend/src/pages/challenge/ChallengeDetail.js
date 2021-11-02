import React from "react";
import { useState, useEffect, useRef } from "react";
import detailStyle from '../../styles/challenge/ChallengeDetail.scss';
import { IconButton, Button, Paper, Tab, Tabs } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import ShareIcon from '@material-ui/icons/Share';
import Table from '../../components/Table';
import Review from '../../components/Review';

import Loading from "../../components/Loading";
import axios from '../../components/AxiosInstance';
import Alert from "../../components/SnackBarAlert";

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

const columns3 = [
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

const rows3 = [
  { no: '1', title: '미션인증 작성양식', crtDt: '2021.09.10', crtUsr: 'unbala' },
  { no: '2', title: '교재', crtDt: '2021.09.11', crtUsr: 'unbala' },
];

const reviews = [
  { userId: "bb17", rate: 4, crtDt: '2021-09-17', content: "기획의 틀을 짜고 어디서부터 어떻게 접근해야하는지에 대해 정수를 배우고 싶다면 꼭 들어야 할 강의라 생각합니다. 기획을 꽤 한다고 생각하는데 발표자료를 만들거나 보고를 하려고 할 때 어떻게 접근해야하는지 자신만의 방법이 갖추어져있지 않아 계속 헤매고 있다면 꼭 한 번 들어보세요. 익살스런 배경음악과 귀에 쏙쏙들어오는 음성 덕분에 지루하지 않게 강의를 들었습니다. 한 번 보고 끝낼 강의가 아니라 중요한 프로젝트를 할 때마다 계속 보고싶은 강의입니다." },
  { userId: "김예지", rate: 5, crtDt: '2021-09-16', content: "유튜브에 공유하시는 영상도 늘 잘보고 있어요:) 클래스101은 유튜브보다 조금 더 필라테스에 초점이 맞춰져 있다고 느껴졌습니다. 오프라인으로 필라테스랑 웨이트 일대일 수강 경력이 있는데도 기초 강의에서 배운 게 아주 많아요. 전 강의 내용 중에서 저는 초반 기본 부분이 제일 좋았어요👍 긴 호흡으로 집중해서 운동하는 걸 선호하는 스타일이라 짧은 강의가 여러개 있다보니 흐름이" },
  { userId: "김애희", rate: 4, crtDt: '2021-09-14', content: "앞으로도 더 배워야할것들이 많지만 으뜸대장님 덕분에 제 태도도 많이 바뀌고 마음가짐,몸가짐도 너무 많은 변화가 생겼어요 진짜 너무너무 감사합니다!!" },
  { userId: "Sook", rate: 4, crtDt: '2021-09-13', content: "스스로 운동하는 습관을 만들고 싶어서 수강을 시작했는데 <매우만족> 입니다 !! 힙으뜸 유튜브 영상과 다른점이 있을까..? 하면서 고민을 많이했었는데🤔 오우.. 이거슨 !!!!! 유튜브와는 차원이 다른 !!! 심으뜸 선생님 수업을 들을수있는 !!!!! 프리미엄 수업 !!!!!!!!!!!!  아직은 정석을 돌려보며 이해하는 단계지만 오우.... 설명 하나하나 너 ㅡ 무 좋습니다 !!!!! 선생님의 밝은 에너지도 .. 잃을수없어... 101 프리미엄 끊었습니다 ㅋㅋㅋㅋㅋㅋ  잘~~~배우고 익혀서 스스로 생각하고,  내 몸을 이해하며 운동할수있는 제대~로 만들어 보겠습니다 !!!! 아직 고민하는 누군가가 있다면.. 강추 강추 강추 강추 👍👍👍👍👍" },  { userId: "bb17", rate: 4, crtDt: '2021-09-10', content: "기획의 틀을 짜고 어디서부터 어떻게 접근해야하는지에 대해 정수를 배우고 싶다면 꼭 들어야 할 강의라 생각합니다. 기획을 꽤 한다고 생각하는데 발표자료를 만들거나 보고를 하려고 할 때 어떻게 접근해야하는지 자신만의 방법이 갖추어져있지 않아 계속 헤매고 있다면 꼭 한 번 들어보세요. 익살스런 배경음악과 귀에 쏙쏙들어오는 음성 덕분에 지루하지 않게 강의를 들었습니다. 한 번 보고 끝낼 강의가 아니라 중요한 프로젝트를 할 때마다 계속 보고싶은 강의입니다." },
  { userId: "bb17", rate: 4, crtDt: '2021-09-17', content: "기획의 틀을 짜고 어디서부터 어떻게 접근해야하는지에 대해 정수를 배우고 싶다면 꼭 들어야 할 강의라 생각합니다. 기획을 꽤 한다고 생각하는데 발표자료를 만들거나 보고를 하려고 할 때 어떻게 접근해야하는지 자신만의 방법이 갖추어져있지 않아 계속 헤매고 있다면 꼭 한 번 들어보세요. 익살스런 배경음악과 귀에 쏙쏙들어오는 음성 덕분에 지루하지 않게 강의를 들었습니다. 한 번 보고 끝낼 강의가 아니라 중요한 프로젝트를 할 때마다 계속 보고싶은 강의입니다." },
  { userId: "bb17", rate: 4, crtDt: '2021-09-17', content: "기획의 틀을 짜고 어디서부터 어떻게 접근해야하는지에 대해 정수를 배우고 싶다면 꼭 들어야 할 강의라 생각합니다. 기획을 꽤 한다고 생각하는데 발표자료를 만들거나 보고를 하려고 할 때 어떻게 접근해야하는지 자신만의 방법이 갖추어져있지 않아 계속 헤매고 있다면 꼭 한 번 들어보세요. 익살스런 배경음악과 귀에 쏙쏙들어오는 음성 덕분에 지루하지 않게 강의를 들었습니다. 한 번 보고 끝낼 강의가 아니라 중요한 프로젝트를 할 때마다 계속 보고싶은 강의입니다." },
  { userId: "bb17", rate: 4, crtDt: '2021-09-17', content: "기획의 틀을 짜고 어디서부터 어떻게 접근해야하는지에 대해 정수를 배우고 싶다면 꼭 들어야 할 강의라 생각합니다. 기획을 꽤 한다고 생각하는데 발표자료를 만들거나 보고를 하려고 할 때 어떻게 접근해야하는지 자신만의 방법이 갖추어져있지 않아 계속 헤매고 있다면 꼭 한 번 들어보세요. 익살스런 배경음악과 귀에 쏙쏙들어오는 음성 덕분에 지루하지 않게 강의를 들었습니다. 한 번 보고 끝낼 강의가 아니라 중요한 프로젝트를 할 때마다 계속 보고싶은 강의입니다." },
]

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div className="detail-content-panel">
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

const ChallengeDetail = ({match}) => {
  const { id } = match.params
  const alertRef = useRef();

  const [value, setValue] = useState(0);
  const [tableIndex, setTableIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [challengeInfo, setInfo] = useState({
    chlnCat1: "",
    chlnCat2: "",
    chlnDesc: "",
    chlnEndDt: "",
    chlnLevel: "",    
    chlnMngr: "",
    chlnNm: "",
    chlnNo: "",
    chlnPlace: "",
    chlnMemNum: 0,
    chlnPlnNum: 0,
    chlnPrice: "",
    chlnStrDt: "",
    chlnTag: "",
    chlnYn: "",
    comCd1: {},
    comCd2: {},
    crtDt: "",
    crtUsr: "",
    updDt: "",
    updUsr: ""
  });

  useEffect(() => {
    setLoading(true);
    async function getChallengeDetail() {
      await axios.get(`/challenge/${id}`)
        .then( async (response) => {
          const data = await response.data;
          setInfo({ ...data });
          console.log(challengeInfo);
        }).catch((error) => {
          console.error(error);
          alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
        }).finally(() => {
          setLoading(false);
        })
    }
    getChallengeDetail();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTable = (newValue) => {
    setTableIndex(newValue);
  };
  return ( 
    <div className={detailStyle}>
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <section className="detail-container">
        <article className="detail-upper">
          <article className="detail-intro">
            <section className="detail-img">
              <img style={{width: '100%'}} src="https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg" alt="intro" />
            </section>
            <section className="detail-desc">
              <span  className="detail-desc-category">{challengeInfo.comCd1.comNm} / {challengeInfo.comCd2.comNm}</span>
              <p className="detail-desc-title">{challengeInfo.chlnNm}</p>
              <span className="detail-desc-charger">{challengeInfo.chlnMngr}</span>
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
                <li>강사소개 : </li>
                <li>목적 : {challengeInfo.chlnDesc}</li>
                <li>금액 : {challengeInfo.chlnPrice} 원</li>
              </ul>
              <p>챌린지기간 : {challengeInfo.chlnStrDt} ~ {challengeInfo.chlnEndDt}</p>
              <p>모집인원 : {challengeInfo.chlnPlnNum}</p>
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
              <Table columns={columns3} rows={rows3} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              {reviews.map((item, index) => (
                <Review key={index} item={item} />
              ))}
            </TabPanel>
          </article>
        </article>
      </section>
    </div>
  );
};

export default ChallengeDetail;