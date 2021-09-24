import React from 'react';
import { useRef, useState } from "react";
import axios from "../../../components/AxiosInstance";
import Alert from "../../../components/SnackBarAlert";
import Loading from "../../../components/Loading";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import "../../../styles/components/TitleBar.scss";
import "../../../styles/admin/AddChallenge.scss";
// import CheckIcon from '@material-ui/icons/Check';

const AddChallenge = () => {
  return (
    <div>
      <section className="title-bar">
        <section className="title-bar-title">
          <h3>챌린지 생성</h3>
        </section>
        <section className="title-bar-controls">
          <Button className="title-bar-controls-btn" variant="contained" color="primary">저장</Button>
        </section>
      </section>
      <section className="add-chln-form">
        <article className="add-chln-form-input">
          <label>챌린지 번호</label>
          <TextField disabled name="id" variant="outlined" size="small"></TextField>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지명</label>
          <TextField name="id" variant="outlined" size="small"></TextField>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 소개</label>
          <TextField name="id" variant="outlined" size="small"></TextField>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 운영자</label>
          <TextField name="id" variant="outlined" size="small"></TextField>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 카테고리1</label>
          <Select
            displayEmpty
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 카테고리2</label>
          <Select
            displayEmpty
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 레벨</label>
          <Select
            displayEmpty
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </article>
        <article className="add-chln-form-input">
          <label>챌린지 비용</label>
          <TextField name="id" variant="outlined" size="small"></TextField>
        </article>
        <article className="add-chln-form-input">
          <label>시작일자</label>
          <TextField
            variant="outlined"
            id="date"
            // label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </article>
        <article className="add-chln-form-input">
          <label>종료일자</label>
          <TextField
            variant="outlined"
            id="date2"
            // label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </article>
        <article className="add-chln-form-input">
          <label>모집인원</label>
          <TextField name="id" variant="outlined" size="small"></TextField>
        </article>
      </section>
    </div>
  );
};

export default AddChallenge;