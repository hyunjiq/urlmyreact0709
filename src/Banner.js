import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'; // Autoplay 모듈의 스타일
import { Autoplay } from 'swiper/modules'; // Autoplay 모듈 가져오기

import dbjson from './data/db.json';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]} // Swiper에 Autoplay 모듈 추가
        >
            {dbjson.banner.map((v, i) =>
                <SwiperSlide key={i} className={v.cls}>{v.atext}</SwiperSlide>
            )}
        </Swiper>
    );
};

export default Banner;
