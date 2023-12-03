import React, {  useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import {
  CasesSection,
  CasesTitle,
  
  CasesWrap,
  CasesWrapInner,
  ArrowWrap,
  IconCases,
  ArrowWrapSecond,
  NumberPhoto,
  NumberPhotoSpan,
  NumberPhotoWrap,
  Rectangle,
  CasesTitleWrap,
  CasesItemWrap,
  ImgSlide,
  SignWrap,
  Sign,
  RectangleCard,
  SignWrapInner,
  IconCard,
  ArrowWrapCard,
  SignSecond,
  SignWrapSecond,
} from './Cases.styled';



import icon from '../../assets/icons/symbol-defs (1).svg';

import slide1 from '../../assets/images/slide-1.jpg';
import slide12x from '../../assets/images/slide-1@2x.jpg';

import slide2 from '../../assets/images/slide-2.jpg';
import slide22x from '../../assets/images/slide-2@2x.jpg';

import slide3 from '../../assets/images/slide-3.jpg';
import slide32x from '../../assets/images/slide-3@2x.jpg';

import slide4 from '../../assets/images/slide-4.jpg';
import slide42x from '../../assets/images/slide-4@2x.jpg';

import slide5 from '../../assets/images/slide-5.jpg';
import slide52x from '../../assets/images/slide-5@2x.jpg';

const Cases = () => {
  const swiperRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const handleSlideChange = swiper => {
    setCanGoPrev(!swiper.isBeginning);
    setCanGoNext(!swiper.isEnd);
  };
   SwiperCore.use([Pagination, Autoplay, Navigation]);
  return (
    <>
      <CasesSection id="cases-section">
        <CasesWrap>
          <CasesTitleWrap>
            <CasesTitle>Successful cases of our company</CasesTitle>
            <Rectangle />
          </CasesTitleWrap>

          <CasesWrapInner>
            <NumberPhotoWrap>
              <NumberPhoto>
                01/<NumberPhotoSpan>05</NumberPhotoSpan>
              </NumberPhoto>
            </NumberPhotoWrap>
            <ArrowWrapSecond>
              <ArrowWrap>
                <IconCases
                  id="my-prev-button"
                  className={canGoPrev ? '' : 'disabled'}
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <use href={icon + '#icon-arrow-left36'}></use>
                </IconCases>
              </ArrowWrap>
              <ArrowWrap>
                <IconCases
                  id="my-next-button"
                  className={!canGoNext ? 'disabled' : ''}
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <use href={icon + '#icon-arrow-right36'}></use>
                </IconCases>
              </ArrowWrap>
            </ArrowWrapSecond>
          </CasesWrapInner>
        </CasesWrap>
        <Swiper
          initialSlide={0}
          slidesPerView={1}
          ref={swiperRef}
          spaceBetween={24}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '#my-prev-button',
            nextEl: '#my-next-button',
          }}
          onSlideChange={handleSlideChange}
          direction={'horizontal'}
          autoHeight={true}
          scrollbar={{ draggable: true }}
          pagination={{
            type: 'fraction',
            // el: '.swiper-pagination',
          }}
          breakpoints={{
            380: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          effect="slide"
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <CasesItemWrap>
              <picture>
                <source
                  srcSet={`${slide1}, ${slide12x} 2x`}
                  media={`(min-width: 1400px)`}
                />
                <ImgSlide src={slide1} alt="wind turbine" width="596" />
              </picture>
              <SignWrap>
                <SignWrapInner>
                  <Sign>
                    Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI
                    BUH”
                  </Sign>
                  <ArrowWrapCard>
                    <IconCard>
                      <use href={icon + '#icon-arrow-right-top'}></use>
                    </IconCard>
                  </ArrowWrapCard>
                </SignWrapInner>
                <RectangleCard />
                <SignWrapSecond>
                  <SignSecond>Wind Power for auto field irrigation</SignSecond>
                  <SignSecond>July 2023</SignSecond>
                </SignWrapSecond>
              </SignWrap>
            </CasesItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <CasesItemWrap>
              <picture>
                <source
                  srcSet={`${slide2}, ${slide22x} 2x`}
                  media={`(min-width: 1400px)`}
                />
                <ImgSlide src={slide2} alt="solar panels" width="596" />
              </picture>
              <SignWrap>
                <SignWrapInner>
                  <Sign>Zhytomyr city Private Enterprise “Bosch”</Sign>
                  <ArrowWrapCard>
                    <IconCard>
                      <use href={icon + '#icon-arrow-right-top'}></use>
                    </IconCard>
                  </ArrowWrapCard>
                </SignWrapInner>
                <RectangleCard />
                <SignWrapSecond>
                  <SignSecond>Solar Panels for industrial use</SignSecond>
                  <SignSecond>November 2023</SignSecond>
                </SignWrapSecond>
              </SignWrap>
            </CasesItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <CasesItemWrap>
              <picture>
                <source
                  srcSet={`${slide3}, ${slide32x} 2x`}
                  media={`(min-width: 1400px)`}
                />
                <ImgSlide src={slide3} alt="thermal modules" width="596" />
              </picture>
              <SignWrap>
                <SignWrapInner>
                  <Sign>Rivne city Private Enterprise “Biotech”</Sign>
                  <ArrowWrapCard>
                    <IconCard>
                      <use href={icon + '#icon-arrow-right-top'}></use>
                    </IconCard>
                  </ArrowWrapCard>
                </SignWrapInner>
                <RectangleCard />
                <SignWrapSecond>
                  <SignSecond>Thermal modules</SignSecond>
                  <SignSecond>October 2023</SignSecond>
                </SignWrapSecond>
              </SignWrap>
            </CasesItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <CasesItemWrap>
              <picture>
                <source
                  srcSet={`${slide4}, ${slide42x} 2x`}
                  media={`(min-width: 1400px)`}
                />
                <ImgSlide src={slide4} alt="wind power" width="596" />
              </picture>
              <SignWrap>
                <SignWrapInner>
                  <Sign>Kherson city Private Enterprise “HealthyFarm”</Sign>
                  <ArrowWrapCard>
                    <IconCard>
                      <use href={icon + '#icon-arrow-right-top'}></use>
                    </IconCard>
                  </ArrowWrapCard>
                </SignWrapInner>
                <RectangleCard />
                <SignWrapSecond>
                  <SignSecond>Wind power</SignSecond>
                  <SignSecond>September 2021</SignSecond>
                </SignWrapSecond>
              </SignWrap>
            </CasesItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <CasesItemWrap>
              <picture>
                <source
                  srcSet={`${slide5}, ${slide52x} 2x`}
                  media={`(min-width: 1400px)`}
                />
                <ImgSlide
                  src={slide5}
                  alt="mini nuclear stations"
                  width="596"
                />
              </picture>
              <SignWrap>
                <SignWrapInner>
                  <Sign>Zaporizhia city Private Enterprise “Biotech”</Sign>
                  <ArrowWrapCard>
                    <IconCard>
                      <use href={icon + '#icon-arrow-right-top'}></use>
                    </IconCard>
                  </ArrowWrapCard>
                </SignWrapInner>
                <RectangleCard />
                <SignWrapSecond>
                  <SignSecond>Mini nuclear stations</SignSecond>
                  <SignSecond>May 2021</SignSecond>
                </SignWrapSecond>
              </SignWrap>
            </CasesItemWrap>
          </SwiperSlide>
        </Swiper>
      </CasesSection>
    </>
  );
};

export default Cases;
