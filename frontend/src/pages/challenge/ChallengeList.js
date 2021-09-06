import { React, useState } from 'react';
import ChallengeListStyle from "../../styles/challenge/ChallengeList.scss";
import List from './ChallengeListComponent';
import { TextField, Select, FormControl, InputLabel, MenuItem, InputAdornment } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: 120,
  },
  border: {
    border: 'solid 2px #f04d4d',
    borderRadius: '30px',
    // height: '16px',
  },
}));

const activeItems = [
  {
    id: "1",
    name: "챌린지1",
    desc: "이것저것하는 챌린지1",
    user: "unbala",
  },
  {
    id: "2",
    name: "챌린지2",
    desc: "이것저것하는 챌린지2",
    user: "unbala",
  },
  {
    id: "2",
    name: "챌린지3",
    desc: "이것저것하는 챌린지3",
    user: "unbala",
  },
  {
    id: "2",
    name: "챌린지4",
    desc: "이것저것하는 챌린지4",
    user: "unbala",
  },
];

const finishedItems = [
  {
    id: "1",
    name: "챌린지1",
    desc: "이것저것하는 챌린지1",
    user: "unbala",
  },
  {
    id: "2",
    name: "챌린지2",
    desc: "이것저것하는 챌린지2",
    user: "unbala",
  },
];

const activeList = activeItems.map((item, index) => {
  return (
    <div key={index} className="items">
      <List item={item} active={true} />
    </div>
  )
});
const finishedList = finishedItems.map((item, index) => {
  return (
    <div key={index} className="items">
      <List item={item} active={false} />
    </div>
  )
});

const ChallengeList = () => {
  const [selectAcitve, setSelectAcitve] = useState('all');
  const classes = useStyles();

  const changeAcitve = (event) => {
    setSelectAcitve(event.target.value);
  }

  return (
    <div className="challenge-container">
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
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
              classes: {
                root: classes.border,
              },
            }}
          />
        </section>
      </section>
      <section className="challenge-active">
        <h3 className="title">진행중인 챌린지 🚀</h3>
        <section className="challenge-list">
          {activeList}
        </section>
      </section>
      <section className="challenge-finished">
        <h3 className="title">종료된 챌린지 😴</h3>
        <section className="challenge-list">
          {finishedList}
        </section>
      </section>
    </div>
  );
};

export default ChallengeList;