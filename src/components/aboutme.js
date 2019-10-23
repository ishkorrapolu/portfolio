import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="landing-body">
        <Grid className="landing-grid">
        <Cell col={6}>
          <img src="/ishu.PNG" alt="avatar" className="avatar-img" />
          <h1>Ishwarya Korrapolu</h1>
        </Cell>
        <Cell col={6}>
            <h2>Who am I?</h2>
            <hr/>
            <p style={{ width: '80%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
