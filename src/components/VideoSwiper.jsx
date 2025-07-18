import React, { useState, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import './VideoSwiper.css';

const youtubeVideos = [
  { id: 'kccZwuZ97TM', isShort: false },
  { id: 'y8CiZ5aFrxQ', isShort: false },
  { id: '4M6FOkDK2I8', isShort: true },
  { id: 'SFAtHXhmxko', isShort: true },
  { id: 'HRuejEHaLig', isShort: true },
  { id: 'yHeifL2Z3NE', isShort: true },
  { id: 'UgCx04JJ0OU', isShort: true },
  { id: '3nshHAGBirM', isShort: true },
  { id: 'aIoiMzYc5z0', isShort: true },
];

function VideoSwiper({ autoPlayActive = true }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="video-swiper-wrapper">
      <Swiper
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
        className="mySwiper"
      >
        {youtubeVideos.map(({ id, isShort }, i) => (
          <SwiperSlide key={i}>
            <div className={`youtube-container ${isShort ? 'portrait' : ''}`}>
              <LiteYouTubeEmbed
                id={id}
                title={`Video ${i + 1}`}
                poster="maxresdefault"
                noCookie={true} // uses youtube-nocookie.com for privacy
                webp={true} // serve thumbnails as webp
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(VideoSwiper);
