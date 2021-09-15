// import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.scss"

const { Kakao } = window;
// const redirectUri = process.env.NODE_ENV === "production" ? "http://13.125.230.251:8080/" : "http://localhost:3000/"
const Login = () => {

  const loginWithKakao = () => {
    // Kakao.Auth.authorize({
    //   redirectUri: redirectUri,
    //   // scope: 'profile_nickname,profile_image,account_email,gender,age_range,birthday',
    // })
    Kakao.Auth.login({
      success: function(authObj) {
        window.location.replace("/");
      },
    })
  };
  // const logout = () => {
  //   if (!Kakao.Auth.getAccessToken()) {
  //     console.log('Not logged in.');
  //     return;
  //   }
  //   Kakao.Auth.logout(function() {
  //     console.log(Kakao.Auth.getAccessToken());
  //   });
  // }
  // const unlink = () => {
  //   Kakao.API.request({
  //     url: '/v1/user/unlink',
  //     success: function(response) {
  //       console.log(response);
  //     },
  //     fail: function(error) {
  //       console.log(error);
  //     },
  //   });
    
  // }
  // const getUserInfo = () => {
  //   Kakao.API.request({
  //     url: '/v2/user/me',
  //     success: function(response) {
  //       console.log(response);
  //     },
  //     fail: function(error) {
  //       console.log(error);
  //     },
  // });
  // }
  return (
    <div className="login-container">
      <section className="login-buttons">
        <a href="#$" onClick={ () => loginWithKakao() }><img src="/assets/kakao_login_medium_narrow.png" alt="ceo"></img></a>
        {/* <Button variant="contained" color="primary">다른 방법으로 로그인</Button> */}
        {/* <Button onClick= { () => logout() } variant="contained" color="primary">로그아웃</Button>
        <Button onClick= { () => unlink() } variant="contained" color="primary">연결끊기</Button>
        <Button onClick= { () => getUserInfo() } variant="contained" color="primary">사용자정보</Button> */}
      </section>
    </div>
  )
}

export default Login;