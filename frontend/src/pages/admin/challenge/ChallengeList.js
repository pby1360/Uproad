import React from 'react';
import Table from '../../../components/Table';
import axios from '../../../components/AxiosInstance';
import { useEffect } from 'react';
import { useRef } from "react";
import Loading from "../../../components/Loading";
import Alert from "../../../components/SnackBarAlert";
import { Button } from '@material-ui/core';

const columns = [
  { id: 'no', label: 'No', width: 50 },
  { id: 'id', label: '아이디', width: 100 },
  {
    id: 'nickName',
    label: '닉네임',
    width: 100,
  },
  {
    id: 'name',
    label: '이름',
    width: 100,
  },
  {
    id: 'gender',
    label: '성별',
    width: 100,
  },
  {
    id: 'birth',
    label: '생년월일',
    width: 100,
  },
  {
    id: 'address',
    label: '주소',
    width: 200,
  },
  {
    id: 'email',
    label: '이메일',
    width: 100,
  },
  {
    id: 'joinPath',
    label: '가입경로',
    width: 100,
  },
  {
    id: 'crtDt',
    label: '가입일시',
    width: 150,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
];

const ChallengeList = () => {

  const [isLoading, setLoading] = React.useState(false);
  const alertRef = useRef();
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      await axios.get("/api/user/users")
        .then( async (response) => {
          const data = await response.data;
          setRows(data);
          console.log(rows);
        }).catch((error) => {
          console.error(error);
          alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
        }).finally(() => {
          setLoading(false);
        })
    }
    getUser();
  }, []);

  

  return (
    <div className="admin-challenge">
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <section className="admin-challenge-top">
        <section className="admin-challenge-top-title">
          <p>챌린지 목록</p>
        </section>
        <section className="admin-challenge-top-controls">
        <Button className="admin-challenge-top-controls-btn-add" href="/admin/add-challenge" variant="contained" color="primary" type="button">생성</Button>
        </section>
      </section>
      <section>
        <Table columns={columns} rows={rows} />
      </section>
    </div>
  );
};

export default ChallengeList;