import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper/types"; // Import Swiper class for type

import { LazyLoadImage } from "react-lazy-load-image-component";

const MinBannerSwiper: React.FC<{ banners: any[] }> = ({ banners }) => {
  const thumbsSwiperRef = useRef<SwiperClass | null>(null); // Explicitly type the ref

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Box
        sx={{
          height: {
            lg: "180px",
            md: "180px",
            sm: "150px",
            xs: "100px",
          },
        }}
      >
        <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)} // Attach thumbs swiper instance
          slidesPerView={2}
          spaceBetween={1}
          // centeredSlides={true}
          autoplay={false}
          modules={[Navigation, Thumbs, Autoplay]}
          className="gallery-thumbs-small"
          loop={true}
          speed={4000}
          style={{ cursor: "pointer", height: "100%" }}
        >
          {banners && Array.isArray(banners)
            ? banners.map((banner, index) => (
                <SwiperSlide key={`small_banners_image_key${index}`}>
                  <LazyLoadImage
                    src={banner.imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    // placeholderSrc={blurHashToBase64(banner.blurhash) || ""}
                    effect="blur"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MinBannerSwiper;

// Helper function (if required)
// const blurHashToBase64 = (blurhash: string) => {
//   // Convert your blurhash to base64 here if necessary
//   // blurhash
//   return "";
// };
