import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px;
`;

const Headline = styled.p`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 35px;
  margin-bottom: 30px;
`;

const AppName = styled.p`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 20px;
`;

const LogoContainer = styled.div`
   height: 70px;
   width: 70px;
`;

function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <img src="phillies-logo.svg" />
      </LogoContainer>
      <Headline>Philadelphia Phillies R&D</Headline>
      <AppName>Qualifying Offer Calculator</AppName>

    </AppContainer>
  );
}

export default App;
