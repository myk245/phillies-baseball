import './App.css';
import styled from 'styled-components';
import React from 'react';

// https://medium.com/@dylan.sather/scrape-a-site-with-node-and-cheerio-in-5-minutes-4617daee3384
const cheerio = require('cheerio');
const $ = cheerio.load('https://questionnaire-148920.appspot.com/swe/data.html')
// isolate player's salary info from table 
const salaryTable = $('#salary-table')
// we need to loop through the table and aggregate the top 125 salaries
// add the top 125 salaries together and then divide by 125 to get value of the qualifying offer

// Styled Components
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px;
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.p`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 50px;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
   height: 100px;
   width: 80px;
`;

const Label = styled.p`
  position: relative;
  top: 70px;
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 25px;
`;

const QualifyingOfferContainer = styled.div`
  border: 2px navy dotted;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Lato', sans-serif;
`;

class App extends React.Component {


  render() {
    return(
      <AppContainer>
        <HeadlineContainer>
          <LogoContainer>
            <img src="phillies-logo.svg" alt="Phillies Logo"/>
          </LogoContainer>
          <Headline>Philadelphia Phillies R&D</Headline>
        </HeadlineContainer>
        <QualifyingOfferContainer>
          <Label>Upcoming Qualifying Offer:</Label>
        </QualifyingOfferContainer>
      </AppContainer>
    );
  }
}

export default App;
