import React, {  useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import {
  CasesSection,
  CasesTitle,
  CasesList,
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
} from './Cases.styled';
import CasesItem from '../CasesItem/CasesItem';

import icon from '../../assets/icons/symbol-defs (1).svg';

const Cases = () => {
  const swiperRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const handleSlideChange = swiper => {
    setCanGoPrev(!swiper.isBeginning);
    setCanGoNext(!swiper.isEnd);
  };
  return (
    <>
      <CasesSection>
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
            
          }}
          modules={[Pagination, Navigation, Autoplay]}
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
        >
          <SwiperSlide>
           
            <CasesItem />
          </SwiperSlide>
          <SwiperSlide>
            <CasesItem />
          </SwiperSlide>
          <SwiperSlide>
            <CasesItem />
          </SwiperSlide>
          <SwiperSlide>
            <CasesItem />
          </SwiperSlide>
          <SwiperSlide>
            <CasesItem />
          </SwiperSlide>
        </Swiper>
        <CasesList></CasesList>
      </CasesSection>
    </>
  );
};

export default Cases;
