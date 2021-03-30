import './App.css';
import styled from 'styled-components';
import React from 'react';

// to parse HTML
const cheerio = require('cheerio'); 

// Styled Components
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px;
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Headline = styled.p`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 25px;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
   height: 70px;
   width: 60px;
`;

const AppName = styled.p`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 25px;
`;

class App extends React.Component {
  componentDidMount = () => {
    const $ = cheerio.load('https://questionnaire-148920.appspot.com/swe/data.html')
  }

  render() {
    return(
      <AppContainer>
        <HeadlineContainer>
          <LogoContainer>
            <img src="phillies-logo.svg" alt="Phillies Logo"/>
          </LogoContainer>
          <Headline>Philadelphia Phillies R&D</Headline>
        </HeadlineContainer>
        <AppName>Qualifying Offer Calculator</AppName>
      </AppContainer>
    );
  }
}

export default App;
