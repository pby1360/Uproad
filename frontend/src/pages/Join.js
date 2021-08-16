import React from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "../components/AxiosInstance";
import { useState } from "react";
import CheckIcon from '@material-ui/icons/Check';
import Alert from "../components/SnackBarAlert";
import { useRef } from "react";
import { useHistory } from 'react-router-dom';

const Join = () => {
  // userNamebirthphoneNumberemail
  // states
  const [userId, setUserId] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [userName, setUserName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [pw1Wanring, setPw1Wanring] = useState(null);
  const [pw2Wanring, setPw2Wanring] = useState(null);
  const [checked, setChecked] = useState({
    checkId: false,
    checkPw1: false,
    checkPw2: false,
    checkName: false,
    checkBirth: false,
    checkPhone: false,
    checkEmail: false,
  });

  // variables
  const checkComplete = <CheckIcon color="primary" />;
  const alertRef = useRef();
  const history = useHistory();

  // functions
  async function checkIdDuplicate() {
    const params = {
      id: userId,
    }
    await axios.get("/auth/join/check", {
      params,
      })
      .then((response) => {
        if (response.data === "duplicated") {
          setChecked({ ...checked, checkId: false });
          alertRef.current.handleClick("warning", "이미 사용중인 ID 입니다.");
        } else {
          setChecked({ ...checked, checkId: true });
          alertRef.current.handleClick("info", "사용할 수 있는 ID 입니다.");
        }
        
      }).catch((error) => {
        console.error(error);
        alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
      });
  }

  async function join(e) {
    e.preventDefault();
    if (!checked.checkId) {
      alertRef.current.handleClick("warning", "ID를 확인하세요.");
      return;
    }
    if (!checked.checkPw1) {
      alertRef.current.handleClick("warning", "비밀버호를 확인하세요.");
      return;
    }
    if (!checked.checkPw2) {
      alertRef.current.handleClick("warning", "비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!checked.checkName) {
      alertRef.current.handleClick("warning", "이름을 확인하세요.");
      return;
    }
    if (!checked.checkBirth) {
      alertRef.current.handleClick("warning", "생년월일을 확인하세요.");
      return;
    }
    if (!checked.checkPhone) {
      alertRef.current.handleClick("warning", "연락처를 확인하세요.");
      return;
    }
    if (!checked.checkEmail) {
      alertRef.current.handleClick("warning", "이메일을 확인하세요.");
      return;
    }
    const data = {
      id: e.target.id.value,
      password: e.target.password1.value,
      name: e.target.name.value,
      birth: e.target.birth.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
    }
    await axios.post("/auth/join/join_uproad", data, {
      headers: {
        "Content-Type": "application/json"
      },
    }).then(function (response) {
      if (response.data === "success") {
        alertRef.current.handleClick("success", "가입을 성공했습니다. 메인화면으로 이동 후 로그인 하세요.");
        setTimeout(() => {
          history.push("/");
          }, 2000) // 시간. 2초 후 실행
      } else {
        alertRef.current.handleClick("error", "가입을 실패했습니다. 고객센터에 문의해 주시기 바랍니다.");
      }
      
    }).catch(function (error) {
      alertRef.current.handleClick("error", "에러가 발생했습니다." + error);
    });
  }

  const onIdChanged = (e) => {
    setUserId(e.target.value);
  }
  
  const onPw1Changed = (e) => {
    const password = e.target.value
    let newChecked = { ...checked };
    setPassword1(password);
    if(password.length < 6) {
      newChecked.checkPw1 = false;
      setPw1Wanring(<p className="password-not-passed">비밀번호는 6자 이상 설정해주세요.</p>);
    } else {
      newChecked.checkPw1 = true;
      setPw1Wanring(<p className="password-passed">사용가능한 비밀번호 입니다.</p>);
    }
    
    if(password !== password2) {
      setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>);
      newChecked.checkPw2 = false;
    } else {
      setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>);
      newChecked.checkPw2 = true;
    }
    setChecked(newChecked);
  }
  const onPw2Changed = (e) => {
    const password = e.target.value
    setPassword2(password);
    console.log("password1: ", password1);
    console.log("password2: ", password);
    if(password1 !== password) {
      setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>)
      setChecked({ ...checked, checkPw2: false });
    } else {
      setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>)
      setChecked({ ...checked, checkPw2: true });
    }
  }
  const onNameChanged = (e) => {
    const value = e.target.value
    setUserName(value);
    if(value.length < 1) {
      // setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>)
      setChecked({ ...checked, checkName: false });
    } else {
      // setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>)
      setChecked({ ...checked, checkName: true });
    }
  }

  const onBirthChanged = (e) => {
    const value = e.target.value
    setBirth(value);
    if(value.length < 8) {
      // setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>)
      setChecked({ ...checked, checkBirth: false });
    } else {
      // setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>)
      setChecked({ ...checked, checkBirth: true });
    }
  }

  const onNumberChanged = (e) => {
    const value = e.target.value
    setPhoneNumber(value);
    if(value.length < 10) {
      // setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>)
      setChecked({ ...checked, checkPhone: false });
    } else {
      // setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>)
      setChecked({ ...checked, checkPhone: true });
    }
  }

  const onEmailChanged = (e) => {
    const value = e.target.value
    setEmail(value);
    if(value.length < 1) {
      // setPw2Wanring(<p className="password-not-passed">비밀번호가 일치하지 않습니다.</p>)
      setChecked({ ...checked, checkEmail: false });
    } else {
      // setPw2Wanring(<p className="password-passed">비밀번호가 일치합니다.</p>)
      setChecked({ ...checked, checkEmail: true });
    }
  }

  return (
    <div className="join-container">
    <Alert ref={alertRef} />
    <h1>Uproad에 가입하기</h1>
    <div>
        <form onSubmit={join} className="input-form">
          <section className="button-sumbit">
            <Button variant="contained" color="primary" type="submit">가입하기</Button>
          </section>
          <section className="input-form-wrap">
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkId ? checkComplete : null}
              </article>
              <article className="input-items-first">
                <label>아이디</label>
              </article>
              <article className="input-items-second">
                <TextField name="id" value={userId} variant="outlined" size="small" onChange={onIdChanged} fullWidth></TextField>
              </article>
              <article className="input-items-third">
                <Button variant="outlined" color="primary" onClick={checkIdDuplicate}>중복확인</Button>
              </article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkPw1 ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>비밀번호</label></article>
              <article className="input-items-second">
                <TextField type="password" name="password1" value={password1} onChange={onPw1Changed} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third">
                {pw1Wanring}
              </article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkPw2 ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>비밀번호 확인</label></article>
              <article className="input-items-second">
                <TextField type="password" name="password2" value={password2} onChange={onPw2Changed} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third">
                {pw2Wanring}
              </article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkName ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>이름</label></article>
              <article className="input-items-second">
                <TextField name="name" value={userName} onChange={onNameChanged} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkBirth ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>생년월일</label></article>
              <article className="input-items-second">
                <TextField name="birth" value={birth} onChange={onBirthChanged} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkPhone ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>연락처</label></article>
              <article className="input-items-second">
                <TextField name="phoneNumber" value={phoneNumber} onChange={onNumberChanged} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-check">
                {checked.checkEmail ? checkComplete : null}
              </article>
              <article className="input-items-first"><label>이메일</label></article>
              <article className="input-items-second">
                <TextField name="email"  value={email} onChange={onEmailChanged} variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
          </section>
        </form>
    </div>
    </div>
  )
}

export default Join;