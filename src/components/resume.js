import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{fontFamily: 'Calibri'}}>Ishwarya Korrapolu</h2>
            <h4 style={{color: 'grey'}}>Frontend Developer</h4>
            <hr style={{borderTop: '3px solid #2193b0', width: '50%'}}/>
            <p>Problem-solver with 1+ years of professional experience in IT industry. Excelled in frontend development with in-depth knowledge of JavaScript, HTML, CSS and React. Experience in backend web development to support frontend UI. Strong knowledge of Data Structures and object-oriented programming concepts. Ability to communicate effectively with technology, executive, and business audiences.</p>
            <hr style={{borderTop: '3px solid #2193b0', width: '50%'}}/>
            <h5>Location</h5>
            <p>Dallas, TX 75231 </p>
            <h5>Phone</h5>
            <p>(414) 614-4196</p>
            <h5>Email</h5>
            <p>ishu.korrapolu@gmail.com</p>
            <hr style={{borderTop: '3px solid #2193b0', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2019}
              schoolName="Bachelor of Science in Information Science and Technology, Computer Science[minor]"
              gpa="GPA: 3.5/4"
              schoolDescription="University of Wisconsin Milwaukee, Milwaukee, WI; Dean’s List; Honors student"
                />

            <Education
              startYear={2014}
              endYear={2016}
              schoolName="Bachelor of Science in Computer Science"
              schoolDescription="International Centre for Applied Sciences, Manipal, India"
              />
              <hr style={{borderTop: '3px #FFFFF'}} />

            <h2>Experience</h2>

            <Experience
              startMonth="May'"
              startYear={19}
              endMonth="Oct'"
              endYear={19}
              jobName="Salesforce Developer Intern, Accelerize360"
              jobDescription="Developed Visualforce pages, Lightning components and Lightning Web Components for business use cases. Implemented SLDS to create UI for Lightning Components and Lightning Web Components to maintain the look and feel of Salesforce.Developed Apex classes and triggers to integrate Lightning components and web components with Salesforce data.Designed and developed backend APIs to use functionalities available outside Salesforce."
              />

            <Experience
              startMonth="Jul'"
              startYear={16}
              endMonth="Jul'"
              endYear={17}
              jobName="Software Engineer Intern, NeoTech Data Solutions"
              jobDescription="Developed automation software in Java.Converted programs from Java to Go language.Developed templates using HTML and MJML for automated emails.Ported an application to Progressive Web Apps using Angular2."
              />
            <hr style={{borderTop: '3px #FFFFF'}} />
            <h2>Skills</h2>
            <Skills
              skill="JavaScript"
              progress={85}
            />
            <Skills
              skill="ReactJS"
              progress={70}
            />
            <Skills
              skill="Angular2"
              progress={70}
            />
            <Skills
              skill="CSS"
              progress={90}
            />
            <Skills
              skill="HTML"
              progress={90}
            />
            <Skills
              skill="NodeJS"
              progress={70}
            />
            <Skills
              skill="Python"
              progress={60}
            />
            <Skills
              skill="Java"
              progress={60}
            />
            <Skills
              skill="GO"
              progress={70}
            />
            <Skills
              skill="PHP"
              progress={70}
            />
            <hr style={{borderTop: '3px #FFFFF'}} />
            <h2>Certificatios</h2>
            <p style={{margin: 'auto', fontWeight: 'bold'}}>Certified Salesforce Platform Developer I</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
