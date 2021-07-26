import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import axios from "axios";

const Join = () => {
  const baseUrl = "http://localhost:8080";

  async function join (e) {
    e.preventDefault();
    const data = {
      id: e.target.id.value,
      password: e.target.password.value,
    }
    await axios.post(baseUrl + "/api/join/join_uproad", data, {
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(data),
    }
    ) 
    .then(function (response) {
         console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    }).then(function() {
    });
  }

  return (
    <div className="join-container">
    <h1>Uproad에 가입하기</h1>
    <div>
        <form onSubmit={join} className="input-form">
          <section className="button-sumbit">
            <Button variant="contained" color="primary" type="submit">가입하기</Button>
          </section>
          <section className="input-form-wrap">
            <section className="input-items">
              <article className="input-items-first"><label>아이디</label></article>
              <article className="input-items-second">
                <TextField name="id" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third">
                <Button variant="outlined" color="primary">중복확인</Button>
              </article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>비밀번호</label></article>
              <article className="input-items-second">
                <TextField name="password" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>비밀번호 확인</label></article>
              <article className="input-items-second">
                <TextField name="passwordChk" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>이름</label></article>
              <article className="input-items-second">
                <TextField name="name" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>생년월일</label></article>
              <article className="input-items-second">
                <TextField name="birth" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>연락처</label></article>
              <article className="input-items-second">
                <TextField name="phone_number" variant="outlined" size="small" fullWidth></TextField>
              </article>
              <article className="input-items-third"></article>
            </section>
            <section className="input-items">
              <article className="input-items-first"><label>이메일</label></article>
              <article className="input-items-second">
                <TextField name="email" variant="outlined" size="small" fullWidth></TextField>
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