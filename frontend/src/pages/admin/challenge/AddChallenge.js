import React from 'react';
import { useRef, useState, useEffect } from "react";
import axios from "../../../components/AxiosInstance";
import Alert from "../../../components/SnackBarAlert";
import Loading from "../../../components/Loading";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import "../../../styles/components/TitleBar.scss";
import "../../../styles/admin/AddChallenge.scss";
// import CheckIcon from '@material-ui/icons/Check';

const AddChallenge = () => {

  const [isLoading, setLoading] = React.useState(false);
  
  const alertRef = useRef();

  const [catList1, setCatList1] = useState([]);
  const [catList2, setCatList2] = useState([]);
  const [selectInputs, setSelectInputs] = useState({
    chlnCat1: "",
    chlnCat2: "",
    chlnLvl: "",
  });

  const getComCd = async (comTyp, comSty) => {
    let url = "/api/common/getComCd?";
    comSty? url += `comTyp=${comTyp}&comSty=${comSty}` : url += `comTyp=${comTyp}`;
    let data = [];
    await axios.get(url)
    .then(async (response) => {
      data = await response.data;
      return data;
    }).catch((error) => {
      console.error(error);
    });
    return data;
  }

  useEffect(async() => {
    const list = await getComCd("COM_CAT1");
    list.unshift({comCd:"", comNm: "선택"});
    setCatList1(list);
  }, []);

  const saveChallenge =  async (e) => {
    e.preventDefault();
    // setLoading(true);
    const data = {
      chlnNm: e.target.chlnNm.value,
      chlnDesc: e.target.chlnDesc.value,
      chlnMngr: e.target.chlnMngr.value,
      chlnCat1: e.target.chlnCat1.value,
      chlnCat2: e.target.chlnCat2.value,
      chlnLevel: e.target.chlnLevel.value,
      chlnPrice: e.target.chlnPrice.value,
      chlnStrDt: e.target.chlnStrDt.value,
      chlnEndDt: e.target.chlnEndDt.value,
      chlnPlnNum: e.target.chlnPlnNum.value,
    }
    setLoading(true);
    await axios.post("/api/admin/challenge/save", data, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => {
      alertRef.current.handleClick("success", "저장을 성공했습니다.");
      // history.push('/admin/challenges');
    }).catch((error) => {
      console.error(error);
      alertRef.current.handleClick("error", "저장을 실패했습니다.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const onChange = async (e) => {
    console.log(selectInputs);
    setSelectInputs({
      ...selectInputs,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "chlnCat1") {
      const list = await getComCd("COM_CAT2", e.target.value);
      list.unshift({comCd:"", comNm: "선택"});
      setCatList2(list);
    }
  }

  return (
    <div>
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <form onSubmit={saveChallenge}>
        <section className="title-bar">
          <section className="title-bar-title">
            <h3>챌린지 생성</h3>
          </section>
          <section className="title-bar-controls">
            <Button type="submit" className="title-bar-controls-btn" variant="contained" color="primary">저장</Button>
          </section>
        </section>
        <section className="add-chln-form">
          <article className="add-chln-form-input">
            <label>챌린지 번호</label>
            <TextField disabled placeholder="자동생성" name="chlnNo" variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지명</label>
            <TextField required name="chlnNm" variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 소개</label>
            <TextField required name="chlnDesc" variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 운영자</label>
            <TextField required name="chlnMngr" variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 카테고리1</label>
            <Select onChange={onChange} value={selectInputs.cat1} required name="chlnCat1" variant="outlined">
              {catList1.map((item) => {
                return (
                  <MenuItem key={item.comCd} value={item.comCd}>{item.comNm}</MenuItem>
                )
              })}
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 카테고리2</label>
            <Select onChange={onChange} required name="chlnCat2" value={selectInputs.cat2} displayEmpty variant="outlined">
            {catList2.map((item) => {
                return (
                  <MenuItem key={item.comCd} value={item.comCd}>{item.comNm}</MenuItem>
                )
              })}
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 레벨</label>
            <Select onChange={onChange} required name="chlnLevel" value={selectInputs.lvl} displayEmpty variant="outlined">
              <MenuItem value={10}>초급</MenuItem>
              <MenuItem value={20}>중급</MenuItem>
              <MenuItem value={30}>고급</MenuItem>
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 비용</label>
            <TextField required type="number" name="chlnPrice" variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>시작일자</label>
            <TextField
              required
              variant="outlined"
              name="chlnStrDt"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </article>
          <article className="add-chln-form-input">
            <label>종료일자</label>
            <TextField
              required
              variant="outlined"
              name="chlnEndDt"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </article>
          <article className="add-chln-form-input">
            <label>모집인원</label>
            <TextField required type="number" name="chlnPlnNum" variant="outlined"></TextField>
          </article>
        </section>
      </form>
    </div>
  );
};

export default AddChallenge;