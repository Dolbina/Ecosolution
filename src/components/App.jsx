import { GlobalStyle } from './GlobalStyle';
import Container from '../components/Container/Container';
import Main from './Main/Main';
import About from './About/About';

import Header from './Header/Header';
import Electricity from './Electricity/Electricity';
import Cases from './Cases/Cases'; 
import FQA from './FAQ/FAQ'; 
import ContactUs from './ContactUs/ContactUs';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FQA />
        <ContactUs />
        <GlobalStyle />
      </Container>
    </>
  );
};
