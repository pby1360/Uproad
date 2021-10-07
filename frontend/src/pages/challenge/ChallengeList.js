import { React, useEffect, useState, useRef } from 'react';
import "../../styles/challenge/ChallengeList.scss";
import List from './ChallengeListComponent';
import { TextField, Select, FormControl, InputLabel, MenuItem, InputAdornment } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Loading from "../../components/Loading";
import Alert from "../../components/SnackBarAlert";
import SearchIcon from '@material-ui/icons/Search';
import axios from '../../components/AxiosInstance';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: 120,
  },
  search: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f04d4d',
        borderRadius: '30px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f04d4d',
        borderRadius: '30px',
      },
    },
  },
}));

const ChallengeList = () => {
  const alertRef = useRef();
  const [selectAcitve, setSelectAcitve] = useState('all');
  const [isLoading, setLoading] = useState(false);
  const [opendItems, setOpendItems] = useState([]);
  const [closedItems, setClosedItems] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    async function getOpend() {
      await axios.get("/challenge/opendChallenges")
        .then( async (response) => {
          const data = await response.data;
          setOpendItems(data);
        }).catch((error) => {
          console.error(error);
          alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
        }).finally(() => {
          // setLoading(false);
        })
    }
    async function getClosed() {
      await axios.get("/challenge/closedChallenges")
        .then( async (response) => {
          const data = await response.data;
          setClosedItems(data);
        }).catch((error) => {
          console.error(error);
          alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
        }).finally(() => {
          // setLoading(false);
        })
    }
    Promise.all([getOpend(), getClosed()]).then(() => setLoading(false));
  }, []);

  const changeAcitve = (event) => {
    setSelectAcitve(event.target.value);
  }

  const opendList = opendItems.map((item, index) => {
    return (
      <div key={index} className="items">
        <List item={item} active={true} />
      </div>
    )
  });

  const closedList = closedItems.map((item, index) => {
    return (
      <div key={index} className="items">
        <List item={item} active={false} />
      </div>
    )
  });

  return (
    <div className="challenge-container">
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <section className="challenge-search">
        <section className="combos">
          <FormControl className={classes.margin}>
            <InputLabel>진행여부</InputLabel>
            <Select
              value={selectAcitve}
              onChange={changeAcitve}
            >
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="y">진행</MenuItem>
              <MenuItem value='n'>종료</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel>카테고리</InputLabel>
            <Select
              value={selectAcitve}
              onChange={changeAcitve}
            >
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="y">마케팅</MenuItem>
              <MenuItem value='n'>회계</MenuItem>
              <MenuItem value='p'>사진</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel>정렬</InputLabel>
            <Select
              value={selectAcitve}
              onChange={changeAcitve}
            >
              <MenuItem value="all">인기순</MenuItem>
              <MenuItem value="y">마감순</MenuItem>
              <MenuItem value="y">가격순</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="search">
          <TextField
            label="검색"
            size="small"
            variant="outlined"
            className={classes.search}
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
            }}
          />
        </section>
      </section>
      <section className="challenge-active">
        <h3 className="title">진행중인 챌린지 🚀</h3>
        <section className="challenge-list">
          {opendList}
        </section>
      </section>
      <section className="challenge-finished">
        <h3 className="title">종료된 챌린지 😴</h3>
        <section className="challenge-list">
          {closedList}
        </section>
      </section>
    </div>
  );
};

export default ChallengeList;