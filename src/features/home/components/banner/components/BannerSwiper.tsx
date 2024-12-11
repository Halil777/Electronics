import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import { Box } from "@mui/material";

const BannerSwiper: React.FC = () => {
  const galleryThumbs = useRef<any>(null); // Create a reference for thumbs swiper

  return (
    <div>
      {/* Главный слайдер */}
      <Swiper
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: galleryThumbs.current }} // Reference to the thumbs swiper
        modules={[Thumbs]}
        className="gallery-top"
      >
        <SwiperSlide>
          <Box
            sx={{
              height: { lg: "380px", md: "380px", sm: "200px", xs: "200px" },
            }}
          >
            <img
              src="/images/banner1.png" // Make sure path is correct
              alt="Banner 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: { lg: "380px", md: "380px", sm: "200px", xs: "200px" },
            }}
          >
            <img
              src="/images/banner2.png" // Make sure path is correct
              alt="Banner 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: { lg: "380px", md: "380px", sm: "200px", xs: "200px" },
            }}
          >
            <img
              src="/images/banner3.png" // Make sure path is correct
              alt="Banner 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </SwiperSlide>
        {/* Add more slides if needed */}
      </Swiper>

      {/* Маленькие слайды */}
      <Swiper
        onSwiper={(swiper) => (galleryThumbs.current = swiper)} // Set the thumbs swiper reference
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="gallery-thumbs-small"
      >
        <SwiperSlide>
          <img
            src="/images/banner1.png" // Ensure correct path
            alt="Banner 1 Thumb"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner2.png" // Ensure correct path
            alt="Banner 2 Thumb"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner3.png" // Ensure correct path
            alt="Banner 3 Thumb"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        {/* Add more thumbnails as needed */}
      </Swiper>

      {/* Кнопки навигации */}
      <div className="swiper-button-next swiper-button-white"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
    </div>
  );
};

export default BannerSwiper;
