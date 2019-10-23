import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Calibri'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (414) 614-4196
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Calibri'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ishu.korrapolu@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Calibri'}}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    <a href="https://github.com/ishkorrapolu" rel="noopener noreferrer" target="_blank">ishkorrapolu</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Calibri'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/ishukorrapolu/" rel="noopener noreferrer" target="_blank">ishukorrapolu</a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
