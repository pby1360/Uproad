import React from 'react';
import detailStyle from '../../styles/challenge/ChallengeDetail.scss';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const challengeDetail = () => {
  // const [value, setValue] = useState("");
  // const [email, setEmail] = useState("");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className={detailStyle}>
      <section className="detail-container">
        <article className="detail-upper">
          챌린지 상세화면1
          {/* <img style={{width: '100%'}} src="https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg" /> */}
        </article>
        <article>
          <Paper>
            <Tabs
              // value={value}
              // onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        </article>
      </section>
    </div>
  );
};

export default challengeDetail;