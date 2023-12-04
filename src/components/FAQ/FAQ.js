import React, { useState } from 'react';
import FAQItem from '../FQAItem/FQAItem';
import {
  FAQTitle,
  FAQSection,
  FAQContainer,
  FAQText,
  FAQTextWrap,
  FAQTitileWrap,
  FAQWrap,
  FAQTextWrapTabl,
} from './FAQ.styled';

import UniversalButton from 'components/UniversalButton/UniversalButton';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); 

  const handleToggleItem = id => {
    setOpenIndex(prevId => (prevId === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question:
        'How do wind turbines and solar panels work together in a renewable energy system?',
      answer:
        'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
    },
    {
      id: 2,
      question:
        'What sets EcoSolution s renewable energy solutions apart from others on the market?',
      answer: 'Answer 2',
    },
    {
      id: 3,
      question:
        'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
      answer: 'Answer 3',
    },
    {
      id: 4,
      question:
        'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
      answer: 'Answer 4',
    },
    {
      id: 5,
      question:
        'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
      answer: 'Answer 5',
    },
  ];

  return (
    <FAQSection id="fqa-section">
      <FAQWrap>
        <FAQTitileWrap>
          <FAQTitle>Frequently Asked Questions</FAQTitle>

          <FAQTextWrapTabl>
            <FAQText>Didn't find the answer to your question? </FAQText>
            <UniversalButton buttonText="Contact Us" />
          </FAQTextWrapTabl>
        </FAQTitileWrap>

        <FAQContainer>
          {faqData.map(item => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={item.id === openIndex}
              toggleItem={() => handleToggleItem(item.id)}
            />
          ))}
          <FAQTextWrap>
            <FAQText>Didn't find the answer to your question? </FAQText>
            <UniversalButton buttonText="Contact Us" />
          </FAQTextWrap>
        </FAQContainer>
      </FAQWrap>
    </FAQSection>
  );
};

export default FAQ;
