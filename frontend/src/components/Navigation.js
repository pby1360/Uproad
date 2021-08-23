import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // menuItems: {
  //   textDecorationLine: 'none',
  //   textDecoration: 'none',
  //   textUnderlineOffset: true,
  // }
}));

const Navigation = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = (event) => {
    setAnchorEl(null);
  };
  
  const items = () => {
    return (
      <Menu
        className={classes.root}
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        // MenuListProps={{ onMouseLeave: closeMenu }}
      >
        <MenuItem>
          <Link to="/vision">비전</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/help">가치관</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/help">히스토리</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/help">소식</Link>
        </MenuItem>
      </Menu>
    )
  };

  return (
    <div className={NavigationStyle}>
      {items()}
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/"><img className="navigation-logo-img" src="/assets/upRoad_log_pink.png" alt="logo" /></Link>
        </section>
        <section className="navigation-item">
          <a onClick={openMenu} className="navigation-item-a" href={false} value="1">업로드 소개</a>
        </section>
        <section className="navigation-item">
          <a onClick={openMenu} className="navigation-item-a" href={false} value="2">챌린지</a>
        </section>
        <section className="navigation-item">
          <a onClick={openMenu} className="navigation-item-a" href={false} value="3">챌린지 가이드</a>
        </section>
        <section className="navigation-item">
          <a className="navigation-item-a" href>스토어</a>
        </section>
        <section className="navigation-item">
          <a className="navigation-item-a" href>마이페이지</a>
        </section>
      </section>
    </div>
  );
};

export default Navigation;