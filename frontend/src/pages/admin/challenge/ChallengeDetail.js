import React from 'react';
import { useRef, useState, useEffect } from "react";
import axios from "../../../components/AxiosInstance";
import Alert from "../../../components/SnackBarAlert";
import Loading from "../../../components/Loading";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import "../../../styles/components/TitleBar.scss";
import "../../../styles/admin/AddChallenge.scss";
// import CheckIcon from '@material-ui/icons/Check';

const ChallengeDetail = ({match}) => {
  const { id } = match.params

  const [isLoading, setLoading] = React.useState(false);
  
  const alertRef = useRef();
  const [bgImg, setBgImg] = useState("");
  const [cardImg, setCardImg] = useState("");

  const [bgImgFile, setBgImgFile] = useState({});
  const [cardImgFile, setCardImgFile] = useState({});

  const [catList1, setCatList1] = useState([]);
  const [catList2, setCatList2] = useState([]);

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
    commonCode1: {},
    commonCode2: {},
    crtDt: "",
    crtUsr: "",
    updDt: "",
    updUsr: ""
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

  const getChallengeDetail = async () => {
    await axios.get(`/challenge/${id}`)
      .then( async (response) => {
        const data = await response.data;
        data.chlnStrDt = new Date(data.chlnStrDt).toLocaleDateString("en-CA", { timezome: "UTC" });
        data.chlnEndDt = new Date(data.chlnEndDt).toLocaleDateString("en-CA", { timezome: "UTC" });
        setInfo({ ...data });
      }).catch((error) => {
        console.error(error);
        alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
      });
  }

  const getImages = async () => {
    await axios.get(`/api/admin/challenge/getImages/${id}`)
      .then( async (response) => {
        const data = await response.data;
        data.forEach(item => {
          console.log(item);
          if (item.imgTyp === "bg") {
            setBgImg(item.filePath);
          } else if (item.imgTyp === "card") {
            setCardImg(item.filePath);
          }
        })
      }).catch((error) => {
        console.error(error);
        alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
      });
  }

  useEffect(async() => {

    setLoading(true);

    const list = await getComCd("COM_CAT1");
    list.unshift({comCd:"", comNm: "선택"});
    setCatList1(list);

    Promise.all([getChallengeDetail(), getImages()]).then(() => {
      setLoading(false);
    });

    const list2 = await getComCd("COM_CAT2", challengeInfo.chlnCat1);
    list2.unshift({comCd:"", comNm: "선택"});
    setCatList2(list2);

  }, []);

  const saveChallenge =  async (e) => {
    console.log(e);
    e.preventDefault();
    const data = {
      chlnNo: e.target.chlnNo.value,
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
    await axios.put("/api/admin/challenge/update", data, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => {
      alertRef.current.handleClick("success", "저장을 성공했습니다.");
    }).catch((error) => {
      console.error(error);
      alertRef.current.handleClick("error", "저장을 실패했습니다.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const onChange = async (e) => {
    setInfo({
      ...challengeInfo,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "chlnCat1") {
      const list = await getComCd("COM_CAT2", e.target.value);
      list.unshift({comCd:"", comNm: "선택"});
      setCatList2(list);
    }
  }

  const uploldImg = (e, typ) => {
    if (typ === 'bg') {
      setBgImgFile(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setBgImg(imageUrl);
    } else if (typ === 'card') {
      setCardImgFile(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setCardImg(imageUrl);
    }
  }

  const saveImg = async(typ) => {
    let formData = new FormData();
    if (typ === 'bg') {
      if(!bgImgFile.name) {
        alert("이미지를 선택하세요.");
        return;
      }
      formData.append('file', bgImgFile);
      formData.append('fileNm', bgImgFile.name);
      formData.append('fileTyp', bgImgFile.type);
    } else if (typ === 'card') {
      if(!cardImgFile.name) {
        alert("이미지를 선택하세요.");
        return;
      }
      formData.append('file', cardImgFile);
      formData.append('fileNm', cardImgFile.name);
      formData.append('fileTyp', cardImgFile.type);
    }
    formData.append('chlnNo', challengeInfo.chlnNo);
    formData.append('imgTyp', typ);

    setLoading(true);
    await axios.post("/api/admin/challenge/saveImage", formData).then(() => {
      alertRef.current.handleClick("success", "저장을 성공했습니다.");
      setBgImgFile({});
      setCardImgFile({});
      setBgImg("");
      setCardImg("");
      getImages();
    }).catch((error) => {
      alert(error);
    }).finally(() => {
      setLoading(false);
    });
  }
  return (
    <div>
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <form onSubmit={saveChallenge}>
        <section className="title-bar">
          <section className="title-bar-title">
            <h3>챌린지 정보</h3>
          </section>
        </section>
        <section className="add-chln-form">
          <article className="add-chln-form-input">
            <article className="add-chln-form-sub-title">
              <h4>챌린지 상세정보</h4>
              <section className="add-chln-form-buttons">
                <Button type="submit" variant="contained" color="primary">저장</Button>
                <Button type="button" variant="contained" color="secondary">삭제</Button>
              </section>
            </article>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 번호</label>
            <TextField disabled name="chlnNo" value={challengeInfo.chlnNo} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지명</label>
            <TextField onChange={onChange} required name="chlnNm" value={challengeInfo.chlnNm} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 소개</label>
            <TextField onChange={onChange} required name="chlnDesc" value={challengeInfo.chlnDesc} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 운영자</label>
            <TextField onChange={onChange} required name="chlnMngr" value={challengeInfo.chlnMngr} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 카테고리1</label>
            <Select onChange={onChange} value={challengeInfo.chlnCat1} required name="chlnCat1" variant="outlined">
              {catList1.map((item) => {
                return (
                  <MenuItem key={item.comCd} value={item.comCd}>{item.comNm}</MenuItem>
                )
              })}
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 카테고리2</label>
            <Select onChange={onChange} required name="chlnCat2" value={challengeInfo.chlnCat2} displayEmpty variant="outlined">
            {catList2.map((item) => {
                return (
                  <MenuItem key={item.comCd} value={item.comCd}>{item.comNm}</MenuItem>
                )
              })}
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 레벨</label>
            <Select onChange={onChange} required name="chlnLevel" value={challengeInfo.chlnLevel} displayEmpty variant="outlined">
              <MenuItem value={10}>초급</MenuItem>
              <MenuItem value={20}>중급</MenuItem>
              <MenuItem value={30}>고급</MenuItem>
            </Select>
          </article>
          <article className="add-chln-form-input">
            <label>챌린지 비용</label>
            <TextField onChange={onChange} required type="number" name="chlnPrice" value={challengeInfo.chlnPrice} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>시작일자</label>
            <TextField
              onChange={onChange}
              required
              variant="outlined"
              name="chlnStrDt"
              value={challengeInfo.chlnStrDt}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </article>
          <article className="add-chln-form-input">
            <label>종료일자</label>
            <TextField
              onChange={onChange}
              required
              variant="outlined"
              name="chlnEndDt"
              type="date"
              value={challengeInfo.chlnEndDt}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </article>
          <article className="add-chln-form-input">
            <label>모집인원</label>
            <TextField onChange={onChange} required type="number" name="chlnPlnNum" value={challengeInfo.chlnPlnNum} variant="outlined"></TextField>
          </article>
          <article className="add-chln-form-input">
            <label>현재인원</label>
            <TextField disabled type="number" name="chlnMemNum" value={challengeInfo.chlnMemNum} variant="outlined"></TextField>
          </article>
          <article style={{marginTop: "2rem"}} className="add-chln-form-input">
            <article className="add-chln-form-sub-title">
              <h4>챌린지 이미지</h4>
            </article>
          </article>
          <article className="add-chln-form-input">
            <label>배경이미지</label>
            <input type="file" accept="image/*" name="bgImg" onChange={ (e) => uploldImg(e, 'bg') } />
            { bgImg === "" ? <p>이미지 없음</p> : <img className="preview" src={bgImg} alt="배경이미지" /> }
            <Button variant="contained" onClick={() => saveImg('bg')}>이미지 저장</Button>
          </article>
          <article className="add-chln-form-input">
            <label>카드이미지</label>
            <input type="file" accept="image/*" name="cardImg" onChange={ (e) => uploldImg(e, 'card') } />
            { cardImg === "" ? <p>이미지 없음</p> : <img className="preview" src={cardImg} alt="카드이미지" /> }
            <Button variant="contained" onClick={() => saveImg('card')}>이미지 저장</Button>
          </article>
        </section>
      </form>
    </div>
  );
};

export default ChallengeDetail;