import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { useBanners } from "../../../../../hooks/banner/useBanners";

// Slick settings
const settings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  nextArrow: <div className="swiper-button-next" />,
  prevArrow: <div className="swiper-button-prev" />,
};

const BannerSwiper: React.FC = () => {
  const { banners, isLoading, isError } = useBanners(); // Use custom hook
  const mainSliderRef = useRef<Slider | null>(null); // Main slider reference
  const thumbsSliderRef = useRef<Slider | null>(null); // Thumbnail slider reference

  if (isLoading) return <Typography>Loading banners...</Typography>;
  if (isError) return <Typography>Error loading banners</Typography>;

  return (
    <div>
      {/* Main Slider */}
      <Slider
        {...settings}
        ref={mainSliderRef}
        asNavFor={thumbsSliderRef.current || undefined} // Link with thumbnail slider
      >
        {banners.map((banner: { imageUrl: string }, index: number) => (
          <div key={index}>
            <Box
              sx={{
                height: { lg: "380px", md: "380px", sm: "200px", xs: "200px" },
              }}
            >
              <img
                src={banner.imageUrl}
                alt={`Banner ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </div>
        ))}
      </Slider>

      {/* Thumbs Slider */}
      <Slider
        {...{
          ...settings,
          slidesToShow: 2, // Show 2 thumbnails
          slidesToScroll: 1,
          focusOnSelect: true, // Enable selecting thumbnails
          asNavFor: mainSliderRef.current || undefined, // Link with main slider
        }}
        ref={thumbsSliderRef}
        className="gallery-thumbs-small"
      >
        {banners.map((banner: { imageUrl: string }, index: number) => (
          <div
            key={`small_banners_image_key${index}`}
            style={{ marginRight: "10px" }}
          >
            <img
              src={banner.imageUrl}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSwiper;
