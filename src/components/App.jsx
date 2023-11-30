import { GlobalStyle } from './GlobalStyle';
import Container from '../components/Container/Container';
import Main from './Main/Main';
import About from './About/About';

import Header from './Header/Header';
export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <About/>
   
      <GlobalStyle />
      </Container>
    </>
  );
};
