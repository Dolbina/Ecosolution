import { GlobalStyle } from './GlobalStyle';
import Container from '../components/Container/Container';
import Main from './Main/Main';
import About from './About/About';

import Header from './Header/Header';
import Electricity from './Electricity/Electricity';
import Cases from './Cases/Cases'; 

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <About/>
        <Electricity />
        <Cases/>
      <GlobalStyle />
      </Container>
    </>
  );
};
