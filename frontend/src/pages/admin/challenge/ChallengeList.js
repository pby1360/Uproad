import React from 'react';
import Table from '../../../components/Table';
import axios from '../../../components/AxiosInstance';
import { useEffect } from 'react';
import { useRef } from "react";
import Loading from "../../../components/Loading";
import Alert from "../../../components/SnackBarAlert";
import { Button } from '@material-ui/core';

const columns = [
  {
     id: 'no',
     label: 'No',
     width: 50
  },
  {
     id: 'chlnNo',
     label: '챌린지 번호',
     width: 100
  },
  {
    id: 'chlnNm',
    label: '챌린지명',
    width: 100,
  },
  {
    id: 'chlnMngr',
    label: '챌린지 운영자',
    width: 100,
  },
  {
    // id: 'chlnCat1',
    id: 'chlnCat1Nm',
    label: '챌린지 카테고리1',
    width: 100,
  },
  {
    // id: 'chlnCat2',
    id: 'chlnCat2Nm',
    label: '챌린지 카테고리2',
    width: 100,
  },
  {
    id: 'chlnStrDt',
    label: '시작일자',
    width: 100,
  },
  {
    id: 'chlnEndDt',
    label: '종료일자',
    width: 100,
  },
  {
    id: 'chlnPlnNum',
    label: '모집인원',
    width: 150,
    align: 'right',
  },
  {
    id: 'chlnMemNum',
    label: '참여인원',
    width: 150,
    align: 'right',
  },
];

const ChallengeList = () => {

  const [isLoading, setLoading] = React.useState(false);
  const alertRef = useRef();
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      await axios.get("/api/admin/challenge")
        .then( async (response) => {
          const data = await response.data;
          data.forEach((item, index) => {
            item.no = index + 1;
            item.chlnCat1Nm = item.commonCode1.comNm;
            item.chlnCat2Nm = item.commonCode2.comNm;
            item.chlnStrDt = new Date(item.chlnStrDt).toLocaleDateString("en-CA", { timezome: "UTC" });
            item.chlnEndDt = new Date(item.chlnEndDt).toLocaleDateString("en-CA", { timezome: "UTC" });
          });
          setRows(data);
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