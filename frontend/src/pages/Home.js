import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    getHello();
  }, []);

  async function getHello () {
    await axios.get(baseUrl + "/api/home")
    .then(function (response) {
         // response  
         console.log(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  }
  return (
    <section>
      메인 페이지 입니다
    </section>
  )
}

export default Home;