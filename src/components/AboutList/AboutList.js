import {
  AboutValuesWrap,
  AboutValuesList,
  AboutValuesItem,
 
  IconValues,
  AboutValuesTitle,
  AboutValuesText,
  Rectangle,
  ImgValues,
 
} from './AboutList.styled.js';

import icon from '../../assets/icons/symbol-defs (1).svg';

import valueWindDesk from '../../assets/images/wind-farms-fields-desk.jpg';
import valueWindDesk2x from '../../assets/images/wind-farms-fields-desk@2x.jpg';

import valueWindTabl from '../../assets/images/wind-farms-fields-tabl.jpg';
import valueWindTabl2x from '../../assets/images/wind-farms-fields-tabl@2x.jpg';

import valueWorkerDesk from '../../assets/images/man-worker-desk.jpg';
import valueWorkerDesk2x from '../../assets/images/man-worker-desk@2x.jpg';

import valueWorkerTabl from '../../assets/images/man-worker-tabl.jpg';
import valueWorkerTabl2x from '../../assets/images/man-worker-tabl@2x.jpg';

const AboutList = () => {
  return (
    <AboutValuesWrap>
      <AboutValuesList>
        <AboutValuesItem>
          <AboutValuesTitle>
            <IconValues>
              <use href={icon + '#icon-maximize-circle'}></use>
            </IconValues>
            Openness
          </AboutValuesTitle>
          <Rectangle />
          <AboutValuesText>
            to the world, people, new ideas and projects
          </AboutValuesText>
        </AboutValuesItem>
        <AboutValuesItem>
          <AboutValuesTitle>
            <IconValues>
              <use href={icon + '#icon-global-edit'}></use>
            </IconValues>
            Responsibility
          </AboutValuesTitle>
          <Rectangle />
          <AboutValuesText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </AboutValuesText>
        </AboutValuesItem>
        <AboutValuesItem>
          <picture>
            <source
              srcSet={`${valueWindDesk}, ${valueWindDesk2x} 2x`}
              media={`(min-width: 1440px)`}
            />
            <source
              srcSet={`${valueWindTabl}, ${valueWindTabl2x} 2x`}
              media={`(min-width: 768px)`}
            />

            <ImgValues src={valueWindDesk} alt="man worker" width="342" />
          </picture>
        </AboutValuesItem>
        <AboutValuesItem>
          <picture>
            <source
              srcSet={`${valueWorkerDesk}, ${valueWorkerDesk2x} 2x`}
              media={`(min-width: 1440px)`}
            />
            <source
              srcSet={`${valueWorkerTabl}, ${valueWorkerTabl2x} 2x`}
              media={`(min-width: 768px)`}
            />

            <ImgValues src={valueWorkerDesk} alt="solar panels" width="342" />
          </picture>
        </AboutValuesItem>
        <AboutValuesItem>
         
            <AboutValuesTitle>
              <IconValues>
                <use href={icon + '#icon-cpu-charge'}></use>
              </IconValues>
              Innovation
            </AboutValuesTitle>
            <Rectangle />
            <AboutValuesText>
              we use the latest technology to implement non-standard solutions
            </AboutValuesText>
          
        </AboutValuesItem>
        <AboutValuesItem>
        
            <AboutValuesTitle>
              <IconValues>
                <use href={icon + '#icon-ranking'}></use>
              </IconValues>
              Quality
            </AboutValuesTitle>
            <Rectangle />
            <AboutValuesText>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </AboutValuesText>
         
        </AboutValuesItem>
        
      </AboutValuesList>
    </AboutValuesWrap>
  );
};

export default AboutList;
