import React from 'react';
import Table from '../../../components/Table';
import axios from '../../../components/AxiosInstance';
import { useEffect } from 'react';
import { useRef } from "react";
import Loading from "../../../components/Loading";
import Alert from "../../../components/SnackBarAlert";

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

const UserList = () => {

  const [isLoading, setLoading] = React.useState(false);
  const alertRef = useRef();
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      await axios.get("/api/user/users")
        .then( async (response) => {
          const data = await response.data;
          data.forEach((item, index) => item.no = index + 1);
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
    <div>
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <p>사용자 목록</p>
      <section>
        <Table columns={columns} rows={rows} />
      </section>
    </div>
  );
};

export default UserList;