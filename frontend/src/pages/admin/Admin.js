import React from 'react';
import { Route, Link } from "react-router-dom";
import ChallengeList from './challenge/ChallengeList.js';
import UserList from './user/UserList.js';
import PageManagement from './page/PageManagement.js';
import '../../styles/Admin.scss';

const Admin = () => {
  return (
    <div className="admin-container">
      <article className="admin-navigation">
        <ul>
          <li><Link to="/admin">관리자홈</Link></li>
          <li><Link to="/admin/users">회원관리</Link></li>
          <li><Link to="/admin/challenges">챌린지관리</Link></li>
          <li><Link to="/admin/page-management">사이트관리</Link></li>
        </ul>            
      </article>
      <article className="admin-page">
        <Route exact path="/admin" render={ () => <div><p>관리자 홈화면</p></div> } />
        <Route exact path="/admin/users" component={UserList} />
        <Route exact path="/admin/challenges" component={ChallengeList} />
        <Route exact path="/admin/page-management" component={PageManagement} />
      </article>
    </div>
  );
};

export default Admin;